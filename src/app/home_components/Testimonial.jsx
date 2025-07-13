// components/Testimonial.tsx
"use client";

import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Nguyen Thi Lan",
    role: "Bride - Wedding Ceremony",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content:
      "MC Băng Tuyết made our wedding day absolutely magical! Her warm personality and professional hosting skills created the perfect atmosphere. Our guests still talk about how beautiful and engaging the ceremony was.",
    rating: 5,
  },
  {
    name: "Tran Van Minh",
    role: "CEO - TechCorp Vietnam",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "We hired MC Băng Tuyết for our annual conference and she exceeded all expectations. Her ability to engage the audience and keep the energy high throughout the event was remarkable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Le Thi Hoa",
    role: "Event Coordinator - Charity Foundation",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "Professional, punctual, and passionate about her work. MC Băng Tuyết brought elegance and warmth to our charity gala. She truly understands how to connect with different audiences.",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section className="bg-background text-foreground py-20 px-6 lg:px-24 relative overflow-hidden max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-lg font-semibold text-primary mb-2">
            Testimonials
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
            Don't just take our word for it <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              See what clients say
            </span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from satisfied clients who experienced the magic of
            professional MC services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{item.content}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border"
                />
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border text-foreground hover:bg-accent hover:border-primary/50 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border text-foreground hover:bg-accent hover:border-primary/50 transition-all duration-300"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-accent hover:border-primary/50 transition-all duration-300"
          >
            View All Testimonials <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
