<script setup>
  import Navbar from '../../../ui/build/components/navbar.vue'
</script>

# Navbar

Navigation bar at the top of the page

<Navbar />

## Props

| Name     | Type    | Default     |
| -------- | ------- | ----------- |
| title    | string  | `undefined` |
| homeHref | string  | `/`         |
| black    | boolean | `false`     |

## Examples

**1. With title**

<Navbar title="SOME PROJECT" />

```vue
<Navbar title="SOME PROJECT" />
```

**2. With slot**

<Navbar title="SOME PROJECT">
  <div>item1</div>
  <div>item2</div>
</Navbar>

```vue
<Navbar title="SOME PROJECT">
  <div>item1</div>
  <div>item2</div>
</Navbar>
```

**3. Black theme**

<Navbar :black="true" title="SOME PROJECT" />

```vue
<Navbar :black="true" title="SOME PROJECT" />
```
