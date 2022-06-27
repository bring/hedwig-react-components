import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoSquare } from '@fortawesome/pro-solid-svg-icons'
import '../sass/infobox.scss'

export default function InfoBox({ title, icon, children }) {
    return (
        <div className='hw-info-box'>
            {icon && (
                <FontAwesomeIcon
                    icon={faInfoSquare}
                    className='hw-info-box__icon'
                    size='lg'
                />
            )}
            <div className='hw-info-box__body'>
                {title && <h3 className='hw-info-box__title'>{title}</h3>}
                {children}
            </div>
        </div>
    )
}

InfoBox.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.bool
}

InfoBox.defaultProps = {
    icon: true
}
