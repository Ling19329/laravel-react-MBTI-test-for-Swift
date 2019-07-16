import React, { useState, useEffect } from 'react';
import Leaning from './leaning';

const Result =(props) => {
    const [leanings, setLeanings] = useState([
        { leftLeaning: 'Introversion(I)', rightLeaning:'Extraversion(E)', status: 0 },
        { leftLeaning: 'Sensings(S)', rightLeaning:'Intuition(N)', status: 0 },
        { leftLeaning: 'Thinking(T)', rightLeaning:'Feeling(F)', status: 0 },
        { leftLeaning: 'Judging(J)', rightLeaning:'Perceiving(P)', status: 0 },
        
    ]);
    const [perspective, setPerspective] = useState('')

    const setStatus =async () => {
        try{
            let rates = await props.location.state.leaning;
            let temp_leanings = leanings;
            return Promise.all(temp_leanings.map((item, idx) =>  {
                item.status = rates[idx].data;
                return item;
            }))
        }
        catch(error){
            console.error(error);
        }
    }
    
    useEffect(() => {
        setStatus()
        .then(payload => setLeanings(payload));
        setPerspective(props.location.state.perspective);
    }, []);

    return (
        <div className="container d-flex" style={{paddingTop:'10rem'}}>
            <div className="row align-items-center" style={{padding:'4rem', border: '1px solid grey', borderRadius : '5px'}}>
                    <div className="col-sm-6 mx-auto">
                        <div className="row">
                            <h2>Your Perspective</h2>
                            <h3>Your Persprective type is {perspective}</h3>
                        </div>    
                    </div>
                    <div className="col-sm-6">
                        {leanings.map((item, idx) => 
                            <Leaning data={item} key={idx} ></Leaning>
                        )}
                    </div>
            </div>
        </div>
    );
}
export default Result;

