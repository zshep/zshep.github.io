import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import NerdquizPhoto from './NKQpic.png';
import NTpic from './Notetakerpic.jpg';
import CQpic from './CQpic.jpeg';
import PWGpic from './PWGpic.jpg';
import Weatherpic from './Weatherpic.png';
import WLYDOpic from './WLYDOpic.png';


function Portfolio() {

    return (
        <Container>
            <Card >
                <Card.Body>
                    <Card.Title>Whole Let the Dawg Out</Card.Title>
                    <Card.Img variant="top" src={WLYDOpic} alt ="" />
                </Card.Body>

                <Card.Body>
                    <Card.Link href="https://sobe1290.github.io/wholetmydaWgout/">Deployed App Link</Card.Link>
                    <Card.Link href="https://github.com/sobe1290/wholetmydaWgout">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
           
            <Card>
                <Card.Body>
                    <Card.Title>Nerd Knowledge Quiz</Card.Title>
                    <Card.Img variant="top" src={NerdquizPhoto} alt="picture of Nerd Quiz App" />
                </Card.Body>

                <Card.Body>
                    <Card.Link href="https://sheltered-shore-88493.herokuapp.com/">Deployed App Link</Card.Link>
                    <Card.Link href="https://github.com/zshep/Nerd_Quiz">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
           
            <Card>
                <Card.Body>
                    <Card.Title>Coding Quiz</Card.Title>
                    <Card.Img variant="top" src= {CQpic} />
                </Card.Body>

                <Card.Body>
                    <Card.Link href="https://zshep.github.io/Coding-Quiz/">Deployed App Link</Card.Link>
                    <Card.Link href="https://github.com/zshep/Coding-Quiz">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Note Taker</Card.Title>
                    <Card.Img variant="top" src={NTpic} />
                </Card.Body>

                <Card.Body>
                    <Card.Link href="https://murmuring-sea-43903.herokuapp.com/notes">Deployed App Link</Card.Link>
                    <Card.Link href="https://github.com/zshep/Note-taker">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Weather App</Card.Title>
                    <Card.Img variant="top" src={Weatherpic}  />
                </Card.Body>

                <Card.Body>
                    <Card.Link href="https://github.com/zshep/weather_app">Deployed App Link</Card.Link>
                    <Card.Link href="https://github.com/zshep/weather_app">GitHub Repo Link</Card.Link>    
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Password Generator</Card.Title>
                    <Card.Img variant="top" src={PWGpic}  />
                    
                </Card.Body>

                <Card.Body>
                    <Card.Link href="https://zshep.github.io/weather_app/">Deployed App Link</Card.Link>
                    <Card.Link href="https://github.com/zshep/password_generator">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
        
        
        
        
        </Container>
    )
}

export default Portfolio;







