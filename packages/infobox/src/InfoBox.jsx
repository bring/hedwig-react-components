import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoSquare } from '@fortawesome/pro-solid-svg-icons'
import '../sass/infobox.scss'

const InfoBox = ({ title, titleElement, icon, children }) => (
    <div className='hw-info-box'>
        {icon && (
            <FontAwesomeIcon
                icon={faInfoSquare}
                className='hw-info-box__icon'
                size='lg'
            />
        )}
        <div className='hw-info-box__body'>
            {title &&
                React.createElement(
                    titleElement,
                    {
                        className: 'hw-h3 hw-info-box__title'
                    },
                    title
                )}

            {children}
        </div>
    </div>
)

InfoBox.propTypes = {
    title: PropTypes.string.isRequired,
    titleElement: PropTypes.oneOf(['h3', 'h4', 'h5']),
    icon: PropTypes.bool
}

InfoBox.defaultProps = {
    icon: true,
    titleElement: 'h3'
}

export default InfoBox
