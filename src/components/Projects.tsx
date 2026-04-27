import { ArrowUpRight, Globe } from "lucide-react";

const projects = [
  {
    title: "Mahipalpur Spa Centre",
    url: "https://mahipalpurspacentre.com",
    domain: "mahipalpurspacentre.com",
    description:
      "Worked directly on the live production website using FTP. Handled file uploads, content updates, and on-page tweaks while keeping the site stable for real visitors.",
    tags: ["FTP Deploys", "Live Site", "HTML/CSS"],
    accent: "from-primary/20 to-accent/10",
  },
  {
    title: "Damyanti Devi Polytechnic College",
    url: "https://damyantidevipolytechniccollege.com/",
    domain: "damyantidevipolytechniccollege.com",
    description:
      "Managed and updated content for this educational institution's website. Maintained sections, refreshed information and ensured everything stayed accurate for students and visitors.",
    tags: ["Content Management", "Maintenance", "Hosting"],
    accent: "from-accent/20 to-primary/10",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            // Selected work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Real websites, <span className="text-gradient">real impact</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A look at production websites I've built, deployed and maintained — not demos
            or sandboxed prototypes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-border bg-card p-7 overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-elevated"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="h-11 w-11 rounded-xl bg-surface-elevated border border-border grid place-items-center group-hover:border-primary/40 transition-colors">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                <h3 className="text-xl font-semibold tracking-tight mb-2">{p.title}</h3>
                <p className="font-mono text-xs text-muted-foreground mb-4">{p.domain}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border glass p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="font-mono text-xs uppercase tracking-widest text-primary md:w-40 shrink-0">
            // Production-ready
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I'm comfortable working directly on live websites — uploading via FTP,
            updating content, fixing issues in production and keeping things running
            without breaking what's already working.
          </p>
        </div>
      </div>
    </section>
  );
}
