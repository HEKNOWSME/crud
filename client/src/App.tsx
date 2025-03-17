import { useEffect, useState } from "react";
import EditForm from "./components/EditForm";
import Form from "./components/Form";
import Navigation from "./components/Navigation";
import UserTable from "./components/UserTable";
import usersDummy from "./dummy/users";
import useUser, { UserData } from "./hooks/useUser";
import Alert from "./shared/Alert";

const App = () => {
	const [users, setUsers] = useState<UserData[]>(usersDummy);
	const { user, setUser } = useUser();
	const [showEdit, setEdit] = useState<boolean>(false);
	const [showAlert, setAlert] = useState({ title: "", show: false });
	useEffect(() => {
		setTimeout(() => {
			setAlert({ show: false, title: "" });
		}, 3000);
	}, [showAlert.show]);
	const handleSubmit = (data: UserData) => {
		if (data.email === "" || data.name === "" || data.role === "")
			return setAlert({ show: true, title: "Please Enter All Fields" });
		setUsers([...users, data]);
	};

	const handleEdit = (user: UserData) => {
		setUser(user);
		setEdit(true);
	};

	const handleDelete = (email: string) => {
		setUsers(users.filter((user) => user.email !== email));
		setAlert({ show: true, title: "Successful deleted" });
	};
	const handleUpdate = (updatedUser: UserData) => {
		if (
			updatedUser.email === "" ||
			updatedUser.name === "" ||
			updatedUser.role === ""
		)
			return setAlert({ show: true, title: "No field To be Empty" });
		setUsers(users.map((u) => (u.email === user.email ? updatedUser : u)));
		setEdit(false);
	};

	return (
		<div className="">
			<Navigation />
			<div className="container mx-auto p-4">
				{showAlert.show && <Alert>{showAlert.title}</Alert>}
				{showEdit ? (
					<EditForm onUpdate={handleUpdate} clickedUser={user} />
				) : (
					<Form onSubmit={handleSubmit} />
				)}
				<UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
			</div>
		</div>
	); 
};

export default App;
