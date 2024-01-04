import { getAllUsers } from "./crud-user-provider";

const body = document.body;
let tbodyUser;
let count = 1;

const createUserHTML = () => {
    const html =`
    <h1 class="mt-5">Users</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Mail</th>
                <th scope="col">Name</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody id='tbodyUser'>
        </tbody>
    </table>
    `;
    const dvUser = document.createElement('div');
    dvUser.innerHTML = html;
    body.append(dvUser);
}

const createEvents = async () => {
    tbodyUser = document.querySelector('#tbodyUser');
    const users = await getAllUsers();
    if(users != null && users.length > 0){
        for (let index = 0; index < users.length; index++) {
            addRowUser(users[index]);
            count++;
        }
    }
}

const addRowUser = (user) => {
    const html = `
        <td scope="col"> ${count} </td>
        <td scope="col"> ${user.email} </td>
        <td scope="col"> ${user.first_name} ${user.last_name}</td>
        <td scope="col">
            <img class="img-thumbnail" src="${user.avatar}">
        </td>
    `;
    const trBody = document.createElement('tr');
    trBody.innerHTML = html;
    tbodyUser.append(trBody);
}

const init = async () => {
    createUserHTML();
    await createEvents();
}

export {
    init
}