# NavButton

A button for navigation bar

<WvNavButton>About</WvNavButton>

```jsx
import WvNavButton from '@wevisdemo/ui/components/nav-button.{vue,jsx,svelte}';

<WvNavButton>About</WvNavButton>;
```

## Props

| Name          | Type    | Default |
| ------------- | ------- | ------- |
| withDarkTheme | boolean | `false` |

## Slot / Children

Button content

## Examples

**With dark theme**

<div style="background-color: black;">
  <WvNavButton withDarkTheme>About</WvNavButton>
</div>

```html
<WvNavButton withDarkTheme>About</WvNavButton>
```
