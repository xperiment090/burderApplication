import React, {useState} from 'react';
import {Row, Col, Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './css/feed.css'


const isActive = (status) => {
    return (
        status == 'y' ? <FontAwesomeIcon icon={faCheck} />: <FontAwesomeIcon icon={faTimes} />
    )
}

// const openAddressModal = () => {
//     let {isOpenModal, setIsOpenModal} = useState();
//     setIsOpenModal(!isOpenModal);
// }

const Feed = (props) => {
    let {feed, toggle} = props;
    // let [isOpenModal, setIsOpenModal] = useState(props.isOpenModal);

    // const toggleModal = () => {
    //     console.log('inside::', isOpenModal);
    //     setIsOpenModal(!isOpenModal);
    // }

    // console.log('props::', props);
    return (
        <Container>
                <Row className="customRow">
                    <Col>{feed.name}</Col>
                    <Col>Classic Burger {isActive(feed.burger_classic)}</Col>
                    <Col>Cheese Burger {isActive(feed.burger_cheese)}</Col>
                    <Col>Bio {isActive(feed.burger_bio)}</Col>
                    <Col><a href="#" onClick={(e) => toggle(e, feed)}>Address</a></Col>
                </Row>
            {/* <tr>
                <td>{feed.name}</td>
                <td>Classic Burger {isActive(feed.burger_classic)}</td>
                <td>Cheese Burger {isActive(feed.burger_cheese)}</td>
                <td>Bio {isActive(feed.burger_bio)}</td>
                <td>
                    <a href="#" onClick={(e) => toggle(e, feed)}>Address</a>
                </td>
            </tr> */}
        </Container>
    )
}

export default Feed;