import Image from "../Image/Image";
import "./styles.css";
const specialOfferBanners = [
  {
    src: "https://www.candere.com/media/home_page_images/bannerTop/LHS_180325.jpg",
    alt: "Special Offer Left Banner",
    redirectPath: "/diwali-offer-left", // Replace with the actual URL or path to redirect to
  },
  {
    src: "https://www.candere.com/media/home_page_images/bannerTop/RHS_180325.jpg",
    alt: "Special Offer Right Banner",
    redirectPath: "/diwali-offer-right", // Replace with the actual URL or path to redirect to
  },
];

export default function SpecialOffer() {
  if (!specialOfferBanners.length) return;

  return (
    <>
      <div className="special-offer-section">
        {specialOfferBanners.map((offer) => {
          return (
            <div className="special-offer-image">
              <Image src={offer.src} alt={offer.alt} />
            </div>
          );
        })}
      </div>
    </>
  );
}
