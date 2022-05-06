# Navbar

## Usage

### Install

```sh
npm install @posten-hedwig/navbar
```

### Icons

Hedwig is using icons from Font Awesome Pro wich requires a licence. The auth token from your licence will need to be added to an environment variable. For Posten and Bring developers, please contact the Hedwig contributors for this token. For other users, a licence can be obtained [here](https://fontawesome.com/plans)

### Import

```js
import { Navbar } from '@posten-hedwig/navbar'
```

### Render

```jsx
<Navbar
    logo='posten'
    logoAriaLabel='Go to homepage'
    logoHref='#'
    logoTitle='Posten Logo'
    skipToMainHref='#content'
    skipToMainTitle='Main content' />
```

## API

### Navbar `logoTitle`

This prop specifies the alt text for the logo.

### Navbar `logo`

This prop specifies which logo to use for the navbar. 'posten' and 'bring' are available

### Navbar `logoHref`

This prop is the link to where the logo is leading to

### Navbar `logoAriaLabel`

Specifies the Aria Label for the logo

### Navbar `skipToMainHref`

Links to the main content on the page. For example href='#main'

### Navbar `skipToMainTitle`

Title for the skipToMainHref

### Navbar `flagship`

This prop specifies the Flagship name. Will show to the right of the logo

### Navbar `selectorItems`

This prop is two or more links to different sections on the app/website. For example this could be a switch between private and business sections.

```jsx
import { Navbar } from '@posten-hedwig/navbar'
import { Link } from '@posten-hedwig/link'
…
<Navbar
    /* other props goes here */
    selectorItems={[
        {
            link: <Link href="#">Business</Link>
        },
        {
            link: <a href="#">Private</a>,
            selected: true
        }
    ]}
/>
```

### Navbar `menuOpenName`

Name showing on the menu button on desktop. When the menu is open the menuCloseName will show instead. Required when any items are to be shown in the menu.

### Navbar `menuOpenTitle`

Title for menu button for mouse over When the menu is open, menuCloseTitle will show instead. Required when any items are to be shown in the menu.

### Navbar `menuCloseName`

Name showing on the menu button on desktop when the menu is open. When the menu is closed menuOpenName will show instead. Required when any items are to be shown in the menu.

### Navbar `menuCloseTitle`

Title for menu button for mouse over when the menu is open. When the menu is open menuOpenTitle will show instead. Required when any items are to be shown in the menu

### Navbar `menuSections`

Specify the main sections including items that are in the menu. Each section consists of a title and an array of links. Can be either links with href, React Router Links or Hedwig Links.

```jsx
import { Navbar } from '@posten-hedwig/navbar'
import { Link } from '@posten-hedwig/link'
…
<Navbar
    /*…*/
    menuSections={[
        {
            title: 'Send',
            links: [
                <Link href='#'>Parcels abroad</Link>,
                <Link href='#'>Parcels in Norway</Link>,
                <Link href='#'>Letters in Norway</Link>,
                <Link href='#'>Return</Link>,
                <Link href='#'>Letters abroad</Link>,
                <Link href='#'>Addressing and wrapping</Link>,
                <Link href='#'>Customs when sending abroad</Link>
            ]
        },
        {
            title: 'Receive',
            links: [
                <Link href='#'>On what days does my mail arrive?</Link>,
                <Link href='#'>Home delivery</Link>,
                <Link href='#'>Pick up yourself</Link>,
                <Link href='#'>Customs when receiving</Link>
            ]
        }
    ]}
/>
```

### Navbar `menuFeaturedLinks`

Specify items that are featured in the menu. This is an array of links with icons. Can be either links with href, React Router Links or Hedwig Links.

#### Example Navbar with `menuFeaturedLinks`

```jsx
import { Navbar } from '@posten-hedwig/navbar'
import { Link } from '@posten-hedwig/link'
import { Icon, sporing, leverttilbedrift, avis, kundeservice } from '@posten-hedwig/icon'
…
<Navbar
    /*…*/
    menuFeaturedLinks={[
        <Link href='#'>
            <Icon icon={sporing} size='medium' title='Track a shipment' />
            Track a shipment
        </Link>,
        <Link href='#'>
            <Icon icon={leverttilbedrift} size='medium' title='Mybring' />
            Mybring
        </Link>,
        <Link href='#'>
            <Icon icon={avis} size='medium' title='Magazine' />
            Magazine
        </Link>,
        <Link href='#'>
            <Icon icon={kundeservice} size='medium' title='Contact us' />
            Contact us
        </Link>
    ]}
/>
```
