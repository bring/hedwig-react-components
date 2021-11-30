import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

export default function SimpleLink({ href, title, size, children }) {
  return (
    <BaseLink href={href} title={title} type='no-underline' size={size}>
      {children}
    </BaseLink>
  )
}

SimpleLink.defaultProps = {
  size: ''
}

SimpleLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOf(['small', 'big', ''])
}
