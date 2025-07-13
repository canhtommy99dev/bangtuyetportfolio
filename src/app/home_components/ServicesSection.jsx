"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mic,
  Users,
  Calendar,
  Star,
  Heart,
  Award,
} from "lucide-react";

const services = [
  {
    title: "Wedding MC Services",
    description:
      "Make your special day unforgettable with professional wedding hosting that creates magical moments and lasting memories.",
    icon: Heart,
  },
  {
    title: "Corporate Events",
    description:
      "From conferences to product launches, I bring professionalism and energy to make your corporate events stand out.",
    icon: Users,
  },
  {
    title: "Conference Hosting",
    description:
      "Expert moderation and hosting for conferences, seminars, and professional gatherings with engaging audience interaction.",
    icon: Mic,
  },
  {
    title: "Award Ceremonies",
    description:
      "Celebrate achievements with style and grace. Professional hosting for award ceremonies and recognition events.",
    icon: Award,
  },
  {
    title: "Training Workshops",
    description:
      "Engaging and interactive hosting for training sessions, workshops, and educational events that keep participants motivated.",
    icon: Star,
  },
  {
    title: "Special Occasions",
    description:
      "Birthday parties, anniversaries, and special celebrations. Let me help make your personal events extraordinary.",
    icon: Calendar,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-background text-foreground py-20 px-6 lg:px-24 relative overflow-hidden max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold max-w-4xl mx-auto leading-snug mb-6">
            We offer a variety of{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              professional services
            </span>{" "}
            to make your events unforgettable
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, each service is
            tailored to create memorable experiences that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-border text-foreground hover:bg-accent hover:border-primary/50 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="gradient-primary text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
