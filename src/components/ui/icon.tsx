import { SiAstro, SiGithub, SiReact, SiTailwindcss } from "react-icons/si";
import type { IconBaseProps } from "react-icons/lib";
import { LuCode2, LuMonitor, LuMoon, LuSun } from "react-icons/lu";
import { RxChevronDown } from "react-icons/rx";

const Icons = {
  github: SiGithub,
  astro: SiAstro,
  react: SiReact,
  tailwind: SiTailwindcss,
  code: LuCode2,
  sun: LuSun,
  moon: LuMoon,
  monitor: LuMonitor,
  "chevron-down": RxChevronDown
} as const;

type IconName = keyof typeof Icons;
interface IconProps extends IconBaseProps {
  name: IconName;
}

const Icon = ({ name, ...props }: IconProps) => {
  const Icon = Icons[name];

  return <Icon className="size-6" {...props} />;
};

export default Icon