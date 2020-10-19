import React, { Component } from 'react'
import AccordionBox from './../AccordionBox/AccordionBox';
import data from './../../db/data.json';


class ImprintContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collapse: false,
            accordion: false,
            isOpen: false
         };
    }
    toggleHandler = () => {

    }
    render() {
        return (
            <div>
                <h1 className="cusHeading">Imprint</h1>
                {data.map(d => <AccordionBox {...d} key={d.id} />)}
            </div>
        );
    }
}

export default ImprintContainer;