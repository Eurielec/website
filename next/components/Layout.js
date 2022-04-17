import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
