import React from 'react'
import {Card,Button} from 'react-bootstrap'
const Carts = () => {
    return (
        <div>
                        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Carts
