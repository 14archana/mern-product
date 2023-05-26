import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div>
        <Container className='d-flex justify-content-center'>
        <h1 className ='mx-3'>Products</h1>
        <Button variant="success">Add+</Button>{' '}

</Container>
    </div>
  )
}
