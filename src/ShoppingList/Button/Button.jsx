import React from "react";

const Button = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className="bg-white text-blue-500 border border-blue-500 p-2 rounded mt-auto"
		>
			{children}
		</button>
	);
};

export default Button;
