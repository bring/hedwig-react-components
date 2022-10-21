# `input`

Hedwig styled input fields

## Usage

### 1 Install

```sh
npm install @posten-hedwig/dropdown
```

### 2 Import
```
import { TextInput } from '@posten-hedwig/input'
import { NumberInput } from '@posten-hedwig/input'
import { EmailInput } from '@posten-hedwig/input'
import { PasswordInput } from '@posten-hedwig/input'

```

### 3 Render
```
<TextInput
  label="Text input"
  onChange={() => {}}
  placeholder="placeholder"
/>

<NumberInput
  label="Number input"
  max={5}
  min={1}
  onChange={() => {}}
  placeholder="select a number 1-5"
/>

<EmailInput
  label="Email input"
  onChange={() => {}}
  placeholder="placeholder"
/>

<PasswordInput
  label="Password"
  onChange={() => {}}
  placeholder="placeholder"
/>

```
