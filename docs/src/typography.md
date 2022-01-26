# Typography

We provide CSS classes for

- **Font family** `wv_font_[family]`
- **Font size** `wv_h[size]` for header and `wv_b[size]` for body

## Heading

<p v-for="i in 11" :class="`wv_font_kondora wv_h${i}`">Kondora Thai H{{i}}</p>

```jsx
<p class="wv_font_kondora wv_h1">Kondora Thai H1</p>
<p class="wv_font_kondora wv_h2">Kondora Thai H2</p>
...
<p class="wv_font_kondora wv_h11">Kondora Thai H11</p>
```

<p v-for="i in 11" :class="`wv_font_anuphan wv_h${i}`">Anuphan H{{i}}</p>

```jsx
<p class="wv_font_anuphan wv_h1">Anuphan H1</p>
<p class="wv_font_anuphan wv_h2">Anuphan H2</p>
...
<p class="wv_font_anuphan wv_h11">Anuphan H11</p>
```

## Body

<p v-for="i in 7" :class="`wv_font_baijamjuri wv_b${i}`">Bai Jamjuri B{{i}}</p>

```jsx
<p class="wv_font_baijamjuri wv_b1">Bai Jamjuri B1</p>
<p class="wv_font_baijamjuri wv_b2">Bai Jamjuri B2</p>
...
<p class="wv_font_baijamjuri wv_b7">Bai Jamjuri B7</p>
```

<p v-for="i in 7" :class="`wv_font_anuphan wv_b${i}`">Anuphan B{{i}}</p>

```jsx
<p class="wv_font_anuphan wv_b1">Anuphan B1</p>
<p class="wv_font_anuphan wv_b2">Anuphan B2</p>
...
<p class="wv_font_anuphan wv_b7">Anuphan B7</p>
```
