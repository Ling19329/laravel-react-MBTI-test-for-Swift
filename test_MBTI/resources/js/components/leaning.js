import React from 'react';
import HSBar from "react-horizontal-stacked-bar-chart";

const Leaning =({data}) => {
    return (
        <div className="row" style={{marginTop:"2rem"}}>
            <div className="col-sm-3">
                <span>{data.leftLeaning}</span>
            </div>
            <div className="col-sm-6">
                <HSBar data={[{ value: 1, color:data.status?"#E9ECEF": "#A920CB"}, { value: 1 , color:!data.status?"#E9ECEF": "#A920CB"}]} />
            </div>
            <div className="col-sm-3">
                <span>{data.rightLeaning}</span>
            </div>
        </div>
    );
}
 
export default Leaning;
