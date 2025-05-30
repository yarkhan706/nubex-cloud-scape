
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Server, Layers, Database, Cpu, Package, Shield, Zap, Brain, Globe } from "lucide-react";

const Services = () => {
  const cloudTypes = [
    {
      icon: Cloud,
      title: "Public Cloud",
      description: "Scalable resources delivered over the internet, providing cost-effective solutions with pay-as-you-go pricing. Ideal for organizations wanting to minimize hardware investments.",
      features: ["Scalability on demand", "Cost-effective", "No hardware maintenance", "Quick deployment"]
    },
    {
      icon: Server,
      title: "Private Cloud",
      description: "Dedicated cloud infrastructure exclusively for a single organization, providing enhanced security and control for sensitive workloads and data-critical applications.",
      features: ["Enhanced security", "Regulatory compliance", "Complete control", "Customization"]
    },
    {
      icon: Layers,
      title: "Hybrid Cloud",
      description: "Combination of public and private cloud environments, allowing workloads to move between them based on changing needs, costs, and security requirements.",
      features: ["Best of both worlds", "Flexibility", "Cost optimization", "Risk mitigation"]
    }
  ];

  const serviceModels = [
    {
      icon: Database,
      title: "Infrastructure as a Service (IaaS)",
      description: "Virtual computing resources including servers, storage, and networking, giving you complete control over your infrastructure without hardware investments.",
      features: ["Virtual machines", "Storage solutions", "Networking resources", "Complete control over infrastructure"]
    },
    {
      icon: Cpu,
      title: "Platform as a Service (PaaS)",
      description: "Development and deployment environment in the cloud, allowing you to focus on application development without worrying about underlying infrastructure.",
      features: ["Development frameworks", "Database management", "Analytics services", "Serverless computing"]
    },
    {
      icon: Package,
      title: "Software as a Service (SaaS)",
      description: "Complete applications delivered over the web on a subscription basis, eliminating the need for installation, maintenance, and infrastructure management.",
      features: ["Subscription-based model", "No installation needed", "Automatic updates", "Accessible anywhere"]
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Cloud Security",
      description: "Comprehensive security solutions for cloud environments, including threat detection, encryption, access control, and compliance management."
    },
    {
      icon: Zap,
      title: "Edge Computing",
      description: "Process data closer to where it's generated for faster response times and reduced bandwidth usage, ideal for IoT and real-time applications."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cloud-based AI and ML services that enable businesses to analyze data, extract insights, and build intelligent applications without extensive expertise."
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Content Delivery Network for faster global distribution of your web content, reducing latency and improving user experience worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Comprehensive cloud solutions designed to transform your business infrastructure with security, scalability, and efficiency.
          </p>
        </div>
      </section>

      {/* Cloud Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cloud Deployment Types</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right cloud deployment model based on your security requirements, management preferences, and resource needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cloudTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                    <type.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6">{type.description}</p>
                  <div className="space-y-2">
                    {type.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Service Models</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Select the service model that aligns with your technical expertise, control requirements, and operational preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceModels.map((model, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="bg-teal-100 p-3 rounded-xl w-fit mb-4">
                    <model.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">{model.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6">{model.description}</p>
                  <div className="space-y-2">
                    {model.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enhance your cloud infrastructure with specialized services designed to address specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-4">
                    <service.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our cloud experts today to discuss your specific requirements and find the perfect solution for your business.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
