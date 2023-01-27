import React from "react";

const Button = ({ title, icon, data_aos }) => {
  return (
    <button className="btn" data-aos={data_aos}>
      {title} {icon}
    </button>
  );
};

export default Button;
