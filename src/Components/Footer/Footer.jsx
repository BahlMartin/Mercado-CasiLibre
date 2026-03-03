import './Footer.css';
import FooterLinks from './FooterLinks/FooterLinks';
import FooterBottom from './FooterBottom/FooterBottom';

export default function Footer() {
  return (
    <footer className="nav-footer">
      <FooterLinks />
      <FooterBottom />
    </footer>
  );
}
