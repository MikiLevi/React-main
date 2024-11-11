// import { useContext, useEffect, useState } from "react";
// import { v4 } from "uuid";
// import NewUser from "./NewUser";
// import DisplayUsers from "./DisplayUsers";
import { Route, Routes } from "react-router-dom";
import EditUser from "./EditUser";
// import ErrrorPages from "../pages/ErrrorPages";
// import Login from "../pages/Login";
// // import { UserContext } from "../provider/UserProvider";

// interface User {
//   id?: string;
//   username: string;
//   email: string;
//   age: number;
//   img: string;
// }

export default function Users() {
  // const { users, setUsers } = useContext(UserContext)
  // const [stars, setStars] = useState<User[]>([]);
  // const [user, setuser] = useState<User>();

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((response) => response.json())
  //     .then((data) => setusers(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // const addNewUser = (newUser: User) => {
  //   newUser.id = v4();
  //   setUsers([...users, newUser]);
  // };

  // const deleteUser = (id: string) => {
  //   setUsers(users.filter((user) => user.id !== id));
  // };



  // const updateSetUser = (user: User) => {
  //   setuser(user);
  // };

  // const addNewStar = (newStar: User) => {
  //   setStars([...stars, newStar]);
  // };
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<DisplayUsers
          users={users}
          deleteUser={deleteUser}
          updateUser={updateSetUser}
          addNewStar={addNewStar}
        />
        }
        /> */}
        {/* <Route path="/adduser" element={<NewUser addUser={addNewUser} />} /> */}
        <Route path="/edit/:id" element={<EditUser />} />
        {/* <Route path="*" element={<ErrrorPages />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}
