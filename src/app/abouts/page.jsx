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
  GraduationCap,
  Trophy,
  Globe,
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
      title: "Quán quân Lễ Tốt Nghiệp MC chuyên nghiệp",
      description: "Tại Học viện kĩ năng mềm ST Lighthouse",
      icon: Trophy,
    },
    {
      title: "Sinh viên 5 Tốt thành phố Hà Nội 2021",
      description: "Danh hiệu cao quý cho sinh viên xuất sắc",
      icon: Award,
    },
    {
      title: "Á quân cuộc thi Hùng biện Convince Us",
      description: "Thể hiện khả năng thuyết trình xuất sắc",
      icon: Mic,
    },
    {
      title: "Giải Nhì cuộc thi Sáng tác clip du lịch Móng Cái",
      description: "Quảng bá quê hương địa đầu tổ quốc",
      icon: Globe,
    },
    {
      title: "Cử nhân loại Giỏi Khoa Tiếng Anh",
      description: "Trường Đại học Thương mại",
      icon: GraduationCap,
    },
    {
      title: "Giải Nhì Toán và Ngữ Văn cấp tỉnh",
      description: "Thời còn học phổ thông",
      icon: Star,
    },
  ];

  const events = [
    "Lễ Bế giảng Khoa Tiếng Anh – Trường Đại học Thương mại",
    "Chào tân sinh viên – Học viện Ngân hàng",
    "Change Maker Connect – Đại học Ngoại thương",
    "Chương trình TEDxNEU – Đại học Kinh tế quốc dân",
    "Workshop Chuyện đời – Chuyện nghề",
    "Talkshow Kế - Kiểm và Chuyển đổi số",
    "Webinar Enigma 'Dịch thuật liệu có chật vật'",
    "Talkshow 'Trên đường băng'",
    "Fashion Festival Show",
    "Colorful Universe Fashion Show",
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
                Tôi là <strong>Nguyễn Tuyết</strong>, hay còn được biết đến với
                nghệ danh <strong>MC Băng Tuyết</strong>, sinh năm 2000. Tôi
                sinh ra và lớn lên ở thành phố Móng Cái, tỉnh Quảng Ninh – một
                thành phố vùng biên, nơi địa đầu tổ quốc.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Hiện tại, tôi vừa tốt nghiệp{" "}
                <strong>Cử nhân loại Giỏi Khoa Tiếng Anh</strong> tại Trường Đại
                học Thương mại và đang là{" "}
                <strong>Chuyên viên chứng từ Logistics</strong> tại Công ty cổ
                phần kho vận quốc tế VAST, kiêm{" "}
                <strong>MC chuyên nghiệp</strong> tại Học viện kỹ năng mềm ST
                Lighthouse.
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

      {/* Journey Section */}
      <section className="py-20 px-6 lg:px-24 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Hành Trình{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Vượt Khó
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Từ một cô bé thích nói trước đám đông nhưng chỉ biết khóc và tự
              trách bản thân vì những lời miệt thị về ngoại hình, đến nay tôi đã
              đạt được những thành tích đáng nể trong nghề dẫn chương trình.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Khởi đầu với đam mê
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ngay từ nhỏ, tôi đã rất thích nói. Mỗi lần nhìn thấy các anh chị
                MC-BTV ở trên truyền hình, tôi đều khao khát một ngày nào đó
                mình cũng sẽ ở vị trí ấy, trở thành một người dẫn chương trình.
                Trong suốt thời đi học, tôi luôn năng nổ tham gia vào các hoạt
                động trường lớp và được thầy cô ưu ái lựa chọn làm MC của
                trường.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Thử thách và vượt qua
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Hành trình theo đuổi nghề cầm mic không hề đơn giản. Khi đứng
                trước những áp lực và sự cạnh tranh gay gắt trong nghề, tôi đã
                từng có ý định từ bỏ bởi cho rằng bản thân không có đủ năng lực.
                Nhưng chính vào giai đoạn chênh vênh nhất của tuổi trẻ đó, tôi
                đã gặp được người truyền lửa cho mình, đó chính là BTV-MC Đỗ
                Ngọc Sơn.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Khẳng định bản thân
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                "Chính thầy Sơn đã vực dậy và khiến tôi có niềm tin theo đuổi
                giấc mơ của mình một lần nữa. Vào khoảnh khắc ấy, tôi nhận ra MC
                chính là đam mê của mình và tôi sẽ không bao giờ từ bỏ." Từ đó,
                tôi đã dẫn dắt khá nhiều chương trình lớn, nhỏ với nhiều thể
                loại khác nhau, từ các sự kiện học thuật đến các chương trình
                thời trang và tình nguyện.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-24">
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
      <section className="py-20 px-6 lg:px-24 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Thành Tích &{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Giải Thưởng
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những thành tựu và sự công nhận trong học tập và sự nghiệp MC
              chuyên nghiệp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Events Section */}
      <section className="py-20 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Các Chương Trình{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Đã Dẫn
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những sự kiện và chương trình đã được dẫn dắt thành công.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-card border border-border p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                    <Mic className="w-4 h-4" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">
                    {event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 lg:px-24 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Triết Lý{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Nghề Nghiệp
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
