import React from "react";
import { Outlet } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";
export default function Root() {
  useScrollToTop();

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <a href={`contacts`}>Your Name</a>
            </li>
            <li>
              <a href={`abouts`}>Your Friend</a>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
