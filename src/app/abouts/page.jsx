"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mic,
  Heart,
  Star,
  Award,
  Users,
  Calendar,
} from "lucide-react";

export default function Abouts() {
  const stats = [
    { number: "500+", label: "Events Hosted", icon: Mic },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "5+", label: "Years Experience", icon: Star },
    { number: "50+", label: "Corporate Clients", icon: Users },
  ];

  const achievements = [
    {
      title: "Best MC Award 2023",
      description: "Recognized for outstanding performance in event hosting",
      icon: Award,
    },
    {
      title: "Professional Certification",
      description: "Certified by Vietnam Event Management Association",
      icon: Star,
    },
    {
      title: "Industry Recognition",
      description: "Featured in top event planning publications",
      icon: Calendar,
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  MC Băng Tuyết
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Tôi là Nguyễn Tuyết, hay còn được biết đến với nghệ danh MC Băng
                Tuyết. Sinh năm 2000 tại thành phố Móng Cái, tỉnh Quảng Ninh -
                nơi địa đầu tổ quốc, tôi đã dành hơn 5 năm để phát triển sự
                nghiệp MC chuyên nghiệp.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Với niềm đam mê cháy bỏng và tài năng bẩm sinh trong việc kết
                nối với khán giả, tôi tự tin mang đến những trải nghiệm đáng nhớ
                cho mọi sự kiện, từ đám cưới sang trọng đến hội nghị doanh
                nghiệp chuyên nghiệp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-primary text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                >
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border text-foreground hover:bg-accent hover:border-primary/50 transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-purple-600">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/who.jpg"
                    alt="MC Băng Tuyết"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80 animate-bounce" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-80 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-24 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 text-primary">
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Achievements &{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Recognition
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những thành tựu và sự công nhận trong sự nghiệp MC chuyên nghiệp
              của tôi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <achievement.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 lg:px-24 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Philosophy
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            "Mỗi sự kiện đều là một câu chuyện độc đáo, và vai trò của tôi là
            trở thành người kể chuyện xuất sắc, biến những khoảnh khắc bình
            thường thành những kỷ niệm đáng nhớ suốt đời."
          </p>
          <p className="text-lg text-muted-foreground">- MC Băng Tuyết</p>
        </div>
      </section>
    </div>
  );
}
