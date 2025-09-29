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
        <BackgroundBeamsWithCollision className="min-h-screen flex items-center">
          <Container className="py-8 sm:py-12 lg:py-16 xl:py-20">
            <div className="text-center relative max-w-6xl mx-auto">

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl mb-10 sm:mb-12 lg:mb-16 leading-tight max-w-4xl mx-auto whitespace-nowrap">
                Where Beauty Meets <span className="text-primary-500">Opportunity</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 mb-14 sm:mb-16 lg:mb-20 max-w-3xl mx-auto leading-relaxed">
                Get professional beauty treatments for 50-70% less while helping students
                build their careers
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  asChild
                  className="
                    bg-primary-500
                    text-white font-semibold px-8 py-4 text-lg
                    hover:bg-primary-600
                    transform hover:scale-105 transition-all duration-200
                    shadow-lg hover:shadow-xl
                    backdrop-blur-sm
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                    min-w-[200px]
                  "
                >
                  <Link href="/onboarding/student">Join as a Student</Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="
                    text-primary-600 border-2 border-primary-300
                    bg-white/70 backdrop-blur-sm font-semibold px-8 py-4 text-lg
                    hover:bg-primary-50 hover:border-primary-400 hover:text-primary-700
                    transform hover:scale-105 transition-all duration-200
                    shadow-md hover:shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                    min-w-[200px]
                  "
                >
                  <Link href="/onboarding/client">Browse Treatments</Link>
                </Button>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-wrap justify-center gap-12 text-gray-700">
                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">Verified Students</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">Secure Payments</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors">
                    <Star className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">Rated & Reviewed</span>
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