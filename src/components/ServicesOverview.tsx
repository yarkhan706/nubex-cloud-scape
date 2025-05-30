
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Server, Layers, Database, Cpu, Brain } from "lucide-react";

export const ServicesOverview = () => {
  const services = [
    {
      icon: Cloud,
      title: "Public Cloud",
      description: "Scalable and cost-effective cloud infrastructure with pay-as-you-use pricing.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Server,
      title: "Private Cloud",
      description: "Dedicated cloud environments for enhanced security and compliance.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Layers,
      title: "Hybrid Cloud",
      description: "Best of both worlds - combine public and private cloud seamlessly.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Database,
      title: "IaaS",
      description: "Infrastructure as a Service - virtual machines, storage, and networking.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Cpu,
      title: "PaaS",
      description: "Platform as a Service - complete development and deployment platform.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Brain,
      title: "AI & ML",
      description: "Artificial Intelligence and Machine Learning cloud services.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Cloud Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive cloud solutions designed to meet every business need,
            from startups to enterprise organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardHeader>
                <div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl w-fit mb-4`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
