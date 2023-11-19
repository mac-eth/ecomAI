import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface StickyHeaderProps {
  scrollY?: number;
  activeClass?: string;
  defaultClass?: string;
  className?: string;
  children: ReactNode;
}

export function StickyHeader({
  scrollY = 100,
  activeClass = "",
  defaultClass = "",
  className = "",
  children,
}: StickyHeaderProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsActive(currentScrollPos > scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const headerClass = `astronav-sticky-header ${className} ${
    isActive ? activeClass : defaultClass
  }`;

  return <header className={headerClass}>{children}</header>;
}
