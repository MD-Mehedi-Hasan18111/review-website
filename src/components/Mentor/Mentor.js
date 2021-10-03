import React from 'react';
import { Card, Container } from 'react-bootstrap';
import mentor1 from '../../images/mentor-1.png';
import mentor2 from '../../images/mentor-2.jpg';
import mentor3 from '../../images/mentor-3.jpg';
import mentor4 from '../../images/mentor-4.png';
import mentor5 from '../../images/mentor-5.jpg';
import mentor6 from '../../images/mentor-6.jpg';

const Mentor = () => {
    return (
        <div>
            <Container className="mx-auto ps-5">
                <h1 className="text-center mt-3">Our Mentors</h1>
                <div className="row my-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={mentor1} />
                            <Card.Body>
                                <Card.Title>Mentor-1</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={mentor2} />
                            <Card.Body>
                                <Card.Title>Mentor-2</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={mentor3} />
                            <Card.Body>
                                <Card.Title>Mentor-3</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={mentor4} />
                            <Card.Body>
                                <Card.Title>Mentor-4</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={mentor5} />
                            <Card.Body>
                                <Card.Title>Mentor-5</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={mentor6} />
                            <Card.Body>
                                <Card.Title>Mentor-6</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Mentor;