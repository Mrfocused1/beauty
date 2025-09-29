"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface UserType {
  id: number;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
  image: string;
  imageAlt: string;
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
    ctaLink: "/onboarding/student",
    image: "/student-treatment.jpg",
    imageAlt: "Beauty therapy student providing professional facial treatment"
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
    ctaLink: "/onboarding/client",
    image: "/happy-client.jpg",
    imageAlt: "Happy client smiling in modern salon environment"
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
    ctaLink: "/onboarding/investor",
    image: "/salon-owner.jpg",
    imageAlt: "Professional salon owner in modern beauty salon setting"
  }
];

export function InteractiveFeatures() {
  const [currentUserType, setCurrentUserType] = useState(0);
  const [progress, setProgress] = useState(0);
  const userTypeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentUserType((prev) => (prev + 1) % userTypes.length);
        setProgress(0);
      }, 300);
    }
  }, [progress]);

  useEffect(() => {
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
  }, [currentUserType]);

  const handleUserTypeClick = (index: number) => {
    setCurrentUserType(index);
    setProgress(0);
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Join Our Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Choose Your Path
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a student, client, or investor, we have something for you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
          {/* Left Side - User Types with Progress Lines */}
          <div
            ref={containerRef}
            className="lg:space-y-8 md:space-x-6 lg:space-x-0 overflow-x-auto overflow-hidden no-scrollbar lg:overflow-visible flex lg:flex lg:flex-col flex-row order-1 pb-4 scroll-smooth"
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
                  className="relative cursor-pointer flex-shrink-0"
                  onClick={() => handleUserTypeClick(index)}
                >
                  {/* User Type Content */}
                  <div
                    className={`
                    flex lg:flex-row flex-col items-start space-x-4 p-6 max-w-sm md:max-w-sm lg:max-w-2xl transition-all duration-300
                    ${
                      isActive
                        ? "bg-white shadow-xl rounded-xl border border-gray-200"
                        : ""
                    }
                  `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                      p-3 hidden md:block rounded-full transition-all duration-300
                      ${
                        isActive
                          ? "bg-primary-500 text-white"
                          : "bg-primary-100 text-primary-500"
                      }
                    `}
                    >
                      <Icon size={24} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={`
                        text-lg md:mt-4 lg:mt-0 font-semibold mb-1 transition-colors duration-300
                        ${
                          isActive
                            ? "text-gray-900"
                            : "text-gray-700"
                        }
                      `}
                      >
                        {userType.title}
                      </h3>
                      <p
                        className={`
                        text-sm font-medium mb-2 transition-colors duration-300
                        ${
                          isActive
                            ? "text-primary-600"
                            : "text-primary-500"
                        }
                      `}
                      >
                        {userType.subtitle}
                      </p>
                      <p
                        className={`
                        transition-colors duration-300 text-sm mb-3
                        ${
                          isActive
                            ? "text-gray-600"
                            : "text-gray-500"
                        }
                      `}
                      >
                        {userType.description}
                      </p>

                      {/* Benefits */}
                      {isActive && (
                        <ul className="text-xs text-gray-500 space-y-1 mb-4">
                          {userType.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center">
                              <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* CTA Button */}
                      {isActive && (
                        <Button
                          size="sm"
                          asChild
                          className="bg-primary-500 hover:bg-primary-600 text-white"
                        >
                          <Link href={userType.ctaLink}>{userType.ctaText}</Link>
                        </Button>
                      )}

                      <div className="mt-4 bg-gray-100 rounded-sm h-1 overflow-hidden">
                        {isActive && (
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - User Type Display */}
          <div className="relative order-1 max-w-lg mx-auto lg:order-2">
            <motion.div
              key={currentUserType}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-full h-96 rounded-2xl border border-gray-200 shadow-lg overflow-hidden relative">
                {/* Background Image */}
                <Image
                  src={userTypes[currentUserType].image}
                  alt={userTypes[currentUserType].imageAlt}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-end p-6">
                  <div className="text-center w-full">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const Icon = userTypes[currentUserType].icon;
                        return <Icon size={24} className="text-primary-600" />;
                      })()}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {userTypes[currentUserType].title}
                    </h3>
                    <p className="text-primary-200 font-medium mb-3">
                      {userTypes[currentUserType].subtitle}
                    </p>
                    <p className="text-gray-200 text-sm mb-6">
                      {userTypes[currentUserType].description}
                    </p>
                    <Button
                      size="lg"
                      asChild
                      className="bg-white/90 backdrop-blur-sm hover:bg-white text-primary-600 hover:text-primary-700 font-semibold"
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