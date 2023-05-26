import React, { createRef, useContext, useEffect, useState } from 'react'
import { ExpandedContext } from './ExpandedContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons'

interface AccordionItemProps {
    expanded?: boolean
    title: string
    children: React.ReactNode
}
const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, expanded = false }) => {
    // State coming from the surrounding Accordion
    const [expandedState, setExpandedState] = useContext(ExpandedContext)

    // Local states
    const [triggerHeight, setTriggerHeight] = useState(0)
    const [contentHeight, setContentHeight] = useState(0)
    const [isExpanded, setIsExpanded] = useState(expanded)
    const [id] = useState('item-' + Math.floor(Math.random() * 10000))

    const trigger = createRef<HTMLButtonElement>()
    const contentRef = createRef<HTMLDivElement>()

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
        setTriggerHeight(trigger.current?.offsetHeight || 0)
        if (showExpanded()) {
            setContentHeight(contentRef.current?.offsetHeight || 0)
        }
    }, [isExpanded, expandedState.open])

    const toggleItem = () => {
        if (expandedState.allowMultiple) {
            setIsExpanded(!isExpanded)
        } else {
            setExpandedState((expandedState) => ({
                ...expandedState,
                open: expandedState.open === title ? undefined : title
            }))
        }
    }

    /**
     * if allowMultiple, each AccordionItem keeps track of their own expanded status in isExpanded
     * otherwise expandedState keeps track of which item is expanded
     */
    const showExpanded = () =>
        expandedState.allowMultiple ? isExpanded : expandedState.open === title

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
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className='hw-accordion__icon'
                    rotation={showExpanded() ? 90 : undefined}
                />
            </button>
            <div id={id} className='hw-accordion__contents' ref={contentRef}>
                {showExpanded() && children}
            </div>
        </li>
    )
}

export default AccordionItem
