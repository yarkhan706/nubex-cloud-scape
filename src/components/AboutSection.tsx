
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    { icon: Users, label: "Active Clients", value: "10,000+" },
    { icon: Globe, label: "Data Centers", value: "50+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: TrendingUp, label: "Uptime Guarantee", value: "99.9%" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About NUBEX Cloud
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            For over 15 years, NUBEX Cloud has been at the forefront of cloud innovation,
            helping businesses transform their operations with cutting-edge cloud solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h3>
            <p className="text-slate-600 mb-6">
              To democratize cloud technology and make enterprise-grade cloud services accessible
              to businesses of all sizes. We believe that every organization deserves reliable,
              secure, and scalable cloud infrastructure.
            </p>
            <p className="text-slate-600">
              Our comprehensive suite of cloud services spans across public, private, and hybrid
              cloud solutions, enabling businesses to choose the perfect infrastructure that
              matches their unique requirements and growth trajectory.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
              alt="Team collaboration"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-3 rounded-xl w-fit mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
