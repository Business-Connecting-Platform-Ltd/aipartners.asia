import { motion } from "framer-motion";
import {
    Building2,
    CheckCircle2,
    Zap,
    Search,
    Settings,
    ArrowUpRight,
} from "lucide-react";
import { FullWidthSection, ContentContainer, CTAButton } from "./shared";

export default function AudienceB() {
    return (
        <main className="flex-1">
            <FullWidthSection className="min-h-[80vh] flex items-center bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-slate-900/85 to-indigo-900/80" />
                <ContentContainer className="relative z-10 py-20 text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 rounded-full border border-indigo-400/30 text-sm font-medium">
                            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                            Giải pháp Chuyển đổi số Nhà máy
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            Đưa AI & Tự động hoá <br /> vào dây chuyền sản xuất
                        </h1>
                        <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
                            BCP giúp nhà máy tìm đúng đối tác công nghệ, tối ưu
                            quy trình và giảm chi phí vận hành thông qua các
                            giải pháp AI/IoT thực chiến.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 text-sm">
                            {[
                                "Tiết kiệm 20-30% chi phí vận hành",
                                "Kết nối 100+ chuyên gia AI/IoT",
                                "Hỗ trợ khảo sát onsite miễn phí",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/10"
                                >
                                    <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-4">
                            <CTAButton />
                            <p className="text-white/60 text-sm mt-3">
                                Dành riêng cho Ban Giám Đốc & Chủ nhà máy
                            </p>
                        </div>
                    </motion.div>
                </ContentContainer>
            </FullWidthSection>

            <section id="why-bcp" className="py-16 md:py-24">
                <ContentContainer>
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Tại sao Nhà máy nên chọn BCP?
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Chúng tôi không chỉ là nền tảng, chúng tôi là người
                            đồng hành đáng tin cậy.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Search,
                                title: "Đối tác đã xác thực",
                                desc: "100% đối tác công nghệ được BCP kiểm chứng năng lực thực tế qua các dự án đã triển khai.",
                            },
                            {
                                icon: Zap,
                                title: "Giải pháp may đo",
                                desc: "Không dùng giải pháp đại trà. Chúng tôi khảo sát pain points của từng nhà máy để đề xuất công nghệ phù hợp.",
                            },
                            {
                                icon: Settings,
                                title: "Đảm bảo tiến độ",
                                desc: "BCP giám sát và hỗ trợ quá trình triển khai, đảm bảo ROI (tỷ suất hoàn vốn) như cam kết.",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </ContentContainer>
            </section>

            <section id="services" className="py-16 md:py-24 bg-white">
                <ContentContainer>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                Giải pháp toàn diện cho <br /> kỷ nguyên Công
                                nghiệp 4.0
                            </h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "AI & Machine Learning",
                                        desc: "Dự báo bảo trì, kiểm tra chất lượng sản phẩm tự động qua camera.",
                                    },
                                    {
                                        title: "IoT & Real-time Monitoring",
                                        desc: "Giám sát hiệu suất máy móc (OEE) và tiêu thụ năng lượng theo thời gian thực.",
                                    },
                                    {
                                        title: "Automation & Robotics",
                                        desc: "Tối ưu hoá dây chuyền lắp ráp và kho vận tự động.",
                                    },
                                ].map((s, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">
                                                {s.title}
                                            </h4>
                                            <p className="text-slate-600 text-sm">
                                                {s.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-100 rounded-3xl aspect-video relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                                alt="Technology"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </ContentContainer>
            </section>

            <FullWidthSection
                id="process-b"
                className="py-20 bg-slate-900 text-white overflow-hidden"
            >
                <ContentContainer className="relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Đăng ký Khảo sát Nhà máy
                            </h2>
                            <p className="text-slate-400 text-lg mb-8">
                                Để lại thông tin, đội ngũ chuyên gia của BCP sẽ
                                liên hệ để xếp lịch khảo sát thực tế tại nhà máy
                                của bạn trong vòng 48h.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Phân tích hiện trạng vận hành",
                                    "Xác định các bài toán ưu tiên",
                                    "Đề xuất lộ trình chuyển đổi số",
                                ].map((text, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="h-2 w-2 rounded-full bg-indigo-500" />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                            <CTAButton />
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full" />
                            <img
                                src="https://images.unsplash.com/photo-1565151443833-29bf2ba5dd8d?auto=format&fit=crop&w=800&q=80"
                                alt="Factory survey"
                                className="relative rounded-2xl shadow-2xl border border-white/10"
                            />
                        </div>
                    </div>
                </ContentContainer>
            </FullWidthSection>
        </main>
    );
}
