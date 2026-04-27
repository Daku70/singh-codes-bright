import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl border border-border bg-card p-10 md:p-14">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            // Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Have a website that needs work?
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-8">
            Whether it's a new build, ongoing updates, content changes, hosting
            setup or an FTP deployment — get in touch and let's talk.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:amansingh706136@gmail.com"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              amansingh706136@gmail.com
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

        <footer className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Aman Kumar Singh</p>
          <p className="font-mono">Built &amp; deployed by hand</p>
        </footer>
      </div>
    </section>
  );
}
