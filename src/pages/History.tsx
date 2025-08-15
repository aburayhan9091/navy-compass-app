import { ArrowLeft, BookOpen, Calendar, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="navy-header w-full px-4 py-3 flex items-center">
        <button 
          onClick={() => navigate("/")}
          className="text-white mr-4 hover:scale-110 transition-transform"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-white font-bold text-lg">History of Bangladesh Navy</h1>
      </header>

      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <BookOpen className="text-blue-600" size={48} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy-primary text-center mb-6">
            A Legacy of Service and Honor
          </h2>

          <div className="space-y-6">
            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <Calendar className="text-blue-500 mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">Foundation</h3>
              </div>
              <p className="text-muted-foreground">
                The Bangladesh Navy was established in 1971 following the independence of Bangladesh. 
                It evolved from the naval forces that participated in the Liberation War.
              </p>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <Award className="text-gold-500 mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">Major Milestones</h3>
              </div>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium">1971 - Independence</h4>
                  <p className="text-sm text-muted-foreground">Formation during Liberation War</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium">1980s - Modernization</h4>
                  <p className="text-sm text-muted-foreground">Fleet expansion and training programs</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium">2000s - International Cooperation</h4>
                  <p className="text-sm text-muted-foreground">Peacekeeping missions and joint exercises</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border">
              <h3 className="font-semibold text-navy-primary mb-3">Core Values</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-navy-light p-3 rounded text-center">
                  <div className="font-semibold text-navy-primary">Honor</div>
                  <div className="text-sm text-muted-foreground">Upholding integrity in all actions</div>
                </div>
                <div className="bg-navy-light p-3 rounded text-center">
                  <div className="font-semibold text-navy-primary">Courage</div>
                  <div className="text-sm text-muted-foreground">Facing challenges with determination</div>
                </div>
                <div className="bg-navy-light p-3 rounded text-center">
                  <div className="font-semibold text-navy-primary">Commitment</div>
                  <div className="text-sm text-muted-foreground">Dedicated service to the nation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;