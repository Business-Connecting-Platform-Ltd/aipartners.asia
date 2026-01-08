import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { ContentContainer, CTAButton } from "@/components/factory-tour/shared";
import AudienceA from "@/components/factory-tour/AudienceA";
import AudienceB from "@/components/factory-tour/AudienceB";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, Factory as FactoryIcon } from "lucide-react";

const NAV_LINKS_A = [
  { label: "Vấn đề", href: "#problem" },
  { label: "Giải pháp", href: "#solution" },
  { label: "Quyền lợi", href: "#benefits" },
  { label: "Case Study", href: "#case-study" },
  { label: "Quy trình", href: "#process" },
];

const NAV_LINKS_B = [
  { label: "Tại sao BCP?", href: "#why-bcp" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Quy trình", href: "#process-b" },
];

type Audience = "A" | "B";

export default function FactoryTour() {
  const [location, setLocation] = useLocation();

  // Determine audience based on path
  const audience: Audience = location === "/factory-tour/factory" ? "B" : "A";

  const navLinks = audience === "A" ? NAV_LINKS_A : NAV_LINKS_B;

  // Automatically redirect /factory-tour to /factory-tour/partner for consistent URLs
  useEffect(() => {
    if (location === "/factory-tour") {
      setLocation("/factory-tour/partner", { replace: true });
    }
  }, [location, setLocation]);

  const handleAudienceChange = (val: Audience) => {
    if (val === "A") {
      setLocation("/factory-tour/partner");
    } else {
      setLocation("/factory-tour/factory");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur">
        <ContentContainer className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <div className="h-9 w-9 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center">
                BCP
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800">BCP Factory Tour</p>
                <p className="text-xs text-slate-500">AI Partners 2025</p>
              </div>
            </div>

            {/* Version Switcher */}
            <div className="w-[180px] md:w-[220px]">
              <Select
                value={audience}
                onValueChange={(val) => handleAudienceChange(val as Audience)}
              >
                <SelectTrigger className="h-9 bg-slate-50 border-slate-200 focus:ring-blue-500">
                  <SelectValue placeholder="Chọn đối tượng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>Dành cho Partner</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="B">
                    <div className="flex items-center gap-2">
                      <FactoryIcon className="h-4 w-4 text-blue-600" />
                      <span>Dành cho Nhà máy</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <CTAButton
              href={audience === "B" ? "https://forms.gle/yPLseH7yhA84tG1z6" : undefined}
            />
          </div>
        </ContentContainer>
      </header>

      {audience === "A" ? <AudienceA /> : <AudienceB />}
    </div>
  );
}