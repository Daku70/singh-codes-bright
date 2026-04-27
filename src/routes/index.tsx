import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Singh — Web Developer Portfolio" },
      {
        name: "description",
        content:
          "Aman Singh is a web developer building and maintaining live production websites with HTML, CSS, JavaScript, Supabase, FTP and hosting.",
      },
      { property: "og:title", content: "Aman Singh — Web Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Web developer with hands-on experience shipping real websites — FTP deploys, hosting, content updates and AI-augmented workflows.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
