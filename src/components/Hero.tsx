
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Cloud Solutions
              <span className="block bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Built for Growth
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Transform your business with NUBEX Cloud's comprehensive suite of cloud services.
              From public to private cloud solutions, we provide the infrastructure you need to scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-3 w-full sm:w-auto">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="px-8 py-3 w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">Scalable</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">Secure</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">Fast</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                alt="Cloud Technology"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-blue-600/20 to-teal-500/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
