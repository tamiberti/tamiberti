import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Users, Award } from "lucide-react";
import profileImage from "@/assets/tami-berti-profile.jpg";

const About = () => {
  const specializations = [
    "Anxiety & Depression",
    "Trauma Therapy",
    "Couples Counseling",
    "Cognitive Behavioral Therapy",
    "Mindfulness-Based Therapy",
    "Family Therapy"
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every client receives personalized attention in a safe, non-judgmental environment."
    },
    {
      icon: Brain,
      title: "Evidence-Based Practice",
      description: "Using scientifically proven therapeutic approaches for optimal outcomes."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Working together to develop strategies that fit your unique needs and goals."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Committed to ongoing education and maintaining the highest professional standards."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Dr. Tami Berti
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to helping individuals and families navigate life's challenges with compassion and expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img
                src={profileImage}
                alt="Dr. Tami Berti - Professional Psychologist"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Floating Quote */}
            <Card className="absolute -bottom-8 -right-8 max-w-xs shadow-strong bg-card">
              <CardContent className="p-6">
                <p className="italic text-muted-foreground mb-2">
                  "Mental health is not a destination, but a process of growth and self-discovery."
                </p>
                <p className="font-semibold text-primary">- Dr. Tami Berti</p>
              </CardContent>
            </Card>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-playfair text-3xl font-semibold text-foreground">
                Your Partner in Mental Wellness
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of experience in clinical psychology, I am committed to providing 
                compassionate, evidence-based therapy that honors the unique journey of each individual.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach integrates various therapeutic modalities, always tailored to meet your 
                specific needs and goals. I believe in creating a safe, supportive environment where 
                healing and growth can flourish.
              </p>
            </div>

            {/* Specializations */}
            <div>
              <h4 className="font-semibold text-xl text-foreground mb-4">Areas of Specialization</h4>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-secondary/20 text-secondary-dark border-secondary/30"
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Education & Credentials */}
            <div className="bg-accent/30 p-6 rounded-xl">
              <h4 className="font-semibold text-xl text-foreground mb-4">Education & Credentials</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ph.D. in Clinical Psychology, University of California</li>
                <li>• Licensed Clinical Psychologist (License #PSY12345)</li>
                <li>• Member, American Psychological Association</li>
                <li>• Certified in Trauma-Informed Care</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="font-playfair text-3xl font-semibold text-center text-foreground mb-12">
            My Approach to Therapy
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft bg-gradient-card border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;