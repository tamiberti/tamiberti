import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Ph.D. in Clinical Psychology",
      institution: "University of California, Los Angeles",
      year: "2008",
      details: "Dissertation: Cognitive-Behavioral Interventions for Anxiety Disorders"
    },
    {
      degree: "M.A. in Psychology",
      institution: "University of California, Los Angeles",
      year: "2005",
      details: "Emphasis in Clinical Psychology and Research Methods"
    },
    {
      degree: "B.A. in Psychology",
      institution: "Stanford University",
      year: "2003",
      details: "Magna Cum Laude, Phi Beta Kappa"
    }
  ];

  const experience = [
    {
      position: "Clinical Psychologist",
      organization: "Private Practice",
      period: "2010 - Present",
      responsibilities: [
        "Provide individual, couples, and family therapy",
        "Conduct psychological assessments and evaluations",
        "Develop and implement treatment plans",
        "Maintain active caseload of 25-30 clients"
      ]
    },
    {
      position: "Senior Clinical Psychologist",
      organization: "Wellness Center of California",
      period: "2008 - 2010",
      responsibilities: [
        "Led multidisciplinary treatment team",
        "Supervised doctoral psychology interns",
        "Developed treatment protocols for anxiety disorders",
        "Conducted group therapy sessions"
      ]
    },
    {
      position: "Psychology Intern",
      organization: "UCLA Medical Center",
      period: "2007 - 2008",
      responsibilities: [
        "Provided therapy in inpatient psychiatric unit",
        "Conducted neuropsychological assessments",
        "Participated in case consultations",
        "Completed 2000+ hours of supervised practice"
      ]
    }
  ];

  const certifications = [
    "Licensed Clinical Psychologist - California (PSY12345)",
    "Certified Trauma-Informed Care Practitioner",
    "EMDR Therapy Certification",
    "Cognitive Behavioral Therapy Certification",
    "Couples Therapy Certification (Gottman Method)"
  ];

  const publications = [
    "Berti, T. (2019). Mindfulness-Based Interventions for Anxiety: A Meta-Analysis. Journal of Clinical Psychology, 75(8), 1432-1448.",
    "Berti, T., & Johnson, M. (2018). The Effectiveness of CBT in Treating Depression: A 10-Year Follow-Up Study. Psychological Review, 42(3), 256-271.",
    "Berti, T. (2017). Integrating Technology in Modern Therapy Practice. American Psychologist, 72(5), 389-402."
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Background
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 15 years of dedicated experience in clinical psychology, research, and therapeutic practice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="shadow-medium bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-playfair text-foreground">
                <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary/30 pl-6">
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                  <p className="text-sm text-muted-foreground italic">{edu.details}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card className="shadow-medium bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-playfair text-foreground">
                <Briefcase className="w-6 h-6 mr-3 text-primary" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-secondary/30 pl-6">
                  <h3 className="font-semibold text-foreground">{exp.position}</h3>
                  <p className="text-secondary font-medium">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications & Licenses */}
          <Card className="shadow-medium bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-playfair text-foreground">
                <Award className="w-6 h-6 mr-3 text-primary" />
                Certifications & Licenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm py-2 px-4 border-primary/30 text-primary w-full justify-start"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Publications & Research */}
          <Card className="shadow-medium bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-playfair text-foreground">
                <BookOpen className="w-6 h-6 mr-3 text-primary" />
                Recent Publications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div key={index} className="p-4 bg-accent/20 rounded-lg">
                    <p className="text-sm text-muted-foreground leading-relaxed">{pub}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Memberships */}
        <Card className="mt-8 shadow-medium bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-xl font-playfair text-foreground text-center">
              Professional Memberships & Affiliations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="font-medium text-foreground">American Psychological Association</p>
                <p className="text-sm text-muted-foreground">Member since 2008</p>
              </div>
              <div className="p-4">
                <p className="font-medium text-foreground">California Psychological Association</p>
                <p className="text-sm text-muted-foreground">Active Member</p>
              </div>
              <div className="p-4">
                <p className="font-medium text-foreground">International Association of Therapists</p>
                <p className="text-sm text-muted-foreground">Board Member</p>
              </div>
              <div className="p-4">
                <p className="font-medium text-foreground">Trauma-Informed Care Consortium</p>
                <p className="text-sm text-muted-foreground">Certified Practitioner</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;