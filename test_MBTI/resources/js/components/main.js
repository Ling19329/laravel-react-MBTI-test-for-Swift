import React, { useState, useEffect } from 'react';
import Question from './question';
import Email from './email'; 
import {observer} from 'mobx-react';
import {observal} from 'mobx';

const  Main =(props) => {
    const [questions, setQuestions] = useState([
        { title: 'You find it takes effort to introduce yourself to other people.', id: 1, rate:0, valid:false },
        { title: 'You consider yourself more practical than creative.', id: 2, rate:0, valid:false },
        { title: 'Winning a debate matters less to you than making sure no one gets upset.', id: 3, rate:0 , valid:false},
        { title: 'You get energized going to social events that involve many interactions.', id: 4, rate:0 , valid:false},
        { title: 'You often spend time exploring unrealistic and impractical yet intriguing ideas.', id: 5, rate:0 , valid:false},
        { title: 'Deadlines seem to you to be of relative rather than absolute importance.', id: 6, rate:0 , valid:false},
        { title: 'Logic is usually more important than heart when it comes to making important decisions.', id: 7, rate:0 , valid:false},
        { title: 'Your home and work environments are quite tidy.', id: 8, rate:0 , valid:false},
        { title: 'You do not mind being at the center of attention.', id: 9, rate:0 , valid:false},
        { title: 'Keeping your options open is more important than having a to-do list.', id: 10, rate:0 , valid:false},
    ]);
    const [emailAddress, setEmailAddress] = useState('');
    const [activeValid, setActiveValid] = useState(false);
    const [valid, setValid] = useState({emailValid:false, questionsValid:false});

    const handleSelection = e => {
        setQuestions(prev => {
            prev[prev.findIndex((obj => obj.id == e.id))].rate = Number(e.rate);
            if(e.rate != 0)
                prev[prev.findIndex((obj => obj.id == e.id))].valid = true;
            return prev;
        });
    }

    const handleInputEmail = e => {
        if(e.valid == true){
            setEmailAddress(e.emailAddress);
            setValid({emailValid:true});
        }

        else{
            setEmailAddress(e.emailAddress);
            setValid({emailValid:false});
        }
    }

    const handleSubmit = () => {
        setActiveValid (true);
        if(checkValidation()==true)
        {
            let temp_questions = questions.map( item => {
                return {id:item.id, rate: item.rate};
            })
            axios
            .post('/api/test', {data : JSON.stringify(temp_questions), email:emailAddress})
            .then(response => {
                if(response.status == 200 || response.status == 201){
                    props.history.push({
                        pathname:'/result',
                        state : {
                            leaning : response.data.data_rate,
                            perspective : response.data.perspective
                        }
                    });
                }

                else (console.log(response.data));
            })
            .catch(err=> console.log(err));
        }
    }

    const checkValidation = () => {
        if ( questions.findIndex((obj => obj.valid == false)) == -1 && valid.emailValid == true)
            return true;
        else
            return false;
    }

    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <div>
            <div style={{padding: '5rem'}}>
                <h4>Discover Your Perspective</h4>
                <h5>Complete the 7 min test and get a detailed report of your lenses on the world.</h5>
            </div>
            <div className="container" style={{paddingTop:10}}>
                <div className="row justify-content-center">
                    <div className="col-sm-12">
                        {questions.map(item => 
                            <Question 
                            data={item} 
                            key={item.id} 
                            handleSelection={handleSelection} 
                            activeValid={activeValid}>
                            </Question>
                        )}
                        <Email 
                        data={emailAddress} 
                        valid={valid.emailValid}
                        activeValid={activeValid}
                        handleInputEmail={handleInputEmail} 
                        ></Email>
                        <div className="row justify-content-center" style={{paddingTop:'5rem', paddingBottom:'10rem'}}>
                            <button type="button" className="btn btn-primary" style={{width:'10rem'}} onClick={handleSubmit}>Save & Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
 
export default Main;
