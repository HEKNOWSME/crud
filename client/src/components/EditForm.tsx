import { ChangeEvent, useState } from "react";
import { UserData } from "../hooks/useUser";
interface Props {
	clickedUser: UserData;
	onUpdate: (userForm: UserData) => void;
}

const EditForm = ({ onUpdate, clickedUser }: Props) => {
	const [user, setUser] = useState<UserData>({
		email: clickedUser.email,
		name: clickedUser.name,
		role: clickedUser.role,
	});
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	return (
		<form className="p-4 bg-white shadow-md rounded border">
			<div className="mb-4">
				<label
					htmlFor="email"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					autoComplete="email"
					value={user.email}
					onChange={handleChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					required
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="name"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={user.name}
					onChange={handleChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					required
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="role"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					Role
				</label>
				<select
					id="role"
					name="role"
					value={user.role}
					onChange={handleChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					required
				>
					<option value="">Select a role</option>
					<option value="admin">Admin</option>
					<option value="user">User</option>
					<option value="guest">Guest</option>
				</select>
			</div>
			<div className="flex items-center justify-between">
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					onClick={(e) => {
                  e.preventDefault();
						onUpdate(user);
						setUser({ email: "", name: "", role: "" });
					}}
				>
					Edit User
				</button>
			</div>
		</form>
	);
};

export default EditForm;
