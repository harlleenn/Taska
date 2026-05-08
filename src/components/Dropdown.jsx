import { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
      {isOpen && (
        <ul className="dropdown-menu bg-slate-500">
          <li onClick={() => setIsOpen(false)}>Profile</li>
          <li onClick={() => setIsOpen(false)}>Settings</li>
          <li onClick={() => setIsOpen(false)}>Logout</li>
        </ul>
      )}
    </div>
  );
}