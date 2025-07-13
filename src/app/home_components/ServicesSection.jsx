"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "UI/UX Design ,Web Design",
    description:
      "Making your product clean and easy to use is the important thing for us",
  },
  {
    title: "Web/App Development",
    description:
      "Our Team will use the top technologies to develop your product",
  },
  {
    title: "Marketing Digital, Social Media",
    description:
      "Grow your community with our inbound marketing and social media marketing",
  },
  {
    title: "Brand Strategy &Art Direction",
    description: "Help you to create a unique brand that stays in Clients Head",
  },
  {
    title: "Visual Identity Logo Brand",
    description:
      "A logo can make a big difference; our team will help you with that",
  },
  {
    title: "Video / Ads Production",
    description:
      "What better way to reach users than with a good video to win their trust",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 px-6 lg:px-24 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold max-w-3xl leading-snug">
          We offer a variety of services to help you grow and build your brand
          and help you with developing your Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700 dark:border-gray-600"
            >
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-black-300 dark:text-gray-300 text-sm mb-4">
                {service.description}
              </p>
              <Button
                variant="outline"
                className="text-black dark:text-white border-white dark:border-gray-600 hover:bg-blue-500 hover:text-white transition"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
