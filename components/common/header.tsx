"use client";

import { useState } from "react";

interface NavItem {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
  desktopOnly?: boolean;
  mobileOnly?: boolean;
  desktopRight?: boolean;
}

const navItems: NavItem[] = [
  { id: "home", label: "HOME" },
  { id: "events", label: "EVENTS" },
  { id: "releases", label: "MUSIC" },
  { id: "merch", label: "MERCH" },
  {
    id: "hilomatik",
    label: "HILOMATIK",
    href: "https://oliverheldensshop.com/collections/hilomatik",
    external: true,
    desktopOnly: true,
  },
  {
    id: "shop-mobile",
    label: "SHOP",
    href: "https://oliverheldensshop.com/",
    external: true,
    mobileOnly: true,
  },
  { id: "contact", label: "CONTACT", desktopRight: true },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const renderLinkContent = (item: NavItem, isMobile = false) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      if (isMobile) {
        setIsMobileMenuOpen(false);
      }
    };
    const commonClasses = isMobile
      ? "block py-2 px-3 bg-gray-500/30 rounded"
      : "block py-2 px-3 hover:text-gray-300 rounded md:p-0 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={commonClasses}
        >
          {item.label}
        </a>
      );
    }

    // Use anchor tag for internal navigation
    return (
      <a
        href={`#${item.id}`}
        className={commonClasses}
        onClick={handleClick}
      >
        {item.label}
      </a>
    );
  };

  const desktopNavItems = navItems.filter((item) => !item.mobileOnly);
  const mobileNavItems = navItems.filter((item) => !item.desktopOnly);

  const desktopLeftItems = desktopNavItems.filter(
    (item) => !item.desktopRight && !item.external
  );

  const desktopRightItems = desktopNavItems.filter(
    (item) => item.desktopRight || item.external
  );

  return (
    <nav className="fixed lg:h-14 lg:backdrop-blur-md w-full z-50 top-0 left-0">
      <div className="hidden lg:flex items-center justify-between mx-auto p-4">
        <ul className="flex flex-col top-0 text-white text-xl z-50 md:flex-row p-0 md:space-x-4 font-medium text-center bg-opacity-90 backdrop-blur-md md:rounded-lg">
          {desktopLeftItems.map((item: NavItem) => (
            <li className="hover:cursor-pointer" key={item.id}>{renderLinkContent(item)}</li>
          ))}
        </ul>

        <ul className="flex flex-col text-xl md:flex-row p-0 text-white font-medium rounded-lg md:space-x-4 ml-auto">
          {desktopRightItems.map((item: NavItem) => (
            <li className="hover:cursor-pointer" key={item.id}>{renderLinkContent(item)}</li>
          ))}
        </ul>
      </div>

      <div className="lg:hidden flex justify-end p-4">
        <button
          onClick={toggleMobileMenu}
          className="flex items-center px-3 py-2 text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
            <div className="flex h-screen flex-col items-center justify-center w-full absolute bg-black/70 text-white">
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-white"
              >
                <svg
                  className="h-8 w-8 m-10 mr-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <ul className="text-center text-2xl space-y-4">
                {mobileNavItems.map((item: NavItem) => (
                  <li key={item.id}>{renderLinkContent(item, true)}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}