// src/components/Button.jsx
const Button = ({ text, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
    >
      {text}
    </button>
  );
};

export default Button;
