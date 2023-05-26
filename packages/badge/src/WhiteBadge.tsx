import React from 'react'
import BaseBadge, { BadgeSize } from './BaseBadge'

interface WhiteBadgeProps {
    size?: BadgeSize
    children: React.ReactNode
}
const WhiteBadge: React.FC<WhiteBadgeProps> = ({ size, children }) => (
    <BaseBadge variant='white' size={size}>
        {children}
    </BaseBadge>
)

export default WhiteBadge
