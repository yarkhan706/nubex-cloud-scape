
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Global E-commerce Platform Migration",
      description: "How we helped a major retailer move to the cloud and handle 10x traffic during peak seasons.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop",
      industry: "eCommerce"
    },
    {
      title: "Hybrid Cloud for Financial Services",
      description: "Implementing a secure hybrid cloud solution for a multinational bank with strict regulatory requirements.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop",
      industry: "Finance"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from real clients - see how NUBEX Cloud solutions drive business transformation.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={study.image}
                  alt={study.title}
                  className="rounded-xl shadow-lg w-full h-72 object-cover"
                />
              </div>
              <div>
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm rounded-full mb-4">
                  {study.industry}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{study.title}</h3>
                <p className="text-slate-600 mb-6">
                  {study.description}
                </p>
                <Button className="group flex items-center gap-2">
                  Read Case Study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
