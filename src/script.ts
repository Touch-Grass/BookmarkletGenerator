const javascriptInput = document.querySelector('.js_code') as HTMLInputElement;
const scriptsInput = document.querySelector('.js_scripts') as HTMLInputElement;
const stylesInput = document.querySelector('.js_styles') as HTMLInputElement;

const scriptList = document.querySelector('.scripts_list') as HTMLUListElement;
const styleList = document.querySelector('.styles_list') as HTMLUListElement;

const output = document.querySelector('.output') as HTMLTextAreaElement;
const resetButton = document.querySelector('.reset_button') as HTMLButtonElement;

const generateButton = document.querySelector('.generate_button') as HTMLButtonElement;
const addExternalScriptsButton = document.querySelector('.add_external_scripts') as HTMLButtonElement;
const addExternalStylesButton = document.querySelector('.add_external_styles') as HTMLButtonElement;

let scriptsToImport: string[] = [];
let stylesToImport: string[] = [];

const addToList = (list: HTMLUListElement, item: string) => {
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