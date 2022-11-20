import { addExternalScript, addExternalStyle } from './externalCode.js';
import { generateBookmarklet } from './compileBookmarklet.js';
const generateButton = document.querySelector('.generate_button');
const addExternalScriptsButton = document.querySelector('.add_external_scripts');
const addExternalStylesButton = document.querySelector('.add_external_styles');
addExternalScriptsButton.addEventListener('click', () => addExternalScript());
addExternalStylesButton.addEventListener('click', () => addExternalStyle());
generateButton.addEventListener('click', () => generateBookmarklet());
