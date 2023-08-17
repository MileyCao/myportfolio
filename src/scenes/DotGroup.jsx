import AnchorLink from 'react-anchor-link-smooth-scroll';

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  {
    /*const selectedStyles = `relative bg-pink before:absolute before:w-6 before:h-6 before:rounded-full
before:border-2 before:border-pink before:left-[-50%] before:top-[-50%]`;*/
  }
  const selectedStyles = `bg-dark-blue duration-150 ease-in-out scale-150`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === 'home'
            ? selectedStyles
            : 'bg-dark-blue ease-in-out scale-75'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('home')}
      />
      <AnchorLink
        href="#work"
        className={`${
          selectedPage === 'work'
            ? selectedStyles
            : 'bg-dark-blue ease-in-out scale-75'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('work')}
      />

      <AnchorLink
        href="#skills"
        className={`${
          selectedPage === 'skills'
            ? selectedStyles
            : 'bg-dark-blue ease-in-out scale-75'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('skills')}
      />

      {/*<AnchorLink
        href="#projects"
        className={`${
          selectedPage === 'projects'
            ? selectedStyles
            : 'bg-dark-blue ease-in-out scale-75'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('projects')}
      />*/}

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === 'contact'
            ? selectedStyles
            : 'bg-dark-blue ease-in-out scale-75'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('contact')}
      />
    </div>
  );
};

export default DotGroup;
