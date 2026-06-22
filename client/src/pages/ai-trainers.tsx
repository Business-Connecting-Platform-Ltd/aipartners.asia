import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Mail,
  GraduationCap,
  Calendar,
  Clock,
  Video,
  Wallet,
  Gift,
  CheckCircle2,
  Users,
  ArrowRight,
  Sparkles,
  Stars,
  Rocket,
  ClipboardCheck,
  PenTool,
  BarChart3,
  Image as ImageIcon,
  Music2,
  Video as VideoIcon,
} from "lucide-react";

/** Import ảnh trực tiếp (Vite sẽ hash + optimize) */
import heroImg from "./course/info_trainer.png";
import curriculumImg from "./course/activity_1.png";
import bonusImg from "./course/activity_2.png";

/** Dùng const để giữ API cũ */
const HERO_IMG = heroImg;
const CURRICULUM_IMG = curriculumImg;
const BONUS_IMG = bonusImg;

export default function AITrainers() {
  const handleConsultantClick = () => {
    const email = "info@aipartners.asia";
    const subject = encodeURIComponent("AI Training Consultation Request");
    const body = encodeURIComponent(
      "Dear Tien Tran,\n\nI am interested in learning more about your AI training programs. I would like to request a consultation to discuss:\n\n- Available courses and training options\n- Customized training solutions for my organization\n- Pricing and scheduling\n\nPlease let me know your availability for a consultation.\n\nBest regards,"
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    const newWindow = window.open(gmailUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };

  const REG_FORM = "https://docs.google.com/forms/d/1waayFcVC-0hRQMPe84dDHRnF92s3OugJs75I1FWphL0";
  const ZALO_GROUP = "https://zalo.me/g/tjbduk971";

<<<<<<< HEAD
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
    "Đào tạo on-site hoặc online",
    "Đánh giá năng lực AI trước & sau khóa học",
  ];

  const faqs = [
    {
      q: "Tôi chưa biết gì về AI, có học được không?",
      a: "Hoàn toàn được. Khóa Tự Tin Với AI dành cho người mới bắt đầu — không cần kiến thức kỹ thuật.",
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
      a: "Chương trình doanh nghiệp tuỳ chỉnh hoàn toàn — nội dung, lịch trình, hình thức học theo nhu cầu tổ chức.",
    },
  ];

=======
>>>>>>> parent of c4ec13c (Update AI Trainers page with multi-course landing layout)
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-indigo-400 via-sky-400 to-emerald-300" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-300" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[90%] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>

      {/* HERO */}
      <section className="py-14 md:py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container max-w-6xl mx-auto px-4"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Copy */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/60 backdrop-blur">
                <GraduationCap className="h-4 w-4" /> KHAI GIẢNG KHÓA 5
                <span className="ml-2 inline-flex items-center gap-1 text-emerald-600">
                  <Sparkles className="h-4 w-4" /> MỚI
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3 text-black tracking-tight">
                AI IN OFFICE – Ứng dụng AI trong công việc hằng ngày
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                🌟 Tăng tốc hiệu suất – Làm chủ công nghệ – Dẫn đầu xu hướng
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <div className="rounded-2xl border p-3 bg-white/70 backdrop-blur flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> 13 – 15 – 17/10/2025
                </div>
                <div className="rounded-2xl border p-3 bg-white/70 backdrop-blur flex items-center gap-2">
                  <Clock className="h-4 w-4" /> 19:30 – 22:00
                </div>
                <div className="rounded-2xl border p-3 bg-white/70 backdrop-blur flex items-center gap-2">
                  <Video className="h-4 w-4" /> Zoom/Google Meet
                </div>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row items-center md:justify-start justify-center gap-3">
                <Button size="lg" className="px-6" onClick={() => window.open(REG_FORM, "_blank")}>Đăng ký ngay</Button>
                <Button size="lg" variant="secondary" onClick={() => window.open(ZALO_GROUP, "_blank")}>Group Zalo</Button>
                <Button size="lg" variant="outline" onClick={handleConsultantClick}>
                  Tư vấn 1:1 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Trust row */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-600">
                {["2000+ học viên", "20+ tổ chức", "80% thực hành", "Hỗ trợ 60 ngày"].map((t) => (
                  <div key={t} className="rounded-xl border bg-white/60 backdrop-blur p-2 text-center">{t}</div>
                ))}
              </div>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="relative rounded-3xl border shadow-sm overflow-hidden">
                <img
                  src={HERO_IMG}
                  alt="AI in Office Illustration"
                  width={1440}
                  height={900}
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-transparent to-white/10" />
              </div>
              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute -left-4 -bottom-4 rounded-2xl border bg-white p-3 shadow-sm flex items-center gap-2"
              >
                <Stars className="h-4 w-4" />
                <span className="text-sm">Prompting Pro</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="absolute -right-4 -top-4 rounded-2xl border bg-white p-3 shadow-sm flex items-center gap-2"
              >
                <Rocket className="h-4 w-4" />
                <span className="text-sm">Automation</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHY LEARN */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Vì sao nên học?</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">“AI không thay thế bạn – nhưng người sử dụng AI hiệu quả sẽ thay thế bạn.” Khóa học dành cho quản lý, lãnh đạo, nhân viên văn phòng.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Kỹ thuật Prompting thực chiến", i: <PenTool className="h-5 w-5" /> },
              { t: "10+ công cụ AI cho công việc", i: <ClipboardCheck className="h-5 w-5" /> },
              { t: "Trợ lý/Chatbot cho đội nhóm", i: <Users className="h-5 w-5" /> },
              { t: "Rút ngắn báo cáo & tổng hợp", i: <BarChart3 className="h-5 w-5" /> },
              { t: "No-code lên ‘lập trình 2/10’", i: <Rocket className="h-5 w-5" /> },
              { t: "Hỗ trợ sau khóa + online", i: <CheckCircle2 className="h-5 w-5" /> },
            ].map((item, i) => (
              <Card key={i} className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="rounded-lg border p-2 bg-white">{item.i}</div>
                  <span className="text-gray-800">{item.t}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE INFO */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-6 items-stretch">
            <Card className="md:col-span-3">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5" />
                  <h3 className="font-semibold">Lịch & Hình thức</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border p-4">
                    <p>Thứ 2 – Thứ 4 – Thứ 6 (3 buổi)</p>
                    <p>Ngày học: <strong>13 – 15 – 17/10/2025</strong></p>
                    <p className="mt-1 flex items-center gap-2"><Clock className="h-4 w-4" /> <strong>19:30 – 22:00</strong></p>
                    <p>Tổng: 7.5 giờ • 80% thực hành</p>
                  </div>
                  <div className="rounded-xl border p-4">
                    <p className="flex items-center gap-2"><Video className="h-4 w-4" /> Học trực tuyến: Zoom/Google Meet</p>
                    <img
                      src={CURRICULUM_IMG}
                      alt="Curriculum preview"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="mt-3 rounded-xl border w-full h-auto"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Bạn sẽ đạt được</h3>
                <ul className="space-y-2 text-gray-800">
                  {[
                    "Hiểu AI/GenAI & ứng dụng an toàn",
                    "Quy trình Prompting 8 bước",
                    "Mẫu báo cáo/slide/website làm nhanh",
                    "Thiết lập trợ lý cá nhân & nhóm",
                    "Workflow tự động hóa đầu tiên",
                  ].map((li) => (
                    <li key={li} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 mt-0.5" /> {li}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nội dung học tập</h2>
          <Tabs defaultValue="buoi1" className="w-full">
            <TabsList className="mx-auto grid grid-cols-3 max-w-2xl">
              <TabsTrigger value="buoi1">Buổi 1</TabsTrigger>
              <TabsTrigger value="buoi2">Buổi 2</TabsTrigger>
              <TabsTrigger value="buoi3">Buổi 3</TabsTrigger>
            </TabsList>
            <TabsContent value="buoi1">
              <Card className="overflow-hidden">
                <CardContent className="p-6 grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-3">
                    <h3 className="font-semibold mb-3">Làm chủ AI & Prompting</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-800">
                      <li>Tổng quan GenAI, xu hướng, điểm mạnh & lưu ý</li>
                      <li>Kỹ thuật Prompt hiệu quả – 8 lưu ý quan trọng</li>
                      <li>Thực hành xây dựng chương trình, kế hoạch với AI</li>
                      <li>Tạo chatbot, trợ lý AI cho cá nhân/đội nhóm/doanh nghiệp</li>
                      <li>Làm slide, website nhanh bằng công cụ AI</li>
                    </ul>
                  </div>
                  <img
                    src={CURRICULUM_IMG}
                    alt="Buổi 1"
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="md:col-span-2 rounded-xl border w-full h-auto"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="buoi2">
              <Card className="overflow-hidden">
                <CardContent className="p-6 grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-3">
                    <h3 className="font-semibold mb-3">Tăng tốc công việc, tối ưu thời gian</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-800">
                      <li>AI cho tổng hợp tài liệu, học tập, tra cứu</li>
                      <li>Nghiên cứu & xây dựng báo cáo, tạo infographic</li>
                      <li>Phân tích & xử lý dữ liệu với AI</li>
                      <li>Trở thành lập trình viên no-code với AI</li>
                      <li>Tự động hóa các công việc dựa trên AI</li>
                    </ul>
                  </div>
                  <div className="md:col-span-2 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border p-4 text-center">
                      <ImageIcon className="mx-auto" />
                      <p className="mt-2 text-sm">Infographic</p>
                    </div>
                    <div className="rounded-xl border p-4 text-center">
                      <ClipboardCheck className="mx-auto" />
                      <p className="mt-2 text-sm">Report</p>
                    </div>
                    <div className="rounded-xl border p-4 text-center">
                      <Rocket className="mx-auto" />
                      <p className="mt-2 text-sm">Automation</p>
                    </div>
                    <div className="rounded-xl border p-4 text-center">
                      <PenTool className="mx-auto" />
                      <p className="mt-2 text-sm">No-code</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="buoi3">
              <Card className="overflow-hidden">
                <CardContent className="p-6 grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-3">
                    <h3 className="font-semibold mb-3">Ứng dụng AI vào Bán hàng – CSKH – Marketing</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-800">
                      <li>Q&A chuyên sâu & thực hành các bài toán phát sinh</li>
                      <li>Sơ lược AI Agent – giới thiệu n8n, use-case & demo (mới so với Khóa 4)</li>
                      <li>AI tạo hình ảnh, âm nhạc, video</li>
                      <li>Phương pháp học tập tăng cường, quà tặng 123ai.vn</li>
                    </ul>
                  </div>
                  <div className="md:col-span-2 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl border p-4">
                      <ImageIcon className="mx-auto" />
                      <p className="mt-2 text-sm">Hình ảnh</p>
                    </div>
                    <div className="rounded-xl border p-4">
                      <Music2 className="mx-auto" />
                      <p className="mt-2 text-sm">Âm nhạc</p>
                    </div>
                    <div className="rounded-xl border p-4">
                      <VideoIcon className="mx-auto" />
                      <p className="mt-2 text-sm">Video</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Điểm khác biệt</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Giảng viên thực chiến</h4>
                <p className="text-gray-700">Chuyên gia AI cho ngân hàng, tài chính & doanh nghiệp; đã đào tạo 2000+ học viên tại 20+ tổ chức.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Giáo trình tối ưu theo công việc</h4>
                <p className="text-gray-700">Thiết kế riêng cho tác vụ văn phòng, liên tục cập nhật & tối ưu.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Thực hành & hỗ trợ sau học</h4>
                <p className="text-gray-700">80% thực hành; hỗ trợ 60 ngày sau khóa; tư vấn 1:1 theo nhu cầu.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Học phí & Ưu đãi (Khóa 5)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Wallet className="h-5 w-5" />
                  <h3 className="font-semibold">Giá gốc</h3>
                </div>
                <p className="text-2xl font-bold line-through text-gray-400">3.000.000đ</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Ưu đãi tháng 10</h3>
                <p className="text-3xl font-bold">1.500.000đ</p>
                <p className="text-sm text-gray-600">Giảm 50%</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Early Bird</h3>
                <p className="text-3xl font-bold">1.200.000đ</p>
                <p className="text-sm text-gray-600">Giảm 60% nếu chuyển khoản trước <strong>07/10</strong></p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 overflow-hidden">
            <CardContent className="p-6 grid md:grid-cols-2 gap-4 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5" />
                  <h3 className="font-semibold">Ưu đãi cho nhóm/công ty</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border p-4">
                    <p className="font-medium">Đăng ký 5 suất</p>
                    <p className="text-gray-700">Tặng thêm 1 suất</p>
                  </div>
                  <div className="rounded-xl border p-4">
                    <p className="font-medium">Đăng ký 10 suất</p>
                    <p className="text-gray-700">Tặng thêm 3 suất</p>
                  </div>
                </div>
              </div>
              <img
                src={BONUS_IMG}
                alt="Ưu đãi"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="rounded-xl border w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BONUS */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="h-5 w-5" />
                  <h3 className="font-semibold">Ưu đãi đặc biệt</h3>
                </div>
                <p>Tặng tài khoản <strong>1 tháng</strong> học miễn phí toàn bộ Level tại <strong>123AI.vn</strong> (trị giá 300.000đ).</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-5 w-5" />
                  <h3 className="font-semibold">Chứng chỉ hoàn thành</h3>
                </div>
                <p>Nhận chứng chỉ hoàn thành khóa học – bổ sung hồ sơ năng lực cá nhân.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Phát triển kỹ năng AI tạo tác động thật!</h2>
          <p className="text-gray-600 mb-6">Đăng ký ngay để giữ chỗ và nhận ưu đãi tốt nhất.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <Button size="lg" className="px-6" onClick={() => window.open(REG_FORM, "_blank")}>Đăng ký & Thanh toán</Button>
            <Button size="lg" variant="secondary" onClick={() => window.open(ZALO_GROUP, "_blank")}>Group Zalo lớp học</Button>
            <a
              href="mailto:tien.tran@aipartners.asia"
              className="flex items-center gap-2 hover:underline text-sm md:text-base"
            >
              <Mail className="h-5 w-5" />
              tien.tran@aipartners.asia
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
