import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Link from "next/link";

interface Props {
  className?: string;
  direction?: "vertical" | "horizontal";
}

export default function Socials({
  className,
  direction = "horizontal",
}: Props) {
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
    <div
      className={`flex ${
        direction === "vertical" ? "flex-col" : ""
      } gap-[10px] ${className}`}
    >
      {socials.map(({ icon, link }) => {
        return (
          <Link key={icon} href={link} className="h-[30px] aspect-square">
            <Icon icon={icon} width="100%" height="100%" />
          </Link>
        );
      })}
    </div>
  );
}
