import { javascriptInput, output, scriptsToImport, stylesToImport } from './shared.js';

export const generateBookmarklet = () => {
  if (!javascriptInput.value.length) return;
  output.value = `
  javascript:(()=>{
  async function importAssets(e){let t=document.createElement("div");t.setAttribute("id","bookmarklet_scripts"),document.body.appendChild(t);let l=document.querySelector("#bookmarklet_scripts");for await(let r of e.css){let s=document.createElement("link");s.href=r,s.rel="stylesheet",s.type="text/css",l.appendChild(s)}for await(let i of e.js_modules){let o=document.createElement("script");o.src=i,o.type="module",o.setAttribute("defer","defer"),l.appendChild(o)}}importAssets({js_modules:[${scriptsToImport || ''}],css:[${stylesToImport || ''}]});
    ${encodeURIComponent(javascriptInput.value)}
  })()`;
};
