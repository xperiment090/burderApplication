import React from 'react';
import slide_1 from './../../assets/images/slide_1.jpg';

const Slider = (props) => {
    // return <img src={bg_dirt} />
    return (
        <div className="clearfix">
            <img src={slide_1} width="100%"/>
            {/* <div className="clearfix">&nbsp;</div> */}
        </div>
    );
}

export default Slider;