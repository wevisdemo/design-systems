<script setup>
  import VwNavbar from '../../../ui/build/components/navbar.vue'
</script>

# Navbar

Navigation bar at the top of the page

<VwNavbar />
```vue
<VwNavbar />
```

## Props

| Name     | Type    | Default     |
| -------- | ------- | ----------- |
| title    | string  | `undefined` |
| homeHref | string  | `/`         |
| black    | boolean | `false`     |

## Examples

**1. With title**

<VwNavbar title="SOME PROJECT" />

```vue
<VwNavbar title="SOME PROJECT" />
```

**2. With slot**

<VwNavbar title="SOME PROJECT">
  <div>item1</div>
  <div>item2</div>
</VwNavbar>

```vue
<VwNavbar title="SOME PROJECT">
  <div>item1</div>
  <div>item2</div>
</VwNavbar>
```

**3. Black theme**

<VwNavbar :black="true" title="SOME PROJECT" />

```vue
<VwNavbar :black="true" title="SOME PROJECT" />
```
