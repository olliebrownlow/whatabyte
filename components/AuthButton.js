import Link from "next/link";

import "./AuthButton.scss";

const AuthButton = (props) => (
  <Link href={props.path}>
    <div className="AuthButton">
      <span className="Label">{props.label}</span>
    </div>
  </Link>
);

export default AuthButton;
