# Button

<WvButton>Feedback</WvButton>

```jsx
import WvButton from '@wevisdemo/ui/components/button.{vue,jsx,svelte}';

<WvButton>Feedback</WvButton>;
```

## Props

| Name      | Type                               | Default  |
| --------- | ---------------------------------- | -------- |
| color     | `"blue"` \| `"black"` \| `"white"` | `"blue"` |
| isCompact | boolean                            | `false`  |

## Slot / Children

Button content

## Examples

**With different color**

<div style="display:flex; background-color: lightgray; padding: 6px;">
  <WvButton>Blue (default)</WvButton>
  <WvButton color="black">Black</WvButton>
  <WvButton color="white">White</WvButton>
</div>

```html
<WvButton>Blue (default)</WvButton>
<WvButton color="black">Black</WvButton>
<WvButton color="white">White</WvButton>
```

**Compact**

<div style="display:flex; background-color: lightgray; padding: 6px;">
  <WvButton isCompact>Blue (default)</WvButton>
  <WvButton isCompact color="black">Black</WvButton>
  <WvButton isCompact color="white">White</WvButton>
</div>

```html
<WvButton isCompact>Blue (default)</WvButton>
<WvButton isCompact color="black">Black</WvButton>
<WvButton isCompact color="white">White</WvButton>
```
