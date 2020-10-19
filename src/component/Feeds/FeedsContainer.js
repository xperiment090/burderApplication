import React, { Component } from 'react'
import { Table } from 'reactstrap';
import Feed from './Feed';
import AddressModal from './AddressModal';


const uri = `https://burgervergleich.autoteile.check24.de/api/comparison/type/burger`;

class FeedsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            feeds: [],
            isAddressModalOpen: false
         };
    }


    componentDidMount = () => {
        this.getAllFeeds(uri);
    }

    /**
     * @function getAllFeeds()
     * @description - API call to get all the Feeds
     * @param {STRING} uri 
     */
    getAllFeeds = (uri) => {
        fetch(uri, {
            headers: {
                "ContentType": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({feeds: data});
        })
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
        let {feeds, feed, isAddressModalOpen} = this.state;
        return (
            <div>
                <Table responsive>
                <tbody>
                {feeds.map(f => {
                    return <Feed feed={f} toggle={this.toggleAddressModal} isAddressModalOpen={isAddressModalOpen} />
                })}
                </tbody>
                </Table>
                {/* {this.addressModal()} */}
                <AddressModal feed={feed} isAddressModalOpen={isAddressModalOpen} toggleModal= {this.toggleAddressModal}/>
            </div>
        );
    }
}

export default FeedsContainer;