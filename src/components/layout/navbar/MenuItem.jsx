import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";

const MenuItem = ({ item, depth = 0 }) => {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children?.length > 0;

  return (
    <li
      className="relative text-white"
      onMouseEnter={() => window.innerWidth >= 768 && setOpen(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setOpen(false)}
    >
      {/* Parent Item */}
      {hasChildren ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-4 py-2 font-semibold w-full"
          >
            {item.label}

            {depth === 0 ? (
              <FaChevronDown size={12} />
            ) : (
              <FaChevronLeft size={12} />
            )}
          </button>

          {/* Submenu */}
          <ul
            className={`
              ${
                depth === 0
                  ? "md:absolute md:top-full md:right-0"
                  : "md:absolute md:top-0 md:right-full"
              }

              ${open ? "block" : "hidden"}

              bg-[var(--text-primary)]
              border
              border-[var(--text-secondary)]
              shadow-xl
              rounded-xl
              min-w-[220px]
              z-50
            `}
          >
            {item.children.map((child) => (
              <MenuItem key={child.label} item={child} depth={depth + 1} />
            ))}
          </ul>
        </>
      ) : (
        <NavLink
          to={item.path}
          className="block px-4 py-2 text-white hover:text-[var(--brand-primary)]"
        >
          {item.label}
        </NavLink>
      )}
    </li>
  );
};

export default MenuItem;
