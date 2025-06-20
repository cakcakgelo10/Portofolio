import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <aside className="...">
      ...
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 hover:text-gray-300"
      >
        <FaSignOutAlt /> Logout
      </button>
    </aside>
  );
}
