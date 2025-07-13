// HeroSection.tsx

"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import BlurText from "../../block/TextAnimations/BlurText/BlurText";
import TextPressure from "../../block/TextAnimations/TextPressure/TextPressure";
import TiltedCard from "../../block/Components/TiltedCard/TiltedCard";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-black text-white py-20 px-6 lg:px-24 relative overflow-hidden max-w-7xl mx-auto">
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
                textColor="var(--text-color, #000000)"
                strokeColor="var(--stroke-color, #ff0000)"
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
            className="text-2xl mb-8 text-black dark:text-white"
          />

          <div className="flex items-center gap-4 mt-8 text-black dark:text-white">
            <InteractiveHoverButton
              text="Let's Talk"
              className="bg-blue-500 text-white"
            />
          </div>
        </div>

        {/* Image + Tags */}
        <div className="relative w-fit mx-auto">
          <TiltedCard
            imageSrc="https://golives3.s3.amazonaws.com/2022/11/21611_852849a52a82486683984914144654eb.jpeg"
            altText="MC Băng Tuyết"
            captionText="MC Băng Tuyết"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
      </div>
    </section>
  );
}
