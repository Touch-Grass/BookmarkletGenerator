import { addExternalScript, addExternalStyle } from './externalCode.js';
import { generateBookmarklet } from './compileBookmarklet.js';

const generateButton = document.querySelector('.generate_button') as HTMLButtonElement;
const addExternalScriptsButton = document.querySelector('.add_external_scripts') as HTMLButtonElement;
const addExternalStylesButton = document.querySelector('.add_external_styles') as HTMLButtonElement;

addExternalScriptsButton.addEventListener('click', () => addExternalScript());
addExternalStylesButton.addEventListener('click', () => addExternalStyle());
generateButton.addEventListener('click', () => generateBookmarklet());
