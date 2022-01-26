# Navbar

Navigation bar at the top of the page

<WvNavbar />

```jsx
import WvNavbar from '@wevisdemo/ui/components/navbar.{vue,jsx,svelte}';

<WvNavbar />;
```

## Props

| Name          | Type    | Default     |
| ------------- | ------- | ----------- |
| homeHref      | string  | `/`         |
| logoAddonSrc  | string  | `undefined` |
| title         | string  | `undefined` |
| withDarkTheme | boolean | `false`     |

## Slot / Children

Elements in the right column

## Examples

**With title and slot**

<WvNavbar title="SOME PROJECT">
  <div>item1</div>
  <div>item2</div>
</WvNavbar>

```html
<WvNavbar title="SOME PROJECT">
  <div>item1</div>
  <div>item2</div>
</WvNavbar>
```

**With title with dark theme**

<WvNavbar withDarkTheme title="SOME PROJECT" />

```html
<WvNavbar withDarkTheme title="SOME PROJECT" />
```

**With logo addon**

<WvNavbar logoAddonSrc="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/sparkles_2728.png" />

```html
<WvNavbar
  logoAddonSrc="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/sparkles_2728.png"
/>
```
