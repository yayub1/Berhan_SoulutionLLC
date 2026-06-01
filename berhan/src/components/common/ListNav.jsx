import { NavLink } from "react-router-dom";

function ListNav({ items, className = "", onItemClick }) {
    return (
        <>
            {items.map((item) => (
                <li key={item.id}>
                    <NavLink
                        to={item.path}
                        onClick={onItemClick}
                        className={({ isActive }) =>
                            `
                            ${className}
                            px-4 py-2
                            rounded-md
                            transition-all duration-300

                            hover:bg-secondary
                            hover:text-primary
                            hover:shadow-md
                            hover:text-white

                            ${isActive
                                ? "bg-secondary text-primary shadow-md"
                                : "text-secondary"
                            }
                            `
                        }
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </>
    );
}

export default ListNav;