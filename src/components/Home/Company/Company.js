import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import uber from '../../../images/logos/uber.png';
import airbnb from '../../../images/logos/airbnb.png';


const Company = () => {
    return (
        <div className="col-md-9 m-auto">
            <div className="row d-flex justify-content-center my-5">
                <div className="col-md-2 col-sm-4 col-8 mx-3">
                    <img src={slack} style={{width:"100%"}}  alt=""/>
                </div>
                <div className="col-md-2 col-sm-4 col-8 mx-3">
                    <img src={google}  style={{width:"100%"}} alt=""/>
                </div>
                <div className="col-md-2 col-sm-4 col-8 mx-3">
                    <img src={uber}  style={{width:"100%"}} alt=""/>
                </div>
                <div className="col-md-2 col-sm-4 col-8 mx-3">
                    <img src={netflix} style={{width:"100%"}}  alt=""/>
                </div>
                <div className="col-md-2 col-sm-4 col-8 mx-3">
                    <img src={airbnb} style={{width:"100%"}}  alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Company;