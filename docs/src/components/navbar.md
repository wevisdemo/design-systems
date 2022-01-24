# Navbar

Navigation bar at the top of the page

<WvNavbar />

```vue
<WvNavbar />
```

## Props

| Name     | Type    | Default     |
| -------- | ------- | ----------- |
| title    | string  | `undefined` |
| homeHref | string  | `/`         |
| black    | boolean | `false`     |

## Examples

**1. With title**

<WvNavbar title="SOME PROJECT" />

```vue
<WvNavbar title="SOME PROJECT" />
```

**2. With slot**

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

**3. Black theme**

<WvNavbar :black="true" title="SOME PROJECT" />

```vue
<WvNavbar :black="true" title="SOME PROJECT" />
```
