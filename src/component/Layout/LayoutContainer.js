import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Slider from './Slider';
import routes from './../../routes';
import './index.css';

class LayoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="wrapper homePage">
                <div className="container customContainer">
                    <Header routes={routes} />
                    <Slider/>
                    <Switch>
                        {routes.map((r) => {
                            return <Route key={r.id} exact path={r.path} name={r.name} component={r.component} />
                        })}
                    </Switch>
                </div>
            </div>
        );
    }
}

export default LayoutContainer;