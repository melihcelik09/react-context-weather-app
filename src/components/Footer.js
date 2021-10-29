import React from "react";

function Footer() {
  return (
    <footer
      className="
             text-white text-center
             fixed
             inset-x-0
             bottom-0
             hidden md:block"
    >
      <p>{"© " + new Date().getFullYear() + " All Rights Reserved "}</p>
      <a
        className="text-decoration-none"
        href="https://github.com/melihcelik09"
      >
        @melihcelik
      </a>
    </footer>
  );
}

export default Footer;
