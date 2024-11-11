import { Link } from "react-router-dom"

const Login = () => {
	return (
		<div>
			<form>
				<div className="">
					<label htmlFor="username">User Name:</label>
					<input id="username" type="text" />
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input id="password" type="text" />
				</div>
				<Link to={'/display'}><button className="login" type="submit">Submit👉</button></Link>

			</form>
		</div>
	)
}

export default Login