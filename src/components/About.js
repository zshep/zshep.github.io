import React from "react";
import Image from "react-bootstrap/Image";
import shepic from './Shepic.png';
import Row from 'react-bootstrap/Row';


function About(){

    return(
        <>
        <Row>
           <div> 
            <Image src = {shepic} width="300" thumbnail/>
            </div>
        </Row>
            
        <Row>
            <div className="justify-content">
                I have spent 10 years teaching high school physics and AP physics in the Seattle Public Schools. I have a love for learning new things including how to write code to incorporate my physics background. I am a full stack MERN Web developer looking to improve my Knowledge and skills on web development.
                
            </div>
        </Row>
        </>
    )
}


export default About;