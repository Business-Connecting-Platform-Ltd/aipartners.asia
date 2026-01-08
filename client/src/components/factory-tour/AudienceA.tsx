import { motion } from "framer-motion";
import { Shield, CheckCircle2, Users, ClipboardList, Factory, FileCheck, UserCheck } from 'lucide-react';
import { FullWidthSection, ContentContainer, CTAButton } from "./shared";
import hiepthanh from "../../assets/hiepthanh.jpg";

export default function AudienceA() {
    return (
        <main className="flex-1">
            <FullWidthSection className="min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "grayscale(20%)",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/85 to-slate-900/80" />
                <ContentContainer className="relative z-10 py-20 text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/15 text-sm font-medium">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            WISE HCMC+ 2025 • Factory Tour
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            Từ slide đến nhà máy thực tế
                        </h1>
                        <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
                            Kết nối trực tiếp với CEO nhà máy, nhận tech leads thật mỗi tuần,
                            đồng hành triển khai dự án AI/IoT/Automation cùng BCP.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 text-sm">
                            {[
                                "25+ ngành nghề sản xuất",
                                "Tech leads đã được sàng lọc",
                                "Gặp trực tiếp CEO & ban vận hành",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/10"
                                >
                                    <CheckCircle2 className="h-4 w-4" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-4">
                            <CTAButton />
                            <p className="text-white/60 text-sm mt-3">
                                Mất 3 phút đăng ký • BCP phản hồi trong 3–5 ngày làm việc
                            </p>
                        </div>
                    </motion.div>
                </ContentContainer>
            </FullWidthSection>

            <section id="problem" className="py-16 md:py-24">
                <ContentContainer id="problem">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-10"
                    >
                        <div className="text-center space-y-4">
                            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
                                Vấn đề hiện tại
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                AI giỏi nhưng vẫn khó chốt dự án
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Những rào cản phổ biến mà các đội AI/IoT đang gặp phải:
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                {
                                    title: "Không gặp đúng người quyết định",
                                    desc: "Chỉ dừng ở phòng IT, khó tiếp cận CEO/GM nhà máy.",
                                },
                                {
                                    title: "Chi phí lead cao",
                                    desc: "Quảng cáo, hội thảo nhưng tỷ lệ chuyển đổi thấp.",
                                },
                                {
                                    title: "Thiếu bối cảnh thực tế",
                                    desc: "Không được đi dây chuyền, thiếu dữ liệu và quy trình thật.",
                                },
                                {
                                    title: "Mất niềm tin",
                                    desc: "Khách hàng từng gặp trải nghiệm tệ từ đơn vị triển khai trước.",
                                },
                                {
                                    title: "Thiếu kênh bán hàng",
                                    desc: "Đội kỹ thuật mạnh nhưng thiếu hệ thống tiếp cận sản xuất.",
                                },
                                {
                                    title: "Giải pháp bị kẹt ở demo",
                                    desc: "Không ra doanh thu dù sản phẩm tốt.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
                                >
                                    <div className="flex items-start gap-3">
                                        <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </ContentContainer>
            </section>

            <section
                id="solution"
                className="py-16 md:py-24 bg-slate-50 border-t border-slate-100"
            >
                <ContentContainer id="solution">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-12"
                    >
                        <div className="text-center space-y-4">
                            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
                                Giải pháp BCP
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Cầu nối vào nhà máy, có người thật việc thật
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Business Connecting Platform kết nối nhu cầu MUA - BÁN - HỢP TÁC giữa
                                25+ ngành bằng AI matching và đội ngũ onsite.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "AI Matching chuẩn",
                                    desc: "Matching dựa trên ngành, bài toán cụ thể và năng lực triển khai đã kiểm chứng.",
                                },
                                {
                                    title: "Ecosystem tin cậy",
                                    desc: "Doanh nghiệp và đối tác được sàng lọc, giảm rủi ro dự án ảo.",
                                },
                                {
                                    title: "Đồng hành triển khai",
                                    desc: "BCP tham gia khảo sát, đề xuất, co-build & co-sell tới khi go-live.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="p-7 bg-white rounded-2xl border border-slate-200 shadow-sm"
                                >
                                    <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                                        <CheckCircle2 className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-slate-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { icon: Users, text: "Khai thác & sàng lọc tech leads từ cộng đồng BCP" },
                                { icon: ClipboardList, text: "Khảo sát nhanh, đề xuất rõ ràng, tập trung ROI" },
                                { icon: Factory, text: "Factory Tour: gặp trực tiếp CEO, ban vận hành, xem dây chuyền" },
                            ].map((item) => (
                                <div
                                    key={item.text}
                                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200"
                                >
                                    <div className="p-2 rounded-lg bg-slate-100 text-blue-700">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <p className="text-slate-700 text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </ContentContainer>
            </section>

            <section id="benefits" className="py-16 md:py-24">
                <ContentContainer id="benefits">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-10"
                    >
                        <div className="text-center space-y-4">
                            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
                                Quyền lợi
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Bạn nhận được gì?
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                {
                                    title: "Tech leads thật hằng tuần",
                                    desc: "Nhu cầu từ nhà máy, FDI, SMEs đã được xác thực.",
                                },
                                {
                                    title: "Factory tour chuyên sâu",
                                    desc: "Đi thực tế, quan sát quy trình, làm việc với ban lãnh đạo.",
                                },
                                {
                                    title: "Đồng hành proposal",
                                    desc: "Hỗ trợ xây dựng đề xuất, mô hình triển khai và ROI.",
                                },
                                {
                                    title: "Hiện diện thương hiệu",
                                    desc: "Logo, profile, case study trên ecosystem map BCP.",
                                },
                                {
                                    title: "Ưu tiên workshop & demo day",
                                    desc: "Tham gia các chương trình kín với khách hàng thật.",
                                },
                                {
                                    title: "Kết nối nhà đầu tư",
                                    desc: "Mở rộng cơ hội vốn và đối tác chiến lược.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
                                >
                                    <h3 className="font-semibold text-slate-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </ContentContainer>
            </section>

            <section
                id="case-study"
                className="py-16 md:py-24 bg-slate-50 border-t border-slate-100"
            >
                <ContentContainer id="case-study">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-10"
                    >
                        <div className="text-center space-y-4">
                            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
                                Case Study
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Factory Tour: Nhựa Hiệp Thành
                            </h2>
                            <p className="text-slate-600">
                                Doanh nghiệp sản xuất nhựa & bao bì tại TP.HCM
                            </p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-6 items-start">
                            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                                <img
                                    src={hiepthanh}
                                    alt="Nhà máy Nhựa Hiệp Thành"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="space-y-6">
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <ClipboardList className="h-5 w-5 text-blue-700" />
                                        <h3 className="font-semibold text-lg text-slate-900">
                                            Trước Tour
                                        </h3>
                                    </div>
                                    <ul className="space-y-3 text-slate-700 text-sm">
                                        {[
                                            "Thu thập pain points: sản xuất, kho, chất lượng, bảo trì.",
                                            "Thiết kế khảo sát theo mảng IoT, AI, MES, ERP, Data, Automation.",
                                            "Chọn AI Partners theo chuyên môn phù hợp từng dây chuyền.",
                                        ].map((item) => (
                                            <li key={item} className="flex gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <FileCheck className="h-5 w-5 text-blue-700" />
                                        <h3 className="font-semibold text-lg text-slate-900">
                                            Kết quả
                                        </h3>
                                    </div>
                                    <ul className="space-y-3 text-slate-700 text-sm">
                                        {[
                                            "Ban lãnh đạo chia sẻ quy trình, dữ liệu, vấn đề thực tế.",
                                            "Hình thành hướng giải pháp: giám sát máy, tối ưu sản xuất, tracking.",
                                            "Nhiều AI Partners vào vòng trao đổi để xây dựng proposal.",
                                            "BCP & nhà máy lập bản đồ nhu cầu chuyển đổi số toàn diện.",
                                        ].map((item) => (
                                            <li key={item} className="flex gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border-l-4 border-blue-600 pl-4 text-slate-800 italic">
                                    “Factory Tour sẽ được nhân rộng trong chuỗi chương trình
                                    2025, với AI Partners là lực lượng nòng cốt.”
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </ContentContainer>
            </section>

            <section id="process" className="py-16 md:py-24 border-t border-slate-100">
                <ContentContainer id="process">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-10"
                    >
                        <div className="text-center space-y-4">
                            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
                                Quy trình
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                4 bước tham gia
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                {
                                    step: "01",
                                    icon: ClipboardList,
                                    title: "Đăng ký online",
                                    desc: "Điền form về công ty, giải pháp, công nghệ, kỳ vọng.",
                                },
                                {
                                    step: "02",
                                    icon: UserCheck,
                                    title: "Sàng lọc & kết nối",
                                    desc: "BCP đánh giá năng lực, match đúng ngành và bài toán.",
                                },
                                {
                                    step: "03",
                                    icon: Factory,
                                    title: "Factory Tour",
                                    desc: "Tham dự tour, workshop, làm việc trực tiếp với nhà máy.",
                                },
                                {
                                    step: "04",
                                    icon: FileCheck,
                                    title: "Đề xuất & triển khai",
                                    desc: "Đồng xây dựng proposal, đồng hành triển khai.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.step}
                                    className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm text-center space-y-4"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-700 font-semibold">
                                        {item.step}
                                    </div>
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 text-blue-700 mx-auto">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </ContentContainer>
            </section>

            <FullWidthSection className="py-16 md:py-24 bg-gradient-to-br from-blue-700 to-slate-900 text-white">
                <ContentContainer className="text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-4 max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            Sẵn sàng có dự án AI/IoT thực sự?
                        </h2>
                        <p className="text-white/85 text-lg">
                            BCP kết nối bạn với cơ hội thật, khách hàng nghiêm túc và đội ngũ
                            đồng hành đến khi triển khai.
                        </p>
                        <CTAButton variant="secondary" />
                        <p className="text-white/60 text-sm">
                            Mất 3 phút đăng ký • Phản hồi trong 3–5 ngày làm việc
                        </p>
                    </motion.div>
                </ContentContainer>
            </FullWidthSection>
        </main>
    );
}
