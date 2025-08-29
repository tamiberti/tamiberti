import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, Heart, Brain, Calendar, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Individual Therapy",
      duration: "50 minutes",
      price: "$150",
      description: "One-on-one sessions focused on your personal goals and challenges.",
      features: [
        "Anxiety and depression treatment",
        "Trauma-informed therapy",
        "Cognitive behavioral therapy",
        "Mindfulness-based interventions"
      ]
    },
    {
      icon: Users,
      title: "Couples Therapy",
      duration: "60 minutes",
      price: "$200",
      description: "Strengthen your relationship through improved communication and understanding.",
      features: [
        "Communication skills training",
        "Conflict resolution strategies",
        "Intimacy and connection building",
        "Pre-marital counseling"
      ]
    },
    {
      icon: Heart,
      title: "Family Therapy",
      duration: "60 minutes",
      price: "$180",
      description: "Address family dynamics and improve relationships within the family system.",
      features: [
        "Parent-child relationship issues",
        "Blended family challenges",
        "Adolescent behavioral concerns",
        "Family communication patterns"
      ]
    },
    {
      icon: Brain,
      title: "Psychological Assessment",
      duration: "2-3 hours",
      price: "$400",
      description: "Comprehensive evaluation to understand cognitive and emotional functioning.",
      features: [
        "ADHD and learning disability assessment",
        "Personality assessment",
        "Cognitive evaluation",
        "Treatment planning recommendations"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive mental health services tailored to meet your unique needs and support your journey toward wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-medium bg-gradient-card border-0 hover:shadow-strong transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-playfair text-foreground">{service.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                        <div className="text-primary font-semibold text-lg">
                          {service.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">What's included:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full mt-6 bg-primary hover:bg-primary-dark text-primary-foreground"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-accent/20 rounded-2xl p-8 text-center">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
            Flexible Scheduling & Insurance
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Appointment Times</h4>
              <p className="text-muted-foreground">Evening and weekend appointments available to accommodate your schedule.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Insurance Accepted</h4>
              <p className="text-muted-foreground">Most major insurance plans accepted. We'll help verify your coverage.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Telehealth Options</h4>
              <p className="text-muted-foreground">Secure online sessions available for your convenience and comfort.</p>
            </div>
          </div>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
          >
            Contact for Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;