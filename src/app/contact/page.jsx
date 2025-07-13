"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Aurora from "@/block/Backgrounds/Aurora/Aurora";
import BlurText from "@/block/TextAnimations/BlurText/BlurText";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);

    // Show success message (you can implement a toast notification here)
    alert("Message sent successfully!");
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      content: "Móng Cái City, Vietnam",
      description: "Based in the heart of Vietnam's tech hub",
    },
    {
      icon: "📧",
      title: "Email",
      content: "contact@mcbangtuyet.com",
      description: "Get in touch for collaborations",
    },
    {
      icon: "📱",
      title: "Phone",
      content: "+84 123 456 789",
      description: "Available for urgent matters",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      content: "linkedin.com/in/mcbangtuyet",
      description: "Connect professionally",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#ec4899", "#3b82f6", "#8b5cf6"]}
          amplitude={0.8}
          blend={0.6}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="Get In Touch"
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            delay={100}
            animateBy="words"
            direction="top"
          />
          <BlurText
            text="Let's create something amazing together. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white"
            delay={50}
            animateBy="words"
            direction="top"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <BlurText
              text="Contact Information"
              className="text-2xl font-semibold mb-8 text-foreground"
              delay={100}
              animateBy="words"
              direction="top"
            />

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="mt-4 p-6 glass rounded-xl border border-border/50">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{info.icon}</span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {info.title}
                      </h3>
                    </div>
                    <p className="text-primary font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-8 rounded-2xl border border-border/50 backdrop-blur-sm"
          >
            <BlurText
              text="Send Message"
              className="text-2xl font-semibold mb-6 text-foreground"
              delay={100}
              animateBy="words"
              direction="top"
            />

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-background/50 border border-border/50 rounded-md px-3 py-2 text-base shadow-xs transition-all duration-300 focus:border-primary focus:ring-primary/50 focus:ring-[3px] outline-none resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-lg font-medium bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 text-center"
        >
          <div className="glass p-8 rounded-2xl border border-border/50 backdrop-blur-sm max-w-4xl mx-auto">
            <BlurText
              text="Let's Build Something Amazing"
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
              delay={100}
              animateBy="words"
              direction="top"
            />
            <BlurText
              text="Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Let's turn your ideas into reality."
              className="text-lg text-muted-foreground leading-relaxed"
              delay={50}
              animateBy="words"
              direction="top"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
