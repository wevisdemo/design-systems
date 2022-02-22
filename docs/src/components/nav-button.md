# NavButton

A button for navigation bar

<WvNavButton>About</WvNavButton>

```js
import WvNavButton from '@wevisdemo/ui/components/nav-button.{vue,jsx,svelte}';
```

```vue
<WvNavButton>About</WvNavButton>
```

## Props

| Name    | Type         | Default |
| ------- | ------------ | ------- |
| active  | `boolean`    | `false` |
| dark    | `boolean`    | `false` |
| onClick | `() => void` |         |

## Slot / Children

Button content

## Examples

**Active button**

<WvNavButton :active="true">About</WvNavButton>

```vue
<WvNavButton :active="true">About</WvNavButton>
```

**With dark theme**

<div style="background-color: black;">
  <WvNavButton :dark="true" :active="true">About</WvNavButton>
  <WvNavButton :dark="true">Report</WvNavButton>
</div>

```vue
<WvNavButton :dark="true" :active="true">About</WvNavButton>
<WvNavButton :dark="true">Report</WvNavButton>
```
