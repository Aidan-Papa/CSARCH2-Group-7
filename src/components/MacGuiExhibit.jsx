import { useState } from "react";

function themeToCssVars(theme) {
  if (!theme) return undefined;
  return {
    "--main-bg-color": theme.mainBg,
    "--main-bg-image": theme.mainBgImage,
    "--header-bg": theme.headerBg,
    "--header-border-style": theme.headerBorderStyle,
  };
}

export default function MacGuiExhibit({ appleLogoSrc, eras }) {
  const [activeId, setActiveId] = useState(eras[0]?.id);
  const active = eras.find((era) => era.id === activeId) ?? eras[0];

  return (
    <div className="main-container" style={themeToCssVars(active.theme)}>
      <header className="header">
        <div className="header-left">
          <img src={appleLogoSrc} alt="Apple Logo" className="apple-logo-img" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>History of Macintosh Computer GUIs</span>
            <div><h3>Read Time: 20 minutes</h3></div>
          </div>
        </div>
        <div className="header-right">
          <div>S05 Group 7</div>
          <div>Aguirre, Ching, Cruz, Guarin, Papa</div>
        </div>
      </header>

      <div className="workspace">
        <nav className="sidebar">
          {eras.map((era) => (
            <button
              key={era.id}
              type="button"
              className={era.id === activeId ? "active" : ""}
              onClick={() => setActiveId(era.id)}
            >
              {era.navLabel}
            </button>
          ))}
        </nav>

        <main className="content-window">
          <div className="window-header">{active.title}</div>
          <div className="window-body">
            {active.body.map((block, index) => {
              if (block.type === "img") {
                return (
                  <div key={index}>
                    <img src={block.src} alt={block.alt} className="body-img" />
                    <h5>{block.caption}</h5>
                  </div>
                );
              }
              if (block.type === "placeholder") {
                return (
                  <p key={index} className="placeholder-note">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "subheading") {
                return (
                  <p key={index} className="subheading">
                    {block.text}
                  </p>
                );
              }
              return <p key={index}>{block.text}</p>;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
