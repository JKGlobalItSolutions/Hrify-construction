import logo from "../assets/logo.png";

export default function Navbar({ onNavigate }) {
  const navStyle = {
    width: "100%",
    backgroundColor: "#0f2f3a",
    display: "flex",
    justifyContent: "center",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: "0 40px",
    color: "#fff",
    alignItems: "center",
  };

  const liStyle = {
    position: "relative",
    padding: "18px 16px",
    cursor: "pointer",
    fontSize: "18px",
      fontWeight: "500",
    whiteSpace: "nowrap",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#8fa1a7",
    minWidth: "280px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 1000,
  };

  const dropdownItem = {
    padding: "14px 18px",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  };

  const dropdownText = {
    padding: "14px 18px",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
    color: "#fff",
    fontSize: "18px",
    cursor: "default",
  };

  const handleNavClick = (page, event) => {
    if (event) {
      event.stopPropagation();
    }
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <>
      {/* TOP LOGO BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 40px",
          backgroundColor: "#ffffff",
        }}
      >
        <img src={logo} alt="Hrify Construction" style={{ height: "48px" }} />
        <div style={{ fontSize: "24px", cursor: "pointer" }}>☰</div>
      </div>

      {/* NAV MENU */}
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle} onClick={() => handleNavClick('home')}>Home</li>
          {/* <li style={liStyle} onClick={() => handleNavClick('homes')}>Homes</li>  */}
          <li style={liStyle} onClick={() => handleNavClick('about')}>About us</li>

          {/* SERVICES */}
          <li style={liStyle} className="dropdown"onClick={(e) => handleNavClick( 'Construction', e)} >
            Services
            <div style={dropdownStyle} className="dropdown-menu">
              <div style={dropdownItem} onClick={(e) => handleNavClick('civilstructural', e)}>
                Civil & Structural Engineering
              </div>
              <div style={dropdownItem} onClick={(e) => handleNavClick('publichealth', e)}>
                Public Health Engineering
              </div>
              <div style={dropdownItem} onClick={(e) => handleNavClick('fire', e)}>
                Fire & Life Safety System
              </div>
              <div style={dropdownItem} onClick={(e) => handleNavClick('electrical', e)}>
                Electrical Engineering
              </div>
              <div style={dropdownItem} onClick={(e) => handleNavClick('hvac', e)}>
                HVAC & Mechanical Engineering
              </div>
              <div style={dropdownItem} onClick={(e) => handleNavClick('green', e)}>
                Green Building Solutions
              </div>
            </div>
          </li>

          {/* INTERIOR & EXTERIOR */}
          

          {/* DESIGN */}
          <li style={liStyle} onClick={(e) => handleNavClick('designbuild', e)} className="dropdown">
            Design
            <div style={dropdownStyle} className="dropdown-menu">
              {/* <div style={dropdownItem} onClick={(e) => handleNavClick('designbuild', e)}>
                Design-Build
              </div> */}
              <div style={dropdownItem} onClick={(e) => handleNavClick('architectural', e)}>
                Architectural planning
              </div>
              <div style={dropdownItem} onClick={(e) => handleNavClick('interior', e)}>
                Interior layouts
              </div>
              <div style={dropdownItem} onClick={(e) => handleNavClick('structuralDesign', e)}>
                Structural Design Coordination
              </div>
            </div>
          </li>

          <li style={liStyle} onClick={() => handleNavClick('projects')}>Projects</li>
          <li style={liStyle} onClick={() => handleNavClick('infrastructure')}>Infrastructure</li>
          <li style={liStyle} onClick={() => handleNavClick('client')} >Clients</li>
          <li style={liStyle} onClick={() => handleNavClick('contact')}>Contacts</li>
        </ul>
      </nav>

      {/* INLINE HOVER LOGIC */}
      <style>
        {`
          .dropdown-menu {
            display: none;
          }
          .dropdown:hover .dropdown-menu {
            display: block;
          }
          ul li:hover {
            background-color: #143e4d;
          }
        `}
      </style>
    </>
  );
}
