import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
  return (
    <footer className="h-64 bg-dark-blue pt-10">
      <div className="w-10/12 mx-auto">
        {/* <SocialMediaIcons />*/}
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-LG text-2xl text-yellow">Pixeled Miley</p>
          <p className="font-Lora text-sm text-yellow">
            ©2023 MileyPixeled. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
