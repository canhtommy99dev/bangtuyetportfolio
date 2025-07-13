// components/Testimonial.tsx
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonials = [
  {
    name: "Smail yefsssah",
    role: "CEO Innova",
    avatar: "/avatars/ceo-innova.jpg", // Replace with actual image path
    content:
      "Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product",
  },
  {
    name: "Djamila Malak",
    role: "Co-Founder RobaKabyle",
    avatar: "/avatars/cofounder.jpg", // Replace with actual image path
    content:
      "Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 px-6 lg:px-24 max-w-7xl mx-auto">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
          Testmonial
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold leading-snug text-gray-900 dark:text-white">
          You still hesitate about working with Us? <br />
          <span className="text-gray-900 dark:text-white">
            Check what They say about Us
          </span>
        </h3>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {testimonials.map((item, index) => (
            <div key={index} className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
              <div className="flex items-center space-x-4 mt-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-blue-600 text-white hover:bg-blue-700 border-blue-600 dark:border-blue-500"
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-blue-600 text-white hover:bg-blue-700 border-blue-600 dark:border-blue-500"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
