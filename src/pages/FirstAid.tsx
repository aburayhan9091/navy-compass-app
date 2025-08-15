import { ArrowLeft, Heart, Plus, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FirstAid = () => {
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
        <h1 className="text-white font-bold text-lg">First Aid</h1>
      </header>

      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <Heart className="text-red-600" size={48} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy-primary text-center mb-6">
            Naval First Aid Procedures
          </h2>

          <div className="space-y-6">
            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <Plus className="text-red-500 mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">Basic Life Support</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Check for consciousness and breathing</li>
                <li>• Perform CPR if necessary</li>
                <li>• Control bleeding with direct pressure</li>
                <li>• Treat for shock</li>
              </ul>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <Phone className="text-green-500 mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">Emergency Contacts</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between p-2 bg-muted rounded">
                  <span>Medical Officer</span>
                  <span className="font-mono">Ext: 999</span>
                </div>
                <div className="flex justify-between p-2 bg-muted rounded">
                  <span>Sick Bay</span>
                  <span className="font-mono">Ext: 100</span>
                </div>
                <div className="flex justify-between p-2 bg-muted rounded">
                  <span>Emergency Response</span>
                  <span className="font-mono">Ext: 911</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border">
              <h3 className="font-semibold text-navy-primary mb-3">First Aid Kit Contents</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-muted p-2 rounded">Bandages</div>
                <div className="bg-muted p-2 rounded">Antiseptic</div>
                <div className="bg-muted p-2 rounded">Pain Relief</div>
                <div className="bg-muted p-2 rounded">Burn Gel</div>
                <div className="bg-muted p-2 rounded">Scissors</div>
                <div className="bg-muted p-2 rounded">Thermometer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAid;