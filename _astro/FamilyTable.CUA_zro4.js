import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as n}from"./index.DhYZZe0J.js";const r=({s:l,onHover:s})=>{const[d,o]=n.useState("hover:bg-neutral-200"),t=()=>{navigator.clipboard.writeText(l).then(()=>{o("hover:bg-lime-200")}).catch(()=>{o("hover:bg-red-200")}).finally(()=>{setTimeout(()=>o("hover:bg-neutral-200"),200)})};return e.jsx("button",{type:"button",title:`Click to copy - "${l}"`,className:`${d} wv-b1 w-full cursor-pointer rounded-md px-4 py-1 ${l}`,onClick:t,onMouseEnter:()=>s(l),children:"Aอ"})},a=()=>{const[l,s]=n.useState("wv-ibmplex");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"wv-b6",children:'You can click at "Aก" to copy the style.'}),e.jsxs("table",{className:"!mb-2 !mt-0",style:{textAlign:"center"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{}),e.jsxs("th",{className:"leading-normal",scope:"col",children:[e.jsx("span",{children:"Kondolar Thai"}),e.jsx("br",{}),e.jsx("code",{children:"wv-kondolar"})]}),e.jsxs("th",{className:"leading-normal",scope:"col",children:[e.jsx("span",{children:"IBM Plex Sans Thai"}),e.jsx("br",{}),e.jsx("code",{children:"wv-ibmplex"})]}),e.jsxs("th",{className:"leading-normal",scope:"col",children:[e.jsx("span",{children:"IBM Plex Sans Thai Looped"}),e.jsx("br",{}),e.jsx("code",{children:"wv-ibmplexlooped"})]})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"text-right leading-normal",children:e.jsx("span",{children:"400"})}),e.jsx("td",{children:e.jsx(r,{onHover:s,s:"wv-kondolar"})}),e.jsx("td",{children:e.jsx(r,{onHover:s,s:"wv-ibmplex"})}),e.jsx("td",{children:e.jsx(r,{onHover:s,s:"wv-ibmplexlooped"})})]}),e.jsxs("tr",{children:[e.jsxs("th",{scope:"row",className:"text-right leading-normal",children:[e.jsx("span",{children:"600"}),e.jsx("br",{}),e.jsx("code",{children:"wv-semibold"})]}),e.jsx("td",{}),e.jsx("td",{children:e.jsx(r,{onHover:s,s:"wv-ibmplex wv-semibold"})}),e.jsx("td",{children:e.jsx(r,{onHover:s,s:"wv-ibmplexlooped wv-semibold"})})]}),e.jsxs("tr",{children:[e.jsxs("th",{scope:"row",className:"text-right leading-normal",children:[e.jsx("span",{children:"700"}),e.jsx("br",{}),e.jsx("code",{children:"wv-bold"})]}),e.jsx("td",{children:e.jsx(r,{onHover:s,s:"wv-kondolar wv-bold"})}),e.jsx("td",{children:e.jsx(r,{onHover:s,s:"wv-ibmplex wv-bold"})}),e.jsx("td",{children:e.jsx(r,{onHover:s,s:"wv-ibmplexlooped wv-bold"})})]}),e.jsxs("tr",{children:[e.jsxs("th",{scope:"row",className:"text-right leading-normal",children:[e.jsx("span",{children:"900"}),e.jsx("br",{}),e.jsx("code",{children:"wv-black"})]}),e.jsx("td",{children:e.jsx(r,{onHover:s,s:"wv-kondolar wv-black"})}),e.jsx("td",{}),e.jsx("td",{})]})]})]}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsx("div",{className:"-mb-1.5 mt-2 font-bold",children:"Preview"}),e.jsx("code",{className:"wv-b6",children:l})]}),e.jsxs("p",{className:`wv-b3 rounded-md border border-dashed border-neutral-500 p-4 ${l}`,children:["Sphinx of black quartz, judge my vow!",e.jsx("br",{}),"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",e.jsx("br",{}),"นายสังฆภัณฑ์ เฮงพิทักษ์ฝั่ง ผู้เฒ่าซึ่งมีอาชีพเป็นฅนขายฃวด ถูกตำรวจปฏิบัติการจับฟ้องศาล ฐานลักนาฬิกาคุณหญิงฉัตรชฎา ฌานสมาธิ"]})]})};export{a as default};