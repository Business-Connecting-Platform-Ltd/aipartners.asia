import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Mail,
  GraduationCap,
  Calendar,
  Clock,
  Video,
  CheckCircle2,
  Users,
  ArrowRight,
  Sparkles,
  Rocket,
  Brain,
  Zap,
  Target,
  RefreshCw,
  HelpCircle,
  Hourglass,
  Star,
  MapPin,
  User,
} from "lucide-react";

export default function AITrainers() {
  const handleConsultantClick = () => {
    const email = "info@aipartners.asia";
    const subject = encodeURIComponent("AI Training Consultation Request");
    const body = encodeURIComponent(
      "Dear AIPartners team,\n\nI am interested in learning more about your AI training programs. I would like to request a consultation to discuss:\n\n- Available courses and training options\n- Customized training solutions for my organization\n- Pricing and scheduling\n\nPlease let me know your availability for a consultation.\n\nBest regards,"
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    const newWindow = window.open(gmailUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };

  const REG_FORM = "https://docs.google.com/forms/d/1waayFcVC-0hRQMPe84dDHRnF92s3OugJs75I1FWphL0";
  const ZALO_GROUP = "https://zalo.me/g/tjbduk971";

  const painPoints = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Không hiểu cơ chế AI",
      desc: "Kết quả lúc được lúc không — vì chưa hiểu bản chất hoạt động của AI.",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Vẫn làm thủ công",
      desc: "AI có thể cắt giảm 70% công việc lặp lại — nhưng bạn chưa biết cách.",
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: "AI cho kết quả sai",
      desc: "Tra cứu ra thông tin bịa — vì chưa biết viết instruction đúng cách.",
    },
    {
      icon: <Hourglass className="h-6 w-6" />,
      title: "Sợ bị tụt hậu",
      desc: "Đồng nghiệp đã dùng AI thành thạo — bạn vẫn chưa biết bắt đầu từ đâu.",
    },
  ];

  const courses = [
    {
      tag: "Nền Tảng",
      tagClass: "bg-orange-100 text-orange-600",
      title: "Tự Tin Với AI",
      desc: "Hiểu bản chất AI, viết prompt hiệu quả, và tự tin sử dụng AI trong công việc hàng ngày.",
      duration: "1 buổi — 3-4 giờ học & thực hành",
      instructor: "GV: Trương Việt Đức",
      location: "Offline tại TP. HCM",
      topics: ["Cơ chế AI", "Prompt Engineering", "ChatGPT & Claude", "NotebookLM", "Thực hành"],
      btnClass: "",
    },
    {
      tag: "Chuyên Ngành",
      tagClass: "bg-indigo-100 text-indigo-600",
      title: "Ứng dụng AI vào Supply Chain Planning",
      desc: "Ứng dụng AI vào hoạch định chuỗi cung ứng — demand planning, forecast, inventory management.",
      duration: "1 buổi — 3-4 giờ học & thực hành",
      instructor: "GV: Lê Hoà Bình",
      location: "Offline tại TP. HCM",
      topics: ["Demand Planning", "Inventory", "Forecast", "Inventory Management", "Thực hành"],
      btnClass: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      tag: "Ứng Dụng",
      tagClass: "bg-emerald-100 text-emerald-600",
      title: "AI in Office",
      desc: "Ứng dụng AI vào công việc văn phòng hàng ngày — tăng hiệu suất và tự động hoá tác vụ.",
      duration: "3 buổi — học & thực hành",
      instructor: "GV: Lù Duy Nguyên",
      location: "Online",
      topics: ["Email & Docs", "Data Analysis", "Automation", "Reporting", "Thực hành"],
      btnClass: "bg-emerald-600 hover:bg-emerald-700",
    },
  ];

  const outcomes = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Hiểu bản chất AI",
      desc: "Biết tại sao AI cho kết quả tốt hoặc không — và cách điều chỉnh.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Tự động hoá",
      desc: "Cắt giảm công việc manual và repeated — tiết kiệm hàng giờ mỗi ngày.",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "Tra cứu chính xác",
      desc: "Viết instruction đúng để AI cho kết quả đáng tin — không \"bịa\".",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Tự tin với AI",
      desc: "Set up và sử dụng AI bài bản — sẵn sàng cho kỷ nguyên AI.",
    },
  ];

  const testimonials = [
    {
      initials: "HT",
      name: "Hà Thảo",
      detail: "Học viên · 13/06/2026",
      quote:
        "Nay em mới hiểu được cơ chế hoạt động của AI, hoá ra trước giờ mình dùng không thấy có gì khác biệt là có lý do cả. Nhờ lớp em biết thêm cách dùng NotebookLM cứu vớt cho sự học của em rồi!",
    },
    {
      initials: "CC",
      name: "Chau Chau Nguyen",
      detail: "Học viên · 13/06/2026",
      quote:
        "Đúng là cần hiểu bản chất từ đầu để set up thế nào và thực chiến luôn giúp save nhiều thời gian. Em thấy viễn cảnh tương lai khi tận dụng AI để cắt giảm được nhiều công việc manual và repeated.",
    },
    {
      initials: "PD",
      name: "Phương Dung",
      detail: "Học viên · 13/06/2026",
      quote:
        "Hôm nay là ngày nghỉ mà anh chị đã dành cho tụi em thời gian quý báu training kiến thức AI hiện đại, trân trọng biết ơn.",
    },
    {
      initials: "HT",
      name: "Hà Thảo",
      detail: "Ứng dụng AI tra cứu pháp luật · 14/06/2026",
      quote:
        "Wowww đúng là có instruction là khác biệt liền! Trước em dùng các bên khác, tra cứu ra kết quả bịa nhiều lắm. Giờ tra trên Cơ sở dữ liệu quốc gia ra đúng luôn.",
    },
  ];

  const enterpriseFeatures = [
    "Chương trình tuỳ chỉnh theo ngành & quy mô doanh nghiệp",
    "Đào tạo on-site hoặc online cho team phân tán",
    "Đánh giá năng lực AI trước & sau khóa học",
    "Hỗ trợ triển khai AI vào quy trình thực tế sau khóa",
    "Ưu đãi đặc biệt cho nhóm từ 5 người",
  ];

  const faqs = [
    {
      q: "Tôi chưa biết gì về AI, có học được không?",
      a: "Hoàn toàn được. Khóa AI Fundamentals dành cho người mới bắt đầu — không cần kiến thức kỹ thuật.",
    },
    {
      q: "Khóa học có thực hành không?",
      a: "100% thực chiến. Mỗi buổi đều thực hành trực tiếp trên công cụ AI — bạn áp dụng ngay vào công việc thực tế.",
    },
    {
      q: "Học xong tôi có thể làm gì?",
      a: "Viết prompt hiệu quả, tra cứu chính xác, tự động hoá công việc lặp lại, và ứng dụng AI vào chuyên ngành. Học viên đã giảm tới 70% thời gian cho công việc thủ công.",
    },
    {
      q: "Có hỗ trợ sau khóa học không?",
      a: "Có. Bạn tham gia cộng đồng học viên BCP để hỏi đáp và cập nhật AI mới nhất. Doanh nghiệp có gói tư vấn triển khai riêng.",
    },
    {
      q: "Muốn đào tạo cho cả team thì sao?",
      a: "Chương trình doanh nghiệp tuỳ chỉnh hoàn toàn — nội dung, lịch trình, hình thức học theo nhu cầu tổ chức. Ưu đãi cho nhóm từ 5 người.",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-indigo-400 via-sky-400 to-emerald-300" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-300" />
      </div>

      {/* HERO */}
      <section className="py-20 md:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container max-w-4xl mx-auto px-4 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600 mb-7">
            <GraduationCap className="h-4 w-4" /> Các khoá học AI
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 text-black tracking-tight leading-tight">
            Hiểu đúng AI. Dùng đúng cách.
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-9 leading-relaxed">
            Học thực chiến từ nền tảng đến chuyên ngành. Áp dụng ngay vào công việc hàng ngày — không lý thuyết suông.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <Button size="lg" className="px-9 bg-orange-600 hover:bg-orange-700 text-white" onClick={() => window.open(REG_FORM, "_blank")}>
              Đăng Ký Ngay
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}>
              Xem Khóa Học
            </Button>
          </div>

          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 rounded-2xl border border-gray-200 overflow-hidden">
            {[
              { num: "100+", label: "Học viên" },
              { num: "95%", label: "Hài lòng" },
              { num: "70%", label: "Hiệu suất tăng" },
            ].map((s, i) => (
              <div key={s.label} className={`py-7 px-4 ${i < 2 ? "sm:border-r border-gray-200" : ""}`}>
                <div className="text-2xl font-extrabold text-black">{s.num}</div>
                <div className="text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">Vấn Đề</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Dùng AI nhưng chưa thấy khác biệt?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {painPoints.map((p, i) => (
              <Card key={i} className="border">
                <CardContent className="p-8">
                  <div className="text-orange-600 mb-4">{p.icon}</div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-20" id="courses">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">Khóa Học</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Chọn khoá học phù hợp</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {courses.map((c, i) => (
              <Card key={i} className="border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="p-8 pb-7 border-b">
                  <span className={`inline-block px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4 ${c.tagClass}`}>
                    {c.tag}
                  </span>
                  <h3 className="text-2xl font-extrabold tracking-tight mb-2.5">{c.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
                <CardContent className="p-8 pt-6 flex flex-col flex-1">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2.5 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" /> {c.duration}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-gray-600">
                      <User className="h-4 w-4 text-gray-400 flex-shrink-0" /> {c.instructor}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" /> {c.location}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {c.topics.map((t) => (
                      <span key={t} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button
                    className={`w-full mt-auto ${c.btnClass || "bg-orange-600 hover:bg-orange-700"} text-white`}
                    onClick={() => window.open(REG_FORM, "_blank")}
                  >
                    Đăng Ký
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">Kết Quả</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Sau khóa học, bạn sẽ...</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {outcomes.map((o, i) => (
              <Card key={i} className="border text-center">
                <CardContent className="p-8">
                  <div className="text-orange-600 flex justify-center mb-4">{o.icon}</div>
                  <h3 className="font-bold text-sm mb-2">{o.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{o.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20" id="testimonials">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">Học Viên</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Phản hồi thực từ lớp học</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <Card key={i} className="border">
                <CardContent className="p-8">
                  <div className="flex gap-1 text-orange-600 mb-4">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-800 leading-relaxed mb-5">"{t.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.detail}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE */}
      <section className="py-20 bg-gray-50" id="enterprise">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">Doanh Nghiệp</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Đào tạo AI cho cả đội ngũ</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ul className="space-y-4">
              {enterpriseFeatures.map((f) => (
                <li key={f} className="flex gap-3 text-gray-800 leading-relaxed">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Card className="border">
              <CardContent className="p-12 text-center">
                <h3 className="text-xl font-extrabold mb-2.5">Nhận tư vấn miễn phí</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-7">
                  Chúng tôi đánh giá nhu cầu đào tạo AI của tổ chức bạn và đề xuất lộ trình phù hợp.
                </p>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-9" onClick={handleConsultantClick}>
                  Liên Hệ Tư Vấn
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" id="faq">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Câu hỏi thường gặp</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold hover:text-orange-600">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-black text-white text-center" id="register">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Sẵn sàng làm chủ AI?</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-9 leading-relaxed">
            Đăng ký ngay để giữ chỗ khoá tiếp theo. Số lượng có hạn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="px-10 py-6 text-base bg-orange-600 hover:bg-orange-700 text-white" onClick={() => window.open(REG_FORM, "_blank")}>
              Đăng Ký Ngay
            </Button>
            <Button size="lg" variant="outline" className="px-6 bg-transparent border-gray-600 text-white hover:bg-gray-900" onClick={() => window.open(ZALO_GROUP, "_blank")}>
              Group Zalo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <a
            href="mailto:huynh.nguyen@aipartners.asia"
            className="inline-flex items-center gap-2 mt-7 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" /> huynh.nguyen@aipartners.asia
          </a>
        </div>
      </section>
    </div>
  );
}
