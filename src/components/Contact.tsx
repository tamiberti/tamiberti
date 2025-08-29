import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  MessageCircle,
  Shield,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    sessionType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredContact: 'email',
      sessionType: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to begin your journey toward better mental health? I'm here to help and answer any questions you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-medium bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Office Location</p>
                    <p className="text-muted-foreground">
                      1234 Wellness Blvd, Suite 200<br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Text messages welcome</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@tamiberti.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Office Hours</p>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Thursday: 9:00 AM - 7:00 PM</p>
                      <p>Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 3:00 PM</p>
                      <p className="text-sm">Evening appointments available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="shadow-medium bg-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-destructive mt-1" />
                  <div>
                    <p className="font-semibold text-destructive mb-2">Crisis Support</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      If you're experiencing a mental health emergency, please contact:
                    </p>
                    <div className="space-y-1 text-sm">
                      <p><strong>911</strong> - Emergency Services</p>
                      <p><strong>988</strong> - Suicide & Crisis Lifeline</p>
                      <p><strong>(855) 582-7474</strong> - LA County Crisis Line</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-foreground">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours to schedule a consultation.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone Call</option>
                        <option value="text">Text Message</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Type of Service Interested In
                    </label>
                    <select
                      name="sessionType"
                      value={formData.sessionType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select a service</option>
                      <option value="individual">Individual Therapy</option>
                      <option value="couples">Couples Therapy</option>
                      <option value="family">Family Therapy</option>
                      <option value="assessment">Psychological Assessment</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full"
                      placeholder="Tell me a bit about what brings you here and what you're hoping to work on..."
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="bg-accent/20 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium text-foreground mb-1">Your Privacy is Protected</p>
                        <p>
                          All communications are confidential and HIPAA compliant. This initial contact 
                          does not establish a therapist-client relationship.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <MessageCircle className="mr-2 w-4 h-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Calendar className="mr-2 w-4 h-4" />
                        Send Message & Request Consultation
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="shadow-soft bg-gradient-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Insurance & Payment</h3>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Aetna</Badge>
                      <Badge variant="outline" className="text-xs">Blue Cross</Badge>
                      <Badge variant="outline" className="text-xs">Cigna</Badge>
                      <Badge variant="outline" className="text-xs">UnitedHealth</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Self-pay and sliding scale options available
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft bg-gradient-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Getting Started</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Free 15-minute consultation call</li>
                    <li>• Comprehensive intake session</li>
                    <li>• Personalized treatment planning</li>
                    <li>• Flexible scheduling options</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;