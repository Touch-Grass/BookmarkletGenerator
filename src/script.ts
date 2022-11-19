const javascriptInput = document.querySelector('.js_code') as HTMLInputElement;
const scriptsInput = document.querySelector('.js_scripts') as HTMLInputElement;
const stylesInput = document.querySelector('.js_styles') as HTMLInputElement;

const output = document.querySelector('.output') as HTMLTextAreaElement;

const generateButton = document.querySelector('.generate_button') as HTMLButtonElement;
const addExternalScriptsButton = document.querySelector('.add_external_scripts') as HTMLButtonElement;
const addExternalStylesButton = document.querySelector('.add_external_styles') as HTMLButtonElement;

let scriptsToImport: string[] = [];
let stylesToImport: string[] = [];
addExternalScriptsButton.addEventListener('click', () => {
  scriptsToImport.push(`'${scriptsInput.value}'`);
  scriptsInput.value = '';
});

addExternalStylesButton.addEventListener('click', () => {
  stylesToImport.push(`'${stylesInput.value}'`);
  stylesInput.value = '';
});

generateButton.addEventListener('click', () => {
  output.innerText = `
  javascript:(()=>{
    async function importAssets(assets) {
        const assetDiv = document.createElement('div');
        assetDiv.setAttribute('id', 'bookmarklet_scripts');
        document.body.appendChild(assetDiv);
        const assetsElement = document.querySelector('#bookmarklet_scripts');
        for await (const asset of assets.css) {
            const injectingStyle = document.createElement('link');
            injectingStyle.href = asset;
            injectingStyle.rel = 'stylesheet';
            injectingStyle.type = 'text/css';
            assetsElement.appendChild(injectingStyle);
        }
        for await (const asset of assets.js_modules) {
            const injectingScript = document.createElement('script');
            injectingScript.src = asset;
            injectingScript.type = 'module';
            injectingScript.setAttribute('defer', 'defer');
            assetsElement.appendChild(injectingScript);
        }
    }
    importAssets({
        js_modules: [${scriptsToImport ?? ''}],
        css: [${stylesToImport ?? ''}],
    });
    ${encodeURIComponent(javascriptInput.value)}
  })()`;
});