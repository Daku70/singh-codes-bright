import { Edit3, Wrench, Server, Database, Sparkles } from "lucide-react";

const items = [
  {
    icon: Edit3,
    title: "Manage and edit live websites",
    description:
      "Update content, layouts and code directly on running production sites without breaking them.",
  },
  {
    icon: Wrench,
    title: "Fix issues in production",
    description:
      "Diagnose and resolve real-world problems on live sites — quickly and carefully.",
  },
  {
    icon: Server,
    title: "Handle hosting and deployment",
    description:
      "Work end to end with hosting platforms (Hostinger, GoDaddy) and FTP-based deployment.",
  },
  {
    icon: Database,
    title: "Build and connect backend systems",
    description:
      "Integrate databases, authentication and storage with Supabase for full-stack functionality.",
  },
  {
    icon: Sparkles,
    title: "Use AI tools to ship faster",
    description:
      "Leverage AI in the workflow for speed and efficiency, while staying in control of every line shipped.",
  },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="relative py-24 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            // What I Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How I help
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Practical, day-to-day work I do for clients and projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-border grid place-items-center mb-4">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
