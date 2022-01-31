# NavDropdown

A dropdown for navigation bar. `WvNavDropdown` and `WvNavDropdownItem` must be used together.

<WvNavDropdown label="Topic">
  <WvNavDropdownItem>Topic 1</WvNavDropdownItem>
  <WvNavDropdownItem>Topic 2</WvNavDropdownItem>
  <WvNavDropdownItem>Topic 3</WvNavDropdownItem>
</WvNavDropdown>

```jsx
import WvNavDropdown from '@wevisdemo/ui/components/nav-dropdown.{vue,jsx,svelte}';
import WvNavDropdownItem from '@wevisdemo/ui/components/nav-dropdown-item.{vue,jsx,svelte}';

<WvNavDropdown label="Topic">
  <WvNavDropdownItem>Topic 1</WvNavDropdownItem>
  <WvNavDropdownItem>Topic 2</WvNavDropdownItem>
  <WvNavDropdownItem>Topic 3</WvNavDropdownItem>
</WvNavDropdown>;
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
<WvNavDropdown dark label="Topic">
<WvNavDropdownItem dark>Topic 1</WvNavDropdownItem>
<WvNavDropdownItem dark>Topic 2</WvNavDropdownItem>
<WvNavDropdownItem dark>Topic 3</WvNavDropdownItem>
</WvNavDropdown>

```jsx
<WvNavDropdown dark label="Topic">
  <WvNavDropdownItem dark>Topic 1</WvNavDropdownItem>
  <WvNavDropdownItem dark>Topic 2</WvNavDropdownItem>
  <WvNavDropdownItem dark>Topic 3</WvNavDropdownItem>
</WvNavDropdown>
```
