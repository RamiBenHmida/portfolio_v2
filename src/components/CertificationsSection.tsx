import { Award, ExternalLink } from "lucide-react";

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Machine Learning Engineer Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/b82252db49404e7492a11ceae6237d5d"
  },
  {
    id: "2",
    name: "AWS Certified Cloud Practitioner ",
    issuer: "Amazon Web Services",
    date: "2025",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/0847b451a01f431da0694c253663005f"
  },
  {
    id: "3",
    name: "Telc C1 Certificate",
    issuer: "F+U Academy of Languages",
    date: "2019",
    credentialUrl: "#"
  },
  {
    id: "4",
    name: "Python – Advanced",
    issuer: "365DataScience",
    date: "2024",
    credentialUrl: "https://learn.365datascience.com/c/80fc647e0e/"
  },
  {
    id: "5",
    name: "SQL – Advanced",
    issuer: "365DataScience",
    date: "2024",
    credentialUrl: "https://learn.365datascience.com/c/b770b7751d/"
  },
  {
    id: "5",
    name: "Power BI",
    issuer: "365DataScience",
    date: "2024",
    credentialUrl: "https://learn.365datascience.com/c/41a4c5cd70/"
  }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="section-container relative">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">
            // Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating my expertise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground/60">{cert.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
