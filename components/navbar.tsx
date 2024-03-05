import Link from "next/link";
import { Button } from "@/components/ui/button";

const navlinks = [
  {
    item: "Crypto Taxes",
    href: "/",
    type: "default",
  },
  {
    item: "Free Tools",
    href: "/",
    type: "default",
  },
  {
    item: "Resources Center",
    href: "/",
    type: "default",
  },
  {
    item: "Get Started",
    href: "/",
  },
];
export const Navbar = () => {
  return (
    <nav className="w-screen flex flex-row justify-between bg-[#FFFFFF]  px-24 py-8 shadow-lg">
      <div>
        <svg
          width="200"
          height="80"
          viewBox="0 0 97 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_1123)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37.6804 7.00981L36.877 6.4073L37.2258 6.038C37.2027 5.4445 37.4755 4.738 37.9953 4.15217C38.5651 3.50984 39.3146 3.14505 39.9454 3.15845L40.2912 2.79224L40.8938 3.59558L40.8829 3.6071C41.35 4.22718 41.1642 5.34498 40.3611 6.25051C39.5097 7.20965 38.3396 7.50878 37.6833 7.00674L37.6804 7.00981Z"
              fill="url(#paint0_linear_1_1123)"
            />
            <path
              d="M39.8117 5.68737C40.7245 4.65853 40.9033 3.32656 40.2109 2.71233C39.5186 2.09811 38.2174 2.43421 37.3046 3.46305C36.3918 4.49189 36.2131 5.82386 36.9054 6.43809C37.5977 7.05231 38.8989 6.71621 39.8117 5.68737Z"
              fill="url(#paint1_linear_1_1123)"
            />
            <path
              d="M39.8243 5.69847C40.7315 4.67594 40.9001 3.34407 40.2008 2.72366C39.5015 2.10325 38.1992 2.42923 37.292 3.45176C36.3848 4.4743 36.2162 5.80617 36.9155 6.42658C37.6148 7.04699 38.9171 6.72101 39.8243 5.69847Z"
              fill="#0052FE"
            />
            <path
              d="M10.3802 12.0675L19.2748 2.53735H14.5447L5.09816 12.4603V2.53735H0.847656V22.2692H5.09816V17.617L7.58131 15.0398L13.4964 22.2692H18.4876L10.9819 12.825L10.3802 12.0667V12.0675Z"
              fill="#0052FE"
            />
            <path
              d="M32.9824 11.3068C31.6601 9.20927 29.2339 7.91187 26.276 7.91187C23.1148 7.91187 20.5482 9.39484 19.2965 11.7446C18.7559 12.7512 18.4611 13.9201 18.4611 15.1966C18.4611 19.456 21.7596 22.4814 26.276 22.4814C30.7924 22.4814 34.0661 19.456 34.0661 15.1966C34.0661 13.7289 33.6765 12.4066 32.9824 11.3068V11.3068ZM26.276 19.1145C24.2162 19.1145 22.6312 17.642 22.6312 15.1966C22.6312 13.0935 23.8009 11.7101 25.4389 11.3647C25.7064 11.306 25.9868 11.2771 26.276 11.2771C26.4793 11.2771 26.6745 11.2899 26.8665 11.3213C28.625 11.5751 29.8935 12.9898 29.8935 15.1966C29.8935 17.642 28.3366 19.1145 26.2768 19.1145H26.276Z"
              fill="#0052FE"
            />
            <path
              d="M40.9306 8.12207H36.8118V22.2698H40.9306V8.12207Z"
              fill="#0052FE"
            />
            <path
              d="M53.3954 7.91187C51.4673 7.91187 49.8036 8.57061 48.695 9.77884V8.12234H44.761V22.2701H48.8789V15.2745C48.8789 14.2463 49.1007 13.4357 49.4951 12.834C50.0928 11.9061 51.0889 11.4635 52.2867 11.4635C53.9055 11.4635 54.9193 12.2933 55.125 14.0808C55.1515 14.3041 55.1643 14.5467 55.1643 14.8022V22.2693H57.433L59.2855 19.697V14.1723C59.2855 9.85757 56.7493 7.91187 53.3954 7.91187V7.91187Z"
              fill="#0052FE"
            />
            <path
              d="M80.6955 2.46997L60.489 22.2701H66.7784L68.6244 19.6455L79.08 4.76915L80.6955 2.46997Z"
              fill="url(#paint2_linear_1_1123)"
            />
            <path
              d="M74.7395 2.46997L74.0936 3.36811L63.953 17.4556L60.489 22.2701L80.6955 2.46997H74.7395Z"
              fill="url(#paint3_linear_1_1123)"
            />
            <path
              d="M78.6952 18.8124L78.4342 18.4428C78.2164 18.1343 77.8622 17.9512 77.4862 17.9512H72.7328C72.5569 17.9512 72.4203 18.0556 72.3552 18.1946L81.1414 22.27L78.6952 18.8124Z"
              fill="#F69300"
            />
            <path
              d="M72.3552 18.1948C72.2973 18.3185 72.2965 18.4696 72.3825 18.6013L73.3586 20.0867H73.361L74.7966 22.2702H81.1422L72.356 18.1948H72.3552Z"
              fill="url(#paint4_linear_1_1123)"
            />
            <path
              d="M69.4985 6.13477L67.9938 3.92556L67.0025 2.4707H60.7942L69.4013 6.70515C69.57 6.57902 69.6334 6.3332 69.4993 6.13477H69.4985Z"
              fill="url(#paint5_linear_1_1123)"
            />
            <path
              d="M60.7935 2.47004L63.4421 6.28835C63.4533 6.30361 63.4638 6.31647 63.475 6.33173C63.6943 6.61853 64.0342 6.78803 64.3973 6.78803H69.1531C69.2503 6.78803 69.333 6.75429 69.4013 6.70368L60.7943 2.46924L60.7935 2.47004Z"
              fill="#F69300"
            />
            <path
              d="M89.4297 3.22611H87.7572V7.61238H86.627V3.22611H84.9774V2.39062H89.4297V3.22611ZM91.5416 2.39062L92.9458 6.16189L94.3442 2.39062H95.8226V7.61238H94.681V6.16189L94.8066 3.69026L93.3282 7.61238H92.5576L91.085 3.69606L91.1991 6.16189V7.61238H90.0747V2.39062H91.5416V2.39062Z"
              fill="black"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_1123"
              x1="40.9942"
              y1="3.79644"
              x2="37.9816"
              y2="7.3111"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3372F5" />
              <stop offset="0.249995" stop-color="#3372F5" />
              <stop offset="0.505208" stop-color="#80DBFB" />
              <stop offset="0.838547" stop-color="#3372F5" />
              <stop offset="1" stop-color="#3372F5" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_1123"
              x1="45.4545"
              y1="3.78473"
              x2="44.6486"
              y2="4.69194"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0080D4" />
              <stop offset="0.47" stop-color="white" />
              <stop offset="0.6" stop-color="#F1F8FC" />
              <stop offset="1" stop-color="#007DCC" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_1123"
              x1="76.1558"
              y1="7.78331"
              x2="68.3272"
              y2="16.8402"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFAC00" />
              <stop offset="1" stop-color="#FE7801" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1_1123"
              x1="60.489"
              y1="12.3704"
              x2="80.6955"
              y2="12.3704"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFCE00" />
              <stop offset="1" stop-color="#FFB003" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_1_1123"
              x1="72.3142"
              y1="20.2329"
              x2="81.1414"
              y2="20.2329"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FE8B01" />
              <stop offset="1" stop-color="#FE7801" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_1_1123"
              x1="60.7934"
              y1="4.58752"
              x2="69.5716"
              y2="4.58752"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFCE00" />
              <stop offset="1" stop-color="#FFC101" />
            </linearGradient>
            <clipPath id="clip0_1_1123">
              <rect
                width="96"
                height="24"
                fill="white"
                transform="translate(0.847656)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-row  items-center gap-8 w-[40%]  justify-between">
        {navlinks.map((link, index) => {
          return (
            <Link key={index} href={link.href} className=" ">
              {link.type === "default" ? (
                <p className="text-[#111111] rounded-md  text-2xl font-bold group-hover:text-gray-800  px-4 py-3 hover:bg-[#e3e3e3] group transition-all duration-300 ease-in-out">
                  {link.item}
                </p>
              ) : (
                <button className=" text-2xl font-bold rounded-md px-4 py-3 group-hover:text-gray-800 transition-all bg-gradient-to-r to-[#1B4AEF] from-[#2870EA] text-white ">
                  {link.item}
                </button>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
