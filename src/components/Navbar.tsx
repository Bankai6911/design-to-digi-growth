import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
{ label: "Services", href: "#services" },
{ label: "About Us", href: "#about" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <a href="#" className="flex items-center gap-2 text-hero-foreground font-heading font-bold text-xl tracking-tight">AdMetaverse</a>
        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            <li key={l.href}>
              <a href={l.href} className="text-hero-foreground font-medium hover:text-cta transition-colors text-sm">
                {l.label}
              </a>
            </li>
          )}
        </ul>
        {/* Mobile dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden text-hero-foreground" aria-label="Toggle menu">
            <Menu size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-popover z-50">
            {navLinks.map((l) =>
              <DropdownMenuItem key={l.href} asChild>
                <a href={l.href} className="cursor-pointer">{l.label}</a>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;