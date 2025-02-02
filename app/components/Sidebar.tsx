import Link from "next/link";
import Socials from "./Socials";

export default function Sidebar() {
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
      <Socials className="text-primary" direction="vertical" />
    </aside>
  );
}
