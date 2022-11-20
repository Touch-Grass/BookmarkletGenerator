import { javascriptInput, output, scriptList, scriptsToImport, styleList, stylesToImport } from './shared.js';
const resetButton = document.querySelector('.reset_button');
const jsScriptsInput = document.querySelector('.js_scripts');
const jsStylesInput = document.querySelector('.js_styles');
const clearArray = (array) => {
    while (array.length)
        array.pop();
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
