import React from "react";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <a href="/" className="item">
        Accordion
      </a>
      <a href="/dropdown" className="item">
        Dropdown
      </a>
      <a href="/search" className="item">
        Search
      </a>
    </div>
  );
};

export default Header;
