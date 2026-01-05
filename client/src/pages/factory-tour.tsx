"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Lock, Phone, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ============================================================================
// DESIGN TOKENS
// ============================================================================

const COLORS = {
  navy: "#0A1628",
  navyLight: "#152238",
  gold: "#C9A962",
  goldLight: "#E8D5A8",
  cream: "#F8F6F1",
  stone: "#E8E4DD",
  slate: "#64748B",
};

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScpxsHe97q0aG9jgCqffy1CsY19CeliN-p7h4b6UyjT9DZpog/viewform?usp=header";

// ============================================================================
// DATA - Full Original Content
// ============================================================================

const ABOUT_DATA = [
  {
    title: "BCP",
    subtitle: "Business Connecting Platform",
    desc: "Nền tảng B2B Matching & AI Hub kết nối nhu cầu BUY – SELL – PARTNER của doanh nghiệp.",
    bullets: [
      "Thiết kế và điều phối chương trình Factory Audit Tour & Company Health Check.",
      "Kết nối nhà máy với hệ sinh thái đối tác công nghệ & AI.",
      "Đóng vai trò đầu mối, quản trị rủi ro và chất lượng triển khai.",
    ],
  },
  {
    title: "AI Partners",
    subtitle: "Hệ sinh thái Giải pháp AI",
    desc: "Hệ sinh thái AI Builders và công ty công nghệ, xây giải pháp 'may đo' cho từng nhà máy.",
    bullets: [
      "AI Builder: phát triển phần mềm & hệ thống AI theo yêu cầu.",
      "Giải pháp Smart Factory: IoT, AI Camera, Robotics, 3D visualization.",
      "Giải pháp hỗ trợ: tuyển dụng, đào tạo AI, CRM, cloud & security.",
    ],
  },
  {
    title: "SCV",
    subtitle: "Supply Chain Vibe Community",
    desc: "Cộng đồng >1.000 thành viên là C-level, Head of Supply Chain, Operations, Logistics.",
    bullets: [
      "Founder SCV – Ms. Hương: nhiều năm kinh nghiệm vận hành & tư vấn supply chain.",
      "Mang góc nhìn vận hành thực tế vào từng buổi health check & factory tour.",
      "Giúp đánh giá bài toán từ góc độ chuỗi cung ứng trước khi chọn giải pháp.",
    ],
  },
];

const CHALLENGES = [
  "Nhiều hệ thống rời rạc, dữ liệu phân tán ở Excel, phần mềm cũ, khó tạo bức tranh tổng thể.",
  "Tiếp nhiều nhà cung cấp phần mềm, ai cũng nói hay, nhưng khó đánh giá đâu là giải pháp phù hợp.",
  "Thiếu người trung lập đứng giữa để giúp 'dịch' giữa ngôn ngữ công nghệ và ngôn ngữ vận hành.",
  "Sợ rủi ro: đầu tư hệ thống lớn nhưng không dùng được, gây phản ứng trong nội bộ.",
  "Không có lộ trình cụ thể: làm gì trước – làm gì sau, bao nhiêu budget là hợp lý?",
];

const PROCESS_DATA = [
  {
    num: "01",
    title: "Health Check & Survey",
    tag: "Miễn phí",
    desc: "Gửi survey & phỏng vấn ban lãnh đạo để hiểu hiện trạng, pain, dữ liệu sẵn có.",
  },
  {
    num: "02",
    title: "Ghép đội chuyên gia",
    tag: "SC Experts + AI Providers",
    desc: "Shortlist 6–8 đối tác giải pháp phù hợp nhất với bài toán của nhà máy.",
  },
  {
    num: "03",
    title: "Factory Audit Tour",
    tag: "Tại nhà máy",
    desc: "Đoàn chuyên gia đến nhà máy: tham quan dây chuyền, nghe chia sẻ từ các bộ phận.",
  },
  {
    num: "04",
    title: "Đề xuất & Lộ trình",
    tag: "Báo cáo chi tiết",
    desc: "Tổng hợp đề xuất từ các đối tác + góc nhìn trung lập từ BCP & SCV.",
  },
];

const BENEFITS = [
  {
    title: "Tiết kiệm thời gian lãnh đạo",
    points: [
      "Một lần mở cửa, gặp được 6–8 đội ngũ giải pháp đã sàng lọc.",
      "Không phải nghe pitch rời rạc từ nhiều nhà cung cấp.",
    ],
  },
  {
    title: "Có bên trung lập đánh giá giúp",
    points: [
      "SCV & BCP đứng giữa, giúp đánh giá tính phù hợp & khả thi tổng thể.",
      "Không bị lệ thuộc vào một vendor duy nhất.",
    ],
  },
  {
    title: "Lộ trình rõ ràng, giảm rủi ro",
    points: [
      "Thấy được bức tranh tổng thể, nhưng triển khai theo từng bước.",
      "Dễ kiểm soát chi phí và quản trị thay đổi.",
    ],
  },
];

const FAQ_DATA = [
  {
    q: "Chương trình có thu phí nhà máy không?",
    a: "Health Check & Factory Tour giai đoạn đầu là hoàn toàn miễn phí cho nhà máy. Chỉ khi nhà máy quyết định triển khai giải pháp cụ thể mới phát sinh chi phí.",
  },
  {
    q: "Nếu nhà máy chưa có nhiều dữ liệu thì có tham gia được không?",
    a: "Hoàn toàn có thể tham gia. Chương trình có bước đánh giá mức độ sẵn sàng (data readiness), và sẽ tư vấn lộ trình phù hợp.",
  },
  {
    q: "Thông tin nội bộ nhà máy có được bảo mật không?",
    a: "Có, toàn bộ thông tin được bảo mật nghiêm ngặt. Trước khi khảo sát, BCP và các đối tác sẽ ký NDA và Factory Agreement.",
  },
  {
    q: "Bao lâu từ khi đăng ký đến khi có Factory Tour?",
    a: "Thông thường từ 2-4 tuần tùy thuộc vào lịch trình của nhà máy và các đối tác.",
  },
];

const PARTNERS = [
  { category: "AI Builders", items: ["VFA", "IVS", "MDS", "TechAI", "DataLab"] },
  { category: "IoT & Robotics", items: ["RoboTech", "IoT Solutions", "AutoMate"] },
  { category: "Cloud & Security", items: ["CloudVN", "SecureNet", "DataGuard"] },
  { category: "CRM & Training", items: ["SalesForce", "TrainAI", "EduTech"] },
];

// ============================================================================
// COMPONENTS
// ============================================================================

const Container = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <div id={id} className={`w-full max-w-7xl mx-auto px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Glow effect component
const GlowOrb = ({ className = "", color = COLORS.gold }: { className?: string; color?: string }) => (
  <div
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    style={{ backgroundColor: color, opacity: 0.15 }}
  />
);

// Glass card component
const GlassCard = ({ children, className = "", glow = false }: { children: React.ReactNode; className?: string; glow?: boolean }) => (
  <div
    className={`relative backdrop-blur-xl border border-white/10 ${className}`}
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      boxShadow: glow ? `0 0 60px -15px ${COLORS.gold}40` : undefined,
    }}
  >
    {children}
  </div>
);

export default function FactoryTour() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const heroRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: COLORS.cream }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        ::selection { background: ${COLORS.gold}; color: ${COLORS.navy}; }
      `}</style>

      <main>
        {/* ========== HERO - Cinematic Full Screen ========== */}
        <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden" style={{ backgroundColor: COLORS.navy }}>
          {/* Background layers */}
          <motion.div style={{ opacity: heroOpacity, y: heroY }} className="absolute inset-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1682146773000-474a2592d2b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 30% 50%, transparent 0%, ${COLORS.navy} 70%)` }} />
          </motion.div>

          {/* Floating orbs */}
          <GlowOrb className="w-[500px] h-[500px] -top-24 -left-24" color={COLORS.gold} />
          <GlowOrb className="w-[300px] h-[300px] bottom-10 right-10" color="#4F46E5" />

          {/* Abstract geometric shapes */}
          <div className="absolute top-1/4 right-1/4 w-48 h-48 border border-white/5 rounded-full" />
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-white/5 rotate-45" />

          <Container className="relative z-10 py-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Overline with glow */}
                <div className="inline-flex items-center gap-3 mb-4 lg:mb-6">
                  <div className="h-px w-12" style={{ background: `linear-gradient(90deg, ${COLORS.gold}, transparent)` }} />
                  <span className="text-[10px] lg:text-xs tracking-[0.25em] uppercase" style={{ color: COLORS.gold }}>
                    Factory Audit Tour 2026
                  </span>
                </div>

                {/* Hero headline - Typography as design element */}
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.95] mb-4 lg:mb-6"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <span className="block">Thoát khỏi</span>
                  <span className="block relative">
                    <span
                      className="relative z-10"
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldLight} 50%, ${COLORS.gold} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Mê Cung
                    </span>
                    {/* Glow behind text */}
                    <div
                      className="absolute inset-0 blur-2xl opacity-40"
                      style={{ background: COLORS.gold }}
                    />
                  </span>
                  <span className="block text-white/90">Chuyển Đổi Số</span>
                </h1>

                <p className="text-base lg:text-lg text-white/60 max-w-xl mb-6 lg:mb-8 leading-relaxed">
                  Chương trình <span className="text-white/90 font-medium">Factory Audit Tour</span> giúp Ban lãnh đạo
                  nhìn rõ hiện trạng và xây dựng lộ trình chuyển đổi số thực tế.
                </p>

                {/* CTA with glass effect */}
                <div className="flex flex-wrap gap-3 mb-6 lg:mb-8">
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="h-11 lg:h-12 px-6 lg:px-8 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 hover:scale-105 group"
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldLight} 100%)`,
                        color: COLORS.navy,
                        boxShadow: `0 0 30px -10px ${COLORS.gold}`,
                      }}
                    >
                      Đăng ký Health Check miễn phí
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>

                {/* Stats with glass cards - Compact */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: "100%", label: "Miễn phí" },
                    { value: "6-8", label: "Đối tác" },
                    { value: "2-4", label: "Tuần" },
                  ].map((stat, idx) => (
                    <GlassCard key={idx} className="px-4 lg:px-5 py-3 rounded-xl">
                      <div className="text-lg lg:text-xl font-bold" style={{ color: COLORS.gold }}>{stat.value}</div>
                      <div className="text-xs text-white/50">{stat.label}</div>
                    </GlassCard>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
            >
              <a href="#about" className="flex flex-col items-center gap-1 text-white/30 hover:text-white/50 transition-colors">
                <ChevronDown className="h-4 w-4 animate-bounce" />
              </a>
            </motion.div>
          </Container>
        </section>

        {/* ========== ABOUT - Bento Grid Layout ========== */}
        <section id="about" className="py-24 lg:py-32 relative" style={{ backgroundColor: COLORS.cream }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: COLORS.gold }}>
                Về chúng tôi
              </span>
              <h2
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                style={{ color: COLORS.navy, fontFamily: "'Outfit', sans-serif" }}
              >
                Ba đơn vị, <br />
                <span style={{ color: COLORS.gold }}>một sứ mệnh</span>
              </h2>
            </motion.div>

            {/* Bento Grid with full content */}
            <div className="grid grid-cols-12 gap-4 lg:gap-6">
              {/* BCP - Large card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-3xl"
                style={{ backgroundColor: COLORS.navy }}
              >
                <GlowOrb className="w-96 h-96 -top-20 -right-20" />
                <div className="relative z-10 p-8 lg:p-12">
                  <div className="text-8xl lg:text-9xl font-bold opacity-10 absolute top-4 right-8" style={{ color: COLORS.gold }}>
                    {ABOUT_DATA[0].title}
                  </div>
                  <div className="max-w-xl">
                    <div className="text-sm font-medium mb-4" style={{ color: COLORS.gold }}>
                      {ABOUT_DATA[0].subtitle}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Nền tảng kết nối doanh nghiệp
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-6">
                      {ABOUT_DATA[0].desc}
                    </p>
                    <div className="space-y-2">
                      {ABOUT_DATA[0].bullets.map((bullet) => (
                        <div key={bullet} className="flex gap-3 text-white/70 text-sm">
                          <span style={{ color: COLORS.gold }}>→</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AI Partners - Tall card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="col-span-12 lg:col-span-4 lg:row-span-2 relative overflow-hidden rounded-3xl"
                style={{ background: `linear-gradient(180deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)` }}
              >
                <div className="absolute inset-0 opacity-30">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className="text-5xl font-bold opacity-20 mb-4" style={{ color: COLORS.gold }}>AI</div>
                  <div className="text-sm font-medium mb-2" style={{ color: COLORS.gold }}>{ABOUT_DATA[1].subtitle}</div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {ABOUT_DATA[1].title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {ABOUT_DATA[1].desc}
                  </p>
                  <div className="space-y-1.5">
                    {ABOUT_DATA[1].bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-2 text-white/60 text-xs">
                        <span style={{ color: COLORS.gold }}>•</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* SCV - Wide card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-3xl border"
                style={{ borderColor: COLORS.stone, backgroundColor: 'white' }}
              >
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="text-sm font-medium mb-2" style={{ color: COLORS.gold }}>{ABOUT_DATA[2].subtitle}</div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: COLORS.navy, fontFamily: "'Outfit', sans-serif" }}>
                        Cộng đồng <span style={{ color: COLORS.gold }}>1.000+</span> C-level
                      </h3>
                      <p className="mb-4" style={{ color: COLORS.slate }}>
                        {ABOUT_DATA[2].desc}
                      </p>
                      <div className="space-y-2">
                        {ABOUT_DATA[2].bullets.map((bullet) => (
                          <div key={bullet} className="flex gap-2 text-sm" style={{ color: COLORS.slate }}>
                            <span style={{ color: COLORS.gold }}>✓</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="text-6xl lg:text-7xl font-black opacity-10 self-center"
                      style={{ color: COLORS.navy }}
                    >
                      SCV
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* ========== CHALLENGES ========== */}
        <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: COLORS.navy }}>
          <GlowOrb className="w-[600px] h-[600px] top-0 left-0" />

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: COLORS.gold }}>
                  Thách thức
                </span>
                <h2
                  className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Vì sao nhà máy dễ lạc trong{" "}
                  <span style={{ color: COLORS.gold }}>'mê cung'</span> chuyển đổi số?
                </h2>

                <div className="space-y-4">
                  {CHALLENGES.map((text, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl transition-colors hover:bg-white/5"
                    >
                      <div
                        className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold"
                        style={{ backgroundColor: `${COLORS.gold}20`, color: COLORS.gold }}
                      >
                        {idx + 1}
                      </div>
                      <p className="text-white/70 leading-relaxed">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <GlassCard glow className="p-8 lg:p-10 rounded-3xl">
                  <div className="text-sm font-medium mb-4" style={{ color: COLORS.gold }}>
                    Giải pháp của chúng tôi
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl font-bold text-white mb-4"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Audit trước, chọn giải pháp sau
                  </h3>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    Factory Audit Tour & Company Health Check được thiết kế để giải quyết chính những nỗi lo này.
                  </p>

                  <div className="p-5 rounded-2xl border border-white/10 mb-6" style={{ backgroundColor: `${COLORS.gold}10` }}>
                    <p className="font-semibold text-white mb-3">Bạn sẽ có ngay:</p>
                    <div className="space-y-2">
                      {["Chẩn đoán hiện trạng toàn diện", "Danh sách 6–8 đội giải pháp phù hợp", "Lộ trình quick win → mở rộng quy mô"].map((item) => (
                        <div key={item} className="flex gap-2 text-white/80 text-sm">
                          <span style={{ color: COLORS.gold }}>✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="w-full h-12 rounded-xl font-semibold"
                      style={{ background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldLight} 100%)`, color: COLORS.navy }}
                    >
                      Đăng ký Health Check miễn phí
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </GlassCard>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* ========== PROCESS - Zig-zag Timeline ========== */}
        <section id="process" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: COLORS.navy }}>
          <GlowOrb className="w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: COLORS.gold }}>
                Quy trình
              </span>
              <h2
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                4 bước <span style={{ color: COLORS.gold }}>minh bạch</span>
              </h2>
            </motion.div>

            {/* Zig-zag layout */}
            <div className="space-y-8 lg:space-y-0">
              {PROCESS_DATA.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Number - Large typography as design element */}
                  <div className="flex-shrink-0">
                    <div
                      className="text-[120px] lg:text-[180px] font-black leading-none"
                      style={{
                        color: 'transparent',
                        WebkitTextStroke: `1px ${COLORS.gold}40`,
                      }}
                    >
                      {step.num}
                    </div>
                  </div>

                  {/* Content card with glass effect */}
                  <GlassCard glow className="flex-1 p-8 lg:p-10 rounded-3xl max-w-xl">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                      style={{ backgroundColor: `${COLORS.gold}20`, color: COLORS.gold }}
                    >
                      {step.tag}
                    </span>
                    <h3
                      className="text-2xl lg:text-3xl font-bold text-white mb-3"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-20"
            >
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  className="h-14 px-10 rounded-full font-semibold text-base"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldLight} 100%)`,
                    color: COLORS.navy,
                    boxShadow: `0 0 40px -10px ${COLORS.gold}`,
                  }}
                >
                  Bắt đầu với Health Check
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </Container>
        </section>

        {/* ========== BENEFITS - Large Typography Focus ========== */}
        <section id="benefits" className="py-24 lg:py-32 relative" style={{ backgroundColor: COLORS.cream }}>
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: COLORS.gold }}>
                  Quyền lợi
                </span>
                <h2
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8"
                  style={{ color: COLORS.navy, fontFamily: "'Outfit', sans-serif" }}
                >
                  Tại sao <br />
                  <span style={{ color: COLORS.gold }}>chọn chúng tôi?</span>
                </h2>

                {/* Benefits cards with full content */}
                <div className="space-y-6">
                  {BENEFITS.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-6 rounded-2xl border transition-all hover:shadow-xl"
                      style={{ borderColor: COLORS.stone, backgroundColor: 'white' }}
                    >
                      <h3
                        className="text-xl lg:text-2xl font-bold mb-3"
                        style={{ color: COLORS.navy, fontFamily: "'Outfit', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <div className="space-y-2">
                        {item.points.map((point) => (
                          <div key={point} className="flex gap-2 text-sm" style={{ color: COLORS.slate }}>
                            <span style={{ color: COLORS.gold }}>→</span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Visual side - Abstract composition */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square relative">
                  {/* Main image */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
                      alt="Smart Factory"
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(135deg, ${COLORS.navy}80 0%, transparent 50%)` }}
                    />
                  </div>

                  {/* Floating glass card */}
                  <div
                    className="absolute -bottom-8 -left-8 p-6 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl"
                    style={{ background: 'rgba(255,255,255,0.9)' }}
                  >
                    <div className="text-4xl font-bold" style={{ color: COLORS.gold }}>100%</div>
                    <div className="text-sm" style={{ color: COLORS.slate }}>Miễn phí giai đoạn đầu</div>
                  </div>

                  {/* Abstract shape */}
                  <div
                    className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl border-2"
                    style={{ borderColor: COLORS.gold }}
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* ========== PARTNERS - Minimal Grid ========== */}
        <section id="partners" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: 'white' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: COLORS.gold }}>
                Hệ sinh thái
              </span>
              <h2
                className="text-4xl lg:text-5xl font-bold"
                style={{ color: COLORS.navy, fontFamily: "'Outfit', sans-serif" }}
              >
                Đối tác công nghệ
              </h2>
            </motion.div>

            {/* Partner categories with actual names */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {PARTNERS.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-3xl border transition-all hover:shadow-lg"
                  style={{ borderColor: COLORS.stone, backgroundColor: 'white' }}
                >
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: COLORS.gold }}
                  >
                    {category.items.length}+
                  </div>
                  <div className="text-base font-semibold mb-4" style={{ color: COLORS.navy }}>
                    {category.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full text-xs"
                        style={{ backgroundColor: COLORS.stone, color: COLORS.navy }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========== FAQ - Clean Accordion ========== */}
        <section id="faq" className="py-24 lg:py-32" style={{ backgroundColor: COLORS.cream }}>
          <Container>
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: COLORS.gold }}>
                  Hỗ trợ
                </span>
                <h2
                  className="text-4xl lg:text-5xl font-bold mb-6"
                  style={{ color: COLORS.navy, fontFamily: "'Outfit', sans-serif" }}
                >
                  Câu hỏi <br />
                  <span style={{ color: COLORS.gold }}>thường gặp</span>
                </h2>
                <p className="mb-8" style={{ color: COLORS.slate }}>
                  Không tìm thấy câu trả lời? Liên hệ trực tiếp với chúng tôi.
                </p>
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="rounded-full font-semibold"
                    style={{ borderColor: COLORS.navy, color: COLORS.navy }}
                  >
                    Liên hệ ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {FAQ_DATA.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`item-${idx}`}
                      className="border rounded-2xl px-6 overflow-hidden bg-white"
                      style={{ borderColor: COLORS.stone }}
                    >
                      <AccordionTrigger
                        className="py-5 text-left font-semibold hover:no-underline"
                        style={{ color: COLORS.navy }}
                      >
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5" style={{ color: COLORS.slate }}>
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* ========== CONTACT - Split Layout with Glass Form ========== */}
        <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: COLORS.navy }}>
          <GlowOrb className="w-[600px] h-[600px] top-0 left-0" />
          <GlowOrb className="w-[400px] h-[400px] bottom-0 right-0" color="#4F46E5" />

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: COLORS.gold }}>
                  Đăng ký
                </span>
                <h2
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Bắt đầu <br />
                  <span style={{ color: COLORS.gold }}>ngay hôm nay</span>
                </h2>
                <p className="text-lg text-white/60 mb-10">
                  Điền form, chúng tôi sẽ liên hệ trong <span className="text-white">2-3 ngày làm việc</span>.
                </p>

                <GlassCard className="p-6 rounded-2xl mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/70">
                      <Phone className="h-5 w-5" style={{ color: COLORS.gold }} />
                      <span>+84909293886</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <Mail className="h-5 w-5" style={{ color: COLORS.gold }} />
                      <span>dung.bui@bcp.global</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <MapPin className="h-5 w-5" style={{ color: COLORS.gold }} />
                      <span>224A Điện Biên Phủ, Xuân Hòa, TP. Hồ Chí Minh</span>
                    </div>
                  </div>
                </GlassCard>

                <div className="flex items-center gap-3 text-white/50 text-sm">
                  <Lock className="h-4 w-4" />
                  <span>Bảo mật theo NDA & Factory Agreement</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="p-8 rounded-3xl bg-white shadow-2xl">
                  {!isSuccess ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label style={{ color: COLORS.navy }}>Tên công ty *</Label>
                          <Input required placeholder="VD: Công ty TNHH ABC" className="h-12 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <Label style={{ color: COLORS.navy }}>Ngành</Label>
                          <Input placeholder="VD: Sản xuất nhựa..." className="h-12 rounded-xl" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label style={{ color: COLORS.navy }}>Họ tên *</Label>
                          <Input required placeholder="Họ và tên" className="h-12 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <Label style={{ color: COLORS.navy }}>Email *</Label>
                          <Input type="email" required placeholder="email@company.com" className="h-12 rounded-xl" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label style={{ color: COLORS.navy }}>Số điện thoại *</Label>
                        <Input required placeholder="0909 xxx xxx" className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label style={{ color: COLORS.navy }}>Nỗi đau hiện tại</Label>
                        <Textarea rows={3} placeholder="VD: Dữ liệu rời rạc, khó kiểm soát tồn kho..." className="rounded-xl" />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 rounded-xl font-semibold text-base"
                        style={{ backgroundColor: COLORS.navy }}
                      >
                        {isSubmitting ? "Đang gửi..." : "Đăng ký Health Check miễn phí"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div
                        className="text-6xl font-bold mb-4"
                        style={{ color: COLORS.gold }}
                      >
                        ✓
                      </div>
                      <h3
                        className="text-2xl font-bold mb-3"
                        style={{ color: COLORS.navy }}
                      >
                        Cảm ơn bạn!
                      </h3>
                      <p style={{ color: COLORS.slate }}>
                        Chúng tôi sẽ liên hệ trong 2-3 ngày làm việc.
                      </p>
                      <Button
                        onClick={() => setIsSuccess(false)}
                        className="mt-6 rounded-xl"
                        style={{ backgroundColor: COLORS.navy }}
                      >
                        Đăng ký thêm
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}