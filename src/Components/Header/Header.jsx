import CardNav from "./CardNav";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Inline SVG logo as a data URL since we don't have a logo.svg
const LogoComponent = () => (
  <div className="flex items-center gap-2">
    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600">
      <FontAwesomeIcon icon={faCloudSunRain} className="text-white text-sm" />
    </div>
    <span className="font-bold text-gray-800 text-base">Weather App</span>
  </div>
);

const items = [
  {
    label: "About",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Company", ariaLabel: "About Company" },
      { label: "Careers", ariaLabel: "About Careers" },
    ],
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "Featured", ariaLabel: "Featured Projects" },
      { label: "Case Studies", ariaLabel: "Project Case Studies" },
    ],
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      { label: "Email", ariaLabel: "Email us" },
      { label: "Twitter", ariaLabel: "Twitter" },
      { label: "LinkedIn", ariaLabel: "LinkedIn" },
    ],
  },
];

function Header() {
  return (
    <div className="relative h-[80px]">
      <CardNav
        logo={null}
        logoAlt="Weather App"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </div>
  );
}

export default Header;
