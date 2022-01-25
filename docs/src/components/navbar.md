# Navbar

Navigation bar at the top of the page

<WvNavbar />

```vue
<WvNavbar />
```

## Props

| Name         | Type    | Default     |
| ------------ | ------- | ----------- |
| homeHref     | string  | `/`         |
| logoAddonSrc | string  | `undefined` |
| title        | string  | `undefined` |
| black        | boolean | `false`     |

## Examples

**With title and slot**

<WvNavbar title="SOME PROJECT">
  <div>item1</div>
  <div>item2</div>
</WvNavbar>

```vue
<WvNavbar title="SOME PROJECT">
  <div>item1</div>
  <div>item2</div>
</WvNavbar>
```

**With title and black theme**

<WvNavbar :black="true" title="SOME PROJECT" />

```vue
<WvNavbar :black="true" title="SOME PROJECT" />
```

**With logo addon**

<WvNavbar logoAddonSrc="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/sparkles_2728.png" />

```vue
<WvNavbar
  logoAddonSrc="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/sparkles_2728.png"
/>
```
