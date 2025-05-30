
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, GraduationCap, DollarSign, PlayCircle, Building } from "lucide-react";

export const SolutionsGrid = () => {
  const solutions = [
    {
      icon: ShoppingCart,
      title: "eCommerce",
      description: "Scalable cloud infrastructure for online retail platforms with high availability and performance.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant cloud solutions for healthcare providers and medical institutions.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Cloud platforms for educational institutions, enabling remote learning and collaboration.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop"
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Secure and compliant cloud infrastructure for financial services and fintech companies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      icon: PlayCircle,
      title: "Media",
      description: "High-performance cloud solutions for media streaming and content delivery.",
      image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=400&h=250&fit=crop"
    },
    {
      icon: Building,
      title: "Enterprise",
      description: "Comprehensive cloud solutions for large-scale enterprise operations and digital transformation.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tailored cloud solutions for every industry, designed to meet specific
            compliance requirements and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                  <solution.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/solutions">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Explore All Solutions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
