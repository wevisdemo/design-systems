# ParagraphGroup

Paragraph group including heading and text, or other small children paragraph group

<WvParagraphGroup heading="เป้าหมาย">
  <p>
    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
</WvParagraphGroup>

```js
import WvParagraphGroup from '@wevisdemo/ui/components/paragraph-group.{vue,js,svelte}';
```

```vue
<WvParagraphGroup heading="เป้าหมาย">
  <p>
    dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essentially unchanged. It was popularised in the
    1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker
    including versions of Lorem Ipsum.
  </p>
</WvParagraphGroup>
```

## Props

| Name    | Type    | Default |
| ------- | ------- | ------- |
| heading | string  |         |
| small   | boolean | false   |

## Slot / Children

Items apeended after heading

## Examples

**Small size**

<WvParagraphGroup :small="true" heading="เขียนโปรแกรม">
  <p>
    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
  </p>
</WvParagraphGroup>

```vue
<WvParagraphGroup :small="true" heading="เขียนโปรแกรม">
  <p>
    dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley
  </p>
</WvParagraphGroup>
```
