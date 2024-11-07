import {
  SiAstro,
  SiCss3,
  SiDiscord,
  SiDribbble,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiInstagram,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
} from "react-icons/si";
import type { IconBaseProps } from "react-icons/lib";
import {
  LuArrowLeft,
  LuArrowRight,
  LuCheck,
  LuCode2,
  LuCross,
  LuMapPin,
  LuMonitor,
  LuMoon,
  LuSun,
} from "react-icons/lu";
import { FaFacebook, FaStar, FaTwitter } from "react-icons/fa";
import { RxChevronDown } from "react-icons/rx";
import { MdOutlineAlternateEmail, MdWaves } from "react-icons/md";

const Icons = {
  github: SiGithub,
  twitter: FaTwitter,
  facebook: FaFacebook,
  dribble: SiDribbble,
  linkedin: SiLinkedin,
  instagram: SiInstagram,
  pin: LuMapPin,
  check: LuCheck,
  wave: MdWaves,
  astro: SiAstro,
  react: SiReact,
  discord: SiDiscord,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
  javascript: SiJavascript,
  framer: SiFramer,
  html: SiHtml5,
  css: SiCss3,
  mongo: SiMongodb,
  trpc: SiTrpc,
  next: SiNextdotjs,
  code: LuCode2,
  sun: LuSun,
  moon: LuMoon,
  star: FaStar,
  monitor: LuMonitor,
  cross: LuCross,
  email: MdOutlineAlternateEmail,
  "chevron-down": RxChevronDown,
  "arrow-right": LuArrowRight,
  "arrow-left": LuArrowLeft,
} as const;

export type IconName = keyof typeof Icons;
interface IconProps extends IconBaseProps {
  name: IconName;
}

const Icon = ({ name, ...props }: IconProps) => {
  const Icon = Icons[name];

  return <Icon className="size-6" {...props} />;
};

export default Icon;
