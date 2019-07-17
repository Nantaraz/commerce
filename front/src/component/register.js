import React, { Component } from 'react';
import axios from 'axios';
//import './register.css'
class register extends Component {

    constructor(props) {
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            nom: '',
            email: '',
            password: ''
        }
    }
    onChangeNom(e) {
        this.setState({
          nom: e.target.value
        })  
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
          nom: this.state.nom,
          email: this.state.email,
          password: this.state.password
        };
        axios.post('http://localhost:8080/register', obj)
            .then(res => alert(res.data));
        
        this.setState({
          nom:'',
          email: '',
          password: ''
        })
    }
    
    render()  {
    return (
<form id='a' onSubmit={this.onSubmit}>
  <label>
    <p class="label-txt">ENTER YOUR NAME</p>
    <input type="text" class="i" value={this.state.nom} onChange={this.onChangeNom}/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label><br/>
  <label>
    <p class="label-txt">ENTER YOUR EMAIL</p>
    <input type="text" class="i" value={this.state.email} onChange={this.onChangeEmail}/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label><br/>
  <label>
    <p class="label-txt">ENTER YOUR PASSWORD</p>
    <input type="text" class="i" value={this.state.password} onChange={this.onChangePassword}/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label><br/>
  <button type="submit">submit</button>
</form>
);

}
}
export default register;