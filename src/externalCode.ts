import { scriptList, scriptsToImport, styleList, stylesToImport } from './shared.js';

const scriptsInput = document.querySelector('.js_scripts') as HTMLInputElement;
const stylesInput = document.querySelector('.js_styles') as HTMLInputElement;


const addToList = (list: HTMLUListElement, item: string) => {
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
};

export const addExternalScript = () => {
  scriptsToImport.push(`'${scriptsInput.value}'`);
  scriptsInput.value = '';
  addToList(scriptList, scriptsToImport[scriptsToImport.length - 1]);
};

export const addExternalStyle = () => {
  stylesToImport.push(`'${stylesInput.value}'`);
  stylesInput.value = '';
  addToList(styleList, stylesToImport[stylesToImport.length - 1]);
};

