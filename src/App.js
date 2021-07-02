import  React, { Fragment, useState} from 'react';
import { UserList } from './components/Users/UserList';
import { AddUser } from './components/Users/AddUser';
import { v4 as uuidv4 } from 'uuid';


export function App(){
   const [userList, setUserList] = useState([]);

   const addUserhandler = (uName, uAge) => {
       setUserList((prevUsersList) => {
        return [...prevUsersList, {name: uName, age: uAge, id: uuidv4() }];
       });
   };
    return(
        <Fragment>
            <AddUser onAddUser={addUserhandler} />
            <UserList users={userList} />
        </Fragment>
    );
}