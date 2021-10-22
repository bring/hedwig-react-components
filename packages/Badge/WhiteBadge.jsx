import React from "react";
import PropTypes from 'prop-types';
import BaseBadge from './BaseBadge';

export default function WhiteBadge({size, children}) {
    return (
        <BaseBadge variant='white' size={size}>
            {children}
        </BaseBadge>
    )
};
  
WhiteBadge.propTypes = {
    size : PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
};