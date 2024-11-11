import { Link, NavLink } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import { useContext, useState } from "react"
import { UserContext } from "../provider/UserProvider"

interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}

const DisplayUsers2 = () => {
  const { users, setUsers } = useContext(UserContext)
  const [star, setStar] = useState<User[]>([])

  return (
    <>
      <PageHeader title="From Context" subtitle="" />
      <NavLink to={"/users/adduser"} className="add-user-link">
        Add user
      </NavLink>
      <div className="card-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.img}
              alt={`${user.username}'s avatar`}
              className="user-avatar" />
            <div className="user-info">
              <h3>User Name: {user.username}</h3>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
            </div>
            <button className="edit" onClick={() => {
              setUsers(users.filter((prevUsers) => prevUsers.id !== user.id))
            }}>Delete</button>
            <button className="edit"><Link to={`/users/edit/${user.id}`}>Edit</Link></button>
            <button onClick={() => { }}>Add Star</button>

          </div>
        ))}
      </div>
    </>
  )
}

export default DisplayUsers2