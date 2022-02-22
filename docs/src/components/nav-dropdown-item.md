# NavDropdownItem

A dropdown for navigation bar. `WvNavDropdown` and `WvNavDropdownItem` must be used together.

<WvNavDropdownItem>Topic 1</WvNavDropdownItem>

```js
import WvNavButton from '@wevisdemo/ui/components/nav-button.{vue,jsx,svelte}';
```

```vue
<WvNavDropdownItem>Topic 1</WvNavDropdownItem>
```

## Props

| Name | Type    | Default |
| ---- | ------- | ------- |
| dark | boolean | `false` |

## Slot / Children

Item content

## Examples

**Dark theme**

<div style="background-color: black;">
  <WvNavDropdownItem :dark="true">Topic 1</WvNavDropdownItem>
</div>

```vue
<WvNavDropdownItem :dark="true">Topic 1</WvNavDropdownItem>
```
