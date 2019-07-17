import React, { Component } from 'react';
import axios from 'axios';
import './Accueil.css'

import ReactImageMagnify from 'react-image-magnify';


export default class Accueil extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8070/profil')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

        

    }

    liste() {
        return <div>
            <div className="row">
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return<div class="col-md-4">
                                <div class="col-md-3">


                                 {/* <img src={'http://localhost:8070/user/'+obj.photo_profil} alt="pdp" />  */}

                                <div className='im'><ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Ted Baker London',
                                                isFluidWidth: true,
                                                src:'http://localhost:8070/user/'+obj.photo_profil,
                                                width: 600,
                                                height: 600
                                            },
                                            largeImage: {
                                                src: 'http://localhost:8070/user/'+obj.photo_profil,
                                                width: 1000,
                                                height: 1000
                                            },
                                            isHintEnabled: true
                                        }} />
                                </div>


                               
                    
                                  <div class="card-body">
                                    <h5 class="card-title">{obj.nom}</h5>
                                    <p class="card-text">{obj.email}</p>
                                    <a href='aa' class="card-text">{obj.password} ∈</a>
                                  </div>
                                </div>
                              </div>

                            })) : ('')
                        }
            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}