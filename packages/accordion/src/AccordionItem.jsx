import React, { createRef, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ExpandedContext } from './ExpandedContext'

const AccordionItem = ({ title, children, expanded }) => {
    // State coming from the surrounding Accordion
    const [expandedState, setExpandedState] = useContext(ExpandedContext)

    // Local states
    const [triggerHeight, setTriggerHeight] = useState()
    const [contentHeight, setContentHeight] = useState()
    const [isExpanded, setIsExpanded] = useState(expanded)
    const [id] = useState('item-' + Math.floor(Math.random() * 10000))

    const trigger = createRef()
    const contentRef = createRef()

    useEffect(() => {
        if (
            expanded &&
            !expandedState.allowMultiple &&
            !expandedState.hasSetInitialExpanded
        ) {
            setExpandedState((expandedState) => ({
                ...expandedState,
                open: title,
                hasSetInitialExpanded: true
            }))
        }
        setTriggerHeight(trigger.current.offsetHeight)
        if (showExpanded()) {
            setContentHeight(contentRef.current.offsetHeight)
        }
    }, [isExpanded, expandedState.open])

    const toggleItem = () => {
        if (expandedState.allowMultiple) {
            setIsExpanded(!isExpanded)
        } else {
            setExpandedState((expandedState) => ({
                ...expandedState,
                open: expandedState.open === title ? null : title
            }))
        }
    }

    /**
     * if allowMultiple, each AccordionItem keeps track of their own expanded status in isExpanded
     * otherwise expandedState keeps track of which item is expanded
     */
    const showExpanded = () =>
        expandedState.allowMultiple ? isExpanded : expandedState === title

    return (
        <li
            className={
                'hw-accordion__item' +
                (showExpanded() ? ' hw-accordion__item--expanded' : '')
            }
            style={{
                height: showExpanded()
                    ? triggerHeight + contentHeight + 'px'
                    : triggerHeight + 'px'
            }}
        >
            <button
                className='hw-accordion__trigger'
                onClick={toggleItem}
                ref={trigger}
                aria-controls={id}
                aria-expanded={showExpanded()}
            >
                {title}
                <div className='hw-accordion__icon' />
            </button>
            <div id={id} className='hw-accordion__contents' ref={contentRef}>
                {showExpanded() && children}
            </div>
        </li>
    )
}

AccordionItem.propTypes = {
    expanded: PropTypes.bool,
    title: PropTypes.string.isRequired
}

AccordionItem.defaultProps = {
    expanded: false
}

export default AccordionItem
