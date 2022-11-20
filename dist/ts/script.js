"use strict";
const javascriptInput = document.querySelector('.js_code');
const scriptsInput = document.querySelector('.js_scripts');
const stylesInput = document.querySelector('.js_styles');
const scriptList = document.querySelector('.scripts_list');
const styleList = document.querySelector('.styles_list');
const output = document.querySelector('.output');
const resetButton = document.querySelector('.reset_button');
const generateButton = document.querySelector('.generate_button');
const addExternalScriptsButton = document.querySelector('.add_external_scripts');
const addExternalStylesButton = document.querySelector('.add_external_styles');
let scriptsToImport = [];
let stylesToImport = [];
const addToList = (list, item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
};
addExternalScriptsButton.addEventListener('click', () => {
    scriptsToImport.push(`'${scriptsInput.value}'`);
    scriptsInput.value = '';
    addToList(scriptList, scriptsToImport[scriptsToImport.length - 1]);
});
addExternalStylesButton.addEventListener('click', () => {
    stylesToImport.push(`'${stylesInput.value}'`);
    stylesInput.value = '';
    addToList(styleList, stylesToImport[stylesToImport.length - 1]);
});
resetButton.addEventListener('click', () => {
    scriptsToImport = [];
    stylesToImport = [];
    scriptList.innerHTML = '';
    styleList.innerHTML = '';
    javascriptInput.value = '';
    output.value = '';
});
generateButton.addEventListener('click', () => {
    console.log('Generating...');
    output.value = `
  javascript:(()=>{
  async function importAssets(e){let t=document.createElement("div");t.setAttribute("id","bookmarklet_scripts"),document.body.appendChild(t);let l=document.querySelector("#bookmarklet_scripts");for await(let r of e.css){let s=document.createElement("link");s.href=r,s.rel="stylesheet",s.type="text/css",l.appendChild(s)}for await(let i of e.js_modules){let o=document.createElement("script");o.src=i,o.type="module",o.setAttribute("defer","defer"),l.appendChild(o)}}importAssets({js_modules:[${scriptsToImport || ''}],css:[${stylesToImport || ''}]});
    ${encodeURIComponent(javascriptInput.value)}
  })()`;
});
