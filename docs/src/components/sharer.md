# Sharer

Social media share buttons
<WvSharer url="https://wevis.info" />

```js
import WvSharer from '@wevisdemo/ui/components/sharer.{vue,jsx,svelte}';
```

```vue
<WvSharer url="https://wevis.info" />
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
  <WvSharer :light="true" :center="true" />
</div>

```vue
<WvSharer :light="true" :center="true" />
```
