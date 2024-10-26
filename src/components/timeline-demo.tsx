import Timeline from "@components/with-motion/timeline";
import FocusCard from "@components/with-motion/focus-card";
import { SiAstro, SiGithub, SiReact, SiTailwindcss } from "react-icons/si";
import type { IconBaseProps } from "react-icons/lib";
import { LuCode2 } from "react-icons/lu";
import { getBaseUrl } from "@lib/utils";

const url = getBaseUrl();
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

const techStacks = ["github", "astro", "react", "tailwind"] as const;

const data = [
  {
    title: "Current",
    content: (
      <section className="space-y-3">
        <header className="space-y-3">
          <h3 className="text-4xl font-semibold">Developing Katakatari</h3>
          <div className="py-2 px-4 bg-border rounded-lg">
            <p className="text-lg font-bold">Tech Stack</p>
            <ul className="inline-flex py-2 gap-4">
              {techStacks.map((stack) => (
                <li
                  key={stack}
                  className="group/li capitalize rounded-full p-2 hover:bg-primary bg-foreground hover:text-neutral-100 text-background"
                >
                  <span className="relative transition-colors ease-in-out">
                    <p className="group-hover/li:block hidden absolute bottom-10 rounded-lg px-2 bg-primary right-[50%] translate-x-[50%] font-bold">
                      {stack}
                    </p>
                    <Icon name={stack} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </header>
        <p className="mb-8 text-xs font-normal md:text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ea,
          alias dolorum ipsam ex perspiciatis reiciendis hic quo distinctio,
          natus repellat eum aspernatur laboriosam eligendi iusto animi harum
          vitae eos?
        </p>
        <div className="grid grid-cols-2 gap-4">
          <a href={`${url}/gallery`}>
            <FocusCard
              title={`Gallery`}
            >
              <img
                src="https://ik.imagekit.io/ah0ec7izw/Japan/20221124_213803.JPG?updatedAt=1729926775701"
                alt="Pictures by Pexels\nfree photo of mountains on gloomy day"
                className="object-cover aspect-square"
              />
            </FocusCard>
          </a>

          <a href={`${url}/code`}>
            <FocusCard
              title="Code"
              className="hover:bg-primary bg-primary/30 group/code"
            >
              <img
                src="https://ik.imagekit.io/ah0ec7izw/Code/html-image.png?updatedAt=1729957241891"
                alt="Pictures by Pexels\nfree photo of mountains on gloomy day"
                className="scale-[3d(1.3,_1.6,_2)] transition-all object-contain"
              />
            </FocusCard>
          </a>

          <a href={`${url}/blog`}>
            <FocusCard
              title={`Pictures by Pexels\nBlog`}
            >
              <img
                src="https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Pictures by Pexels\nfree photo of weeds on beach on shore"
              />
            </FocusCard>
          </a>
          <a href={`${url}/travel`}>
            <FocusCard title="Travel">
              <img
                src="https://ik.imagekit.io/ah0ec7izw/Japan/DSC_0153.JPG?updatedAt=1729927312890"
                alt="Pictures by Pexels\nfree photo of mountains on gloomy day"
                className="object-cover aspect-square"
              />
            </FocusCard>
          </a>
        </div>
      </section>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          officiis! Eos quas officia delectus, reiciendis cupiditate
          reprehenderit a! Velit natus sed nesciunt harum inventore excepturi
          nemo corrupti quo esse minus!
        </p>
        <div className="grid grid-cols-2 gap-4">
          <FocusCard
            title={`Pictures by Pexels\nfree photo of mountains on gloomy day`}
          >
            <img
              src="https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Pictures by Pexels\nfree photo of mountains on gloomy day"
            />
          </FocusCard>

          <FocusCard
            title={`Pictures by Pexels\nfree photo of weeds on beach on shore`}
          >
            <img
              src="https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Pictures by Pexels\nfree photo of weeds on beach on shore"
            />
          </FocusCard>

          <FocusCard
            title={`Pictures by Pexels\nfree photo of weeds on beach on shore`}
          >
            <img
              src="https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Pictures by Pexels\nfree photo of weeds on beach on shore"
            />
          </FocusCard>
          <FocusCard
            title={`Pictures by Pexels\nfree photo of mountains on gloomy day`}
          >
            <img
              src="https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Pictures by Pexels\nfree photo of mountains on gloomy day"
            />
          </FocusCard>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <FocusCard
          title={`Pictures by Pexels\nfree photo of mountains on gloomy day`}
        >
          <img
            src="https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Pictures by Pexels\nfree photo of mountains on gloomy day"
          />
        </FocusCard>

        <FocusCard
          title={`Pictures by Pexels\nfree photo of weeds on beach on shore`}
        >
          <img
            src="https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Pictures by Pexels\nfree photo of weeds on beach on shore"
          />
        </FocusCard>

        <FocusCard
          title={`Pictures by Pexels\nfree photo of weeds on beach on shore`}
        >
          <img
            src="https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Pictures by Pexels\nfree photo of weeds on beach on shore"
          />
        </FocusCard>
        <FocusCard
          title={`Pictures by Pexels\nfree photo of mountains on gloomy day`}
        >
          <img
            src="https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Pictures by Pexels\nfree photo of mountains on gloomy day"
          />
        </FocusCard>
      </div>
    ),
  },
];

const TimelineDemo = () => {
  return (
    <Timeline header={{ title: "My Programing Journey" }}>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-start pt-10 md:pt-40 md:gap-10"
        >
          <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-foreground border-8 border-accent/70 p-2" />
            </div>
            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
              {item.title}
            </h3>
          </div>

          <div className="relative pl-20 pr-4 md:pl-4 w-full">
            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
              {item.title}
            </h3>
            {item.content}
            {" "}
          </div>
        </div>
      ))}
    </Timeline>
  );
};

export default TimelineDemo;
