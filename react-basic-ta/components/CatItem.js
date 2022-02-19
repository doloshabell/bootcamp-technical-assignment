import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

export default function CatItem({ data, dataTemp }) {
  //for button to do display alert Cat name
  const handleClick = (item) => {
        alert(item.name)
    }

  return (
    <div>
        {data.length === 0 ? <p>Loading</p> 
        : <div>
                <p>Data Cats</p>
                <div>
                    <Container py={4}>
                        <Row>
                            <Col>
                                <div>
                                    {data.map((item, index)=> (
                                    <Card style={{ width: '18rem' }} key={index} onClick={() =>  handleClick(item)}>
                                        <Card.Img variant="top" src={item.image?.url} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>{item.origin}</Card.Text>
                                        </Card.Body>
                                    </Card> ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>    
                </div>
        </div> }
    </div>
  )
}
