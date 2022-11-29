import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Resume () {
    const Clickdownload = () => {
        // using fetch moethod to grab the pdf
        fetch('./Shep_Resume.pdf').then(response => {
            response.blob().then(blob => {
                //const fileURL = window.URL.createObjectURL(blob);

                //logic to download file with the button click
                let alink = document.createElement('a');
                alink.href = "./Shep_Resume.pdf";
                alink.download = `Shep_Resume`;
                alink.click();
            })
        })
    }

    return(

        <div>
            <Container center>

                <Button value="download" onClick={Clickdownload}>Download Resume</Button>

            </Container>
            
            <div>
            <h1>List of My proficiencies</h1>
            <li>
                <ul>HTML</ul>
                <ul>css</ul>
                <ul>Javascript</ul>
                <ul>Node JS</ul>
                <ul>Express</ul>
                <ul>React</ul>
                <ul>Sequalize and MySQL</ul>
                <ul>Mongoose and MongoDB</ul>
                <ul>Using the force</ul>
            </li>

           
            </div>


        </div>

    )

}

export default Resume;