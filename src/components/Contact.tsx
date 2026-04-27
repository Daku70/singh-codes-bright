import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl border border-border glass p-10 md:p-16 overflow-hidden text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              // Let's build something
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
              Have a website that needs <span className="text-gradient">work?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-9">
              Whether it's a new build, ongoing updates, content changes or a tricky FTP
              deployment — I'd love to hear about it.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
                Send me an email
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://mahipalpurspacentre.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface/40 hover:bg-surface text-foreground font-medium transition-colors"
              >
                See live work
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Aman Singh. Built with care.</p>
          <p className="font-mono">Crafted for the web · Deployed live</p>
        </footer>
      </div>
    </section>
  );
}
