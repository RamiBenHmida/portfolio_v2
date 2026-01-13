import { useState } from "react";
import { Building2, Laptop, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Experience {
  id: string;
  type: "professional" | "freelance";
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  details: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: "1",
    type: "professional",
    title: "Machine Learning Engineer",
    company: "Technical University of Dortmund",
    location: "Dortmund, Germany",
    period: "08/2024 – 07/2025",
    description:
      "Developed and optimized deep learning models for ship detection and classification as part of academic research.",
    details: [
      "Developed a deep learning model for ship detection and classification achieving over 90% accuracy",
      "Evaluated model performance using precision, recall, F1-score, and confusion matrix to avoid misleading accuracy",
      "Used C++ multithreading to speed up image preprocessing and handle large datasets efficiently",
      "Built a web scraper to grow the dataset to over 5,000 images, improving model accuracy by 20%",
      "Optimized a YOLO-based segmentation model through hyperparameter tuning and data augmentation, reducing error rate by 25%"
    ],
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "C++",
      "Docker",
      "Git"
    ]
  },
  {
    id: "2",
    type: "freelance",
    title: "Anomaly Detection Platform",
    company: "Personal Project",
    location: "Remote",
    period: "2025",
    description:
      "Built a full-stack anomaly detection platform with real-time monitoring and ML-powered alerts.",
    details: [
      "Developed a full-stack web application for presence anomaly detection using Isolation Forest",
      "Exposed the ML model via REST APIs and integrated it with a real-time React dashboard",
      "Enabled real-time monitoring and anomaly alerts through backend services",
      "Containerized services and automated deployments using Docker and Docker Compose"
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "React",
      "Laravel",
      "Docker",
      "Git"
    ]
  },
  {
    id: "3",
    type: "professional",
    title: "Real-time Acoustic Signal Detection",
    company: "Technical University of Dortmund",
    location: "Dortmund, Germany",
    period: "01/2024 – 06/2024",
    description:
      "Bachelor thesis focused on real-time acoustic signal detection and classification for maritime safety.",
    details: [
      "Built a real-time ship acoustic signal detection and classification system",
      "Applied noise reduction techniques and FFT for signal processing",
      "Simulated intention recognition to improve maritime communication and safety",
      "Achieved a final thesis grade of 1.0"
    ],
    technologies: [
      "Python",
      "Signal Processing",
      "FFT",
      "Machine Learning"
    ]
  }
];


export const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const professionalExp = experiences.filter(e => e.type === "professional");
  const freelanceExp = experiences.filter(e => e.type === "freelance");

  const ExperienceCard = ({ exp }: { exp: Experience }) => (
    <div
      className="experience-card"
      onClick={() => setSelectedExperience(exp)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          {exp.type === "professional" ? (
            <Building2 className="w-6 h-6 text-primary" />
          ) : (
            <Laptop className="w-6 h-6 text-primary" />
          )}
        </div>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      
      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
      <p className="text-primary font-medium mb-3">{exp.company}</p>
      
      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {exp.period}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {exp.location}
        </span>
      </div>
      
      <p className="text-muted-foreground text-sm mb-4">
        {exp.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {exp.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded-md bg-secondary/50 text-xs font-mono text-muted-foreground"
          >
            {tech}
          </span>
        ))}
        {exp.technologies.length > 3 && (
          <span className="px-2 py-1 rounded-md bg-secondary/50 text-xs font-mono text-muted-foreground">
            +{exp.technologies.length - 3}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">
            // Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of enterprise experience and independent projects that showcase my versatility
          </p>
        </div>

        <Tabs defaultValue="professional" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-secondary/50">
            <TabsTrigger value="professional" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Building2 className="w-4 h-4 mr-2" />
              Professional
            </TabsTrigger>
            <TabsTrigger value="freelance" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Laptop className="w-4 h-4 mr-2" />
              Freelance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="professional">
            <div className="grid md:grid-cols-2 gap-6">
              {professionalExp.map((exp) => (
                <ExperienceCard key={exp.id} exp={exp} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="freelance">
            <div className="grid md:grid-cols-2 gap-6">
              {freelanceExp.map((exp) => (
                <ExperienceCard key={exp.id} exp={exp} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Experience Detail Modal */}
      <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          {selectedExperience && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    {selectedExperience.type === "professional" ? (
                      <Building2 className="w-5 h-5 text-primary" />
                    ) : (
                      <Laptop className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div>
                    <DialogTitle className="text-xl">{selectedExperience.title}</DialogTitle>
                    <p className="text-primary font-medium text-sm">{selectedExperience.company}</p>
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedExperience.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedExperience.location}
                  </span>
                </div>
              </DialogHeader>
              
              <DialogDescription asChild>
                <div className="space-y-6 mt-4">
                  <p className="text-foreground">{selectedExperience.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedExperience.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
