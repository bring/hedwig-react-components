# SlimFooter

The Slim Footer is placed at the bottom of every page of the website.

The Slim Footer contains the logo, important links and copyright information

## Usage

### 1 Install

```sh
npm install @posten-hedwig/slimfooter
```

### 2 Import

```js
import { SlimFooter } from '@posten-hedwig/slimfooter'
```

### 3 Render

```jsx
<SlimFooter
    logo='posten'
    logoHref='#'
    logoTitle='Posten Logo'
    importantLinks={...}
    copyright='Posten Norge AS'
/>
```

## API

### SlimFooter `logo`

This prop specifies which logo to use for the navbar. 'posten' and 'bring' are available

### SlimFooter `logoHref`

This prop is the link to where the logo is leading to

### SlimFooter `logoTitle`

This prop specifies the alt text for the logo.

### SlimFooter `importantLinks`

This prop specifies important links in the Footer. The links can be for cookie information and privacy policy for example

```jsx
import { SlimFooter } from '@posten-hedwig/footer'
import { Link } from '@posten-hedwig/link'
/*…*/
<SlimFooter
    /*…*/
    importantLinks={
        [
            <Link href='#'>Cookies</Link>,
            <Link href='#'>Privacy policy</Link>
        ]
    }
/>
```

### SlimFooter `copyright`

This prop specifies the name for copyright on this site.
Default value "Posten Norge AS"
