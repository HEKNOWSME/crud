const Navigation = () => {
	return (
		<div className="h-10 bg-blue-500 text-slate-100 p-2 flex justify-between items-center border-b-teal-400">
			<h3 className="uppercase flex-1 text-center">
				Simple mern crud Application{" "}
			</h3>
			<div className="flex items-center gap-2">
				<span>Welcome</span>
				<span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-gray-200 to-gray-400"></span>
			</div>
		</div>
	);
};

export default Navigation;
