import Link from "next/link";

export default function Navbar() {
  const links = [
    {
      name: "About us",
      link: "https://www.wdc-creative.com/about-us",
    },
    {
      name: "Services",
      link: "https://www.wdc-creative.com/services",
    },
    {
      name: "Work",
      link: "https://www.wdc-creative.com/our-work",
    },
    {
      name: "Sustainable design",
      link: "https://www.wdc-creative.com/sustainable-design",
    },
    {
      name: "Insights",
      link: "https://www.wdc-creative.com/insights",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];

  return (
    <div
      id="navbar"
      className="h-[70px] bg-primary text-background flex items-center justify-end ps-[var(--sidebar-size)] pe-[30px]"
    >
      <nav className="h-full flex items-center">
        {links.map(({ name, link }) => {
          return (
            <Link href={link} className="px-[13px]">
              {name}
            </Link>
          );
        })}
      </nav>
      <div className="h-full w-[215px] bg-[grey] flex items-center justify-center px-[13px] ms-[40px]">
        SEARCHBAR PLACEHOLDER
      </div>
    </div>
  );
}
