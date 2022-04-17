import Link from "next/link";

function NavBar({ children }) {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">eurielec</Link>
      </div>
      <div className="right-menu">
        <Link href="/events">Eventos</Link>
        <Link href="/people">Personas</Link>
        <Link href="/past_events">Últimos</Link>
      </div>
    </div>
  );
}

export default NavBar;
