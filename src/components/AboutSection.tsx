import { Code2, Database, Brain, Cloud } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Building intelligent systems with PyTorch & TensorFlow"
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Designing scalable data pipelines with Spark & Databricks"
  },
  {
    icon: Code2,
    title: "Full Stack",
    description: "Creating modern web applications with React & Angular"
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Deploying solutions on AWS & Azure"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary font-mono text-sm mb-4 block">
              // About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforming Data into{" "}
              <span className="gradient-text">Intelligent Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate Data Engineer and Machine Learning Engineer based in Germany, 
              with expertise in building robust data pipelines and deploying ML models at scale.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With a strong foundation in full-stack development, I bridge the gap between 
              data science and production systems. I thrive on solving complex problems and 
              delivering solutions that make a real impact.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50">
                <div className="text-3xl font-bold gradient-text">1+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
