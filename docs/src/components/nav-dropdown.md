# NavDropdown

A dropdown for navigation bar. `WvNavDropdown` and `WvNavDropdownItem` must be used together.

<WvNavDropdown label="Topic">
  <WvNavDropdownItem>Topic 1</WvNavDropdownItem>
  <WvNavDropdownItem>Topic 2</WvNavDropdownItem>
  <WvNavDropdownItem>Topic 3</WvNavDropdownItem>
</WvNavDropdown>

```js
import WvNavDropdown from '@wevisdemo/ui/components/nav-dropdown.{vue,js,svelte}';
import WvNavDropdownItem from '@wevisdemo/ui/components/nav-dropdown-item.{vue,js,svelte}';
```

```vue
<WvNavDropdown label="Topic">
  <WvNavDropdownItem>Topic 1</WvNavDropdownItem>
  <WvNavDropdownItem>Topic 2</WvNavDropdownItem>
  <WvNavDropdownItem>Topic 3</WvNavDropdownItem>
</WvNavDropdown>
```

## Props

| Name  | Type    | Default |
| ----- | ------- | ------- |
| label | string  |         |
| dark  | boolean | `false` |

## Slot / Children

WvNavDropdownItem(s)

## Examples

**Dark theme**
<WvNavDropdown :dark="true" label="Topic">
<WvNavDropdownItem :dark="true">Topic 1</WvNavDropdownItem>
<WvNavDropdownItem :dark="true">Topic 2</WvNavDropdownItem>
<WvNavDropdownItem :dark="true">Topic 3</WvNavDropdownItem>
</WvNavDropdown>

```vue
<WvNavDropdown :dark="true" label="Topic">
  <WvNavDropdownItem :dark="true">Topic 1</WvNavDropdownItem>
  <WvNavDropdownItem :dark="true">Topic 2</WvNavDropdownItem>
  <WvNavDropdownItem :dark="true">Topic 3</WvNavDropdownItem>
</WvNavDropdown>
```
