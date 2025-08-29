import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Dr. Berti has been instrumental in helping me work through my anxiety. Her compassionate approach and practical strategies have made a significant difference in my daily life. I finally feel like I have the tools to manage my stress effectively.",
      treatment: "Individual Therapy - Anxiety"
    },
    {
      name: "Michael & Jennifer R.",
      location: "Santa Monica, CA",
      rating: 5,
      text: "Our marriage was at a breaking point when we first met Dr. Berti. Through her guidance, we learned to communicate better and rebuild trust. We're now stronger than ever and can't thank her enough for helping us save our relationship.",
      treatment: "Couples Therapy"
    },
    {
      name: "David L.",
      location: "Beverly Hills, CA",
      rating: 5,
      text: "After struggling with depression for years, Dr. Berti helped me understand the root causes and develop coping strategies. Her evidence-based approach combined with genuine care made all the difference. I'm living a fuller life now.",
      treatment: "Individual Therapy - Depression"
    },
    {
      name: "The Johnson Family",
      location: "Pasadena, CA",
      rating: 5,
      text: "Dr. Berti helped our family navigate a difficult time when our teenager was struggling. Her family therapy sessions improved our communication and brought us closer together. We're grateful for her expertise and patience.",
      treatment: "Family Therapy"
    },
    {
      name: "Emma K.",
      location: "Manhattan Beach, CA",
      rating: 5,
      text: "The psychological assessment Dr. Berti conducted was thorough and insightful. Finally understanding my ADHD has been life-changing. Her recommendations have helped me succeed in ways I never thought possible.",
      treatment: "Psychological Assessment"
    },
    {
      name: "Robert S.",
      location: "West Hollywood, CA",
      rating: 5,
      text: "Dr. Berti's trauma-informed approach helped me process experiences I thought I'd never overcome. Her safe and supportive environment allowed me to heal at my own pace. I'm now able to move forward with confidence.",
      treatment: "Trauma Therapy"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from clients who have experienced positive transformation through therapy.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center shadow-soft bg-gradient-card border-0">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Clients Served</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-soft bg-gradient-card border-0">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-soft bg-gradient-card border-0">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-medium bg-gradient-card border-0 hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                      {testimonial.treatment}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block shadow-medium bg-gradient-card border-0 p-8">
            <CardContent className="p-0">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Join hundreds of clients who have found healing and growth through compassionate, professional therapy.
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">* Client names have been changed to protect privacy</p>
                <p>All testimonials are from actual clients with written consent</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;