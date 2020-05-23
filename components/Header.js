import Link from "next/link";
import AuthButton from "./AuthButton";
import "./Header.scss";

const Header = (props) => (
  <div className="Header">
    <Link href="/">
      <div className="AppTitle">{props.appTitle}</div>
    </Link>
    {props.authButtons.map((button) => (
      <AuthButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </div>
);

export default Header;
