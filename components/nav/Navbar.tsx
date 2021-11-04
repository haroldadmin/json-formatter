import NavItem from "./NavItem";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container flex items-center justify-start p-6 mx-auto text-gray-600 capitalize">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
