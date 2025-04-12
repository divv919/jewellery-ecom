import "./styles.css";
import { Link } from "react-router-dom";

function Footer() {
  const footerData = [
    {
      title: "About Us",
      links: [
        { name: "Know About Us", url: "/about/know" },
        { name: "Our Team", url: "/about/team" },
        { name: "Careers", url: "/about/careers" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Design", url: "/services/web-design" },
        { name: "SEO", url: "/services/seo" },
        { name: "Digital Marketing", url: "/services/digital-marketing" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", url: "/support/faq" },
        { name: "Customer Service", url: "/support/service" },
        { name: "Live Chat", url: "/support/chat" },
      ],
    },
  ];

  const contactDetails = {
    title: "Contact Us",
    links: [
      {
        name: "Facebook",
        url: "https://www.candere.com/media/home_page_images/social/facebook_color_1.svg",
        path: "/assets/svg/email-icon.svg",
      },
      {
        name: "Instagram",
        url: "https://www.candere.com/media/home_page_images/social/instagram_color_1.svg",
        path: "/assets/svg/phone-icon.svg",
      },
      {
        name: "Pinterest",
        url: "https://www.candere.com/media/home_page_images/social/pinterest_color_1.svg",
        path: "/assets/svg/location-icon.svg",
      },
    ],
  };

  return (
    <footer>
      <div className="footer-links-section">
        {footerData.map((item, index) => {
          return (
            <div className="col" key={index}>
              <p className="footer-col-title">{item.title}</p>
              <div className="footer-col-links">
                {item.links.map((link, index) => {
                  return (
                    <Link key={index} className="footer-col-link" to={link.url}>
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer-contact-section">
        <p className="footer-contact-title">
          <b>{contactDetails.title}</b>
        </p>
        <div className="footer-contact-links">
          {contactDetails.links.map((link, index) => {
            return (
              <Link to={link.path} className="footer-contact-link" key={index}>
                <img src={link.url} alt={link.name} />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
