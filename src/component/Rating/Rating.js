import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalf, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'



// initializing a functional container Rating
const Rating = (props) => {
    // initializing a renderRating Function
    let renderRating = (rating) => {
        // initializing stars Array
        let stars = []
        // looping through value 5
        for (let i = 1; i <= 5; i++) {
            // initializing empty Star
            let star = faStarEmpty;
            // whether rating is >= i
            if (rating >= i)
                star = faStar
            else {
                // whether star should be half
                if (i - rating <= 0.5)
                    star = faStarHalf
                else
                    star = faStarEmpty
            }

            stars.push(<FontAwesomeIcon icon={star} />)
        }
        return stars
    }
    return (
        <div>
            {renderRating(props.value)}
        </div>
    )
}

export default Rating;