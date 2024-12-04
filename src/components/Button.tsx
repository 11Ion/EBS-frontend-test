import React from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({label, onClick, className}) => (
    <button onClick={onClick} className={`text-lg max-md:text-base font-medium text-black uppercase rounded-md px-3 py-2 w-full bg-green-400 hover:opacity-90 hover:scale-95 hover:duration-300 hover:transition-all ${className}`}>
        {label}
    </button>
)

export default Button;
