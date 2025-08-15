import Header from "@/components/Header";
import BannerImage from "@/components/BannerImage";
import NewsTicker from "@/components/NewsTicker";
import MainMenu from "@/components/MainMenu";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BannerImage />
      <NewsTicker />
      <MainMenu />
      <Footer />
    </div>
  );
};

export default Index;
