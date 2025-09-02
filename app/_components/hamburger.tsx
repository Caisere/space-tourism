"use client";

import { X, Menu } from "lucide-react";
import { useNavigationContent } from "../_contexts/navigationcontext";

function Hamburger() {
  const { isOpen, toggleIsOpen } = useNavigationContent();

  return (
    <button
      onClick={toggleIsOpen}
      className="p-2 hover:bg-white/10 rounded-full transition-colors"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <X className="w-6 h-6 text-white" />
      ) : (
        <Menu className="w-6 h-6 text-white" />
      )}
    </button>
  );
}

export default Hamburger;
