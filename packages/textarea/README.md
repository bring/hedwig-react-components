# `@posten-hedwig/textarea`

Hedwig styled textarea

## Variants
- Default
- Line
- White

## Usage

### 1 Install

```sh
npm install @posten-hedwig/textarea
```

### 2 Import
```
import { TextArea } from '@posten-hedwig/textarea'

```

### 3 Render
```
<TextArea
    label: "testlabel",
    id: "testid",
    name: "testname",
    variant: '',
    rows: 3,
    cols:100,
    maxLength:300,
    placeholder: 'placeholder',
    onChange: () => {},
    readOnly: false,
    disabled: false,
    required: true,
    errorMessage:''
/>

```
