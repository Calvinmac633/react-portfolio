import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import portImage from "../assets/calvinport.jpg"
import portMobile from "../assets/portmobile.jpg"
// import image from "../assets/CalvinCover.jpg"
import { AboutCard } from "../components/Card"
import PortfolioDisplay from "../components/PortfolioDisplay"
import "./style.css";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import NoteTakerApp from "../assets/NoteTakerApp.jpg"
import restaurantApp from "../assets/restaurantApp.jpg"
import WeatherApp from "../assets/WeatherApp.jpg"
import shopalot from "../assets/shopalot.JPG"


function Portfolio() {
    const imageUrl = window.innerWidth >= 650 ? portImage : portMobile


    return (
        <div>
            <div id="Portfolio" className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
                <nav style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} className="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
                    <div className="nav-container">
                    </div>
                </nav>

                <div className="cardContainer">
                    <CardColumns>
                        <Card >
                            <Card.Img variant="top" src={shopalot} style={{ padding: ".5rem" }} />
                            <Card.Body>
                                <Card.Title>Shopalot</Card.Title>
                                <Card.Text>
                                    A grocery list app that  allows users to create new, or join existing shopping lists that can be viewed and updated by other members who are given access.
      </Card.Text>
                                <a target="_blank" href="https://shopalot-checkitout.herokuapp.com/">View Deployment</a>
                                <br></br>
                                <small className="text-muted">React.js, Node.js, Express, MongoDB</small>

                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={WeatherApp} style={{ padding: ".5rem" }} />
                            <Card.Body>
                                <Card.Title>Weather App</Card.Title>
                                <Card.Text>
                                    A weather forecasting application!
      </Card.Text>
                                <a href="https://calvinmac633.github.io/weather-app/">View Deployment</a>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={NoteTakerApp} style={{ padding: ".5rem" }} />
                            <Card.Body>
                                <Card.Title>Note Taker App</Card.Title>
                                <Card.Text>
                                    A note taker application! Create, delete, and update notes!
      </Card.Text>
                                <a href="http://sleepy-sands-76241.herokuapp.com/">View Deployment</a>
                            </Card.Body>
                        </Card>
                        {/* <Card>
                            <Card.Img variant="top" src={restaurantApp} style={{ padding: ".5rem" }} />
                            <Card.Body>
                                <Card.Title>Restaurant Finding App</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
      </Card.Text>
      <a href="https://mms211.github.io/What-Do-You-Want-To-Eat-App/">View Deployment</a>
                            </Card.Body>
                        </Card> */}


                        {/* <Card className="p-3">
                            <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    Yoooooooooooooo
      </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    Tskdjfhsdkjfh
        content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card bg="primary" text="white" className="text-center p-3">
                            <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.
      </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </Card>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
        content.{' '}
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img src="holder.js/100px160" />
                        </Card>
                        <Card className="text-right">
                            <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.
      </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
      </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
      </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
      </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
      </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card> */}
                    </CardColumns>
                </div>
            </div>
            <section class="hero is-warning is-medium">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Medium title
      </h1>
                        <h2 class="subtitle">
                            Medium subtitle
      </h2>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Portfolio;
