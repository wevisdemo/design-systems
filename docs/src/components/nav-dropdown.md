# Nav Dropdown

A dropdown for navigation bar

<WvNavDropdown label="Topic">
  <div>ContentHere</div>
</WvNavDropdown>

```jsx
import WvNavButton from '@wevisdemo/ui/components/nav-button.{vue,jsx,svelte}';

<WvNavDropdown label="Topic">
  <div>ContentHere</div>
</WvNavDropdown>;
```

## Props

| Name  | Type    | Default |
| ----- | ------- | ------- |
| label | string  |         |
| dark  | boolean | `false` |

## Slot / Children

Dropdown list content

## Examples

**Dark theme**

<WvNavDropdown dark label="Topic">
  <div>ContentHere</div>
</WvNavDropdown>

```jsx
<WvNavDropdown dark label="Topic">
  <div>ContentHere</div>
</WvNavDropdown>
```
