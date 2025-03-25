import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import StarIcon from "@assets/icons/star.svg";
import JavascriptIcon from "@assets/icons/square-js.svg";
import HTMLIcon from "@assets/icons/html5.svg";
import CSSIcon from "@assets/icons/css3.svg";
import ReactIcon from "@assets/icons/react.svg";
import ChromeIcon from "@assets/icons/chrome.svg";
import GithubIcon from "@assets/icons/github.svg";
import {TechIcon} from "@/components/TechIcon";
import mapImage from "@assets/images/map.png";
import Image from "next/image";
import memojiGirl from "@assets/images/memoji-avatar-4.png";
import {CardHeader} from "@/components/CardHeader";

const toolBoxItems = [
    {
        title: 'Javascript',
        iconType: JavascriptIcon,
    },
    {
        title: 'HTML5',
        iconType: HTMLIcon,
    },
    {
        title: 'CSS3',
        iconType: CSSIcon,
    },
    {
        title: 'React',
        iconType: ReactIcon,
    },
    {
        title: 'Chrome',
        iconType: ChromeIcon,
    },
    {
        title: 'Github',
        iconType: GithubIcon,
    }
]

const hobbies = [
    {
        title: 'Painting',
        emoji: '🎨'
    },
    {
        title: 'Photography',
        emoji: '📷'
    },
    {
        title: 'Gaming',
        emoji: '🎮'
    },
    {
        title: 'Hiking',
        emoji: '🧗🏽'
    },
    {
        title: 'Music',
        emoji: '🎶'
    },
    {
        title: 'Fitness',
        emoji: '🏋🏼‍♀️'
    },
    {
        title: 'Reading',
        emoji: '‍📚️'
    }
]

export const AboutSection = () => {
  return (
      <div className="py-20">
          <div>
              <SectionHeader title="A Glimps Into My World" eyebrow="About Me" description="Learn more about who I am, what I do and what inspires me." />
              <div className="mt-20">
                  <Card>
                      <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." />
                      <div>
                          {toolBoxItems.map(item => (
                              <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                                  <TechIcon component={item.iconType} />
                                  <span className="font-semibold">{item.title}</span>
                              </div>
                          ))}
                      </div>
                  </Card>
                  <Card>
                      <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." />
                      <div>
                          {hobbies.map(hobby => (
                              <div key={hobby.title}>
                                  <span>{hobby.title}</span>
                                  <span>{hobby.emoji}</span>
                              </div>
                          ))}
                      </div>
                  </Card>
                  <Card>
                      <Image src={mapImage} alt={"map"} />
                      <Image src={memojiGirl} alt={"girl memoji"} />
                  </Card>
              </div>
          </div>
      </div>
  );
};
