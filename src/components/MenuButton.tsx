import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface MenuButtonProps {
  icon: ReactNode;
  label: string;
  path: string;
}

const MenuButton = ({ icon, label, path }: MenuButtonProps) => {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate(path);
  };

  return (
    <button
      onClick={handlePress}
      className="menu-button h-24 md:h-28"
    >
      <div className="mb-2 text-2xl md:text-3xl text-navy-primary">
        {icon}
      </div>
      <span className="text-xs md:text-sm font-semibold text-navy-primary text-center leading-tight">
        {label}
      </span>
    </button>
  );
};

export default MenuButton;