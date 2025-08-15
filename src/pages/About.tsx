import { ArrowLeft, Info, Smartphone, Users, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
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
        <h1 className="text-white font-bold text-lg">About App</h1>
      </header>

      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Smartphone className="text-blue-600" size={48} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy-primary text-center mb-6">
            Bangladesh Navy Mobile App
          </h2>

          <div className="space-y-6">
            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <Info className="text-blue-500 mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">App Information</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Version:</strong> 1.0.0</p>
                <p><strong>Developer:</strong> Bangladesh Navy IT Department</p>
                <p><strong>Platform:</strong> Web & Mobile</p>
                <p><strong>Last Updated:</strong> August 2024</p>
              </div>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <Users className="text-green-500 mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">Features</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Fire Fighting Training Guidelines</li>
                <li>• Damage Control Procedures</li>
                <li>• First Aid Emergency Protocols</li>
                <li>• NBCD Defense Information</li>
                <li>• Naval History and Heritage</li>
                <li>• News Updates and Announcements</li>
              </ul>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border">
              <div className="flex items-center mb-3">
                <Mail className="text-purple-500 mr-2" size={20} />
                <h3 className="font-semibold text-navy-primary">Contact Support</h3>
              </div>
              <div className="space-y-2">
                <div className="p-2 bg-muted rounded">
                  <strong>Email:</strong> support@bangladeshnavy.mil.bd
                </div>
                <div className="p-2 bg-muted rounded">
                  <strong>Phone:</strong> +880-2-9563333
                </div>
                <div className="p-2 bg-muted rounded">
                  <strong>Address:</strong> Naval Headquarters, Dhaka
                </div>
              </div>
            </div>

            <div className="bg-card p-4 rounded-lg shadow-md border text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 Bangladesh Navy. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                This application is developed for official use by Bangladesh Navy personnel and authorized users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;