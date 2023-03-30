"use client";

import { useState } from "react";
import Menu from "./menu";
import { usePathname } from "next/navigation";

export default function Header() {
  let [menu, toggleMenu] = useState(false);
  let path = usePathname();

  return (
    <header className="bg-wallpaper py-4">
      <Menu />
    </header>
  );
}
