import React, {useState} from 'react';
import { Accordion } from 'react-bootstrap';
import "./index.css";


const AccordionBox = (props) => {
    // destructuring according to props
    let {id, text, heading} = props;
    // getting state params
    let [isOpen, setIsOpen] = useState(false)
    // initializing object 
    let object = {
        collapse: "collaps collapse",
        expanded: false, 
        style: {display: "none"}
    };
    // whether isOpen is TRUE
    if(isOpen) {
        object = {
            collapse: "collaps collapse in",
            expanded: true,
            style: {display: 'block'}
        }
    }
    

    const toggleHandler = () => {
        console.log('inside');
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div onClick={() => toggleHandler()} className="accHeading">{heading}</div>
            {/* <div id={id} className="collaps collapse" aria-expanded={false}> */}
            <div id={id} className={object.collapse} aria-expanded={object.expanded} style={object.style}>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default AccordionBox;