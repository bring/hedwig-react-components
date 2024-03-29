# Container

Containers are “root” components that limits the width of it's wrapped contents and applies default side gutters. Containers does not apply any styling to its content such as font-family etc.

## Usage

### Install

```sh
npm install @posten-hedwig/container
```

### Import

```js
import { Container } from '@posten-hedwig/container'
```

### Render

```jsx
<Container>
    This is a default container
</Container>
```

## API

### Container `slim`

This prop tells the container that it should be slim. Boolean. Default: `false`

```jsx
<Container slim>
    This is a slim container. Has wider side gutters on desktop. On mobile, the gutters are the same.
</Container>
```

### Container `pt`

This prop gives responsive padding to the top of the container. Boolean. Default: `false`

```jsx
<Container pt>
    This is a container with responsive padding top
</Container>
```

### Container `pb`

This prop gives responsive padding to the bottom of the container. Boolean. Default: `false`

```jsx
<Container pb>
    This is a container with responsive padding bottom
</Container>
```
