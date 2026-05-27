import { Search } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { primaryNavigation } from "@/lib/navigation";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q")?.trim() ?? "";
  const [term, setTerm] = useState(query);

  const results = useMemo(() => {
    const normalizedQuery = query.toLowerCase();

    if (!normalizedQuery) {
      return primaryNavigation;
    }

    return primaryNavigation.filter((item) => {
      const searchableText = [
        item.label,
        item.eyebrow,
        item.title,
        item.intro,
        item.cta,
        ...item.sections.flatMap((section) => [section.title, section.body]),
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuery = term.trim();
    navigate(nextQuery ? `/search?q=${encodeURIComponent(nextQuery)}` : "/search");
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-mulish text-cipfa-dark">
      <SiteHeader />

      <main className="px-6 py-12 md:px-[72px] md:py-16">
        <div className="max-w-4xl">
          <p className="font-nunito text-sm font-black uppercase tracking-wide text-cipfa-purple">
            Site search
          </p>
          <h1 className="mt-3 max-w-full break-words font-mulish text-4xl font-extralight leading-[110%] md:text-[56px]">
            {query ? `Results for "${query}"` : "Search CIPFA"}
          </h1>

          <form onSubmit={submitSearch} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="search-page-input" className="sr-only">
              Search term
            </label>
            <input
              id="search-page-input"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
              className="min-h-[52px] min-w-0 flex-1 border border-cipfa-grey px-4 font-mulish text-base outline-none focus:border-cipfa-purple"
              placeholder="Search by topic, sector, or service"
            />
            <button
              type="submit"
              className="flex min-h-[52px] items-center justify-center gap-2 bg-cipfa-purple px-6 font-mulish text-sm font-black uppercase tracking-wide text-white transition hover:bg-cipfa-dark"
            >
              Search
              <Search size={18} aria-hidden="true" />
            </button>
          </form>
        </div>

        <section className="mt-12 grid gap-5">
          {results.length > 0 ? (
            results.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group border-t border-cipfa-grey py-6 transition hover:border-cipfa-purple"
              >
                <p className="font-nunito text-xs font-black uppercase tracking-wide text-cipfa-purple">
                  {item.eyebrow}
                </p>
                <h2 className="mt-2 font-mulish text-2xl font-bold leading-tight group-hover:text-cipfa-purple md:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-3xl font-mulish text-base leading-[150%] text-cipfa-neutral">
                  {item.intro}
                </p>
              </Link>
            ))
          ) : (
            <div className="border-t border-cipfa-grey py-8">
              <h2 className="font-mulish text-2xl font-bold">No results found</h2>
              <p className="mt-3 max-w-2xl text-cipfa-neutral">
                Try a broader phrase such as finance, training, membership, sectors, or governance.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
