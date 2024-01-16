const jokeURL = 'https://api.chucknorris.io/jokes/random';
const cloudURL = 'https://api.cloudinary.com/v1_1/ddc8s5qf9/upload';
const cloudPreset = 'b9opueiz';

const getJoke = async () => {
    try {
        const response = await fetch(jokeURL);
        if(!response.ok) throw 'No se pudo realizar la petición';
        const { icon_url, id, value } = await response.json();
        return { icon_url, id, value }; 
    } catch (error) {
        throw error;
    }
}

const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', file);
    try{
        const response = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        });
        if(response.ok){
            const cloudResponse = await response.json();
            return cloudResponse.secure_url;
        }else{
            throw await response.json();
        }
    } catch(error){
        throw error;
    }
}

export {
    getJoke,
    uploadFile
}