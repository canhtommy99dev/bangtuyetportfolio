"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  Mic,
  Award,
  Star,
  Calendar,
  ArrowRight,
  Check,
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Zap,
  Shield,
  Smile,
  Trophy,
  Camera,
  Music,
  Gift,
  Coffee,
} from "lucide-react";

const services = [
  {
    id: "wedding-mc",
    title: "Wedding MC Services",
    shortDescription: "Make your special day unforgettable",
    fullDescription:
      "Transform your wedding into a magical celebration with professional MC services that create lasting memories. From the ceremony to the reception, I'll ensure every moment flows beautifully and your guests feel the love and joy of your special day.",
    icon: Heart,
    features: [
      "Ceremony and reception hosting",
      "Custom timeline coordination",
      "Guest engagement and entertainment",
      "Vendor coordination",
      "Personalized announcements",
      "Emergency backup plans",
    ],
    duration: "Full day (8-12 hours)",
    price: "From $800",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    popular: true,
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    shortDescription: "Professional hosting for business success",
    fullDescription:
      "Elevate your corporate events with professional hosting that combines business acumen with engaging presentation skills. From product launches to annual meetings, I'll help you achieve your business objectives while keeping attendees engaged.",
    icon: Users,
    features: [
      "Product launches and presentations",
      "Annual meetings and conferences",
      "Team building events",
      "Award ceremonies",
      "Client appreciation events",
      "Professional networking facilitation",
    ],
    duration: "Half day to full day",
    price: "From $600",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    id: "conference-hosting",
    title: "Conference Hosting",
    shortDescription: "Expert moderation and engagement",
    fullDescription:
      "Lead your conferences with confidence and charisma. I specialize in keeping audiences engaged, managing time effectively, and ensuring smooth transitions between speakers while maintaining the professional atmosphere your event deserves.",
    icon: Mic,
    features: [
      "Multi-day conference hosting",
      "Speaker introductions and Q&A",
      "Audience engagement strategies",
      "Time management and flow control",
      "Technical coordination",
      "Post-event networking facilitation",
    ],
    duration: "1-3 days",
    price: "From $500/day",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    id: "award-ceremonies",
    title: "Award Ceremonies",
    shortDescription: "Celebrate achievements with style",
    fullDescription:
      "Make your award ceremonies memorable and impactful. I'll help you honor achievements with grace, maintain the excitement throughout the event, and ensure every winner feels special and celebrated.",
    icon: Award,
    features: [
      "Winner announcements and presentations",
      "Award presentation coordination",
      "Entertainment and music coordination",
      "Photography and video coordination",
      "VIP guest management",
      "Post-ceremony networking",
    ],
    duration: "2-4 hours",
    price: "From $400",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
  },
  {
    id: "training-workshops",
    title: "Training Workshops",
    shortDescription: "Engaging educational experiences",
    fullDescription:
      "Transform learning into an engaging experience. I'll help you create interactive training sessions that keep participants motivated, encourage participation, and ensure knowledge retention through dynamic hosting techniques.",
    icon: Star,
    features: [
      "Interactive learning facilitation",
      "Group activities and exercises",
      "Progress tracking and feedback",
      "Breakout session management",
      "Q&A and discussion moderation",
      "Follow-up session coordination",
    ],
    duration: "Half day to full day",
    price: "From $350",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    id: "special-occasions",
    title: "Special Occasions",
    shortDescription: "Personal celebrations made extraordinary",
    fullDescription:
      "Turn your personal celebrations into extraordinary events. From milestone birthdays to anniversaries, I'll help you create memorable moments that bring joy to everyone present and make your special day truly unforgettable.",
    icon: Calendar,
    features: [
      "Birthday and anniversary parties",
      "Graduation celebrations",
      "Family reunions",
      "Holiday gatherings",
      "Surprise party coordination",
      "Personal milestone events",
    ],
    duration: "2-6 hours",
    price: "From $300",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
];

const testimonials = [
  {
    name: "Sarah & Michael",
    event: "Wedding Reception",
    text: "Our wedding was absolutely perfect! The MC kept everyone engaged and the flow was seamless. We couldn't have asked for a better experience.",
    rating: 5,
  },
  {
    name: "TechCorp Inc.",
    event: "Annual Conference",
    text: "Professional, engaging, and perfectly managed our 3-day conference. The audience feedback was overwhelmingly positive.",
    rating: 5,
  },
  {
    name: "Community Foundation",
    event: "Award Ceremony",
    text: "Made our annual awards ceremony feel like a Hollywood event! Every winner felt special and the energy was incredible.",
    rating: 5,
  },
];

const whyChooseMe = [
  {
    icon: Sparkles,
    title: "Magical Moments",
    description:
      "I create unforgettable experiences that leave lasting impressions",
  },
  {
    icon: Shield,
    title: "Reliable & Professional",
    description:
      "Count on me to deliver excellence with backup plans for everything",
  },
  {
    icon: Smile,
    title: "Positive Energy",
    description:
      "Infectious enthusiasm that keeps your guests engaged and happy",
  },
  {
    icon: Trophy,
    title: "Award-Winning",
    description: "Recognized for excellence in event hosting and MC services",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Professional MC Services
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Make Your Event{" "}
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Unforgettable
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            From intimate gatherings to grand celebrations, I bring joy,
            professionalism, and that special touch that transforms ordinary
            events into extraordinary experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gradient-primary text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              onClick={() => setIsContactOpen(true)}
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Your Event
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 lg:px-24 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Services That Bring{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Joy & Success
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each service is crafted with care to ensure your event exceeds
              expectations and creates lasting memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${service.bgColor}`}
                onClick={() =>
                  setSelectedService(
                    selectedService === service.id ? null : service.id
                  )
                }
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center mb-6">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {service.price}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </span>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                {/* Expanded content */}
                {selectedService === service.id && (
                  <div className="mt-6 pt-6 border-t border-border animate-in slide-in-from-top-2 duration-300">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-foreground">
                        What's Included:
                      </h4>
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I bring more than just hosting skills - I bring passion,
              creativity, and a commitment to making your event truly special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseMe.map((item, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-24 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Happy{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Clients
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it - hear from the wonderful people
              I've had the pleasure of working with.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Something{" "}
              <span className="text-yellow-300">Amazing</span>?
            </h2>

            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Let's work together to make your event unforgettable. I'm here to
              bring your vision to life with joy, professionalism, and that
              special touch that makes all the difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 transition-all duration-300"
                onClick={() => setIsContactOpen(true)}
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Let's Connect!
            </h3>
            <p className="text-muted-foreground mb-6 text-center">
              I'd love to hear about your event and help make it amazing!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@mcbangtuyet.com</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Available Worldwide</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                className="flex-1 gradient-primary text-white"
                onClick={() => setIsContactOpen(false)}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setIsContactOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
