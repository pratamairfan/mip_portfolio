import React from "react";

const NavigationDot = ({ active }) => {
  return (
    <div className="app__navigation">
      {[
        "Home",
        "About",
        "Work",
        "Skills",
        // "Testimonials",
        "Contact",
      ].map((item) => (
        <a
          href={`#${item}`}
          key={`link-${item}`}
          className="app__navigation-dot"
          style={
            active === item
              ? { backgroundColor: "#313BAC" }
              : {}
          }
        />
      ))}
    </div>
  );
};

export default NavigationDot;
