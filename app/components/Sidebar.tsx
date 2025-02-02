import { Icon } from "@iconify-icon/react";
import Link from "next/link";

export default function Sidebar() {
  const socials = [
    {
      icon: "entypo-social:linkedin-with-circle",
      link: "https://www.linkedin.com/company/wdc-creative",
    },
    {
      icon: "mage:instagram-circle",
      link: "https://www.instagram.com/wdc.creative/?hl=en",
    },
  ];

  return (
    <aside
      id="sidebar"
      className="w-[var(--sidebar-size)] fixed top-0 bottom-0 left-0 bg-background flex flex-col items-center justify-between py-[20px]"
    >
      <Link href="https://www.wdc-creative.com/">
        <img
          src="https://cdn.prod.website-files.com/5dfa188ac967d247add76ec4/673e476262a86522818bbfd5_logo-mono.svg"
          className="w-[20px]"
        />
      </Link>
      <div className="flex flex-col gap-[10px] text-primary">
        {socials.map(({ icon, link }) => {
          return (
            <Link key={icon} href={link} className="h-[30px] aspect-square">
              <Icon icon={icon} width="100%" height="100%" />
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
