import { Link } from "react-router-dom";
import { footerLinks } from "../utils/constants";

const Footer = () => (
  <footer className="font-poiret text-primary bg-beige py-5">
    <div className="max-width flex max-md:flex-col flex-wrap
     justify-between gap-5 sm:px-16 px-6 py-16">
      <div className="flex flex-col justify-start items-start gap-2">
        <p className="text-lg border-b border-gray pb-2">Mirage candles</p>
        <p>Все права защищены &copy;</p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  to={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
