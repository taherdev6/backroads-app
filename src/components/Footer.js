import { FooterLinks } from './data';
import { FooterSocialLinks } from './data';
const Footer = () => {
  return (
    <footer className="section footer">
      <FooterLinks />
      <FooterSocialLinks />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
