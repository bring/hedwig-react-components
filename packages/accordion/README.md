# Accordion

Accordions are made of two components, `Accordion` and `AccordionItem` 
## Usage

### 1 Install

```sh
npm install @posten-hedwig/accordion
```

### 2 Import

```js
import { Accordion, AccordionItem } from '@posten-hedwig/accordion'
```

### 3 Render

```jsx
<Accordion>
    <AccordionItem title='Opening hours'>
        <p>
            We are open Monday to Friday from 07:00 to 18:00
        </p>
    </AccordionItem>
    <AccordionItem title='Accessibility'>
        <p>
            We have a wheelchair platform and a handicap toilet
        </p>
    </AccordionItem>
</Accordion>
```

## API Accordion

### Accordion `allowMultiple`

This prop specifies if the Accordion allows multiple open AccordionItems at once. Default is `true`.

```jsx
<Accordion allowMultiple={false}>
    /* AccordionItems goes here */
</Accordion>
```

## API AccordionItem

### AccordionItem `title`

This prop is the title for the current AccordionItem. Title is required.

```jsx
<Accordion>
    <AccordionItem title='Opening hours'>
        /* contents goes here */
    </AccordionItem>
</Accordion>
```

### AccordionItem `expanded`

This prop specifies whether this AccordionItem is expanded by default. Default is `false`.

```jsx
<Accordion>
    <AccordionItem title='Opening hours' expanded={true}>
        /* contents goes here */
    </AccordionItem>
</Accordion>
```
