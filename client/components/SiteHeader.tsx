import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { primaryNavigation, utilityNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  variant?: "hero" | "solid";
};

export function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHero = variant === "hero";

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    searchInputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = searchTerm.trim();

    if (!query) {
      searchInputRef.current?.focus();
      return;
    }

    navigate(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <>
      <header
        className={cn(
          "z-30 flex h-[72px] items-center justify-between px-6 md:px-[72px]",
          isHero
            ? "absolute left-0 right-0 top-0 text-white"
            : "sticky top-0 border-b border-white/10 bg-cipfa-dark text-white shadow-lg shadow-black/10",
        )}
      >
        <Link to="/" className="flex shrink-0 items-center" aria-label="CIPFA home">
          <span className="font-nunito text-2xl font-black tracking-tight text-white">
            CIPFA
            <span className="font-light text-cipfa-green">\</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 font-nunito text-sm font-bold uppercase tracking-wide transition-colors hover:text-cipfa-green",
                  isActive ? "text-cipfa-green" : "text-white",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex min-w-0 shrink-0 items-center gap-1 md:gap-2">
          <button
            type="button"
            className="flex size-11 items-center justify-center text-white transition-colors hover:text-cipfa-green"
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen(true)}
          >
            <Search aria-hidden="true" size={24} strokeWidth={2.25} />
          </button>

          <Link
            to="/join"
            className="hidden px-4 py-3 font-nunito text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-cipfa-green md:flex"
          >
            Join Now
          </Link>
          <Link
            to="/login"
            className="hidden px-4 py-3 font-nunito text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-cipfa-green md:flex"
          >
            Member Login
          </Link>
          <button
            type="button"
            className="flex size-11 items-center justify-center text-white transition-colors hover:text-cipfa-green"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" size={30} /> : <Menu aria-hidden="true" size={32} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-cipfa-dark text-white" role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-6 md:px-[72px]">
            <Link to="/" className="font-nunito text-2xl font-black tracking-tight">
              CIPFA<span className="font-light text-cipfa-green">\</span>
            </Link>
            <button
              type="button"
              className="flex size-11 items-center justify-center text-white transition-colors hover:text-cipfa-green"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X aria-hidden="true" size={30} />
            </button>
          </div>

          <div className="grid max-h-[calc(100vh-72px)] overflow-y-auto px-6 py-8 md:px-[72px] lg:grid-cols-[1.5fr_0.8fr] lg:gap-16 lg:py-14">
            <nav className="grid gap-4 sm:grid-cols-2" aria-label="Expanded navigation">
              {primaryNavigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "group border-t border-white/15 py-5 transition-colors hover:border-cipfa-green",
                      isActive && "border-cipfa-green",
                    )
                  }
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-mulish text-2xl font-light leading-tight md:text-[34px]">{item.label}</span>
                    <ArrowRight className="shrink-0 text-cipfa-green transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                  <span className="mt-3 block max-w-md font-mulish text-sm leading-[150%] text-cipfa-grey">
                    {item.intro}
                  </span>
                </NavLink>
              ))}
            </nav>

            <aside className="mt-10 border-t border-white/15 pt-6 lg:mt-0">
              <p className="font-nunito text-sm font-bold uppercase tracking-wide text-cipfa-green">
                Quick links
              </p>
              <div className="mt-5 grid gap-3">
                {utilityNavigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center justify-between border-b border-white/10 py-4 font-mulish text-lg transition-colors hover:text-cipfa-green"
                  >
                    {item.label}
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                ))}
              </div>
              <button
                type="button"
                className="mt-8 flex w-full items-center justify-between bg-white px-5 py-4 text-left font-mulish font-bold text-cipfa-dark transition hover:bg-cipfa-green"
                onClick={() => {
                  setMenuOpen(false);
                  setSearchOpen(true);
                }}
              >
                Search the site
                <Search size={20} aria-hidden="true" />
              </button>
            </aside>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-cipfa-dark/95 px-6 py-6 text-white md:px-[72px]" role="dialog" aria-modal="true" aria-label="Site search">
          <div className="mx-auto flex max-w-5xl justify-end">
            <button
              type="button"
              className="flex size-11 items-center justify-center transition-colors hover:text-cipfa-green"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
            >
              <X aria-hidden="true" size={30} />
            </button>
          </div>

          <form onSubmit={submitSearch} className="mx-auto mt-12 flex max-w-5xl flex-col gap-6">
            <label htmlFor="site-search" className="font-mulish text-3xl font-light leading-tight md:text-[56px]">
              Search CIPFA
            </label>
            <div className="flex flex-col gap-4 border-b border-white/30 pb-5 sm:flex-row sm:items-center">
              <input
                id="site-search"
                ref={searchInputRef}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="min-w-0 flex-1 bg-transparent font-mulish text-2xl text-white outline-none placeholder:text-white/50 md:text-4xl"
                placeholder="What are you looking for?"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-cipfa-green px-6 py-4 font-mulish text-sm font-black uppercase tracking-wide text-black transition hover:brightness-110"
              >
                Search
                <Search size={18} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
