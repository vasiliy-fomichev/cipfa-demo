import { Link } from "react-router-dom";

const SearchIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.1263 9.33337C21.4434 9.33339 24.9182 12.8076 24.9183 17.1244C24.9183 18.8808 24.373 20.4914 23.432 21.7269L22.9027 22.4222L23.5209 23.0394L30.5531 30.0736C30.6422 30.1627 30.6663 30.249 30.6664 30.3138C30.6664 30.3782 30.643 30.4638 30.556 30.5521C30.4646 30.643 30.3784 30.6663 30.3148 30.6664C30.2499 30.6664 30.1631 30.6424 30.0746 30.5541L23.0404 23.5199L22.4359 22.9164L21.7455 23.4183C20.4224 24.3796 18.8693 24.9173 17.1254 24.9174C12.8083 24.9174 9.33355 21.4432 9.33337 17.1263C9.33337 12.8094 12.8091 9.33337 17.1263 9.33337ZM17.1263 10.0394C13.1921 10.0394 10.0394 13.1921 10.0394 17.1263C10.0396 21.0604 13.1922 24.2123 17.1263 24.2123C21.0592 24.2123 24.2131 21.0591 24.2133 17.1263C24.2133 13.1921 21.0606 10.0394 17.1263 10.0394Z"
      fill="#FFFCFC"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 21.6328H0V17.6992H24V21.6328ZM40 12.7832H0V8.84961H40V12.7832ZM28 3.93262H0V0H28V3.93262Z"
      fill="white"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M31.1667 17.4305C31.1667 9.55864 24.8241 3.17725 17 3.17725C9.17597 3.17725 2.83334 9.55864 2.83334 17.4305C2.83334 24.5445 8.01387 30.4413 14.7865 31.5106V21.5506H11.1895V17.4305H14.7865V14.2903C14.7865 10.7181 16.9016 8.74492 20.1374 8.74492C21.6875 8.74492 23.3086 9.02331 23.3086 9.02331V12.5309H21.5223C19.7625 12.5309 19.2136 13.6297 19.2136 14.7569V17.4305H23.1425L22.5145 21.5506H19.2136V31.5106C25.9862 30.4413 31.1667 24.5448 31.1667 17.4305Z"
      fill="#403776"
      opacity="0.5"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.6667 4.59375H11.3333C7.42132 4.59375 4.25 7.76507 4.25 11.6771V23.0104C4.25 26.9224 7.42132 30.0938 11.3333 30.0938H22.6667C26.5786 30.0938 29.75 26.9224 29.75 23.0104V11.6771C29.75 7.76507 26.5786 4.59375 22.6667 4.59375ZM27.2708 23.0104C27.263 25.5499 25.2062 27.6068 22.6667 27.6146H11.3333C8.79375 27.6068 6.73694 25.5499 6.72917 23.0104V11.6771C6.73694 9.1375 8.79375 7.08069 11.3333 7.07292H22.6667C25.2062 7.08069 27.263 9.1375 27.2708 11.6771V23.0104ZM23.7292 12.0312C24.5116 12.0312 25.1458 11.397 25.1458 10.6146C25.1458 9.83219 24.5116 9.19792 23.7292 9.19792C22.9467 9.19792 22.3125 9.83219 22.3125 10.6146C22.3125 11.397 22.9467 12.0312 23.7292 12.0312ZM17 10.9688C13.4792 10.9688 10.625 13.8229 10.625 17.3438C10.625 20.8646 13.4792 23.7188 17 23.7188C20.5208 23.7188 23.375 20.8646 23.375 17.3438C23.375 13.8229 20.5208 10.9688 17 10.9688ZM13.1042 17.3438C13.1042 19.4954 14.8484 21.2396 17 21.2396C19.1516 21.2396 20.8958 19.4954 20.8958 17.3438C20.8958 15.1921 19.1516 13.4479 17 13.4479C14.8484 13.4479 13.1042 15.1921 13.1042 17.3438Z"
        fill="#403776"
      />
    </g>
  </svg>
);

const XIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
      <path
        d="M24.3328 6.0105H28.2429L19.7003 15.6118L29.75 28.6772H21.8813L15.7181 20.7532L8.66608 28.6772H4.75354L13.8907 18.4075L4.25 6.0105H12.3186L17.8895 13.2534L24.3328 6.0105ZM22.9603 26.3756H25.1271L11.1412 8.19114H8.8162L22.9603 26.3756Z"
        fill="#403776"
      />
    </g>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.375 4.36475C5.20139 4.36475 4.25 5.26871 4.25 6.38381V26.5744C4.25 27.6895 5.20139 28.5935 6.375 28.5935H27.625C28.7986 28.5935 29.75 27.6895 29.75 26.5744V6.38381C29.75 5.26871 28.7986 4.36475 27.625 4.36475H6.375ZM12.0711 9.75257C12.0791 11.0397 11.065 11.8328 9.86174 11.8272C8.72818 11.8215 7.74006 10.964 7.74604 9.75447C7.75201 8.61685 8.6983 7.70259 9.92749 7.7291C11.1746 7.7556 12.0791 8.62443 12.0711 9.75257ZM17.3962 13.4664H13.8243V24.9882H17.5974V19.09C17.6015 18.7588 17.6194 18.4143 17.709 18.0981C18.0456 16.917 19.1634 16.1542 20.4105 16.3417C21.2113 16.4608 21.7412 16.9019 21.9643 17.6193C22.1018 18.0678 22.1636 18.5505 22.1696 19.0182C22.1857 20.4283 22.1834 21.8384 22.1812 23.2486C22.1803 23.7464 22.1795 24.2444 22.1795 24.7422V24.9864H25.9647V24.71C25.9647 24.1016 25.9644 23.4933 25.964 22.8851C25.9632 21.3647 25.9624 19.8444 25.9666 18.3235C25.9686 17.6363 25.891 16.9587 25.7136 16.2943C25.4487 15.3062 24.9009 14.4885 24.0104 13.8979C23.3788 13.4777 22.6855 13.207 21.9106 13.1767C21.2477 13.1437 20.845 13.1231 20.4662 13.1957C19.3824 13.402 18.4303 13.8733 17.711 14.7042L17.3962 15.0734V13.4664ZM8.04899 24.992H11.8043V13.4739H8.04899V24.992Z"
        fill="#403776"
      />
    </g>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
      <path
        d="M30.5901 10.2042C30.4287 9.6055 30.1134 9.05952 29.6754 8.62058C29.2375 8.18165 28.6922 7.86506 28.0939 7.70235C25.8754 7.09318 17 7.08326 17 7.08326C17 7.08326 8.12598 7.07335 5.90606 7.6556C5.30812 7.8258 4.76398 8.14686 4.32586 8.58795C3.88775 9.02904 3.57038 9.57535 3.40423 10.1744C2.81915 12.3929 2.81348 16.9943 2.81348 16.9943C2.81348 16.9943 2.80781 21.6183 3.38865 23.8141C3.71448 25.0282 4.67073 25.9873 5.88623 26.3145C8.1274 26.9237 16.9787 26.9336 16.9787 26.9336C16.9787 26.9336 25.8541 26.9435 28.0726 26.3627C28.6712 26.2002 29.217 25.8844 29.656 25.4464C30.095 25.0083 30.4121 24.4633 30.5759 23.8651C31.1624 21.648 31.1666 17.0481 31.1666 17.0481C31.1666 17.0481 31.195 12.4227 30.5901 10.2042ZM14.161 21.257L14.1681 12.757L21.5446 17.0141L14.161 21.257Z"
        fill="#403776"
      />
    </g>
  </svg>
);

const sectorCards = [
  {
    title: "Central Government",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/cb08e6f134ba979f94a588e9527bc3e5a9182d36?width=683",
    overlay: "linear-gradient(180deg, rgba(0,0,0,0) 45.87%, rgba(0,0,0,0.80) 81.34%), linear-gradient(0deg, rgba(227,194,255,0.8) 0%, rgba(227,194,255,0.8) 100%)",
  },
  {
    title: "Local Government",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/a62d53cd8879c3761c0bb7e1a96f3345820437eb?width=683",
    overlay: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.80) 83.47%), linear-gradient(0deg, rgba(102,255,204,0.4) 0%, rgba(102,255,204,0.4) 100%), linear-gradient(0deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.20) 100%)",
  },
  {
    title: "Police Financing",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e601a27a583a52fa2241892133ee0d0087f1af3c?width=683",
    overlay: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.80) 80.8%), linear-gradient(0deg, rgba(227,194,255,0.8) 0%, rgba(227,194,255,0.8) 100%), linear-gradient(0deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.20) 100%)",
  },
  {
    title: "Public Health",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0cf65862705514610e8c9534388ce5855270b253?width=683",
    overlay: "linear-gradient(180deg, rgba(0,0,0,0) 47.47%, rgba(0,0,0,0.80) 81.6%), linear-gradient(0deg, rgba(102,255,204,0.5) 0%, rgba(102,255,204,0.5) 100%), linear-gradient(0deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.20) 100%)",
  },
];

const memberCards = [
  {
    title: "Developing Leadership Skills",
    description:
      "People are an organisation's most important asset. However, the people challenges faced by public sector bodies are often more complex than in other types of organisations.",
    cta: "Start developing",
    bgLeft: "from-cipfa-purple to-purple-900",
    bgRight: "from-slate-700 to-slate-900",
  },
  {
    title: "Building Governance and Trust",
    description:
      "Public services need to be delivered against the backdrop of an increasingly challenging macro-environment and with an increasing need for transparency and trust.",
    cta: "Start building",
    bgLeft: "from-amber-700 to-amber-900",
    bgRight: "from-stone-600 to-stone-800",
  },
  {
    title: "Increasing Financial Resilience",
    description:
      "Public sector organisations globally need to tackle a myriad of challenges as they strive to increase their resilience and financial management.",
    cta: "Start increasing resilience",
    bgLeft: "from-blue-800 to-blue-950",
    bgRight: "from-slate-500 to-slate-700",
  },
  {
    title: "Protecting Place and Planet",
    description:
      "At CIPFA, we believe that improving public services is the key to improving the lives of people in their communities.",
    cta: "Start protecting",
    bgLeft: "from-teal-700 to-teal-900",
    bgRight: "from-sky-700 to-sky-900",
  },
];

const newsItems = [
  {
    title: "What's driving financial risk across local government?",
    date: "February 12, 2026",
  },
  {
    title: "What will it take to deliver Social Care reform?",
    date: "January 26, 2026",
  },
  {
    title: "What the autumn budget means for the NHS?",
    date: "November 09, 2026",
  },
  {
    title: "Making prevention a financial reality",
    date: "October 18, 2026",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-mulish overflow-x-hidden">
      {/* ── HERO + HEADER ─────────────────────────────────────── */}
      <section className="relative">
        {/* Hero background */}
        <div className="hero-bg min-h-[500px] md:min-h-[641px] w-full relative">
          {/* Header nav — overlaid absolutely */}
          <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-[72px] h-[66px]">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-nunito font-black text-white text-2xl tracking-tight">
                CIPFA
                <span className="text-cipfa-green font-light">\</span>
              </span>
            </Link>

            {/* Nav right */}
            <div className="flex items-center gap-2 md:gap-0">
              <button className="hidden md:flex p-2 text-white" aria-label="Search">
                <SearchIcon />
              </button>
              <button className="hidden md:flex items-center px-6 py-3 text-white font-nunito font-bold text-sm uppercase tracking-wide hover:text-cipfa-green transition-colors">
                Member Login
              </button>
              <button className="hidden md:flex items-center px-6 py-3 text-white font-nunito font-bold text-sm uppercase tracking-wide hover:text-cipfa-green transition-colors">
                Join Us
              </button>
              <button className="flex items-center pr-0 md:pr-6" aria-label="Menu">
                <HamburgerIcon />
              </button>
            </div>
          </header>

          {/* Hero content */}
          <div className="flex flex-col justify-center min-h-[500px] md:min-h-[641px] px-6 md:px-[72px] pt-[90px] pb-10">
            <div className="max-w-[560px]">
              <div className="flex flex-col gap-6 mb-10">
                <h1 className="text-white font-mulish font-[200] text-4xl md:text-[56px] leading-[110%]">
                  Strengthen your public finance
                </h1>
                <p className="text-white font-mulish font-medium text-lg leading-[140%] tracking-[-0.36px]">
                  The only organization dedicated to public financial management.
                </p>
              </div>
              <button className="bg-cipfa-green text-black font-mulish font-[800] text-sm uppercase tracking-wide px-10 py-[18px] hover:brightness-110 transition-all">
                What We Stand For
              </button>
            </div>

            {/* Carousel dots */}
            <div className="flex justify-start mt-12">
              <svg width="112" height="10" viewBox="0 0 112 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#D9D9D9" />
                <circle cx="39" cy="5" r="5" fill="#D9D9D9" fillOpacity="0.4" />
                <circle cx="73" cy="5" r="5" fill="#D9D9D9" fillOpacity="0.4" />
                <circle cx="107" cy="5" r="5" fill="#D9D9D9" fillOpacity="0.4" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── CIFPA THINKS ─────────────────────────────────────── */}
        <div className="bg-black px-6 md:px-[72px] py-8 md:py-[30px]">
          <p className="font-nunito font-black text-white text-lg tracking-[-0.36px] mb-5">
            CIPFA Thinks
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {newsItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-4 cursor-pointer group">
                <p className="text-white font-['Roboto_Serif'] font-normal text-lg leading-[140%] tracking-[-0.36px] group-hover:text-cipfa-green transition-colors">
                  {item.title}
                </p>
                <p className="text-cipfa-grey font-mulish font-medium text-sm tracking-[-0.28px]">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────── */}
      <section className="px-6 md:px-[72px] py-[60px] md:py-[72px] pr-6 md:pr-[240px]">
        <h2 className="font-mulish font-[200] text-cipfa-dark text-4xl md:text-[56px] leading-[120%] tracking-[-2.8px] mb-8">
          Who we are
        </h2>
        <p className="font-mulish text-xl md:text-2xl leading-[120%] tracking-[-0.48px]">
          <span className="font-[300]">The </span>
          <span className="font-[700]">Chartered Institute of Public Finance and Accountancy</span>
          <span className="font-[300]">
            {" "}(CIPFA) is a UK-based international accountancy membership and standard-setting body. We are the only such body globally dedicated to public financial management.
          </span>
        </p>
      </section>

      {/* ── SECTORS GRID ─────────────────────────────────────── */}
      <section
        className="w-full"
        style={{
          background: `url('https://api.builder.io/api/v1/image/assets/TEMP/9742a4729b470b0c0bf44c4d35d927c6940971df?width=2732') lightgray 50% / cover no-repeat, #FFF`,
        }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {sectorCards.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden cursor-pointer group"
              style={{
                background: `${card.overlay}, url('${card.image}') lightgray center / cover no-repeat`,
              }}
            >
              <div className="flex flex-col justify-end h-[280px] md:h-[375px] p-8 md:p-12 gap-4">
                <h3 className="text-white font-mulish font-[800] text-2xl md:text-[28px] leading-[120%] tracking-[-0.56px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.75)]">
                  {card.title}
                </h3>
                <p className="text-cipfa-grey font-mulish font-[600] text-sm md:text-base leading-[120%] tracking-[-0.32px] group-hover:text-cipfa-green transition-colors">
                  How we help →
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTERNATIONAL PUBLIC ACCOUNTING ──────────────────── */}
      <section className="flex flex-col lg:flex-row min-h-[400px] bg-stone-100">
        {/* Left: decorative image area */}
        <div
          className="flex-1 min-h-[300px] lg:min-h-auto bg-stone-200"
          style={{
            background:
              "linear-gradient(to right, rgba(245,245,244,0.8) 0%, rgba(245,245,244,0) 100%), linear-gradient(135deg, #e7e5e4 0%, #d6d3d1 100%)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center min-h-[300px] relative overflow-hidden">
            {/* Capitol-style architectural illustration */}
            <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-300 to-stone-400 opacity-60" />
            <div className="relative z-10 text-stone-400 text-center">
              <div className="w-32 h-32 mx-auto border-8 border-stone-400/40 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-stone-400/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: text content */}
        <div className="flex-1 flex items-center justify-end">
          <div className="w-full max-w-[635px] flex flex-col gap-8 px-8 md:px-12 lg:px-16 py-16 lg:py-[100px]">
            <div className="flex flex-col gap-6">
              <h2 className="font-mulish font-[200] text-cipfa-dark text-4xl md:text-[56px] leading-[110%]">
                International public accounting
              </h2>
              <p className="font-nunito text-lg leading-[120%] tracking-[-0.36px]">
                <span className="font-[300]">
                  Public finance outside of the UK is even more complex and presents an additional
                  set of logistical and legal challenges.{" "}
                </span>
                <span className="font-[700]">We can help simplify this.</span>
              </p>
            </div>
            <button className="self-start bg-cipfa-magenta text-white font-mulish font-[800] text-sm uppercase tracking-wide px-10 py-[18px] hover:brightness-110 transition-all">
              See What We Offer
            </button>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO FOR OUR MEMBERS ───────────────────────── */}
      <section className="px-6 md:px-[72px] py-[60px] md:py-[80px]">
        <div className="max-w-4xl mb-10">
          <h2 className="font-mulish font-[200] text-cipfa-dark text-4xl md:text-[56px] leading-[120%] tracking-[-2.8px] mb-6">
            What we do for our members
          </h2>
          <p className="font-mulish text-base md:text-lg leading-[140%]">
            Every day public finance professionals face a range of complex and often interconnected
            issues, from embedding good financial management across their organisation to changing
            legislation, and helping tackle climate change.{" "}
            <strong className="font-[700]">Find out how CIPFA can help you.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {memberCards.map((card) => (
            <div key={card.title} className="flex flex-col gap-4">
              <h3 className="font-mulish font-[700] text-2xl md:text-[28px] leading-[120%] text-black">
                {card.title}
              </h3>
              <p className="font-mulish font-[400] text-base leading-[140%] text-black">
                {card.description}
              </p>
              <a href="#" className="font-mulish font-[600] text-sm text-black hover:text-cipfa-purple transition-colors">
                {card.cta} →
              </a>
              {/* Diagonal split image area */}
              <div className="relative h-52 overflow-hidden mt-2 flex">
                <div
                  className={`diagonal-left flex-1 bg-gradient-to-br ${card.bgLeft} h-full`}
                />
                <div
                  className={`diagonal-right flex-1 bg-gradient-to-br ${card.bgRight} h-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER MAIN ──────────────────────────────────────── */}
      <footer>
        <div className="flex flex-col lg:flex-row">
          {/* Left: links + social */}
          <div
            className="flex-1 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(to right, rgba(0,20,36,0.92) 0%, rgba(0,20,36,0.88) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/9742a4729b470b0c0bf44c4d35d927c6940971df?width=2732') center / cover no-repeat",
            }}
          >
            <div className="px-6 md:px-[72px] pt-[60px] pb-10">
              <p className="font-nunito font-[300] text-white text-2xl md:text-3xl tracking-[-1px] mb-10">
                CIPFA is headquartered in London, UK
              </p>

              {/* Link columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
                {/* About CIPFA */}
                <div>
                  <p className="font-nunito font-[700] text-white text-sm uppercase tracking-wide mb-4">
                    About CIPFA
                  </p>
                  <ul className="flex flex-col gap-3">
                    {["About us", "Our services", "Contact us", "Press office", "Working for CIPFA"].map((item) => (
                      <li key={item}>
                        <a href="#" className="font-mulish text-cipfa-grey text-sm hover:text-white transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Members */}
                <div>
                  <p className="font-nunito font-[700] text-white text-sm uppercase tracking-wide mb-4">
                    Members
                  </p>
                  <ul className="flex flex-col gap-3">
                    {["Why join?", "Training", "Continuing Professional Development (CPD)", "Student Network", "Regions"].map((item) => (
                      <li key={item}>
                        <a href="#" className="font-mulish text-cipfa-grey text-sm hover:text-white transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Qualifications */}
                <div>
                  <p className="font-nunito font-[700] text-white text-sm uppercase tracking-wide mb-4">
                    Qualifications
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Professional Accountancy Qualification (CIPFA PAQ)",
                      "CIPFA Education and Training Centre (CETC)",
                      "Exemptions",
                      "Enroll on CETC courses",
                      "Study Options",
                    ].map((item) => (
                      <li key={item}>
                        <a href="#" className="font-mulish text-cipfa-grey text-sm hover:text-white transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                <FacebookIcon />
                <InstagramIcon />
                <XIcon />
                <LinkedInIcon />
                <YouTubeIcon />
              </div>
            </div>
          </div>

          {/* Right: newsletter */}
          <div className="bg-cipfa-purple flex flex-col px-8 md:px-12 pt-[60px] pb-10 lg:w-[444px] lg:flex-shrink-0">
            <div className="flex flex-col gap-5">
              <h3 className="font-nunito font-[300] text-white text-3xl md:text-[40px] leading-[120%] tracking-[-2px]">
                Get your weekly
                <br />
                think piece
              </h3>
              <p className="font-mulish text-white text-base leading-[120%] tracking-[-0.32px]">
                <span className="font-[400]">Join </span>
                <span className="font-[700]">CIPFA Thinks </span>
                <span className="font-[400]">
                  for the latest public finance trend analysis that affects your industry.
                </span>
              </p>
              <button className="self-start bg-cipfa-green text-black font-mulish font-[800] text-sm uppercase px-10 py-[18px] hover:brightness-110 transition-all mt-2">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-cipfa-grey" />

        {/* Legal footer */}
        <div className="bg-cipfa-grey px-6 md:px-[72px] py-5">
          <p className="font-nunito text-cipfa-neutral text-sm leading-[120%] max-w-4xl">
            Chartered Institute of Public Finance and Accountancy (CIPFA), registered with the
            Charity Commissioners of England and Wales No. 231060 and the Office of the Scottish
            Charity Regulator No. SC037963
          </p>
        </div>
      </footer>
    </div>
  );
}
