import MenuButton from "./MenuButton";
import { Flame, Wrench, Heart, Shield, BookOpen, Info } from "lucide-react";

const MainMenu = () => {
  const menuItems = [
    {
      icon: <Flame />,
      label: "Fire Fighting",
      path: "/fire-fighting"
    },
    {
      icon: <Wrench />,
      label: "Damage Control",
      path: "/damage-control"
    },
    {
      icon: <Heart />,
      label: "First Aid",
      path: "/first-aid"
    },
    {
      icon: <Shield />,
      label: "NBCD Marking",
      path: "/nbcd-marking"
    },
    {
      icon: <BookOpen />,
      label: "History of Bangladesh Navy",
      path: "/history"
    },
    {
      icon: <Info />,
      label: "About App",
      path: "/about"
    }
  ];

  return (
    <div className="w-full px-4 py-6">
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {menuItems.map((item, index) => (
          <MenuButton
            key={index}
            icon={item.icon}
            label={item.label}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default MainMenu;