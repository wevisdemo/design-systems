# Button Group

Button container with spacing. Align hotizontally on desktop and vertically on mobile.

<WvButtonGroup>
  <WvButton>A</WvButton>
  <WvButton>B</WvButton>
  <WvButton>C</WvButton>
</WvButtonGroup>

```jsx
import WvButtonGroup from '@wevisdemo/ui/components/button-group.{vue,jsx,svelte}';
import WvButton from '@wevisdemo/ui/components/button.{vue,jsx,svelte}';

<WvButtonGroup>
  <WvButton>A</WvButton>
  <WvButton>B</WvButton>
  <WvButton>C</WvButton>
</WvButtonGroup>;
```

## Slot / Children

Buttons

## Props

| Name   | Type    | Default |
| ------ | ------- | ------- |
| center | boolean | `false` |

## Examples

**Center buttons**

<WvButtonGroup center>
  <WvButton>A</WvButton>
  <WvButton>B</WvButton>
  <WvButton>C</WvButton>
</WvButtonGroup>

```jsx
<WvButtonGroup center>
  <WvButton>A</WvButton>
  <WvButton>B</WvButton>
  <WvButton>C</WvButton>
</WvButtonGroup>
```
