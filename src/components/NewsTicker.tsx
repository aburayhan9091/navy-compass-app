import { useEffect, useState } from "react";

const NewsTicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateBangla = (date: Date) => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const englishDate = date.toLocaleDateString('en-BD');
    return englishDate.split('').map(char => 
      /\d/.test(char) ? banglaDigits[parseInt(char)] : char
    ).join('');
  };

  const newsItems = [
    "Recruitment Notice 2024",
    "List of Selected Candidates",
    "Training Schedule Update",
    "Safety Protocol Guidelines",
    "Naval Exercise Updates"
  ];

  return (
    <div className="w-full bg-background">
      <div className="flex items-center overflow-hidden bg-muted py-2">
        <div className="news-ticker flex-shrink-0 px-3">
          Flash News
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="ticker-scroll flex space-x-8 whitespace-nowrap">
            {newsItems.map((item, index) => (
              <span key={index} className="text-navy-primary font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 py-2 text-sm text-muted-foreground">
        <span className="font-medium">Date: </span>
        <span>{formatDateBangla(currentDate)} | {currentDate.toLocaleDateString('en-BD')}</span>
      </div>
    </div>
  );
};

export default NewsTicker;