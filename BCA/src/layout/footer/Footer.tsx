import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
        &copy; {new Date().getFullYear()} ✅❤️ כל השטויות שמורות   |   מיקי
        <button>
        <Link to={"/users"}>Go Home! </Link>
      </button>
    </footer>
  );
}
