import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-border text-xs text-muted-foreground mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for freelance &amp; contract work
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
          Aman Kumar Singh
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 font-medium mb-6 max-w-3xl leading-snug">
          Web Developer with hands-on experience working on{" "}
          <span className="text-gradient">live production websites</span>.
        </p>

        <p className="max-w-2xl text-base text-muted-foreground leading-relaxed mb-10">
          I build, deploy and maintain real websites — handling code, content, FTP
          deployments and hosting end to end. I work directly on production
          environments and use AI tools to move faster without compromising on
          fundamentals.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:amansingh706136@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface/40 hover:bg-surface text-foreground font-medium transition-colors"
          >
            <Mail className="h-4 w-4" />
            amansingh706136@gmail.com
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl border-t border-border pt-8">
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Focus</dt>
            <dd className="text-sm font-medium">Production sites</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Deploy</dt>
            <dd className="text-sm font-medium">FTP &amp; Hosting</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Backend</dt>
            <dd className="text-sm font-medium">Supabase</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Workflow</dt>
            <dd className="text-sm font-medium">AI-assisted</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
