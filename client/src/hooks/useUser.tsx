import { useState } from "react";
export interface UserData {
	email: string;
	name: string;
	role: string;
}

function useUser() {
	const [user, setUser] = useState<UserData>({
		email: "",
		name: "",
		role: "",
	});
	return { user, setUser };
}

export default useUser;
