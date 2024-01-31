import React from "react";
import NavLink, { NavLinkType } from "./NavLink";

interface NavLinksType {
  links: NavLinkType[];
}

export default function MobileMenu({ links }: NavLinksType) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
