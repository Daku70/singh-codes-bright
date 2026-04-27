import { ArrowRight, Github, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-72 bg-primary/20 rounded-full blur-3xl animate-glow pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-border text-xs text-muted-foreground mb-8 opacity-0"
          style={{ animation: "var(--animate-fade-up)", animationDelay: "0.05s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for freelance work
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 opacity-0"
          style={{ animation: "var(--animate-fade-up)", animationDelay: "0.15s" }}
        >
          Hi, I'm <span className="text-gradient">Aman Singh</span>
          <br />
          <span className="text-foreground/90">I build & ship</span>{" "}
          <span className="text-gradient">live websites</span>.
        </h1>

        <p
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-10 opacity-0"
          style={{ animation: "var(--animate-fade-up)", animationDelay: "0.25s" }}
        >
          Web developer focused on real production sites — handling everything from{" "}
          <span className="text-foreground">code and content</span> to{" "}
          <span className="text-foreground">FTP deploys and hosting</span>. I leverage AI tools
          to ship faster, without depending on them to think for me.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-3 opacity-0"
          style={{ animation: "var(--animate-fade-up)", animationDelay: "0.35s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300"
          >
            View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface/40 hover:bg-surface text-foreground font-medium transition-colors"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
        </div>

        <div
          className="mt-14 flex items-center justify-center gap-6 text-xs text-muted-foreground opacity-0"
          style={{ animation: "var(--animate-fade-up)", animationDelay: "0.5s" }}
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI-augmented workflow
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Live production experience</span>
          <span className="h-1 w-1 rounded-full bg-border hidden sm:inline-block" />
          <span className="hidden sm:inline">FTP & hosting</span>
        </div>
      </div>
    </section>
  );
}
