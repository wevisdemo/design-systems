# Button

<WvButton>Feedback</WvButton>

```js
import WvButton from '@wevisdemo/ui/components/button.{vue,js,svelte}';
```

```vue
<WvButton>Feedback</WvButton>
```

## Props

| Name    | Type                               | Default  |
| ------- | ---------------------------------- | -------- |
| color   | `"blue"` \| `"black"` \| `"white"` | `"blue"` |
| small   | `boolean`                          | `false`  |
| onClick | `() => void`                       |          |

## Slot / Children

Button content

## Examples

**With different color**

<div style="display:flex; background-color: lightgray; padding: 6px;">
  <WvButtonGroup>
    <WvButton>Blue (default)</WvButton>
    <WvButton color="black">Black</WvButton>
    <WvButton color="white">White</WvButton>
  </WvButtonGroup>
</div>

```jsx
<WvButton>Blue (default)</WvButton>
<WvButton color="black">Black</WvButton>
<WvButton color="white">White</WvButton>
```

**Small**

<div style="display:flex; background-color: lightgray; padding: 6px;">
  <WvButtonGroup>
    <WvButton :small="true">Blue (default)</WvButton>
    <WvButton :small="true" color="black">Black</WvButton>
    <WvButton :small="true" color="white">White</WvButton>
  </WvButtonGroup>
</div>

```vue
<WvButton :small="true">Blue (default)</WvButton>
<WvButton :small="true" color="black">Black</WvButton>
<WvButton :small="true" color="white">White</WvButton>
```

**With icon**

<WvButton>
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_314_173)">
      <path d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"/>
      <path d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"/>
      <line x1="10.667" y1="0.5" x2="10.667" y2="13" stroke="currentColor" stroke-width="2"/>
    </g>
    <defs>
      <clipPath id="clip0_314_173">
        <rect width="20.8333" height="20" fill="white" transform="translate(0.0834961 0.5)"/>
      </clipPath>
    </defs>
  </svg>
  <span>Feedback</span>
</WvButton>

```jsx
<WvButton>
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_314_173)">
      <path
        d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
        stroke="currentColor"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
        stroke="currentColor"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <line
        x1="10.667"
        y1="0.5"
        x2="10.667"
        y2="13"
        stroke="currentColor"
        stroke-width="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_314_173">
        <rect
          width="20.8333"
          height="20"
          fill="white"
          transform="translate(0.0834961 0.5)"
        />
      </clipPath>
    </defs>
  </svg>

  <span>Feedback</span>
</WvButton>
```
