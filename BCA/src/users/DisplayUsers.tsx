import { useState } from "react";
import { NavLink } from "react-router-dom";

interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}

interface Props {
  users: User[];
  deleteUser: (username: string) => void;
  updateUser: (user: User) => void;
  addNewStar: (user: User) => void;
}

export default function DisplayUsers({ users, deleteUser, updateUser, addNewStar, }: Props) {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <NavLink to={"/users/adduser"} className="add-user-link">
        Add user
      </NavLink>

      <div className="card-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img
              src={user.img}
              alt={`${user.username}'s avatar`}
              className="user-avatar"
            />
            <div className="user-info">
              <h3>{user.username}</h3>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
            </div>
            <div className="user-actions">
              <button onClick={() => { updateUser(user); }} >
                <NavLink to={`/users/edit/${user.id}`}>Edit</NavLink>
              </button>
              <button onClick={() => { deleteUser(user.username); }} className="star-button">
                Delelte
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
