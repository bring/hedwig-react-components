# Footer

The footer is placed at the bottom of every page of the website.

The footer contains the logo, links and button links to often used services, as well as links to our social media platforms.

## Usage

### Install

```sh
npm install @posten-hedwig/footer
```

### Icons

Hedwig is using icons from Font Awesome Pro wich requires a licence. The auth token from your licence will need to be added to an environment variable. For Posten and Bring developers, please contact the Hedwig contributors for this token. For other users, a licence can be obtained [here](https://fontawesome.com/plans)

### Import

```js
import { Footer } from '@posten-hedwig/footer'
```

### Render

```jsx
<Footer
    logo='posten'
    logoAriaLabel='Go to homepage'
    logoHref='#'
    logoTitle='Posten Logo'
    skipToMainHref='#content'
    skipToMainTitle='Main content' />
```

## API

### Footer `logoTitle`

This prop specifies the alt text for the logo.

### Footer `logo`

This prop specifies which logo to use for the navbar. 'posten' and 'bring' are available

### Footer `logoHref`

This prop is the link to where the logo is leading to

### Footer `logoAriaLabel`

This prop specifies the Aria Label for the logo

### Footer `sections`

This prop specifies the sections for the Footer. Each section consists of a title and an array of links. Can be either links with href, React Router Links or Hedwig Links.

```jsx
import { Footer } from '@posten-hedwig/navbar'
import { Link } from '@posten-hedwig/link'
…
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
