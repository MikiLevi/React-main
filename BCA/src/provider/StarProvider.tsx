import { createContext, useState } from "react";

interface User {
	id?: string;
	username: string;
	email: string;
	age: number;
	img: string;
};

interface UserProps {
	stars: User[]
	setStars: React.Dispatch<React.SetStateAction<User[]>>;
};

interface Props {
	children: React.ReactNode
};

export const starContext = createContext<UserProps>({
	stars: [],
	setStars: () => { },
});

const StarProvider = ({ children }: Props) => {
	const [stars, setStars] = useState<User[]>([])

	return (
		<starContext.Provider value={{ stars, setStars }}>
			{children}
		</starContext.Provider>
	)
}

export default StarProvider