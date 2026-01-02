import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <main className="page">
      <div className="backdrop" aria-hidden="true" />
      <div className="matrix" aria-hidden="true" />

      <Navbar />
      <Hero />
    </main>
  );
}
