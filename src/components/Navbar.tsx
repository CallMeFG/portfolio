import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-transparent" color-on-scroll="100">
      <div className="container">
        <div className="navbar-translate">
          <Link href="/" className="navbar-brand">
            <span>FATHUR RIZKY ASSANI</span>
          </Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="#skills" className="nav-link">
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
