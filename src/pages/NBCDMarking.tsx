import { ArrowLeft, Shield, AlertTriangle, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NBCDMarking = () => {
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
        <h1 className="text-white font-bold text-lg">NBCD Marking</h1>
      </header>

      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-yellow-100 p-4 rounded-full">
              <Shield className="text-yellow-600" size={48} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy-primary text-center mb-6">
            Nuclear, Biological & Chemical Defense
          </h2>

          <div className="space-y-6">
            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <AlertTriangle className="text-yellow-500 mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">Threat Identification</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                  <h4 className="font-medium text-red-700">Nuclear</h4>
                  <p className="text-sm text-red-600">Radiation detection and protection protocols</p>
                </div>
                <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                  <h4 className="font-medium text-green-700">Biological</h4>
                  <p className="text-sm text-green-600">Biological agent identification and containment</p>
                </div>
                <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                  <h4 className="font-medium text-blue-700">Chemical</h4>
                  <p className="text-sm text-blue-600">Chemical warfare agent detection and neutralization</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <Eye className="text-purple-500 mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">Detection Equipment</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Radiation detectors and dosimeters</li>
                <li>• Chemical agent monitors</li>
                <li>• Biological detection kits</li>
                <li>• Personal protective equipment</li>
              </ul>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border">
              <h3 className="font-semibold text-navy-primary mb-3">Response Levels</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-green-100 rounded">
                  <span className="text-sm font-medium">DEFCON 5</span>
                  <span className="text-green-700">Lowest State</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-yellow-100 rounded">
                  <span className="text-sm font-medium">DEFCON 3</span>
                  <span className="text-yellow-700">Increased Watch</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-red-100 rounded">
                  <span className="text-sm font-medium">DEFCON 1</span>
                  <span className="text-red-700">Maximum Alert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NBCDMarking;