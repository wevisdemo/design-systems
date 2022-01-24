<script setup>
  import VwNavbar from '../../../ui/components/navbar.vue'
</script>

# Navbar

Navigation bar at the top of the page

<ClientOnly>
  <VwNavbar />
</ClientOnly>

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

<ClientOnly>
  <VwNavbar title="SOME PROJECT" />
</ClientOnly>

```vue
<VwNavbar title="SOME PROJECT" />
```

**2. With slot**

<ClientOnly>
  <VwNavbar title="SOME PROJECT">
    <div>item1</div>
    <div>item2</div>
  </VwNavbar>
</ClientOnly>

```vue
<VwNavbar title="SOME PROJECT">
  <div>item1</div>
  <div>item2</div>
</VwNavbar>
```

**3. Black theme**

<ClientOnly>
  <VwNavbar :black="true" title="SOME PROJECT" />
</ClientOnly>

```vue
<VwNavbar :black="true" title="SOME PROJECT" />
```
