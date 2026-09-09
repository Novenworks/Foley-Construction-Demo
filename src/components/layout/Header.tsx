import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/92 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="group flex min-w-0 flex-col leading-none">
          <span className="font-display text-[1.65rem] font-semibold tracking-tight text-ink">
            Foley Construction
          </span>
          <span className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted">
            Fullerton · Design-Build
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="icon" className="sm:hidden" aria-label={`Call ${site.phoneDisplay}`}>
            <a href={site.phoneTel}>
              <Phone className="size-4" />
            </a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={site.phoneTel}>
              <Phone className="size-3.5" />
              {site.phoneDisplay}
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="font-display text-2xl">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-3 text-lg text-ink hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Button asChild className="mt-8 w-full" size="lg">
                <a href={site.phoneTel}>
                  <Phone className="size-4" />
                  Call {site.phoneDisplay}
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
