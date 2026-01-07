import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Full-width section wrapper - breaks out of parent container
export const FullWidthSection = ({
    children,
    className = "",
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) => {
    return (
        <section
            id={id}
            className={`relative w-[100vw] left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] ${className}`}
        >
            {children}
        </section>
    );
};

// Content container - keeps content centered with max-width
export const ContentContainer = ({
    children,
    className = "",
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) => {
    return (
        <div
            id={id}
            className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </div>
    );
};

// Reusable CTA Button Component
export const CTAButton = ({
    variant = "primary",
}: {
    variant?: "primary" | "secondary";
}) => {
    const baseStyles =
        "px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold rounded-lg shadow-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary:
            "bg-white text-slate-900 border border-slate-200 hover:border-slate-300",
    };

    return (
        <a
            href="https://7g5ufqou95q.typeform.com/to/qTiYjU0p"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Button className={` ${baseStyles} ${variants[variant]}`}>
                Đăng ký ngay
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
        </a>
    );
};
