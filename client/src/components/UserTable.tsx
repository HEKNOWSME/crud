import { UserData } from "../hooks/useUser";

interface Props {
	users: UserData[];
	onEdit: (user: UserData) => void;
	onDelete: (email: string) => void;
}

const UserTable: React.FC<Props> = ({ users, onEdit, onDelete }) => {
	if (users.length === 0) {
		return <p className="text-center mt-3">No users found</p>;
	}
	return (
		<div className="overflow-x-auto mt-3 rounded">
			<table className="min-w-full bg-white border border-gray-200">
				<thead className="bg-slate-100">
					<tr>
						<th className="py-2 px-4 border-b text-left">Email</th>
						<th className="py-2 px-4 border-b text-left">Name</th>
						<th className="py-2 px-4 border-b">Role</th>
						<th className="py-2 px-4 border-b">Actions</th>
					</tr>
				</thead>
				<tbody className="border-b-2">
					{users.map((user) => (
						<tr key={user.email}>
							<td className="py-2 px-4 border-b">{user.email}</td>
							<td className="py-2 px-4 border-b">{user.name}</td>
							<td className="py-2 px-4 border-b text-center">{user.role}</td>
							<td className="py-2 px-4 border-b flex justify-center">
								<button
									type="button"
									onClick={() => onEdit(user)}
									className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
								>
									Edit
								</button>
								<button
									type="button"
									onClick={() => onDelete(user.email)}
									className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default UserTable;
