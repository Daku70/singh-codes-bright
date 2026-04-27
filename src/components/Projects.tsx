import { ArrowUpRight, Globe, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "Mahipalpur Spa Centre",
    url: "https://mahipalpurspacentre.com",
    domain: "mahipalpurspacentre.com",
    role: "Live Site Developer",
    summary:
      "Worked directly on the live production website over FTP — managing files on the server, pushing updates and resolving real-world issues without downtime.",
    contributions: [
      "Connected to the live server via FTP to upload, edit and organize site files",
      "Updated content, layouts and on-page elements directly in production",
      "Diagnosed and fixed live issues affecting real visitors",
    ],
    tags: ["FTP", "Production", "HTML / CSS / JS"],
  },
  {
    title: "Damyanti Devi Polytechnic College",
    url: "https://damyantidevipolytechniccollege.com/",
    domain: "damyantidevipolytechniccollege.com",
    role: "Website Maintainer",
    summary:
      "Maintained the college's website end to end — keeping content accurate for students, working inside the hosting environment and handling deployments.",
    contributions: [
      "Updated and managed website content across multiple sections",
      "Worked inside the hosting control panel for file and domain management",
      "Handled deployments and ongoing maintenance to keep the site reliable",
    ],
    tags: ["Maintenance", "Hosting", "Content Updates"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            // Selected work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Real production websites
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Live client websites I've built, deployed and maintained — not local
            demos or sandboxed prototypes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.url}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-colors duration-300 shadow-card"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="h-11 w-11 rounded-xl bg-surface-elevated border border-border grid place-items-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-2 py-1 rounded border border-border">
                  {p.role}
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight mb-1">{p.title}</h3>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                {p.domain}
                <ArrowUpRight className="h-3 w-3" />
              </a>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {p.summary}
              </p>

              <ul className="space-y-2 mb-6">
                {p.contributions.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
