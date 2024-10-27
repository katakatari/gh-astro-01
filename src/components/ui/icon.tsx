import { SiAstro, SiGithub, SiReact, SiTailwindcss } from "react-icons/si";
import type { IconBaseProps } from "react-icons/lib";
import { LuCode2 } from "react-icons/lu";

const Icons = {
  github: SiGithub,
  astro: SiAstro,
  react: SiReact,
  tailwind: SiTailwindcss,
  code: LuCode2,
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