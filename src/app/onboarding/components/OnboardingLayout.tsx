"use client";

import { ReactNode } from "react";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface OnboardingLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  showBackButton?: boolean;
  backHref?: string;
}

export function OnboardingLayout({
  children,
  title,
  subtitle,
  showBackButton = true,
  backHref = "/",
}: OnboardingLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {showBackButton && (
              <Button variant="ghost" size="sm" asChild>
                <Link href={backHref} className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Link>
              </Button>
            )}

            {/* Security indicator */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Shield className="w-4 h-4 text-green-600" />
              <span>256-bit SSL encryption</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Title section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Form content */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
            {children}
          </div>

          {/* Footer trust indicators */}
          <div className="text-center mt-8 text-xs text-gray-500">
            <p>Your information is secure and never shared without consent</p>
          </div>
        </div>
      </div>
    </div>
  );
}