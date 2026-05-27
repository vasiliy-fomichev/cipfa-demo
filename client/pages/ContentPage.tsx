import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { primaryNavigation, SitePage } from "@/lib/navigation";

type ContentPageProps = {
  page: SitePage;
};

export default function ContentPage({ page }: ContentPageProps) {
  const relatedPages = primaryNavigation.filter((item) => item.path !== page.path).slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-mulish text-cipfa-dark">
      <SiteHeader />

      <main>
        <section className="bg-cipfa-dark px-6 pb-16 pt-16 text-white md:px-[72px] md:pb-24 md:pt-24">
          <div className="max-w-4xl">
            <p className="mb-5 font-nunito text-sm font-black uppercase tracking-wide text-cipfa-green">
              {page.eyebrow}
            </p>
            <h1 className="max-w-full break-words font-mulish text-4xl font-extralight leading-[110%] md:text-[64px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl break-words font-mulish text-lg leading-[145%] text-white/85 md:text-2xl">
              {page.intro}
            </p>
          </div>
        </section>

        <section className="px-6 py-14 md:px-[72px] md:py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            {page.sections.map((section) => (
              <article key={section.title} className="border-t-4 border-cipfa-green pt-6">
                <h2 className="font-mulish text-2xl font-bold leading-[120%]">
                  {section.title}
                </h2>
                <p className="mt-4 font-mulish text-base leading-[150%] text-cipfa-neutral">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-cipfa-grey px-6 py-14 md:px-[72px] md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <p className="font-nunito text-sm font-black uppercase tracking-wide text-cipfa-purple">
                Keep exploring
              </p>
              <h2 className="mt-3 font-mulish text-3xl font-extralight leading-[115%] md:text-[44px]">
                More ways to work with CIPFA
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {relatedPages.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group flex min-h-[170px] flex-col justify-between bg-white p-5 transition hover:bg-cipfa-green"
                >
                  <span className="font-mulish text-xl font-bold leading-tight text-cipfa-dark">
                    {item.label}
                  </span>
                  <span className="flex items-center justify-between gap-3 font-mulish text-sm font-bold uppercase tracking-wide text-cipfa-purple group-hover:text-cipfa-dark">
                    {item.cta}
                    <ArrowRight size={18} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
