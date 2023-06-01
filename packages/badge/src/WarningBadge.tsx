import React from 'react'
import BaseBadge, { BadgeSize } from './BaseBadge'

interface WarningBadgeProps {
    size?: BadgeSize
    children: React.ReactNode
}
const WarningBadge: React.FC<WarningBadgeProps> = ({ size, children }) => (
    <BaseBadge variant='warning' size={size}>
        {children}
    </BaseBadge>
)

export default WarningBadge
