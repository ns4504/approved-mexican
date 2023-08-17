import React from "react";

const sizeClasses = {
  txtGaldeanoRegular20: "font-galdeano font-normal",
  txtKablammoRegularBloop25: "font-kablammo font-normal",
  txtGaldeanoRegular32: "font-galdeano font-normal",
  txtKablammoRegularBloop25Black900: "font-kablammo font-normal",
  txtGaldeanoRegular25: "font-galdeano font-normal",
  txtKablammoRegularBloop40: "font-kablammo font-normal",
  txtKablammoRegularBloop25Gray600: "font-kablammo font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
