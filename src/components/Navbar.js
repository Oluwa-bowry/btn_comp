import React from "react";

export default function NavBar() {
  return (
    <header className="bg-gray-100 h-30 p-3 lg:mr-10 ">
      <h2 className="font-family Poppins">Devchanllenges.io</h2>
      <nav className=" font-semibold text-gray-400 ">
        <ul className="flex justify-center text-sm items-center space-x-2 lg:flex lg:flex-col lg:space-y-7 lg:px-8 lg:pt-14 lg:text-lg">
          <br />
          <li>Colors</li>
          {/* <li>Typography</li>
          <li>Spaces</li>
          <li>Buttons</li>         */}
          <li>Inputs</li>
          <li>Grid</li>
        </ul>
      </nav>
    </header>
  );
}