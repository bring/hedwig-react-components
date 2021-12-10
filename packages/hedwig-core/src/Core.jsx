import '../sass/variables.scss'
import variables from '../sass/variables.scss'
import '../assets/fonts.css'
import '@posten/hedwig-base'
import cssVars from 'css-vars-ponyfill'
import { objectify } from 'postcss-js'
import { parse } from 'postcss'

function bringTheme() {
    return document.getElementsByClassName('hw-theme-bring').length > 0
}

function getVars(css) {
    const allVars = objectify(parse(css)) // Turn css string into an object
    return {
        ...allVars[':root'], // Use the root vars, including Posten
        ...(bringTheme() && { ...allVars[':root .hw-theme-bring'] }) // Overwrite with Bring vars if needed
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // If browser does not support css vars, use css-vars-ponyfill
    if (!CSS.supports('color', 'var(--test-var)')) {
        cssVars({
            onlyLegacy: true,
            include: 'style[data-sass-component]',
            exclude: 'style[data-sass-component="Core_variables"',
            variables: getVars(variables)
        })
    }
})
