import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        {/* <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div> */}
        <div className="flex items-center gap-x-8 mt-6 h-8">
          {/* <a
            aria-label="github"
            href={socialMedia.github}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            aria-label="linkedin"
            href={socialMedia.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            aria-label="twitter"
            href={socialMedia.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
            </svg>
          </a> */}
          {/* lets only include discord for now: https://discord.gg/u6QDSz8A */}
          <a
            aria-label="discord"
            href={socialMedia.discord}
            target="_blank"
            rel="noreferrer"
          >
            {/* <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 245 240"
            >
              <path d="M122.5 0C54.9 0 0 54.9 0 122.5S54.9 245 122.5 245 245 190.1 245 122.5 190.1 0 122.5 0zm0 226.4c-59.8 0-108.4-48.6-108.4-108.4 0-59.8 48.6-108.4 108.4-108.4 59.8 0 108.4 48.6 108.4 108.4 0 59.8-48.6 108.4-108.4 108.4zm-1.4-64.8c-18.7 0-33.9-15.2-33.9-33.9s15.2-33.9 33.9-33.9 33.9 15.2 33.9 33.9-15.2 33.9-33.9 33.9zm0-54.9c-11.8 0-21.4 9.6-21.4 21.4s9.6 21.4 21.4 21.4 21.4-9.6 21.4-21.4-9.6-21.4-21.4-21.4zM95.6 95.6c-18.7 0-33.9-15.2-33.9-33.9s15.2-33.9 33.9-33.9 33.9 15.2 33.9 33.9-15.2 33.9-33.9 33.9zm0-54.9c-11.8 0-21.4 9.6-21.4 21.4s9.6 21.4 21.4 21.4 21.4-9.6 21.4-21.4-9.6-21.4-21.4-21.4zM149.4 95.6c-18.7 0-33.9-15.2-33.9-33.9s15.2-33.9 33.9-33.9 33.9 15.2 33.9 33.9-15.2 33.9-33.9 33.9zm0-54.9c-11.8 0-21.4 9.6-21.4 21.4s9.6 21.4 21.4 21.4 21.4-9.6 21.4-21.4-9.6-21.4-21.4-21.4z" />
            </svg> */}
            {/* not quite the svg, here is the correct svg path i found online: */}
            {/* <path xmlns="http://www.w3.org/2000/svg" opacity="1" fill="#1E3050" d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/> */}
            {/* so lets make this into an svg */}
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 245 240"
            >
              <path d="M122.5 0C54.9 0 0 54.9 0 122.5S54.9 245 122.5 245 245 190.1 245 122.5 190.1 0 122.5 0zm0 226.4c-59.8 0-108.4-48.6-108.4-108.4 0-59.8 48.6-108.4 108.4-108.4 59.8 0 108.4 48.6 108.4 108.4 0 59.8-48.6 108.4-108.4 108.4zm-1.4-64.8c-18.7 0-33.9-15.2-33.9-33.9s15.2-33.9 33.9-33.9 33.9 15.2 33.9 33.9-15.2 33.9-33.9 33.9zm0-54.9c-11.8 0-21.4 9.6-21.4 21.4s9.6 21.4 21.4 21.4 21.4-9.6 21.4-21.4-9.6-21.4-21.4-21.4zM95.6 95.6c-18.7 0-33.9-15.2-33.9-33.9s15.2-33.9 33.9-33.9 33.9 15.2 33.9 33.9-15.2 33.9-33.9 33.9zm0-54.9c-11.8 0-21.4 9.6-21.4 21.4s9.6 21.4 21.4 21.4 21.4-9.6 21.4-21.4-9.6-21.4-21.4-21.4zM149.4 95.6c-18.7 0-33.9-15.2-33. 9s15.2-33.9 33.9-33.9 33.9 15.2 33.9 33.9-15.2 33.9-33.9 33.9zm0-54.9c-11.8 0-21.4 9.6-21.4 21.4s9.6 21.4 21.4 21.4 21.4-9.6 21.4-21.4-9.6-21.4-21.4-21.4z" />
            </svg>
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            Credit to {' '}
            <a href="https://github.com/issaafalkattan" rel="nofollow">
              Issaaf Kattan
            </a> for building this sick template!
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;