
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, Zap, Target, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    { icon: Shield, title: "Security", description: "Ensuring the highest level of data protection and privacy." },
    { icon: Users, title: "Customer Focus", description: "Putting our clients' needs at the center of everything we do." },
    { icon: Zap, title: "Innovation", description: "Continuously exploring new technologies and solutions." },
    { icon: Target, title: "Excellence", description: "Striving for excellence in every aspect of our service." },
    { icon: Heart, title: "Integrity", description: "Operating with honesty, transparency, and ethical standards." },
    { icon: Award, title: "Quality", description: "Delivering reliable, high-performance cloud services." }
  ];

  const team = [
    { name: "Alex Thompson", title: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face" },
    { name: "Sarah Chen", title: "CTO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" },
    { name: "Marcus Wilson", title: "VP of Engineering", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" },
    { name: "Priya Sharma", title: "Director of Sales", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face" }
  ];

  const partners = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "DataSystems", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "CloudNet", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "SecureTech", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NUBEX Cloud</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Leading cloud services provider empowering businesses with innovative, secure, and scalable cloud solutions since 2009.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                To democratize cloud technology and empower businesses of all sizes with
                enterprise-grade cloud solutions that drive innovation and growth.
              </p>
              <p className="text-lg text-slate-600">
                We believe that cloud technology should be accessible, secure, and transformative
                for every organization, regardless of size or industry.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 mb-6">
                To be the global leader in cloud services, recognized for innovation, reliability,
                and customer-centric solutions that help businesses thrive in the digital era.
              </p>
              <p className="text-lg text-slate-600">
                We envision a world where cloud technology enables businesses to focus on what
                matters most - delivering value to their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Core principles that guide everything we do at NUBEX Cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the team driving innovation and excellence at NUBEX Cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative">
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex space-x-4 text-white">
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-slate-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Alliances */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Partners</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic alliances that enhance our cloud service offerings.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion for cloud technology and innovation.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            View Career Opportunities
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
