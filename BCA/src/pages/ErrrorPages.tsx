import { Link } from "react-router-dom"

const ErrrorPages = () => {
  return (
	<div>
		<h2>404</h2>
		<button>
			<Link to={"/users"}>Back To Home </Link>
		</button>
	</div>
  )
}

export default ErrrorPages