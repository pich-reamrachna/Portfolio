import { sideLinks } from "../lib/data";

export default function Navbar() {
  return (
    <nav className="side-nav" aria-label="Section navigation">
      {sideLinks.map((item) => (
        <a key={item.label} className="side-link" href={item.href}>
          <span className="side-icon">{item.icon}</span>
        </a>
      ))}
    </nav>
  );
}
