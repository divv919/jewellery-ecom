import "./styles.css";



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
          { name: "Facebook", url: "https://www.candere.com/media/home_page_images/social/facebook_color_1.svg", path: "/assets/svg/email-icon.svg" },
          { name: "Instagram", url: "https://www.candere.com/media/home_page_images/social/instagram_color_1.svg", path: "/assets/svg/phone-icon.svg" },
          { name: "Pinterest", url: "https://www.candere.com/media/home_page_images/social/pinterest_color_1.svg", path: "/assets/svg/location-icon.svg" },
        ],
      };
      
  return (
    <footer>
      <div className="footer-links-section">
        {footerData.map((item) => {
          return (
            <div className="col">
              <p className="footer-col-title">{item.title}
                ::after
              </p>
              {item.links.map((link) => {
                return (
                  <p className="footer-col-links" onClick={link.url}>
                    {link.name}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="footer-contact-section">
        <p className="footer-contact-title"><b>{contactDetails.title}</b></p>
        <div className="footer-contact-links">
        {contactDetails.links.map((link) => {
          return (
            <img
              className="footer-contact-link"
              src={link.url}
              onClick={link.path}
            />
          );
        })}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
