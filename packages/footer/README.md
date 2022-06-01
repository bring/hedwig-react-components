# Footer

The footer is placed at the bottom of every page of the website and comes in two varieties: `Footer` and `SlimFooter`

The footer contains the logo, links and button links to often used services, as well as links to our social media platforms.

## Usage

### 1 Install

```sh
npm install @posten-hedwig/footer
```

### 2 Icons auth token in environment

Hedwig is using icons from Font Awesome Pro wich requires a licence. The auth token from your licence will need to be added to an environment variable. For Posten and Bring developers, please contact the Hedwig contributors for this token. For other users, a licence can be obtained [here](https://fontawesome.com/plans)

### 3 Import

```js
import { Footer } from '@posten-hedwig/footer'
```

### 4 Render

```jsx
<Footer
    logo='posten'
    logoHref='#'
    logoTitle='Posten Logo'
    sections={...}
    importantLinks={...}
    copyright='Posten Norge AS'
    some={...}
/>
```

## Footer API

### Footer `logo`

This prop specifies which logo to use for the navbar. 'posten' and 'bring' are available

### Footer `logoHref`

This prop is the link to where the logo is leading to

### Footer `logoTitle`

This prop specifies the alt text for the logo.

### Footer `sections`

This prop specifies the sections for the Footer. Each section consists of a title and an array of links. Can be either links with href, React Router Links or Hedwig Links.

```jsx
import { Footer } from '@posten-hedwig/footer'
import { Link } from '@posten-hedwig/link'
/*…*/
<Footer
    /*…*/
    sections={[
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

### Footer `importantLinks`

This prop specifies important links in the Footer. The links can be for cookie information and privacy policy for example

```jsx
import { Footer } from '@posten-hedwig/footer'
import { Link } from '@posten-hedwig/link'
/*…*/
<Footer
    /*…*/
    importantLinks={
        [
            <Link href='#'>Cookies</Link>,
            <Link href='#'>Privacy policy</Link>
        ]
    }
/>
```

### Footer `buttons`

This prop specifies Links or buttons for special items in the footer. Will be styled as buttons.

```jsx
import { Footer } from '@posten-hedwig/footer'
import { Link } from '@posten-hedwig/link'
/*…*/
<Footer
    /*…*/
    buttons={
        [
            <button onClick={() => alert('You clicked Cookies')}>Cookies</button>,
            <Link href='#'>Privacy policy</Link>
        ]
    }
/>
```

### Footer `copyright`

This prop specifies the name for copyright on this site.
Default value "Posten Norge AS"

### Footer `some`

This prop specifies links and brands for social media.
Specification:
An array of objects looking like this:

```jsx
{
    brand: String,
    href: String,
    ariaLabel: String,
}
```

or

```jsx
{
    brand: String,
    onclick: function,
    ariaLabel: String,
}
```

#### Example

```jsx
import { Footer } from '@posten-hedwig/footer'
/*…*/
<Footer
    /*…*/
    some: [
        {
            brand: 'facebook',
            href: '#',
            ariaLabel: 'Check out our Facebook page'
        },
        {
            brand: 'instagram',
            onclick: () => {
                alert('You clicked Instagram')
            },
            ariaLabel: 'Check out our Instagram page'
        },
        {
            brand: 'mail',
            href: 'mailto:hedwig@posten.no'
            ariaLabel: 'Send us email'
        }
    ]
/>
```

#### List of Social Media Brands supported

- [facebook](https://fontawesome.com/icons/facebook-f?s=brands)
- [mail](https://fontawesome.com/icons/at?s=solid)
- [instagram](https://fontawesome.com/icons/instagram?s=brands)
- [twitter](https://fontawesome.com/icons/twitter?s=brands)
- [linkedin](https://fontawesome.com/icons/linkedin?s=brands)
- [google](https://fontawesome.com/icons/google-plus-g?s=brands)
