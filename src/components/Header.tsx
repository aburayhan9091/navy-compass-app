import bangladeshNavyLogo from "@/assets/bangladesh-navy-logo.png";

const Header = () => {
  return (
    <header className="navy-header w-full px-4 py-3 flex items-center justify-between shadow-lg">
      <h1 className="text-white font-bold text-lg md:text-xl">
        Bangladesh Navy
      </h1>
      <img 
        src={bangladeshNavyLogo} 
        alt="Bangladesh Navy Logo" 
        className="h-10 w-10 md:h-12 md:w-12 object-contain"
      />
    </header>
  );
};

export default Header;