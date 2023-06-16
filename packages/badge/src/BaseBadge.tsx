import React from 'react'
import '@posten-hedwig/core'
import '../sass/badge.scss'

export type BadgeVariant = 'dark' | 'white' | 'warning'
export type BadgeSize = 'smaller' | 'small' | 'large' | 'larger'

interface BaseBadgeProps {
    variant?: BadgeVariant
    size?: BadgeSize
    children: React.ReactNode
}
const BaseBadge: React.FC<BaseBadgeProps> = ({ variant, size, children }) => (
    <span
        className={`hwc-badge ${size ? 'hwc-badge--' + size : ''} ${
            variant ? 'hwc-badge--' + variant : ''
        }`}
    >
        {children}
    </span>
)

export default BaseBadge
