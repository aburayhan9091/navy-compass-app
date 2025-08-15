import { ArrowLeft, Flame, AlertTriangle, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FireFighting = () => {
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
        <h1 className="text-white font-bold text-lg">Fire Fighting</h1>
      </header>

      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <Flame className="text-red-600" size={48} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy-primary text-center mb-6">
            Naval Fire Fighting Training
          </h2>

          <div className="space-y-6">
            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <AlertTriangle className="text-orange-500 mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">Safety Protocols</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Always wear proper fire-resistant gear</li>
                <li>• Check equipment before deployment</li>
                <li>• Maintain clear communication channels</li>
                <li>• Follow evacuation procedures</li>
              </ul>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <Users className="text-blue-500 mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">Team Coordination</h3>
              </div>
              <p className="text-muted-foreground">
                Effective fire fighting requires seamless coordination between team members. 
                Each personnel has specific roles and responsibilities during emergency response.
              </p>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border">
              <h3 className="font-semibold text-navy-primary mb-3">Equipment Types</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-muted p-2 rounded">Water Cannons</div>
                <div className="bg-muted p-2 rounded">Foam Systems</div>
                <div className="bg-muted p-2 rounded">CO2 Extinguishers</div>
                <div className="bg-muted p-2 rounded">Protective Gear</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireFighting;