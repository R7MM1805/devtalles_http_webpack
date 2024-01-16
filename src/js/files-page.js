import { uploadFile } from "./http-provider";

const body = document.body;

let inputFile, image;

const createInputFileHtml = () => {
    const html = `
        <h1 class='mt-5'>Subir archivos</h1>
        <hr>
        <label>Selecciona una imagen</label>
        <input id='inputFile' type='file' accept='image/png, image/jpeg' />
        <br>
        <img id='imgPhoto' class='img-thumbnail' src=''>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('#inputFile');
    image = document.querySelector('#imgPhoto');
};

const events = () => {
    inputFile.addEventListener('change', (event) =>{
        const file = event.target.files[0];
        uploadFile(file).then(url => image.src = url);
    });
};

export const init = () =>{
    createInputFileHtml();
    events();
};