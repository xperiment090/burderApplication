import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Slider from './Slider';
import routes from './../../routes';


class LayoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Slider />
                <Switch>
                    {routes.map((r) => {
                        return <Route path={r.path} name={r.name} component={r.component} />
                    })}
                </Switch>
            </div>
        );
    }
}

export default LayoutContainer;