import * as React from "react";
import { Globe } from "~/components/Decoration";

const MyStory: React.FC = ({}) => {
  return (
    <div className="my-story-wrapper flex flex-col items-baseline w-full text-textSmColor">
      <span className="my-story-title reveal-text text-textLgColor leading-none relative after:pointer-events-none py-4 font-extrabold whitespace-nowrap cursor-default after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl">
        My story
      </span>
      <div className="fade-in-text my-story-content md:mt-2 flex flex-col sm:flex-row items-center">
        <p className="my-4 text-lg xs:mb-8 sm:w-4/5 leading-7 text-text-SmColor">
          I was born and raised in Thanh Hoa, Vietnam. When I was 18, I came to
          Ha Noi to study at Hanoi University of Technology. After leaving
          university, I worked again in a mechanical workshop as a design
          engineer for about 2 years , but I really don't like this job. I quit
          my job and started my intensive front-end programming journey.
        </p>
        <Globe />
      </div>
      <div className="spacer-div mb-10 sm:mb-0"></div>
      <MyselfCard />
    </div>
  );
};

export default MyStory;

const MyselfCard: React.FC = () => {
  return (
    <div className="myself-card px-8 pt-6 w-full overflow-visible relative custom2:w-4/5">
      <div className="my-hobbies">
        <h2 className="text-2xl font-medium mb-2">A little bit about me</h2>
        <p className=" text-base text-subText leading-7">
          In my free time, I like to watch Youtube, and playing games. My
          favorite youtubers are Play Maker, Tôi đi code dạo .Some games I
          usually play are Dota2, Yugi-Oh Duel links, and Chess.
        </p>
        <div className="pb-6"></div>
      </div>
    </div>
  );
};
