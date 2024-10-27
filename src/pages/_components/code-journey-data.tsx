import Timeline from "@components/with-motion/timeline";
import FocusCard from "@components/with-motion/focus-card";
import Icon from "@components/ui/icon";

const techStacks = ["github", "astro", "react", "tailwind"] as const;

const data = [
  {
    title: "Current",
    content: (
      <section className="space-y-3">
        <header className="space-y-3">
          <h3 className="text-4xl font-semibold">Developing Katakatari</h3>
          <div className="py-2 px-4 bg-border rounded-lg">
            <p className="text-lg font-bold text-inherit transition-colors duration-300">
              Tech Stack
            </p>
            <ul className="inline-flex py-2 gap-4">
              {techStacks.map((stack) => (
                <li
                  key={stack}
                  className="group/li capitalize rounded-full p-2 bg-foreground hover:bg-primary hover:text-neutral-100 text-background"
                >
                  <span className="relative transition-colors ease-in-out">
                    <p className="group-hover/li:block hidden absolute bottom-10 rounded-lg px-2 bg-primary right-[50%] translate-x-[50%] font-bold text-center">
                      {stack === "github" ? stack + " pages" : stack}
                    </p>
                    <Icon name={stack} />
                    {/* <div className="absolute top-auto bottom-0 group-hover/li:h-full h-0 bg-primary transition-colors duration-300 w-full scale-150" /> */}
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
        <div className="grid md:grid-cols-2 gap-4">
          <FocusCard
            title={`Gallery`}
          >
            <img
              src="https://ik.imagekit.io/ah0ec7izw/Japan/20221124_213803.JPG?updatedAt=1729926775701"
              alt="Pictures by Pexels\nfree photo of mountains on gloomy day"
              className="object-cover md:aspect-square aspect-video h-full w-full"
            />
          </FocusCard>

          <FocusCard
            title={`Code\nPicture by Pexels`}
            className="group/code"
          >
            <img
              src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pictures by Pexels\nMatrix"
              className="skew-x-[30deg] transition-all md:aspect-square h-full w-full aspect-video group-hover/code:object-cover object-fill group-hover/code:transform-none scale-[200%] group-hover/code:scale-0 ease-in-out duration-500"
            />
          </FocusCard>

          <FocusCard
            title={`Blog\nPictures by Pexels`}
          >
            <img
              src="https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Pictures by Pexels\nfree photo of weeds on beach on shore"
              className="object-cover md:aspect-square aspect-video h-full w-full"
            />
          </FocusCard>
          <FocusCard title="Travel">
            <img
              src="https://ik.imagekit.io/ah0ec7izw/Japan/DSC_0153.JPG?updatedAt=1729927312890"
              alt="Pictures by Pexels\nfree photo of mountains on gloomy day"
              className="object-cover md:aspect-square aspect-video h-full w-full"
            />
          </FocusCard>
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
