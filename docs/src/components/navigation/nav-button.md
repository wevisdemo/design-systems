# NavButton

A button for navigation bar

<WvNavButton>About</WvNavButton>

```jsx
import WvNavButton from '@wevisdemo/ui/components/nav-button.{vue,jsx,svelte}';

<WvNavButton>About</WvNavButton>;
```

## Props

| Name   | Type    | Default |
| ------ | ------- | ------- |
| active | boolean | `false` |
| dark   | boolean | `false` |

## Slot / Children

Button content

## Examples

**Active button**

<WvNavButton active>About</WvNavButton>

```jsx
<WvNavButton active>About</WvNavButton>
```

**With dark theme**

<div style="background-color: black;">
  <WvNavButton dark active>About</WvNavButton>
  <WvNavButton dark>Report</WvNavButton>
</div>

```jsx
<WvNavButton dark active>About</WvNavButton>
<WvNavButton dark>Report</WvNavButton>
```
