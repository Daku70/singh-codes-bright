import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatIDo } from "@/components/WhatIDo";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Kumar Singh — Web Developer Portfolio" },
      {
        name: "description",
        content:
          "Aman Kumar Singh — Web Developer with hands-on experience working on live production websites. HTML, CSS, JavaScript, Supabase, FTP and hosting (Hostinger, GoDaddy).",
      },
      { property: "og:title", content: "Aman Kumar Singh — Web Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Web developer experienced with live production websites — FTP deployment, hosting, content updates and Supabase backends.",
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
        <WhatIDo />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
