import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects-data";

const projects = getFeaturedProjects();

export default function ProjectsSection() {
  return (
    <section className="bg-background text-foreground py-20 px-6 lg:px-24 relative overflow-hidden max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-snug mb-6">
            The work we did that made our{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Client happy
            </span>{" "}
            and satisfied
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, each event is
            crafted with precision and passion to create unforgettable moments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                project.highlight ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.client}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6">
                <p className="text-sm text-white/80 mb-1">{project.title}</p>
                <p className="font-semibold text-white text-lg">
                  {project.client}
                </p>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white hover:text-black"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-accent hover:border-primary/50 transition-all duration-300"
          >
            Explore More Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
