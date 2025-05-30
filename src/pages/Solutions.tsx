
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  GraduationCap,
  DollarSign,
  PlayCircle,
  Building,
  Factory,
  Truck,
  Briefcase
} from "lucide-react";

const Solutions = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: "eCommerce",
      description: "High-performance cloud infrastructure to support your online retail platform, with scalability to handle traffic spikes during peak shopping seasons.",
      challenges: ["Traffic spikes during sales events", "Seamless payment processing", "Inventory management", "Personalized shopping experiences"],
      benefits: ["Auto-scaling resources during peak times", "PCI DSS compliant infrastructure", "Real-time inventory synchronization", "High availability"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant cloud solutions tailored for healthcare providers, ensuring patient data security while facilitating telemedicine and digital health initiatives.",
      challenges: ["HIPAA compliance", "Patient data security", "Electronic health records", "Telemedicine platform stability"],
      benefits: ["Compliant data storage and processing", "End-to-end encryption", "Secure API integrations", "Reliable telemedicine infrastructure"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Cloud platforms that support remote learning, student information systems, and collaboration tools for educational institutions of all sizes.",
      challenges: ["Remote learning infrastructure", "Digital classroom scaling", "Student data management", "Limited IT resources"],
      benefits: ["Scalable virtual classrooms", "Secure student information systems", "Cost-effective IT solutions", "Reliable remote learning tools"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=300&fit=crop"
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Secure and compliant cloud infrastructure for financial services and fintech companies, supporting high-frequency transactions and data analysis.",
      challenges: ["Regulatory compliance", "Transaction security", "High-frequency trading", "Fraud detection"],
      benefits: ["Compliant infrastructure", "Secure transaction processing", "Low-latency connections", "Advanced analytics capabilities"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
    },
    {
      icon: PlayCircle,
      title: "Media & Entertainment",
      description: "High-performance cloud solutions for media streaming, content delivery, and digital asset management with global reach and low latency.",
      challenges: ["Content delivery speed", "Global audience reach", "Large media file storage", "Streaming reliability"],
      benefits: ["Global CDN integration", "Optimized media storage", "Adaptive streaming capabilities", "Content protection"],
      image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=600&h=300&fit=crop"
    },
    {
      icon: Building,
      title: "Enterprise",
      description: "Comprehensive cloud solutions for large-scale enterprise operations, supporting digital transformation initiatives and legacy system migrations.",
      challenges: ["Legacy system integration", "Departmental silos", "Global operations", "Cost optimization"],
      benefits: ["Seamless hybrid solutions", "Enterprise-wide collaboration", "Global infrastructure", "Optimized operational costs"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Cloud solutions that power Industry 4.0 initiatives, including IoT integration, supply chain optimization, and predictive maintenance.",
      challenges: ["IoT device management", "Supply chain visibility", "Production optimization", "Quality control"],
      benefits: ["Real-time monitoring", "Predictive maintenance", "Supply chain integration", "Smart manufacturing"],
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&h=300&fit=crop"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Cloud-based logistics and supply chain solutions providing real-time tracking, route optimization, and inventory management.",
      challenges: ["Fleet management", "Route optimization", "Real-time tracking", "Inventory forecasting"],
      benefits: ["GPS integration", "AI-powered route planning", "Real-time visibility", "Predictive analytics"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Cloud solutions for consulting, legal, accounting, and other professional service firms to enhance collaboration and client service.",
      challenges: ["Client confidentiality", "Remote collaboration", "Document management", "Billing and time tracking"],
      benefits: ["Secure client portals", "Collaborative workspaces", "Automated document workflows", "Integrated time and billing"],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Tailored cloud solutions designed for the specific needs and challenges of different industries.
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {industries.map((industry, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="rounded-2xl shadow-xl w-full h-72 object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-3 rounded-xl">
                      <industry.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{industry.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">{industry.description}</p>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Key Challenges</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {industry.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          <span className="text-slate-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Our Solution Benefits</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {industry.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Don't See Your Industry?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our cloud solutions are adaptable to virtually any industry. Contact us to discuss your specific requirements and challenges,
                and we'll create a tailored solution that addresses your unique needs.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                  Contact Our Industry Experts
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Assessment</h4>
                    <p className="text-slate-600">We analyze your current infrastructure and business requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Strategy</h4>
                    <p className="text-slate-600">We develop a cloud strategy aligned with your business objectives.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Implementation</h4>
                    <p className="text-slate-600">We execute the migration or deployment with minimal disruption.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Optimization</h4>
                    <p className="text-slate-600">We continuously optimize your cloud environment for performance and cost.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
