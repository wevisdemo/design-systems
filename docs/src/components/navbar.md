# Navbar

Main container for navigation bar group. Hamburger menu will be used to show slot items in mobile.

<WvNavbar />

```js
import WvNavbar from '@wevisdemo/ui/components/navbar.{vue,jsx,svelte}';
```

```vue
<WvNavbar />
```

## Props

| Name          | Type    | Default |
| ------------- | ------- | ------- |
| homeHref      | string  | `/`     |
| logoAddonSrc  | string  |         |
| title         | string  |         |
| dark          | boolean | `false` |
| alwayShowSlot | boolean | `false` |

## Slot / Children

Elements in the right column on desktop / hamburger menu drop down on mobile

## Examples

**With title and slot**

<WvNavbar title="SOME PROJECT">
  <WvNavButton :active="true">About</WvNavButton>
  <WvNavButton>Report</WvNavButton>
</WvNavbar>

```vue
<WvNavbar title="SOME PROJECT">
  <WvNavButton :active="true">About</WvNavButton>
  <WvNavButton>Report</WvNavButton>
</WvNavbar>
```

**With dark theme**

<WvNavbar :dark="true" title="SOME PROJECT">
  <WvNavButton :dark="true" :active="true">About</WvNavButton>
  <WvNavButton :dark="true">Report</WvNavButton>
</WvNavbar>

```vue
<WvNavbar :dark="true" title="SOME PROJECT">
  <WvNavButton :dark="true" :active="true">
    About
  </WvNavButton>
  <WvNavButton :dark="true">Report</WvNavButton>
</WvNavbar>
```

**With logo addon**

<WvNavbar logoAddonSrc="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/sparkles_2728.png" />

```vue
<WvNavbar
  logoAddonSrc="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/sparkles_2728.png"
/>
```

**Alway show slot**

Disable hamburger menu on mobile

<WvNavbar alwayShowSlot>
  <WvNavButton :active="true">About</WvNavButton>
  <WvNavButton>Report</WvNavButton>
</WvNavbar>

```vue
<WvNavbar alwayShowSlot>
  <WvNavButton :active="true">About</WvNavButton>
  <WvNavButton>Report</WvNavButton>
</WvNavbar>
```
