import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom"

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div>
      <Link to="signup">Signup <Link />
        <NavBar />
      {children}
    </div>;
};
