import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link href="/">
          <a style={{ color: "red" }}>Home</a>
        </Link>
        <Link href="/user">
          <a>User</a>
        </Link>
        <Link href="/contactForm">
          <a>Contact Form</a>
        </Link>
        <Link href="/app">
          <a>App</a>
        </Link>
        <Link href="/pic">
          <a>Picture</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
