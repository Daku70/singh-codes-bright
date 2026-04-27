import { Code2, Database, FileCode, Palette, Server, Upload } from "lucide-react";

const skills = [
  {
    icon: FileCode,
    name: "HTML",
    description: "Semantic, accessible markup as the foundation of every project.",
  },
  {
    icon: Palette,
    name: "CSS",
    description: "Modern responsive layouts, smooth animations and clean styling.",
  },
  {
    icon: Code2,
    name: "JavaScript",
    description: "Interactive, dynamic experiences and DOM-driven functionality.",
  },
  {
    icon: Database,
    name: "Supabase",
    description: "Database, auth and storage for full-stack web apps.",
  },
  {
    icon: Upload,
    name: "FTP",
    description: "Direct deploys to live servers — uploading, managing, fixing fast.",
  },
  {
    icon: Server,
    name: "Hosting",
    description: "Setting up and managing hosting environments end to end.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            // Toolbox
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Skills & <span className="text-gradient">tools I use</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The stack I rely on to design, build, deploy and maintain real websites.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-11 w-11 rounded-lg bg-surface-elevated border border-border grid place-items-center mb-4 group-hover:border-primary/40 transition-colors">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1.5">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div id="about" className="mt-16 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              // Production experience
            </p>
            <h3 className="text-xl font-semibold mb-3">Live websites, real users</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I've worked on live production websites — not just local demos. Deploying via
              FTP, managing hosting and updating content directly on running sites taught me
              to be careful, deliberate and accountable for what ships.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              // AI-augmented, not AI-dependent
            </p>
            <h3 className="text-xl font-semibold mb-3">Faster, but still in control</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I use AI tools to speed up development — boilerplate, debugging, ideas — but
              I understand the code I ship. AI is a multiplier on top of solid fundamentals,
              not a replacement for them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
