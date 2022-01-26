# NavButton

A button for navigation bar

<WvNavButton>About</WvNavButton>

```jsx
import WvNavButton from '@wevisdemo/ui/components/nav-button.{vue,jsx,svelte}';

<WvNavButton>About</WvNavButton>;
```

## Props

| Name     | Type    | Default |
| -------- | ------- | ------- |
| isActive | boolean | `false` |
| dark     | boolean | `false` |

## Slot / Children

Button content

## Examples

**Active button**

<WvNavButton isActive>About</WvNavButton>

```jsx
<WvNavButton isActive>About</WvNavButton>
```

**With dark theme**

<div style="background-color: black;">
  <WvNavButton dark isActive>About</WvNavButton>
  <WvNavButton dark>Report</WvNavButton>
</div>

```jsx
<WvNavButton dark isActive>About</WvNavButton>
<WvNavButton dark>Report</WvNavButton>
```
