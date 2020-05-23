import Link from "next/link";
import AuthButton from "./AuthButton";
import "./Header.scss";
import { useFetchUser } from "../utils/user";

const Header = (props) => {
  const { user, loading } = useFetchUser();
  const loginButton = props.authButtons[0];
  const logoutButton = props.authButtons[1];

  return (
    <div className="Header">
      <Link href="/">
        <div className="AppTitle">{props.appTitle}</div>
      </Link>
      {user && !loading ? (
        <AuthButton
          key={logoutButton.path}
          path={logoutButton.path}
          label={logoutButton.label}
        />
      ) : null}
      {!user && !loading ? (
        <AuthButton
          key={loginButton.path}
          path={loginButton.path}
          label={loginButton.label}
        />
      ) : null}
    </div>
  );
};

export default Header;
