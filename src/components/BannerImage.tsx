import navyBanner from "@/assets/navy-banner.jpg";

const BannerImage = () => {
  return (
    <div className="w-full">
      <img 
        src={navyBanner} 
        alt="Bangladesh Navy Firefighting Training" 
        className="w-full h-48 md:h-64 object-cover"
      />
    </div>
  );
};

export default BannerImage;