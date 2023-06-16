import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faLinkedin,
    faGooglePlusG
} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const SoMe = ({ some }) => {
    if (!some) return null

    const iconMap = {
        facebook: faFacebookF,
        instagram: faInstagram,
        linkedin: faLinkedin,
        twitter: faTwitter,
        google: faGooglePlusG,
        mail: faAt
    }

    return (
        <div className='hwc-some'>
            {some.map((item, i) => (
                <a
                    className='hwc-some__button'
                    href={item.href || '#'}
                    aria-label={item.ariaLabel}
                    onClick={item.onclick}
                    key={i}
                >
                    <FontAwesomeIcon icon={iconMap[item.brand]} />
                </a>
            ))}
        </div>
    )
}

SoMe.propTypes = {
    /**
     * Array of social media to show in footer
     */
    some: PropTypes.arrayOf(
        PropTypes.exact({
            brand: PropTypes.oneOf([
                'facebook',
                'twitter',
                'linkedin',
                'mail',
                'google',
                'instagram'
            ]),
            href: PropTypes.string,
            onclick: PropTypes.func,
            ariaLabel: PropTypes.string.isRequired
        })
    )
}

export default SoMe
