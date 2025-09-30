'use client'

import { Button } from '@/components/ui/button'
import { BackgroundBeamsWithCollision } from '@/components/ui/boxes'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { Container } from '@/components/shared/Container'
import { InteractiveFeatures } from '@/components/features/InteractiveFeatures'
import { Shield, CreditCard, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <BackgroundBeamsWithCollision className="min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center relative">
          <Container className="py-8 sm:py-12 lg:py-16 xl:py-20">
            <div className="text-center relative max-w-6xl mx-auto">

              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 sm:mb-10 lg:mb-12 xl:mb-16 leading-tight max-w-4xl mx-auto px-4 sm:px-0">
                <span className="block">Where Beauty</span>
                <span className="block">Meets <span className="text-primary-500">Opportunity</span></span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 sm:mb-14 lg:mb-16 xl:mb-20 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Experience professional beauty treatments at student prices while supporting talented students building their dream careers
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 justify-center items-stretch sm:items-center px-4 sm:px-0">
                {/* PRIMARY CTA - Client focused (higher volume funnel) */}
                <Button
                  size="lg"
                  asChild
                  className="
                    bg-primary-500
                    text-white font-semibold px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-lg
                    hover:bg-primary-600
                    transform hover:scale-105 transition-all duration-200
                    shadow-xl hover:shadow-2xl
                    backdrop-blur-sm
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                    w-full sm:w-auto sm:min-w-[220px]
                    order-1
                  "
                >
                  <Link href="/onboarding/client">
                    <span className="flex items-center justify-center gap-2">
                      Find Beauty Treatments
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </Button>

                {/* SECONDARY CTA - Student focused */}
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="
                    text-primary-600 border-2 border-primary-300
                    bg-white/90 backdrop-blur-sm font-medium px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base
                    hover:bg-primary-50 hover:border-primary-400 hover:text-primary-700
                    transform hover:scale-105 transition-all duration-200
                    shadow-md hover:shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                    w-full sm:w-auto sm:min-w-[200px]
                    order-2
                  "
                >
                  <Link href="/onboarding/student">Join as a Student</Link>
                </Button>
              </div>

              {/* Add value proposition reinforcement under CTAs - Mobile Only */}
              <p className="mt-4 text-xs text-gray-600 md:hidden px-4">
                Save 50-70% on professional treatments from verified students
              </p>

              {/* Enhanced Trust Indicators */}
              <div className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20 px-4 sm:px-0">
                {/* Mobile: Vertical stack with full width */}
                <div className="flex flex-col gap-3 sm:hidden">
                  <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm min-h-[44px]">
                    <div className="p-2 bg-green-100 rounded-full flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-sm text-gray-900">Verified Students</span>
                      <p className="text-xs text-gray-600">Background checked & qualified</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm min-h-[44px]">
                    <div className="p-2 bg-blue-100 rounded-full flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-sm text-gray-900">Secure Payments</span>
                      <p className="text-xs text-gray-600">Stripe-powered checkout</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm min-h-[44px]">
                    <div className="p-2 bg-amber-100 rounded-full flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <Star className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-sm text-gray-900">Rated & Reviewed</span>
                      <p className="text-xs text-gray-600">Real client feedback</p>
                    </div>
                  </div>
                </div>

                {/* Desktop: Horizontal layout (existing) */}
                <div className="hidden sm:flex flex-wrap justify-center gap-6 lg:gap-12 text-gray-700">
                  <div className="flex items-center gap-3 group min-h-[44px]">
                    <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="font-medium text-sm md:text-base">Verified Students</span>
                  </div>
                  <div className="flex items-center gap-3 group min-h-[44px]">
                    <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-sm md:text-base">Secure Payments</span>
                  </div>
                  <div className="flex items-center gap-3 group min-h-[44px]">
                    <div className="p-2 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <Star className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="font-medium text-sm md:text-base">Rated & Reviewed</span>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </BackgroundBeamsWithCollision>

        {/* Interactive Features Section */}
        <InteractiveFeatures />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}