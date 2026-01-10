const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "C++", "Java", "Kotlin", "JavaScript", ".NET", "HTML", "CSS"]
  },
  {
    title: "ML & Big Data",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Spark", "Databricks"]
  },
  {
    title: "Tools & Frameworks",
    skills: ["Docker", "Git", "React", "SpringBoot", "Angular", "Next.js", "Node.js"]
  },
  {
    title: "Cloud & Data",
    skills: ["AWS", "Azure", "Power BI", "MySQL", "PostgreSQL", "MongoDB", "JSON", "XML"]
  }
];

// Simple tech icons as styled text for now - can be replaced with actual logos
const TechBadge = ({ name }: { name: string }) => (
  <div className="tech-icon group">
    <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
      {name.slice(0, 3).toUpperCase()}
    </span>
  </div>
);

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="section-container relative">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">
            // Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning data engineering, machine learning, and full-stack development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              className="p-6 rounded-2xl card-gradient border border-border/50"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Tech Icons Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {[...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)].map((skill, idx) => (
              <TechBadge key={`${skill}-${idx}`} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
