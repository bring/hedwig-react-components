import React from 'react'
import BaseBadge, { BadgeSize } from './BaseBadge'

interface BadgeProps {
    size?: BadgeSize
    children: React.ReactNode
}
const Badge: React.FC<BadgeProps> = ({ size, children }) => (
    <BaseBadge size={size}>{children}</BaseBadge>
)

export default Badge
