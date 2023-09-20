import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoSquare } from '@fortawesome/pro-solid-svg-icons'
import '../sass/infobox.scss'
import '@posten-hedwig/core'
import '@posten-hedwig/typography'

interface InfoBoxProps {
    title: React.ReactNode
    titleElement?: 'h2' | 'h3' | 'h4' | 'h5'
    icon?: boolean
    children: React.ReactNode
}
const InfoBox: React.FC<InfoBoxProps> = ({
    title,
    titleElement = 'h3',
    icon = true,
    children
}) => (
    <div className='hwc-info-box'>
        {icon && (
            <FontAwesomeIcon
                icon={faInfoSquare}
                className='hwc-info-box__icon'
                size='lg'
            />
        )}
        <div className='hwc-info-box__body'>
            {title &&
                React.createElement(
                    titleElement,
                    {
                        className: 'hwc-h3 hwc-info-box__title'
                    },
                    title
                )}

            {children}
        </div>
    </div>
)

export default InfoBox
