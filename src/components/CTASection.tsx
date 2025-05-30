
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

export const CTASection = () => {
  const benefits = [
    "24/7 expert support",
    "Scalable cloud infrastructure",
    "Enterprise-grade security",
    "99.9% uptime guarantee",
    "Transparent pricing"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Cloud Technology?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Join thousands of businesses that trust NUBEX Cloud for their mission-critical infrastructure.
              Get started today with a free consultation.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="bg-white/20 rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Schedule a Free Consultation</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full p-3 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-blue-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full p-3 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-blue-100"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full p-3 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-blue-100"
                ></textarea>
              </div>
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                Request Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
