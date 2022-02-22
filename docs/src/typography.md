# Typography

We provide CSS classes for font family, weight and size

## Font Family

`wv-font-[family]`

- <span class="wv-font-kondolar">Kondolar Thai</span> : Heading
- <span class="wv-font-anuphan">Anuphan</span> : Heading or body
- <span class="wv-font-baijamjuri">Bai Jamjuri</span> : Body

```html
<span class="wv-font-kondolar">Kondolar Thai</span>
<span class="wv-font-anuphan">Anuphan</span>
<span class="wv-font-baijamjuri">Baijamjuri</span>
```

## Font Weight

`wv-font-bold` to make text stronger

- <span class="wv-font-kondolar wv-font-bold">Kondolar Thai Black</span>
- <span class="wv-font-anuphan wv-font-bold">Anuphan Semi-Bold</span>
- <span class="wv-font-baijamjuri wv-font-bold">Bai Jamjuri Bold</span>

```html
<span class="wv-font-kondolar wv-font-bold">Kondolar Thai Black</span>
<span class="wv-font-anuphan wv-font-bold">Anuphan Semi-Bold</span>
<span class="wv-font-baijamjuri wv-font-bold">Bai Jamjuri Bold</span>
```

## Font Size

Heading and body size will be scale down on mobile

### Heading

<p v-for="i in 11" :class="`wv-h${i}`">H{{i}}</p>

```jsx
<p class="wv-h1">H1</p>
...
<p class="wv-h11">H11</p>
```

### Body

<p v-for="i in 7" :class="`wv-b${i}`">B{{i}}</p>

```jsx
<p class="wv-b1">B1</p>
...
<p class="wv-b7">B7</p>
```

### UI

UI size will be the same on mobile and desktop

<p v-for="i in 5" :class="`wv-u${i}`">U{{i}}</p>

```jsx
<p class="wv-u1">U1</p>
...
<p class="wv-u5">U5</p>
```
