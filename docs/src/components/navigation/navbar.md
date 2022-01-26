# Navbar

Navigation bar at the top of the page

<WvNavbar />

```jsx
import WvNavbar from '@wevisdemo/ui/components/navbar.{vue,jsx,svelte}';

<WvNavbar />;
```

## Props

| Name          | Type    | Default |
| ------------- | ------- | ------- |
| homeHref      | string  | `/`     |
| logoAddonSrc  | string  |         |
| title         | string  |         |
| withDarkTheme | boolean |         |

## Slot / Children

Elements in the right column

## Examples

**With title and slot**

<WvNavbar title="SOME PROJECT">
  <WvNavButton isActive>About</WvNavButton>
  <WvNavButton>Report</WvNavButton>
</WvNavbar>

```html
<WvNavbar title="SOME PROJECT">
  <WvNavButton isActive>About</WvNavButton>
  <WvNavButton>Report</WvNavButton>
</WvNavbar>
```

**With dark theme**

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
