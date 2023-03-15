import React from "react";
import { Logo } from "../atoms";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-Logo">
        <Logo />
      </div>
      <h2 className="Footer-Copyright">All Reserved Estudio Moriel</h2>
    </footer>
  );
};
