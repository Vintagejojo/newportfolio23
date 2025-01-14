import React from 'react';
import AnimatedText from './common/AnimateText';

const stats = [
  { stat: 'HTML' },
  { stat: 'CSS' },
  { stat: 'Bootstrap' },
  { stat: 'Tailwind' },
  { stat: 'Javascript' },
  { stat: 'TypeScript' },
  { stat: 'Node' },
  { stat: 'Git/Github' },
  { stat: 'Express' },
  { stat: 'MongoDB' },
  { stat: 'MySQL' },
  { stat: 'React/React Native' },
  { stat: 'Next.Js' },
  { stat: 'Python' },
  { stat: 'Go' },
];

export default function AboutMe() {
  return (
    <section id="about_me">
      <div className="my-10 md:pb-48">
        <h1 className="mb-12 sm:mb-8 text-center text-generalbg font-bold text-4xl">
          Get to know me....
          <hr className="w-20 h-1 my-4 mx-auto bg-slate-500 border-0 rounded" />
        </h1>
        <div className="flex flex-row md:flex-col justify-center align-top items-stretch">
          <div className="sm:w-1/2 md:w-full md:mb-12">
            <h2 className="text-2xl font-bold mb-8 sm:mb-4 text-center text-generalbg">
              About
            </h2>
            <p>
              I am an
              <span className="font-extrabold text-royalPurple">
                {' '}
                aspiring{' '}
              </span>{' '}
              and
              <span className="font-extrabold text-royalPurple">
                {' '}
                attentive{' '}
              </span>{' '}
              web developer who likes to
              <span className="font-extrabold text-royalPurple">
                {' '}
                tinker.{' '}
              </span>{' '}
              Equal parts Herbalist and Technocrat.
            </p>
            <br />
            <br />
            <p>
              <span className="font-extrabold text-royalPurple">
                {' '}
                USAF Veteran{' '}
              </span>{' '}
              and Gulf States dweller, I've been involved with all things
              computer and tech for the better part of a decade and a half. With
              a passion for coding and
              <span className="font-extrabold text-royalPurple">
                {' '}
                continuous learning
              </span>{' '}
              , I thrive on tackling new challenges and staying at the cutting
              edge of technology.
            </p>
          </div>
          <div className="sm:w-1/2 md:w-full">
            <h2 className="text-2xl font-bold mb-8 sm:mb-4 text-center">
              Skills
            </h2>
            <div className="flex flex-wrap flex-row justify-center sm:justify-start">
              {stats.map((item, idx) => (
                <AnimatedText
                  key={idx}
                  text={item.stat}
                  className="bg-royalPurple px-4 py-2 mr-2 mt-2 font-mono text-electricBlue rounded font-semibold"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
