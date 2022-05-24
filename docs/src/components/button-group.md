# ButtonGroup

Button container with spacing. Align hotizontally on desktop and vertically on mobile.

<WvButtonGroup>
  <WvButton>A</WvButton>
  <WvButton>B</WvButton>
  <WvButton>C</WvButton>
</WvButtonGroup>

```js
import WvButtonGroup from '@wevisdemo/ui/components/button-group.{vue,js,svelte}';
import WvButton from '@wevisdemo/ui/components/button.{vue,js,svelte}';
```

```vue
<WvButtonGroup>
  <WvButton>A</WvButton>
  <WvButton>B</WvButton>
  <WvButton>C</WvButton>
</WvButtonGroup>
```

## Slot / Children

Buttons

## Props

| Name   | Type    | Default |
| ------ | ------- | ------- |
| center | boolean | `false` |

## Examples

**Center buttons**

<WvButtonGroup :center="true">
  <WvButton>A</WvButton>
  <WvButton>B</WvButton>
  <WvButton>C</WvButton>
</WvButtonGroup>

```vue
<WvButtonGroup :center="true">
  <WvButton>A</WvButton>
  <WvButton>B</WvButton>
  <WvButton>C</WvButton>
</WvButtonGroup>
```
