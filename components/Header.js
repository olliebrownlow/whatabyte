import Link from "next/Link";
import "./Header.scss";

const Header = (props) => (
  <Link href="/">
    <div className="Header">{props.appTitle}</div>
  </Link>
);

export default Header;
