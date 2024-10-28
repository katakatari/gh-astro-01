import {
  SiAstro,
  SiCss3,
  SiDiscord,
  SiFramer,
  SiGithub,
  SiHtml5,
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
import { LuCode2, LuMonitor, LuMoon, LuSun } from "react-icons/lu";
import { RxChevronDown } from "react-icons/rx";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Icons = {
  github: SiGithub,
  linkedin: SiLinkedin,
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
  monitor: LuMonitor,
  email: MdOutlineAlternateEmail,
  "chevron-down": RxChevronDown,
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
