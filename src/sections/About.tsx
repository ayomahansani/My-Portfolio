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

export const AboutSection = () => {
  return (
      <div className="pb-96">
          <SectionHeader title="A Glimps Into My World" eyebrow="About Me" description="Learn more about who I am, what I do and what inspires me." />
          <div>
              <Card>
                  <div>
                      <StarIcon />
                      <h3>My Toolbox</h3>
                      <p>Explore the technologies and tools I use to craft exceptional digital experiences.</p>
                  </div>
                  <div>
                      {toolBoxItems.map(item => (
                          <div key={item.title}>
                              <TechIcon component={item.iconType} />
                              <span>{item.title}</span>
                          </div>
                      ))}
                  </div>
              </Card>

          </div>
      </div>
  );
};
