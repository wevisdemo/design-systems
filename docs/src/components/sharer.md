# Sharer

Social media share buttons
<WvSharer url="https://wevis.info" />

```jsx
import WvSharer from '@wevisdemo/ui/components/sharer.{vue,jsx,svelte}';

<WvSharer url="https://wevis.info" />;
```

## Props

| Name   | Type    | Default                                                     |
| ------ | ------- | ----------------------------------------------------------- |
| url    | string  | current page URL (get from `window.location.href` on mount) |
| light  | boolean | `false`                                                     |
| center | boolean | `false`                                                     |

## Examples

**Light color and center**

<div style="background-color: black;">
  <WvSharer light center />
</div>

```jsx
<WvSharer light />
```
