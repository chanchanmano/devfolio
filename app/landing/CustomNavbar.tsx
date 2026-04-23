import { Link, NavLink } from "react-router";
import { NAVBAR_SECTIONS } from "./constants";
import ThemeToggle from "./ThemeToggle";

function CustomNavbar() {
  return (
    <header className="topbar">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex flex-col">
            <span className="page-eyebrow">Aryan Hamine</span>
            <span className="text-2xl font-semibold tracking-[-0.08em] sm:text-3xl">
              aryan.dev
            </span>
          </Link>
          <div className="lg:hidden">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
          <nav className="flex gap-2 overflow-x-auto pb-1">
            {NAVBAR_SECTIONS.map((navbarElement) => (
              <NavLink
                key={navbarElement.link || "home"}
                to={navbarElement.link ? `/${navbarElement.link}` : "/"}
                end={!navbarElement.link}
                className={({ isActive }) =>
                  `nav-link whitespace-nowrap ${isActive ? "active" : ""}`
                }
              >
                {navbarElement.text}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default CustomNavbar;
