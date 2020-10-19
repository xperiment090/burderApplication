import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col } from 'reactstrap';


const AddressModal = (props) => {
    let {feed, isAddressModalOpen, toggleModal} = props;
    console.log('feed::', feed);
    return (
        <Modal isOpen={isAddressModalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>
                {feed ? feed.name: '-'}
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col xs={12}>{feed ? feed.city: '-'}</Col>
                    <Col xs={12}>{feed ? feed.street: '-'}</Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button color='cancel' type="button" onClick={toggleModal}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}

export default AddressModal;