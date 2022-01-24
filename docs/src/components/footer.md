<script setup>
  import WvFooter from '@wevisdemo/ui/components/footer.vue'
</script>

# Footer

Footer at the bottom of the page

<ClientOnly>
  <WvFooter />
</ClientOnly>

```vue
<WvFooter />
```

## Props

| Name  | Type    | Default |
| ----- | ------- | ------- |
| black | boolean | `false` |

## Examples

**Black theme**

<ClientOnly>
  <WvFooter :black="true" />
</ClientOnly>

```vue
<WvFooter :black="true" />
```
