# Grid

[Source code](https://github.com/bring/hedwig-react-components/tree/master/packages/grid)

Hedwig use the csswizadry-grids. It's a simple 12 column grid to create page layouts through a series of rows and columns that hold content.

## Usage

### Install

```sh
npm install @posten-hedwig/grid
```

### Import

```js
import { Grid, GridItem } from '@posten-hedwig/grid'
```

### Render

```jsx
<Grid>
    <GridItem size='one-half'>Grid item</GridItem>
</Grid>
```

## API Grid

### Grid `align`

This prop aligns the grid horizontally.

Possible values: `left`, `center`, `right`

Default: `left`

```jsx
<Grid align='center'>
    /* Grid items goes here*/
</Grid>
```

### Grid `gutter`

This prop sets the size of the gutters between the GridItems.

Possible values: `default`, `narrow`, `wide`, `none` Default: `default`

```jsx
<Grid gutter='narrow'>
    /* Grid items goes here*/
</Container>
```

### Grid `valign`

This prop gives aligns the grid vertically.

Possible values: `top`, `middle`, `bottom`

Default: `top`

```jsx
<Grid valign='middle'>
    /* Grid items goes here*/
</Grid>
```

## API GridItem

### GridItem `size`

This prop sets the size of the current grid item on displays of all sizes.

```jsx
<GridItem size='one-half'>
    I'm this wide on all size displays.
</GridItem>
```

### GridItem `smallSize`

This prop sets the size of the current grid item on `small` devices.

```jsx
<GridItem smallSize='one-half'>
    I'm this wide on small size displays.
</GridItem>
```

### GridItem `mediumSize`

This prop sets the size of the current grid item on `medium` devices.

```jsx
<GridItem mediumSize='one-half'>
    I'm this wide on medium size displays.
</GridItem>
```

### GridItem `largeSize`

This prop sets the size of the current grid item on `medium` devices.

```jsx
<GridItem largeSize='one-half'>
    I'm this wide on large size displays.
</GridItem>
```

### GridItem `xlargeSize`

This prop sets the size of the current grid item on `xlarge` devices.

```jsx
<GridItem xlargeSize='one-half'>
    I'm this wide on xlarge size displays.
</GridItem>
```

### Available sizes for grid items

- one-whole
- one-half
- one-third
- two-thirds
- one-quarter
- three-quarters
- one-fifth
- two-fifths
- three-fifths
- four-fifths
- one-sixth
- five-sixths
- one-eighth
- three-eights
- five-eights
- seven-eights
- one-tenth
- three-tenths
- seven-tenths
- nine-tenths
- one-twelfth
- five-twelfths
- seven-twelfths
- eleven-twelfths

### Device widths

- small: min-width: 460px
- medium: min-width: 720px
- large: min-width: 940px
- xlarge: min-width: 1200px
