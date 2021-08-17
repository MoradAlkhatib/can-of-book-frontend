import { Button ,Form,Modal } from 'react-bootstrap'
import React, { Component } from 'react'

 class ModelForm extends Component {

   

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hidden}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body> <Form onSubmit={this.props.post}>
                        <Form.Control type="text" placeholder="Title of Book" name="userTitle" />
                        <Form.Control type="text" placeholder="Description of Book" name="userDes"/>
                        <Form.Control type="text" placeholder="Status of Book" name="userStat"/>
                        <Button type="submit">Submit</Button>
                         </Form></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.hidden}>
                Close
              </Button>
            </Modal.Footer>
            </Modal>
        )
    }
}

export default ModelForm


