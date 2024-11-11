import React, { useEffect, useState } from "react";

interface User {
	id?: string;
	username: string;
	email: string;
	age: number;
	img: string;
};
interface Props {
	children: React.ReactNode
};
interface UserProps {
	users: User[]
	setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const UserContext = React.createContext<UserProps>({
	users: [],
	setUsers: () => { }
})

const UserProvider = ({ children }: Props) => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		fetch('/data.json')
			.then((res) => res.json())
			.then((data) => setUsers(data))
			.catch((error) => console.error("Error fetching data", error));
	}, [])

	return (
		<>
			<UserContext.Provider value={{ users, setUsers }}>
				{children}
				
			</UserContext.Provider>
		</>
	)
}

export default UserProvider