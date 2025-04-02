import "./styles.css"
import Image from "../Image/Image";
const professionalBanners = [
    {
      src: "https://www.candere.com/media/home_page_images/bannerPromo/Solitaire-banner_270225.jpg",
      alt: "Special Offer Right Banner",
      redirectPath: "/diwali-offer-right" // Replace with the actual URL or path to redirect to
    },
    {
        src: "    https://www.candere.com/media/home_page_images/store/store_180225.jpg",
        alt: "Special Offer Right Banner",
        redirectPath: "/diwali-offer-right" // Replace with the actual URL or path to redirect to
      },
 
  ];
export default  function PromotionalBanner(){
    return <>
    <div className="professional-banner-section">
        {professionalBanners.map((banner)=>{
            return(
                <div className="professional-banner-image">
                    <Image src={banner.src} alt={banner.alt} />
                </div>
            )
        })}
    </div>
    </>
}


