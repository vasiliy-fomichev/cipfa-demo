import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";

const pageContent = {
  contact: {
    eyebrow: "Contact",
    title: "Talk to CIPFA",
    intro:
      "Get routed to the right team for membership, training, advisory support, media enquiries, or general questions.",
    actions: ["Membership support", "Training enquiries", "Press office"],
  },
  login: {
    eyebrow: "Member area",
    title: "Member login",
    intro:
      "Access member resources, learning records, technical updates, events, and professional support.",
    actions: ["Continue to member resources", "Manage CPD", "Update your details"],
  },
  join: {
    eyebrow: "Join us",
    title: "Become part of CIPFA",
    intro:
      "Choose the membership or learning pathway that fits your role, experience, and public finance ambitions.",
    actions: ["Compare membership options", "Start a qualification", "Speak to admissions"],
  },
};

type UtilityPageProps = {
  type: keyof typeof pageContent;
};

export default function UtilityPage({ type }: UtilityPageProps) {
  const page = pageContent[type];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-mulish text-cipfa-dark">
      <SiteHeader />

      <main className="px-6 py-14 md:px-[72px] md:py-20">
        <section className="max-w-4xl">
          <p className="font-nunito text-sm font-black uppercase tracking-wide text-cipfa-purple">
            {page.eyebrow}
          </p>
          <h1 className="mt-3 max-w-full break-words font-mulish text-4xl font-extralight leading-[110%] md:text-[64px]">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl break-words font-mulish text-lg leading-[145%] text-cipfa-neutral md:text-2xl">
            {page.intro}
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {page.actions.map((action) => (
            <Link
              key={action}
              to="/contact"
              className="group flex min-h-[160px] flex-col justify-between bg-cipfa-grey p-5 transition hover:bg-cipfa-green"
            >
              <span className="font-mulish text-xl font-bold leading-tight">{action}</span>
              <span className="flex items-center justify-between font-mulish text-sm font-black uppercase tracking-wide text-cipfa-purple group-hover:text-cipfa-dark">
                Continue
                <ArrowRight size={18} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
