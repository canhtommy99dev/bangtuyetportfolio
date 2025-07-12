import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "UI/UX",
    client: "Delas Relay",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21612_d99eb8ee5b703ab298415936c25ff301.jpeg",
  },
  {
    title: "Web / app Development",
    client: "Cooke Me",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21627_74728b874e1c4cd1eb60c0a8455b6dcb.jpeg",
  },
  {
    title: "UI/UX Design",
    client: "ADOC",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21617_71091b63ade92135de63cbc9b5c8b479.jpeg",
    highlight: true, // for larger size or standout layout
  },
  {
    title: "UI/UX Design",
    client: "Booking.com",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21618_039cc7689f21366cd0284c4dfae4da00.jpeg",
  },
  {
    title: "UI/UX Design",
    client: "Homely",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21621_450b9d6bbabceab04f216390c0bc6142.jpeg",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-white text-black py-20 px-6 lg:px-24 relative overflow-hidden max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold max-w-3xl leading-snug mb-10">
          The work we did that made our Client happy and satisfied
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`relative rounded-lg overflow-hidden shadow-lg ${
                project.highlight ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.client}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
                <p className="text-sm">{project.title}</p>
                <p className="font-semibold">{project.client}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            className="text-black border-white hover:bg-white hover:text-black"
          >
            Explore More Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
