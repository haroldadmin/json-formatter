import { useRouter } from "next/dist/client/router";
import Link from "next/link";

interface NavItemProps {
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const { asPath } = useRouter();

  return isActive(href, asPath) ? (
    <ActiveNavItem href={href}>{children}</ActiveNavItem>
  ) : (
    <InactiveNavItem href={href}>{children}</InactiveNavItem>
  );
};

const ActiveNavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="text-gray-800 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
        {children}
      </a>
    </Link>
  );
};

const InactiveNavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6">
        {children}
      </a>
    </Link>
  );
};

function isActive(href: string, asPath: string): boolean {
  return asPath.startsWith(href);
}

export default NavItem;
