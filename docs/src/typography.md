# Typography

We provide CSS classes for

- **Font family** `wv_font_[family]`
- **Font size** `wv_h[size]` for header and `wv_b[size]` for body

## Font Family

`wv_font_[family]`

- <span class="wv_font_kondora">Kondora Thai</span> : Heading
- <span class="wv_font_anuphan">Anuphan</span> : Heading or body
- <span class="wv_font_baijamjuri">Bai Jamjuri</span> : Body

```html
<span class="wv_font_kondora">Kondora Thai</span>
<span class="wv_font_anuphan">Anuphan</span>
<span class="wv_font_baijamjuri">Baijamjuri</span>
```

## Font Weight

`wv_font_bold` to make text stronger

- <span class="wv_font_kondora wv_font_bold">Kondora Thai Black</span>
- <span class="wv_font_anuphan wv_font_bold">Anuphan Semi-Bold</span>
- <span class="wv_font_baijamjuri wv_font_bold">Bai Jamjuri Bold</span>

```html
<span class="wv_font_kondora wv_font_bold">Kondora Thai Black</span>
<span class="wv_font_anuphan wv_font_bold">Anuphan Semi-Bold</span>
<span class="wv_font_baijamjuri wv_font_bold">Bai Jamjuri Bold</span>
```

## Font Size

### Heading

<p v-for="i in 11" :class="`wv_h${i}`">H{{i}}</p>

```jsx
<p class="wv_h1">H1</p>
...
<p class="wv_h11">H11</p>
```

### Body

<p v-for="i in 7" :class="`wv_b${i}`">B{{i}}</p>

```jsx
<p class="wv_b1">B1</p>
...
<p class="wv_b7">B7</p>
```
