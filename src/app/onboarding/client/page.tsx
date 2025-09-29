"use client";

import { useState } from "react";
import { OnboardingLayout } from "../components/OnboardingLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  User,
  MapPin,
  Heart,
  Calendar,
  Check,
  Star,
  Shield,
  Sparkles
} from "lucide-react";

export default function ClientOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const steps = [
    { id: 1, title: "Personal Info", icon: User },
    { id: 2, title: "Preferences", icon: Heart },
    { id: 3, title: "Ready to Book", icon: Calendar },
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <OnboardingLayout
      title="Welcome to Larabeaut"
      subtitle="Get professional beauty treatments at student prices while supporting aspiring professionals"
    >
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div key={step.id} className="flex items-center">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all
                    ${isCompleted
                      ? 'bg-green-500 text-white'
                      : isActive
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }
                  `}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`
                      w-20 h-1 mx-2 transition-all
                      ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}
                    `}
                  />
                )}
              </div>
            );
          })}
        </div>
        <p className="text-sm text-gray-600 text-center">
          Step {currentStep} of {totalSteps}: {steps[currentStep - 1].title}
        </p>
      </div>

      {/* Form steps */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
      >
        {currentStep === 1 && <PersonalInfoStep />}
        {currentStep === 2 && <PreferencesStep />}
        {currentStep === 3 && <ReadyStep />}
      </motion.div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2"
        >
          ← Previous
        </Button>

        <Button
          onClick={currentStep === totalSteps ? () => window.location.href = '/directory/students' : nextStep}
          className="flex items-center gap-2"
        >
          {currentStep === totalSteps ? 'Start Browsing Students' : 'Continue →'}
        </Button>
      </div>

      {/* Trust indicators */}
      <div className="text-center mt-6 text-sm text-gray-600">
        <div className="flex items-center justify-center gap-1 mb-1">
          <Star className="w-4 h-4 text-amber-500 fill-current" />
          <span>4.8/5 average rating from 12,500+ treatments</span>
        </div>
        <p>Join thousands of satisfied clients saving 50-70%</p>
      </div>
    </OnboardingLayout>
  );
}

// Step Components
function PersonalInfoStep() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Let's get to know you</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" placeholder="Enter your last name" className="mt-1" />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">We'll send booking confirmations and updates here</p>
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" type="tel" placeholder="+44 7123 456789" className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">Students may need to contact you about appointments</p>
      </div>

      <div>
        <Label htmlFor="location">Location *</Label>
        <Input id="location" placeholder="City, Country" className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">We'll show you students near you</p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex gap-2">
          <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-green-800">
            <p className="font-medium">Your Privacy is Protected</p>
            <p>We never share your personal information with students until you book</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreferencesStep() {
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  const treatments = [
    "Facial Treatments",
    "Massage Therapy",
    "Nail Services",
    "Hair Styling",
    "Eyebrow & Lash",
    "Waxing",
    "Skincare",
    "Makeup Application"
  ];

  const budgets = [
    "£10-20 per session",
    "£20-40 per session",
    "£40-60 per session",
    "£60+ per session"
  ];

  const toggleTreatment = (treatment: string) => {
    setSelectedTreatments(prev =>
      prev.includes(treatment)
        ? prev.filter(t => t !== treatment)
        : [...prev, treatment]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">What are you interested in?</h3>
      </div>

      <div>
        <Label className="text-base font-medium">Treatment Types *</Label>
        <p className="text-sm text-gray-600 mb-3">Select all that interest you</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {treatments.map((treatment) => (
            <button
              key={treatment}
              type="button"
              onClick={() => toggleTreatment(treatment)}
              className={`
                p-3 rounded-lg border-2 text-sm font-medium transition-all text-left
                ${selectedTreatments.includes(treatment)
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }
              `}
            >
              {treatment}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-medium">Budget Range *</Label>
        <p className="text-sm text-gray-600 mb-3">What would you typically spend?</p>
        <div className="space-y-2">
          {budgets.map((budget) => (
            <button
              key={budget}
              type="button"
              onClick={() => setSelectedBudget(budget)}
              className={`
                w-full p-3 rounded-lg border-2 text-sm font-medium transition-all text-left
                ${selectedBudget === budget
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }
              `}
            >
              {budget}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="availability">Preferred Times</Label>
        <Input id="availability" placeholder="e.g., Weekday evenings, Saturday mornings" className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">When are you usually available for appointments?</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex gap-2">
          <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium">Personalized Recommendations</p>
            <p>We'll match you with students who specialize in your preferred treatments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReadyStep() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">You're all set!</h3>
      </div>

      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Larabeaut!</h4>
        <p className="text-gray-600">Your profile is ready. Let's find you some amazing students.</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <MapPin className="w-4 h-4 text-primary-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Find nearby students</p>
            <p className="text-sm text-gray-600">Browse verified students in your area</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <Star className="w-4 h-4 text-primary-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Read reviews & portfolios</p>
            <p className="text-sm text-gray-600">See previous work and client feedback</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <Calendar className="w-4 h-4 text-primary-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Book with confidence</p>
            <p className="text-sm text-gray-600">Secure booking with payment protection</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-200 rounded-lg p-6 text-center">
        <h5 className="font-semibold text-primary-900 mb-2">Special Welcome Offer</h5>
        <p className="text-sm text-primary-800 mb-3">
          Get 20% off your first booking with code <strong>WELCOME20</strong>
        </p>
        <p className="text-xs text-primary-700">Valid for the next 30 days</p>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-500 text-center">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}