import Timeline from "@components/with-motion/timeline";
import FocusCard from "@components/with-motion/focus-card";

const data = [
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal md:text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ea,
          alias dolorum ipsam ex perspiciatis reiciendis hic quo distinctio,
          natus repellat eum aspernatur laboriosam eligendi iusto animi harum
          vitae eos?
        </p>
        <div className="grid grid-cols-2 gap-4">
          <FocusCard title="Pictures by Pexels\nfree photo of mountains on gloomy day">
            <img
              src="https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Pictures by Pexels\nfree photo of mountains on gloomy day"
            />
          </FocusCard>

          <FocusCard title="Pictures by Pexels\nfree photo of weeds on beach on shore">
            <img
              src="https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Pictures by Pexels\nfree photo of weeds on beach on shore"
            />
          </FocusCard>

          <FocusCard title="Pictures by Pexels\nfree photo of weeds on beach on shore">
            <img
              src="https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Pictures by Pexels\nfree photo of weeds on beach on shore"
            />
          </FocusCard>
          <FocusCard title="Pictures by Pexels\nfree photo of mountains on gloomy day">
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
      <div>
        <p className="mb-8 text-xs font-normal md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          officiis! Eos quas officia delectus, reiciendis cupiditate
          reprehenderit a! Velit natus sed nesciunt harum inventore excepturi
          nemo corrupti quo esse minus!
        </p>
        <div className="grid grid-cols-2 gap-4">
          <FocusCard title="Pictures by Pexels\nfree photo of mountains on gloomy day">
            <img
              src="https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Pictures by Pexels\nfree photo of mountains on gloomy day"
            />
          </FocusCard>

          <FocusCard title="Pictures by Pexels\nfree photo of weeds on beach on shore">
            <img
              src="https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Pictures by Pexels\nfree photo of weeds on beach on shore"
            />
          </FocusCard>

          <FocusCard title="Pictures by Pexels\nfree photo of weeds on beach on shore">
            <img
              src="https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Pictures by Pexels\nfree photo of weeds on beach on shore"
            />
          </FocusCard>
          <FocusCard title="Pictures by Pexels\nfree photo of mountains on gloomy day">
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
    title: "Gallery",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <FocusCard title="Pictures by Pexels\nfree photo of mountains on gloomy day">
          <img
            src="https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Pictures by Pexels\nfree photo of mountains on gloomy day"
          />
        </FocusCard>

        <FocusCard title="Pictures by Pexels\nfree photo of weeds on beach on shore">
          <img
            src="https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Pictures by Pexels\nfree photo of weeds on beach on shore"
          />
        </FocusCard>

        <FocusCard title="Pictures by Pexels\nfree photo of weeds on beach on shore">
          <img
            src="https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Pictures by Pexels\nfree photo of weeds on beach on shore"
          />
        </FocusCard>
        <FocusCard title="Pictures by Pexels\nfree photo of mountains on gloomy day">
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
    <Timeline>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-start pt-10 md:pt-40 md:gap-10"
        >
          <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-foreground border border-background p-2" />
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
