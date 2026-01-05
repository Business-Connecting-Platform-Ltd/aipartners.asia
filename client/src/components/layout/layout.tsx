import React from "react";
import { CenteredContainer } from "./centered-container";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto">
      <CenteredContainer>{children}</CenteredContainer>
    </div>
  );
}
