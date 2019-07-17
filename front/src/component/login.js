import React, { Component } from 'react';
import { Link} from "react-router-dom";
import axios from 'axios';
//import './login.css'
class login extends Component {

    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            email: '',
            password: ''
        }
    }
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      });
    }
    onChangePassword(e) {
      this.setState({
        password: e.target.value
      })  
    }
  
    onSubmit(e) {
        e.preventDefault();
        const obj = {
          email: this.state.email,
          password: this.state.password
        };
        axios.post('http://localhost:8070/login', obj)
            .then(res=>{
                this.props.history.push('/AddProduct')
            })
            .catch(err=>alert('email ou password invalid'))
        
        this.setState({
          email: '',
          password: ''
        })
    }
    
    render()  {
    return (
<div class="container h-100">
<div class="d-flex justify-content-center h-100">
    <div class="user_card">
        <div class="d-flex justify-content-center form_container">
            <form onSubmit={this.onSubmit}>
                <div class="input-group mb-3">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="text"  className="form-control" placeholder="adresse e-mail" value={this.state.email}
                        onChange={this.onChangeEmail}/>
                </div>
                <div class="input-group mb-2">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password"  className="form-control" placeholder="password" value={this.state.password}
                        onChange={this.onChangePassword}/>
                </div>
                <div class="form-group">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customControlInline"/>
                        <label class="custom-control-label" for="customControlInline">Remember me</label>
                    </div>
                </div>
            
      
        <div class="d-flex justify-content-center mt-3 login_container">
        <input type="submit" value="Log in" className="btn btn-primary"/>
        </div>
        </form>
        </div>
        <div class="mt-4">
        <p>
            Not a member? <Link to="/Register"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> sign Up</Link>
          </p>
        </div>
    </div>
</div>
</div>
);

}
}
export default login;