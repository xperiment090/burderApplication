import React, { Component } from 'react'
import { Spinner } from 'reactstrap';
import Feed from './Feed';
import AddressModal from './AddressModal';
import {getAllFeeds} from './../../api/feeds';



class FeedsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            feeds: [],
            isAddressModalOpen: false,
            isLoading: true
         };
    }


    componentDidMount = async () => {
        let feeds = await getAllFeeds()
        this.setState({feeds, isLoading: false});
    }

    /**
     * @function getAllFeeds()
     * @description - API call to get all the Feeds
     * @param {STRING} uri 
     */
    getAllFeeds = (uri) => {
        
    }

    /**
     * @function toggleAddressModal()
     * @description - Modal to AddressModal
   */
    toggleAddressModal = (e, feed) => {
        console.log('feed::', feed);
        this.setState({
            isAddressModalOpen: !this.state.isAddressModalOpen,
            feed
        }, () => {
            console.log("isAddressModalOpen", this.state.isAddressModalOpen);
            this.addressModal()
        });
    }

    addressModal = () => {
        let {feed, isOpenModal} = this.state;
        console.log('feed::', feed);
    }


    render() {
        let {feeds, feed, isAddressModalOpen, isLoading} = this.state;
        return (
            <div>
                <h1 className="cusHeading">Feeds</h1>
                {isLoading ? <Spinner/> : feeds.map((f, i) => {
                    return <Feed key={i} feed={f} toggle={this.toggleAddressModal} isAddressModalOpen={isAddressModalOpen} />
                })}
                {/* {this.addressModal()} */}
                <AddressModal feed={feed} isAddressModalOpen={isAddressModalOpen} toggleModal= {this.toggleAddressModal}/>
            </div>
        );
    }
}

export default FeedsContainer;