import React, { useState } from 'react';
import { RadioGroup, Radio} from 'react-radio-group'; 
const styles =  {
    radioBtns:{
      marginLeft:'1rem',
      marginRight:'1rem'
    },
};

const Question = ({data, handleSelection, activeValid}) => {
        const [selectedRate, setSelectedRate] = useState(data.rate);
        const checkValidation = () => {
            if(selectedRate == "0")
                return false;
            else
                return true;
        }
        return (
            <div className="row">
                <div className="card box-shadow text-center mx-auto" style={{width:'80rem'}}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row justify-content-center align-self-center">
                                    <h5>{data.title}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row justify-content-center align-self-center">
                                    <form>
                                        <span style={{color : "red"}}>Disagree</span>
                                        <RadioGroup name="q_seletion" selectedValue={selectedRate.toString()}
                                        onChange={ e => {
                                            setSelectedRate(e);
                                            handleSelection(
                                                { rate: e, id: data.id, valid : checkValidation() }
                                            );
                                        }
                                            
                                        } 
                                        style={{display:"inline-block"}}>
                                            <Radio value="1" style={styles.radioBtns}/>
                                            <Radio value="2" style={styles.radioBtns}/>
                                            <Radio value="3" style={styles.radioBtns}/>
                                            <Radio value="4" style={styles.radioBtns}/>
                                            <Radio value="5" style={styles.radioBtns}/>
                                            <Radio value="6" style={styles.radioBtns}/>
                                            <Radio value="7" style={styles.radioBtns}/>
                                        </RadioGroup>
                                        <span style={{color : "green"}}>Agree</span>
                                    </form>
                                </div>
                            </div>
                        </div>
                        { (!data.valid && activeValid)  &&
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row justify-content-center align-self-center">                                    
                                    <span style={{color : "red"}}>Please answer this question!</span>        
                                </div>
                            </div>
                        </div>
                        }
                        
                    </div>
                </div>
            </div>
        );
}

export default Question;
