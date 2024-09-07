import Link from "next/link";


const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 shadow-md z-50 py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">home</Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-gray-300">skills</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-300">projects</Link>
          </li>
          <li>
            <Link href="/experiences" className="hover:text-gray-300">experience</Link>
          </li>
        </ul>
      </nav>
    
    </header>
  );
};

export default Header;

