import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}
const Alert = ({ children }: Props) => {
	return (
		<div className="flex justify-end">
			<div className="max-w-56 bg-red-500 rounded p-2 text-white">
				{children}
			</div>
		</div>
	);
};

export default Alert;
