import Link from "next/link";

export default function MenuItems() {
  const mobileMenu = [
    {
      title: "Dashboard",
      link: "/",
    },
    {
      title: "Projects",
      link: "/projects",
    },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="md:flex hidden">
        <button className="primary md:flex hidden">
          <span className="truncate">New Project</span>
        </button>
        <button className="gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
          </svg>
        </button>
        <button className="gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
          </svg>
        </button>
      </div>

      {/* Mobile */}
      <div className="accordion md:hidden flex flex-col shadow-md text-[#111418] font-medium text-md">
        {mobileMenu.map((item, index) => (
          <Link
            className={`"w-full ${
              index === mobileMenu.length - 1 ? `border-b-0` : ``
            }`}
            key={index}
            href={item.link}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
}
