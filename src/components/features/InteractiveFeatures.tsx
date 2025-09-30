"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

interface UserType {
  id: number;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}

const userTypes: UserType[] = [
  {
    id: 1,
    icon: GraduationCap,
    title: "I'm a Student",
    subtitle: "Build Your Portfolio",
    description: "Get real-world experience, build your portfolio, and earn money while learning from actual clients.",
    benefits: [
      "Gain practical experience with real clients",
      "Build a professional portfolio",
      "Earn money while you learn",
      "Receive verified reviews and ratings"
    ],
    ctaText: "Start as Student",
    ctaLink: "/onboarding/student"
  },
  {
    id: 2,
    icon: Users,
    title: "I'm a Client",
    subtitle: "Quality at Student Prices",
    description: "Get professional beauty treatments for 50-70% less while helping students build their careers.",
    benefits: [
      "Save 50-70% on professional treatments",
      "Support aspiring beauty professionals",
      "Access verified, rated students",
      "Flexible booking options"
    ],
    ctaText: "Find Treatments",
    ctaLink: "/onboarding/client"
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "I'm an Investor",
    subtitle: "Invest in Students",
    description: "Support talented beauty students through chair rentals, salon partnerships, and recruitment opportunities.",
    benefits: [
      "Fund student chair rental agreements",
      "Partner with students opening salons",
      "Recruit top graduates for your business",
      "Finance equipment for student startups"
    ],
    ctaText: "Explore Opportunities",
    ctaLink: "/onboarding/investor"
  }
];

export function InteractiveFeatures() {
  const [currentUserType, setCurrentUserType] = useState(0);
  const [progress, setProgress] = useState(0);
  const userTypeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotation only on desktop
  useEffect(() => {
    if (isMobile) return; // Don't auto-rotate on mobile

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 150);

    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return; // Don't auto-advance on mobile

    if (progress >= 100) {
      setTimeout(() => {
        setCurrentUserType((prev) => (prev + 1) % userTypes.length);
        setProgress(0);
      }, 300);
    }
  }, [progress, isMobile]);

  // Remove horizontal scroll effect on mobile
  useEffect(() => {
    if (isMobile) return; // Skip scroll effect on mobile

    const activeUserTypeElement = userTypeRefs.current[currentUserType];
    const container = containerRef.current;

    if (activeUserTypeElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeUserTypeElement.getBoundingClientRect();

      container.scrollTo({
        left:
          activeUserTypeElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentUserType, isMobile]);

  const handleUserTypeClick = (index: number) => {
    setCurrentUserType(index);
    setProgress(0);
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0">
          <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Join Our Platform
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6">
            Choose Your Path
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a student, client, or investor, we have something for you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-start lg:items-center">
          {/* Left Side - User Types */}
          <div
            ref={containerRef}
            className={`
              space-y-4 sm:space-y-6 lg:space-y-8
              order-2 lg:order-1
            `}
          >
            {userTypes.map((userType, index) => {
              const Icon = userType.icon;
              const isActive = currentUserType === index;

              return (
                <div
                  key={userType.id}
                  ref={(el) => {
                    userTypeRefs.current[index] = el;
                  }}
                  className="relative cursor-pointer"
                  onClick={() => handleUserTypeClick(index)}
                >
                  {/* User Type Card - Full width on mobile */}
                  <div
                    className={`
                      flex flex-col sm:flex-row items-start p-4 sm:p-6
                      transition-all duration-300 rounded-xl
                      ${
                        isActive
                          ? "bg-white shadow-xl border-2 border-primary-200 scale-[1.02]"
                          : "bg-gray-50 border-2 border-transparent hover:border-gray-200"
                      }
                    `}
                  >
                    {/* Icon & Title Row */}
                    <div className="flex items-start gap-3 sm:gap-4 w-full sm:w-auto mb-3 sm:mb-0">
                      <div
                        className={`
                          p-2.5 sm:p-3 rounded-full transition-all duration-300 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center
                          ${
                            isActive
                              ? "bg-primary-500 text-white shadow-lg"
                              : "bg-primary-100 text-primary-600"
                          }
                        `}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      <div className="flex-1">
                        <h3
                          className={`
                            text-lg sm:text-xl font-bold mb-1 transition-colors duration-300
                            ${isActive ? "text-gray-900" : "text-gray-700"}
                          `}
                        >
                          {userType.title}
                        </h3>
                        <p
                          className={`
                            text-sm sm:text-base font-semibold mb-2 transition-colors duration-300
                            ${isActive ? "text-primary-600" : "text-primary-500"}
                          `}
                        >
                          {userType.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description - Always visible on mobile for scannability */}
                    <div className="w-full sm:flex-1 sm:ml-4">
                      <p
                        className={`
                          text-sm leading-relaxed mb-3
                          ${isActive ? "text-gray-700" : "text-gray-600"}
                        `}
                      >
                        {userType.description}
                      </p>

                      {/* Benefits - Show on active */}
                      {isActive && (
                        <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 mb-4 pl-1">
                          {userType.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* CTA Button - Always visible on mobile, prominent when active */}
                      <Button
                        size={isActive ? "default" : "sm"}
                        asChild
                        className={`
                          w-full sm:w-auto
                          ${
                            isActive
                              ? "bg-primary-500 hover:bg-primary-600 text-white shadow-md"
                              : "bg-primary-100 hover:bg-primary-200 text-primary-700 border border-primary-200"
                          }
                        `}
                      >
                        <Link href={userType.ctaLink}>
                          {userType.ctaText}
                          {isActive && (
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </Link>
                      </Button>

                      {/* Progress bar - Desktop only for auto-rotation */}
                      {!isMobile && (
                        <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
                          {isActive && (
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 0.1, ease: "linear" }}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Visual Display (Desktop Only) */}
          <div className="relative order-1 lg:order-2 hidden lg:block">
            <motion.div
              key={currentUserType}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative max-w-lg mx-auto"
            >
              <div className="w-full h-96 rounded-2xl border border-gray-200 shadow-lg overflow-hidden relative">
                {/* Beautiful Professional Background Gradients - No external images */}
                <div className={`absolute inset-0 ${
                  currentUserType === 0
                    ? 'bg-gradient-to-br from-pink-200 via-rose-300 to-primary-400'
                    : currentUserType === 1
                    ? 'bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400'
                    : 'bg-gradient-to-br from-green-200 via-emerald-300 to-teal-400'
                }`} />

                {/* Subtle Texture Overlay for Realism */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px]" />
                </div>

                {/* Professional Atmosphere Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-end p-6">
                  <div className="text-center w-full">
                    <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-1 ring-white/20">
                      {(() => {
                        const Icon = userTypes[currentUserType].icon;
                        return <Icon className="w-6 h-6 text-primary-600" />;
                      })()}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-sm">
                      {userTypes[currentUserType].title}
                    </h3>
                    <p className="text-base text-primary-100 font-medium mb-3 drop-shadow-sm">
                      {userTypes[currentUserType].subtitle}
                    </p>
                    <p className="text-gray-100 text-sm mb-6 leading-relaxed drop-shadow-sm">
                      {userTypes[currentUserType].description}
                    </p>
                    <Button
                      size="sm"
                      asChild
                      className="bg-white/95 backdrop-blur-sm hover:bg-white text-primary-600 hover:text-primary-700 font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 ring-1 ring-white/20"
                    >
                      <Link href={userTypes[currentUserType].ctaLink}>
                        {userTypes[currentUserType].ctaText}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}