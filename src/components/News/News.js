import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './News.css';
const News = (props) => {
    console.log(props.news);
    return (
        <div>
            <Col>
                <Card style={{
                    height:'500px'}}>
                    <Card.Img variant="top" src={props.news?.urlToImage}
                    style={{height:'350px'}}/>
                    <Card.Body>
                        <Card.Title>Title:{props.news?.title}</Card.Title>
                        <Card.Text>
                            {props.news?.description.slice(0,90)}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};
export default News;
