import { javascriptInput, output, scriptList, scriptsToImport, styleList, stylesToImport } from './shared.js';

const resetButton = document.querySelector('.reset_button') as HTMLButtonElement;
const jsScriptsInput = document.querySelector('.js_scripts') as HTMLInputElement;
const jsStylesInput = document.querySelector('.js_styles') as HTMLInputElement;

const clearArray = (array: any[]) => {
  while (array.length) array.pop();
};

resetButton.addEventListener('click', () => {
  clearArray(scriptsToImport);
  clearArray(stylesToImport);
  jsScriptsInput.value = '';
  jsStylesInput.value = '';
  scriptList.innerHTML = '';
  styleList.innerHTML = '';
  javascriptInput.value = '';
  output.value = '';
});
