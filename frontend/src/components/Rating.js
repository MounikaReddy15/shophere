import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {

    return (
        <div className='rating'>
            <span>
                {[1, 2, 3, 4, 5].map(rate => (
                    <i style={{ color }} key={rate}
                        className={(value >= rate) ? 'fas fa-star'
                            : ((value >= (rate - 0.5)) ? 'fas fa-star-half-alt'
                                : 'far fa-star')}>
                    </i>
                ))}
            </span>
            <span>{text && text}</span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e325'
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Rating