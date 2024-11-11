import { useContext } from "react"
import { starContext } from "../provider/StarProvider"

export const StarsUsers = () => {

  const { stars, setStars } = useContext(starContext)

  return (
    <>
      <h1>My Stars⭐✨🌠🌟</h1>
      <div className="card-list">
        {stars.map((star) => (
          <div key={star.id} className="card">
            <h3>User Name: {star.username}</h3>
            <p>Email: {star.email}</p>
            <p>Age: {star.img}</p>
            <img src={star.img} alt={star.username} />
            <button>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default StarsUsers