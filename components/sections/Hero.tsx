import { heroLinks, terminalLines } from "../../lib/data";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="terminal-wrap">
          <div className="terminal-title">
            <span className="chevron">{">"}</span>
            <span>Terminal</span>
          </div>

          <div className="terminal">
            <div className="terminal-body">
              {terminalLines.map((line) => (
                <p key={line} className="terminal-line">
                  {line}
                </p>
              ))}
            </div>
            <div className="terminal-prompt">
              <span className="prompt-user">visitor@rachna</span>
              <span className="prompt-sep">.</span>
              <span className="prompt-host">portfolio</span>
              <span className="prompt-path">:~$</span>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-links">
        <a className="pill primary" href={heroLinks[0].href}>
          {heroLinks[0].label}
        </a>
        {heroLinks.slice(1).map((item) => (
          <a key={item.label} className="pill" href={item.href}>
            <span>{item.label}</span>
            <span className="pill-arrow">{">"}</span>
          </a>
        ))}
      </section>
    </>
  );
}
