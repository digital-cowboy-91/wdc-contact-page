import Link from "next/link";
import SearchBar from "./SearchBar";
import Socials from "./Socials";

export default function Footer() {
  const links1 = [
    {
      name: "Services",
      link: "https://www.wdc-creative.com/services",
    },
    {
      name: "Brand strategy",
      link: "https://www.wdc-creative.com/brand-strategy",
    },
    {
      name: "Interior design",
      link: "https://www.wdc-creative.com/interior-design",
    },
    {
      name: "Brand communications",
      link: "https://www.wdc-creative.com/brand-communications",
    },
    {
      name: "Web design",
      link: "https://www.wdc-creative.com/web-design",
    },
  ];

  const links2 = [
    {
      name: "About us",
      link: "https://www.wdc-creative.com/about-us",
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
      link: "https://www.wdc-creative.com/contact",
    },
    {
      name: "Privacy and Cookie Policy",
      link: "https://www.wdc-creative.com/privacy-and-cookies-policy",
    },
  ];

  return (
    <div
      id="footer"
      className="bg-primary text-background z-10 text-[13px] border-t-[9px] border-subtle"
    >
      <div className="flex justify-end pt-[40px] px-[25px]">
        <SearchBar />
      </div>
      <div className="max-w-[1200px] m-auto p-[60px] flex justify-between flex-wrap gap-[20px]">
        <div>
          <p>
            WDC Creative,
            <br />
            1st Floor, Studio 14,
            <br />
            14 Little Lever Street,
            <br />
            Manchester UK, M1 1HR
            <br />
            <br />
          </p>
          <a href="tel:+44(0)1618326111">+44(0)1618326111</a>
          <br />
          <a href="hello@wdc-creative.com">hello@wdc-creative.com</a>
        </div>
        <ul>
          {links1.map(({ name, link }) => (
            <li key={name}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
        <ul>
          {links2.map(({ name, link }) => (
            <li key={name}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
        <Socials className="max-md:grow justify-center" />
      </div>
    </div>
  );
}
