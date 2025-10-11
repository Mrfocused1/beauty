'use client'

import { Button } from '@/components/ui/button'
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
        <section className="min-h-screen flex items-center relative overflow-hidden pt-20 sm:pt-24 lg:pt-0">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://raw.githubusercontent.com/Mrfocused1/beauty/main/hero.jpg"
              alt="Professional beauty therapist"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 lg:from-white/90 lg:via-white/60 lg:to-transparent"></div>
          </div>

          <Container className="py-8 sm:py-12 lg:py-16 relative z-10">
            <div className="max-w-2xl">
              {/* Left Content */}
              <div className="text-left px-4 sm:px-0">

                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight">
                  <span className="block">Next-Gen Beauty</span>
                  <span className="block">Starts <span className="text-primary-500">Here</span></span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                  The Hair and Beauty Hub connects the next generation of beauty professionals to education, mentorship, and career opportunities. From hands-on training to industry networking, we empower stylists and entrepreneurs to succeed.
                </p>

                <div className="flex flex-col gap-3 sm:gap-4 items-stretch sm:items-start max-w-md">
                {/* PRIMARY CTA - Student focused - Prominent on mobile */}
                  <Button
                    size="lg"
                    asChild
                    className="
                      bg-primary-500
                      text-white font-bold px-8 py-5 text-base sm:text-lg
                      hover:bg-primary-600
                      transform hover:scale-105 transition-all duration-200
                      shadow-xl hover:shadow-2xl
                      backdrop-blur-sm
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                      w-full sm:w-auto
                      min-h-[56px]
                    "
                  >
                    <Link href="/onboarding/student">
                      <span className="flex items-center justify-center gap-2">
                        Join as a Student
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </Button>

                  {/* SECONDARY CTA - Client focused */}
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="
                      text-primary-600 border-2 border-primary-300
                      bg-white/90 backdrop-blur-sm font-semibold px-6 py-4 text-sm sm:text-base
                      hover:bg-primary-50 hover:border-primary-400 hover:text-primary-700
                      transform hover:scale-105 transition-all duration-200
                      shadow-md hover:shadow-lg
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                      w-full sm:w-auto
                      min-h-[52px]
                    "
                  >
                    <Link href="/onboarding/client">Book a Treatment</Link>
                  </Button>

                  {/* Tertiary CTA - Investor */}
                  <Link
                    href="/onboarding/investor"
                    className="inline-flex items-center justify-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors underline-offset-4 hover:underline py-2"
                  >
                    Invest in Students
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Enhanced Trust Indicators - Left-aligned */}
                <div className="mt-6 sm:mt-8">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6">
                  {/* Verified Students */}
                  <div className="flex items-center gap-3 bg-white/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-lg sm:rounded-none p-3 sm:p-0 shadow-sm sm:shadow-none group min-h-[44px]">
                    <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1 sm:flex-none">
                      <span className="font-semibold sm:font-medium text-sm sm:text-base text-gray-900 sm:text-gray-700 block sm:inline">Verified Students</span>
                      <p className="text-xs text-gray-600 sm:hidden">Background checked & qualified</p>
                    </div>
                  </div>

                  {/* Secure Payments */}
                  <div className="flex items-center gap-3 bg-white/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-lg sm:rounded-none p-3 sm:p-0 shadow-sm sm:shadow-none group min-h-[44px]">
                    <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 sm:flex-none">
                      <span className="font-semibold sm:font-medium text-sm sm:text-base text-gray-900 sm:text-gray-700 block sm:inline">Secure Payments</span>
                      <p className="text-xs text-gray-600 sm:hidden">Stripe-powered checkout</p>
                    </div>
                  </div>

                    {/* Rated & Reviewed */}
                    <div className="flex items-center gap-3 bg-white/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-lg sm:rounded-none p-3 sm:p-0 shadow-sm sm:shadow-none group min-h-[44px]">
                      <div className="p-2 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center">
                        <Star className="w-5 h-5 text-amber-600" />
                      </div>
                      <div className="flex-1 sm:flex-none">
                        <span className="font-semibold sm:font-medium text-sm sm:text-base text-gray-900 sm:text-gray-700 block sm:inline">Rated & Reviewed</span>
                        <p className="text-xs text-gray-600 sm:hidden">Real client feedback</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Overview & Credibility Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
          <Container>
            {/* Quick Access Panels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 sm:mb-16 lg:mb-20">
              <Link href="/onboarding/client" className="group min-h-[44px]">
                <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-200 h-full active:scale-98">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary-500 transition-colors">
                    <svg className="w-6 h-6 text-primary-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Find Beauty Treatments</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Book supervised student services at exceptional prices</p>
                </div>
              </Link>

              <Link href="/onboarding/student" className="group min-h-[44px]">
                <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-200 h-full active:scale-98">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary-500 transition-colors">
                    <svg className="w-6 h-6 text-primary-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Join as a Student</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Begin your beauty journey with accredited education</p>
                </div>
              </Link>

              <Link href="/onboarding/investor" className="group min-h-[44px]">
                <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-200 h-full active:scale-98">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary-500 transition-colors">
                    <svg className="w-6 h-6 text-primary-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Invest in Students</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Support emerging talent and grow your network</p>
                </div>
              </Link>
            </div>

            {/* Founder Leadership & Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
              {/* Founder Leadership */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">
                  Founder Leadership
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                  Led by Experience & Passion
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                  Founded by <span className="font-semibold text-primary-600">Funmi Akisanya</span>, qualified hairdresser, beauty therapist, counsellor, and educator. Passionate about mentorship and empowerment, Funmi blends industry experience with a mission to transform beauty education.
                </p>
                <p className="text-sm md:text-base text-gray-600 italic">
                  "Every student deserves the opportunity to learn, grow, and succeed in an industry that celebrates creativity and skill."
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="mb-4 md:mb-6">
                  <span className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 block">
                    Our Vision
                  </span>
                  <p className="text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed">
                    To be the leading platform connecting aspiring beauty talent with experts, experience, and pathways to success.
                  </p>
                </div>
                <div>
                  <span className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 block">
                    Our Mission
                  </span>
                  <p className="text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
                    Opportunities to thrive.
                  </p>
                </div>
              </div>
            </div>

            {/* Partners Section */}
            <div className="text-center">
              <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">
                Our Partners
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                Trusted by Industry Leaders
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                We collaborate with leading salons, brands, and education partners to provide the best opportunities for our students.
              </p>
              <Button asChild size="lg" className="text-white min-h-[48px]">
                <Link href="/onboarding/investor">Become a Partner</Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Interactive Features Section */}
        <InteractiveFeatures />

        {/* Consultation & Coaching Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <Container>
            <div className="text-center mb-8 md:mb-12 px-4">
              <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">
                Personalized Support
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-6">
                Consultation & Coaching
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Personalized mentorship for technical mastery and career clarity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-5 md:p-6 lg:p-8 shadow-lg border border-primary-100">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Career Starter Coaching</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  Launch your beauty career with confidence. Get guidance on portfolio building, client acquisition, and professional development.
                </p>
                <Button asChild variant="outline" className="w-full min-h-[44px]">
                  <Link href="/onboarding/student">Book a Session</Link>
                </Button>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-5 md:p-6 lg:p-8 shadow-lg border border-primary-100">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Salon Success Strategy</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  Ready to open your own salon? Get expert advice on location, branding, business planning, and operational excellence.
                </p>
                <Button asChild variant="outline" className="w-full min-h-[44px]">
                  <Link href="/onboarding/student">Get Started</Link>
                </Button>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-5 md:p-6 lg:p-8 shadow-lg border border-primary-100">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Creative Confidence Coaching</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  Build your unique style and creative voice. Perfect for stylists wanting to stand out and attract premium clients.
                </p>
                <Button asChild variant="outline" className="w-full min-h-[44px]">
                  <Link href="/onboarding/student">Learn More</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Products & E-Commerce Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <div className="text-center mb-8 md:mb-12 px-4">
              <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">
                Professional Essentials
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-6">
                Shop Curated Products
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8">
                Everything you need to succeed. From student starter kits to professional-grade products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-primary-200 hover:border-primary-300 transition-colors">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Student Starter Kits</h3>
                <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-6 leading-relaxed">
                  Everything beginners need in one package. Professional tools, products, and accessories at discounted student prices.
                </p>
                <Button asChild size="lg" className="w-full text-white min-h-[48px]">
                  <Link href="/onboarding/student">Shop Kits</Link>
                </Button>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-primary-200 hover:border-primary-300 transition-colors">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Hair & Beauty Products</h3>
                <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-6 leading-relaxed">
                  Premium professional products from trusted brands. Quality tools and treatments for every service.
                </p>
                <Button asChild size="lg" variant="outline" className="w-full min-h-[48px]">
                  <Link href="/onboarding/student">Browse Products</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}