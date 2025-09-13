import { Link } from "react-router";
import styles from "./styles.module.css";
import classNames from "classnames/bind";
import { NAVBAR_SECTIONS } from "./constants";

const cx = classNames.bind(styles);

function CustomNavbar() {
  return (
    <div className="mt-8 flex justify-between align-middle items-center">
      <div>
        <Link to={"/"}>
          <h1 className="text-3xl">aryan.dev</h1>
        </Link>
      </div>
      <div className="flex justify-between items-center space-x-24">
        {NAVBAR_SECTIONS.map((navbarElement, index) => {
          return (
            <Link
              key={`${index}-${navbarElement?.text}`}
              to={`/${navbarElement?.link}`}
            >
              <h1 className={`${cx("navbar-elements")} text-2xl`}>
                {navbarElement?.text}
                <div className={`${cx("navbar-elements")}`}></div>
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CustomNavbar;
