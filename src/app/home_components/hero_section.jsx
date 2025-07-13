// HeroSection.tsx

"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import BlurText from "../../block/TextAnimations/BlurText/BlurText";
import TextPressure from "../../block/TextAnimations/TextPressure/TextPressure";
import TiltedCard from "../../block/Components/TiltedCard/TiltedCard";
// Remove the import - we'll use the path directly

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function HeroSection() {
  return (
    <section className="bg-background text-foreground py-20 px-6 lg:px-24 relative overflow-hidden max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 items-center gap-12 justify-center">
        {/* Text Content */}
        <div>
          <h1 className="text-2xl font-bold leading-tight mt-2">
            <div style={{ position: "relative", height: "100px" }}>
              <TextPressure
                text="MC Bang Tuyet"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="var(--text-color)"
                strokeColor="var(--stroke-color)"
                minFontSize={34}
              />
            </div>
          </h1>
          <BlurText
            text="Mình tên là Nguyễn Tuyết, hay mọi người thường biết đến mình với tên
            gọi MC Băng Tuyết, sinh năm 2000. Mình sinh ra và lớn lên ở thành
            phố Móng Cái, tỉnh Quảng Ninh – một thành phố vùng biên, nơi địa đầu
            tổ quốc."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8 text-foreground"
          />
          <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
            Với kinh nghiệm dẫn dắt hàng trăm sự kiện lớn nhỏ, tôi tự tin mang
            đến những trải nghiệm đáng nhớ cho mọi khách hàng. Từ đám cưới sang
            trọng đến hội nghị doanh nghiệp chuyên nghiệp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gradient-primary text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Book Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative">
          <TiltedCard
            imageSrc="/images/logo.jpg"
            className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "var(--gradient-primary)",
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <MessageSquare className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Professional MC</h3>
                <p className="text-white/90">Creating memorable experiences</p>
              </div>
            </div>
          </TiltedCard>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-80 animate-bounce" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-80 animate-pulse" />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
