import{r}from"./chunks/index.ae86a181.js";import{j as e}from"./chunks/jsx-runtime.c14cbbc9.js";function d(n){const[s,o]=r.exports.useState(()=>!1);function a(t){t.stopPropagation(),o(!s)}return e.exports.jsxs("div",{className:`wv_nav-dropdown ${n.dark?"wv_nav-dropdown--black":"wv_nav-dropdown--white"}`,children:[e.exports.jsxs("button",{className:"wv-font-anuphan wv-b7 wv_nav-button",onClick:t=>a(t),children:[e.exports.jsx("span",{children:n.label}),e.exports.jsx("svg",{width:"10",height:"6",viewBox:"0 0 10 6",className:`wv_nav-button-chevron ${s?"wv_nav-button-chevron--opened":""}`,children:e.exports.jsx("path",{opacity:"0.3",d:"M5 6L0.669873 1.38009e-07L9.33013 8.95112e-07L5 6Z"})})]}),s?e.exports.jsx(e.exports.Fragment,{children:e.exports.jsx("div",{className:"wv_nav-dropdown-list",onClick:t=>o(!1),children:n.children})}):null]})}d.defaultProps={dark:!1,label:""};export{d as default};