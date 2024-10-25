import { Timeline } from "@components/with-motion/timeline";
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
          <FocusCard
            data={{
              src:
                "https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              title:
                "Pictures by Pexels\nfree photo of mountains on gloomy day",
            }}
          />

          <FocusCard
            data={{
              src:
                "https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              title:
                "Pictures by Pexels\nfree photo of weeds on beach on shore",
            }}
          />

          <FocusCard
            data={{
              src:
                "https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              title:
                "Pictures by Pexels\nfree photo of mountains on gloomy day",
            }}
          />
          <FocusCard
            data={{
              src:
                "https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              title:
                "Pictures by Pexels\nfree photo of mountains on gloomy day",
            }}
          />
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
          <FocusCard
            data={{
              src:
                "https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              title:
                "Pictures by Pexels\nfree photo of mountains on gloomy day",
            }}
          />

          <FocusCard
            data={{
              src:
                "https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              title:
                "Pictures by Pexels\nfree photo of weeds on beach on shore",
            }}
          />

          <FocusCard
            data={{
              src:
                "https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              title:
                "Pictures by Pexels\nfree photo of mountains on gloomy day",
            }}
          />
          <FocusCard
            data={{
              src:
                "https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              title:
                "Pictures by Pexels\nfree photo of mountains on gloomy day",
            }}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Gallery",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <FocusCard
          data={{
            src:
              "https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Pictures by Pexels\nfree photo of mountains on gloomy day",
          }}
        />

        <FocusCard
          data={{
            src:
              "https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Pictures by Pexels\nfree photo of weeds on beach on shore",
          }}
        />

        <FocusCard
          data={{
            src:
              "https://images.pexels.com/photos/28075061/pexels-photo-28075061/free-photo-of-weeds-on-beach-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Pictures by Pexels\nfree photo of mountains on gloomy day",
          }}
        />
        <FocusCard
          data={{
            src:
              "https://images.pexels.com/photos/18795422/pexels-photo-18795422/free-photo-of-mountains-on-gloomy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Pictures by Pexels\nfree photo of mountains on gloomy day",
          }}
        />
      </div>
    ),
  },
];

const TimelineDemo = () => {
  return <Timeline data={data} />;
};

export default TimelineDemo;
