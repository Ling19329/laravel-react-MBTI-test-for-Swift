import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';

const Email = ({data, handleInputEmail, valid, activeValid}) => {
        return (
            <div className="row">
                <div className="card box-shadow text-center mx-auto" style={{width:'80rem'}}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row justify-content-center align-self-center">
                                    <h5>Your Email</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row justify-content-center align-self-center">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" 
                                            className="form-control" 
                                            id="exampleInputEmail1" 
                                            aria-describedby="emailHelp" 
                                            placeholder="your@email.com" 
                                            style={{width:'30rem'}} 
                                            onBlur = {(e) => {
                                                if(EmailValidator.validate(e.target.value))
                                                    handleInputEmail({emailAddress:e.target.value, valid:true});
                                                else
                                                    handleInputEmail({emailAddress:e.target.value, valid:false});
                                            }}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        { (!valid && activeValid)  &&
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row justify-content-center align-self-center">                                    
                                    <span style={{color : "red"}}>Please check and type your email address!</span>        
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        );
}

export default Email;
