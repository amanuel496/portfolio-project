import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>
          Hi! My name is Amanuel Chukala, a current Senior studendt and an
          aspiring Software Engineer
        </h1>
        <Typed
          className="typed-text"
          strings={[
            '"Do it"',
            '"Do it right"',
            '"Do it right now" - Bobby Riggs'
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;