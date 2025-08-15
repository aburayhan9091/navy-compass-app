import { ArrowLeft, Wrench, Ship, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DamageControl = () => {
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
        <h1 className="text-white font-bold text-lg">Damage Control</h1>
      </header>

      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Wrench className="text-blue-600" size={48} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy-primary text-center mb-6">
            Naval Damage Control Systems
          </h2>

          <div className="space-y-6">
            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <Ship className="text-navy-primary mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">Ship Integrity</h3>
              </div>
              <p className="text-muted-foreground">
                Maintaining structural integrity of naval vessels through preventive 
                maintenance and emergency repair procedures.
              </p>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <Settings className="text-gray-600 mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">Emergency Procedures</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Hull breach containment</li>
                <li>• Water ingress management</li>
                <li>• Structural reinforcement</li>
                <li>• System isolation protocols</li>
              </ul>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border">
              <h3 className="font-semibold text-navy-primary mb-3">Damage Assessment</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span className="text-sm">Minor Damage</span>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                  <span className="text-sm">Moderate Damage</span>
                  <span className="text-yellow-600 font-medium">Caution</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="text-sm">Severe Damage</span>
                  <span className="text-red-600 font-medium">Critical</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamageControl;