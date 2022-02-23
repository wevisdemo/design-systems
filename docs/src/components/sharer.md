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

| Name    | Type    | Default                                                     |
| ------- | ------- | ----------------------------------------------------------- |
| url     | string  | current page URL (get from `window.location.href` on mount) |
| light   | boolean | `false`                                                     |
| outline | boolean | `false`                                                     |
| center  | boolean | `false`                                                     |

## Examples

**Light**

<div style="background-color: black;">
  <WvSharer :light="true"/>
</div>

```vue
<div style="background-color: black;">
  <WvSharer :light="true"/>
</div>
```

**Outline**

<WvSharer :outline="true" />

<div style="background-color: black;">
  <WvSharer :light="true" :outline="true" />
</div>

```vue
<WvSharer :outline="true" />
<WvSharer :light="true" :outline="true" />
```

**Center**

<WvSharer :center="true" />

```vue
<WvSharer :center="true" />
```
