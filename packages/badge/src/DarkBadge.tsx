import React from 'react'
import BaseBadge, { BadgeSize } from './BaseBadge'

interface DarkBadgeProps {
    size?: BadgeSize
    children: React.ReactNode
}
const DarkBadge: React.FC<DarkBadgeProps> = ({ size, children }) => (
    <BaseBadge variant='dark' size={size}>
        {children}
    </BaseBadge>
)

export default DarkBadge
