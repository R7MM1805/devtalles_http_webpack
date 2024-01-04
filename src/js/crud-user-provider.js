const baseURL = 'https://reqres.in/api/users';

const getAllUsers = async () => {
    try {
        const response = await fetch(`${baseURL}?page=1`);
        if(!response.ok) throw 'No se pudo realizar la petición';
        const {data} = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
const getUserByID = async (userID) => {
    try {
        const response = await fetch(`${baseURL}/${userID}`);
        if(!response.ok) throw 'No se pudo realizar la petición';
        const {data} = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
const createUser = async (user) => {
    try {
        const response = await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'CONTENT-TYPE':'application/json'
            }
        });
        if(!response.ok) throw 'No se pudo realizar la petición';
        return await response.json();
    } catch (error) {
        throw error;
    }
}
const updateUser = async (userID, user) => {
    try {
        const response = await fetch(`${baseURL}/${userID}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'CONTENT-TYPE':'application/json'
            }
        });
        if(!response.ok) throw 'No se pudo realizar la petición';
        return await response.json();
    } catch (error) {
        throw error;
    }
}
const deleteUser = async (userID) => {
    try {
        const response = await fetch(`${baseURL}/${userID}`, {
            method: 'DELETE',
            headers: {
                'CONTENT-TYPE':'application/json'
            }
        });
        return response.ok ? 'Usuario borrado' : 'No se pudo realizar la petición';
    } catch (error) {
        throw error;
    }
}

export{
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser
}