// import { init } from "./js/joke-page";
// import { init } from "./js/user-page";
import * as UserCrud from './js/crud-user-provider';

UserCrud.getAllUsers().then(console.log);
UserCrud.getUserByID(2).then(console.log);
UserCrud.createUser({name: 'Ricardo', job: 'Developer'}).then(console.log);
UserCrud.updateUser(1, {name: 'Rosa', job: 'Nurse'}).then(console.log);
UserCrud.deleteUser(4).then(console.log);