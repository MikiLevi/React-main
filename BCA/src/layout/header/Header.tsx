import Link_nav_bar from "../../components/LinksNan";

export default function Header() {
  return (
    <>
      <header>
        <h1>Business card app</h1>
        <ul>
          <li className="li">
            <Link_nav_bar to="/" InnerText="Home" />
          </li>
          <li className="li">
            <Link_nav_bar to="/about" InnerText="About" />
          </li>
          <li className="li">
            <Link_nav_bar to="/display" InnerText="Display" />
          </li>
          <li className="li">
            <Link_nav_bar to="/login" InnerText="Login" />
          </li>
        </ul>
      </header>
    </>
  );
}
