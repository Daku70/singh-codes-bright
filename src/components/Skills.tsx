import { Code2, Database, FileCode, Palette, Server, Sparkles, Upload } from "lucide-react";

const skillGroups = [
  {
    title: "Core Web",
    items: [
      { icon: FileCode, name: "HTML", note: "Semantic, accessible markup" },
      { icon: Palette, name: "CSS", note: "Responsive layouts & styling" },
      { icon: Code2, name: "JavaScript", note: "Interactive functionality & DOM" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { icon: Database, name: "Supabase", note: "Database integration, auth, storage" },
    ],
  },
  {
    title: "Deployment & Infrastructure",
    items: [
      { icon: Upload, name: "FTP", note: "File management & live deployment" },
      { icon: Server, name: "Hosting Platforms", note: "Hostinger, GoDaddy" },
    ],
  },
  {
    title: "Workflow",
    items: [
      {
        icon: Sparkles,
        name: "AI-Assisted Development",
        note: "Used for efficiency, not dependency",
      },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            // Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Tools I work with
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The stack I use to build, deploy and maintain real websites in production.
          </p>
        </div>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {group.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((s) => (
                  <div
                    key={s.name}
                    className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-9 w-9 rounded-lg bg-surface-elevated border border-border grid place-items-center">
                        <s.icon className="h-4 w-4 text-primary" />
                      </div>
                      <h4 className="font-semibold">{s.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="about" className="mt-20 pt-16 border-t border-border">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            // About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            About me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <p className="text-muted-foreground leading-relaxed">
              I'm a web developer working on live production websites — not just
              local demos. I've worked directly with client sites over FTP,
              uploading and managing files on the server, updating content and
              fixing issues as they appear in production.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm comfortable inside hosting platforms like Hostinger and GoDaddy,
              handling deployment from start to finish. I use AI tools to speed up
              development, but I rely on a solid understanding of the
              fundamentals — HTML, CSS, JavaScript and backend integration with
              Supabase — for everything I ship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
