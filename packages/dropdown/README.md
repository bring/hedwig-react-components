# Dropdown

Hedwig styled dropdown

## Usage

### 1 Install

```sh
npm install @posten-hedwig/dropdown
```

### 2 Import
```
import { Dropdown } from '@posten-hedwig/dropdown'

```

### 3 Render
```
<Dropdown
  label="Label"
  onChange={() => {}}
  placeholder: 'Please select'
  options={[
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    },
    {
      label: 'Option 3',
      value: '3'
    }
  ]}
/>
```
