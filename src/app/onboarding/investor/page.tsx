"use client";

import { useState } from "react";
import { OnboardingLayout } from "../components/OnboardingLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  User,
  Building,
  TrendingUp,
  Check,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  Users,
  BarChart3
} from "lucide-react";

export default function InvestorOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const steps = [
    { id: 1, title: "Contact Info", icon: User },
    { id: 2, title: "Investment Interest", icon: TrendingUp },
    { id: 3, title: "Next Steps", icon: Calendar },
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
      title="Invest in Beauty Students"
      subtitle="Support talented students through chair rentals, salon partnerships, equipment financing, and recruitment opportunities"
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
        {currentStep === 1 && <ContactInfoStep />}
        {currentStep === 2 && <InvestmentInterestStep />}
        {currentStep === 3 && <NextStepsStep />}
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
          onClick={currentStep === totalSteps ? () => window.location.href = '/directory/investors' : nextStep}
          className="flex items-center gap-2"
        >
          {currentStep === totalSteps ? 'Submit Interest' : 'Continue →'}
        </Button>
      </div>

      {/* Market stats */}
      <div className="text-center mt-6 text-sm text-gray-600">
        <div className="flex items-center justify-center gap-1 mb-1">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span>Beauty education market growing 8.2% annually</span>
        </div>
        <p>Join us in disrupting a £40B+ industry</p>
      </div>
    </OnboardingLayout>
  );
}

// Step Components
function ContactInfoStep() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Let's connect</h3>
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
        <Label htmlFor="email">Business Email *</Label>
        <Input id="email" type="email" placeholder="your.email@company.com" className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">We'll use this for all investment communications</p>
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" type="tel" placeholder="+44 20 1234 5678" className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">For direct communication about opportunities</p>
      </div>

      <div>
        <Label htmlFor="company">Company/Organization *</Label>
        <Input id="company" placeholder="Your investment firm or company" className="mt-1" />
      </div>

      <div>
        <Label htmlFor="title">Your Title/Role *</Label>
        <Input id="title" placeholder="e.g., Managing Partner, Investment Director" className="mt-1" />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex gap-2">
          <Building className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium">Confidential Process</p>
            <p>All information shared will be treated with strict confidentiality</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvestmentInterestStep() {
  const [selectedRound, setSelectedRound] = useState<string>("");
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const rounds = [
    "Pre-Seed",
    "Seed",
    "Series A",
    "Series B+",
    "Strategic Partnership",
    "Other"
  ];

  const amounts = [
    "£300 - £1,000",
    "£1,000 - £5,000",
    "£5,000 - £15,000",
    "£15,000 - £30,000",
    "£30,000 - £50,000",
    "£50,000+",
    "Prefer to discuss"
  ];

  const interests = [
    "Invest in Student Chair Rentals",
    "Fund Student Salon Startups",
    "Recruit Students as Staff",
    "Beauty Equipment Financing",
    "Student Business Partnerships",
    "Franchise Opportunities"
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Details</h3>
      </div>

      <div>
        <Label className="text-base font-medium">Investment Stage Interest *</Label>
        <p className="text-sm text-gray-600 mb-3">What stage are you typically interested in?</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {rounds.map((round) => (
            <button
              key={round}
              type="button"
              onClick={() => setSelectedRound(round)}
              className={`
                p-3 rounded-lg border-2 text-sm font-medium transition-all text-center
                ${selectedRound === round
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }
              `}
            >
              {round}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-medium">Investment Range *</Label>
        <p className="text-sm text-gray-600 mb-3">Typical investment amount</p>
        <div className="space-y-2">
          {amounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setSelectedAmount(amount)}
              className={`
                w-full p-3 rounded-lg border-2 text-sm font-medium transition-all text-left
                ${selectedAmount === amount
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }
              `}
            >
              {amount}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-medium">Investment Opportunities</Label>
        <p className="text-sm text-gray-600 mb-3">What type of student investments interest you?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {interests.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className={`
                p-3 rounded-lg border-2 text-sm font-medium transition-all text-left
                ${selectedInterests.includes(interest)
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }
              `}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="timeline">Investment Timeline</Label>
        <Input id="timeline" placeholder="e.g., Looking to invest in Q2 2024" className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">When are you looking to make an investment?</p>
      </div>
    </div>
  );
}

function NextStepsStep() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Thank you for your interest!</h3>
      </div>

      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">We'll be in touch soon</h4>
        <p className="text-gray-600">Our team will review your information and follow up within 2 business days.</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-primary-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Market Analysis</p>
            <p className="text-sm text-gray-600">Detailed market opportunity and competitive landscape</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <Users className="w-4 h-4 text-primary-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Team Introduction</p>
            <p className="text-sm text-gray-600">Meet our founding team and key advisors</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-primary-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Financial Projections</p>
            <p className="text-sm text-gray-600">Revenue model, unit economics, and growth projections</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <Calendar className="w-4 h-4 text-primary-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Due Diligence Session</p>
            <p className="text-sm text-gray-600">Comprehensive Q&A and deep-dive discussion</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-200 rounded-lg p-6">
        <h5 className="font-semibold text-primary-900 mb-2">Key Market Metrics</h5>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-primary-800 font-medium">Market Size</p>
            <p className="text-primary-700">£40B+ beauty education</p>
          </div>
          <div>
            <p className="text-primary-800 font-medium">Growth Rate</p>
            <p className="text-primary-700">8.2% annually</p>
          </div>
          <div>
            <p className="text-primary-800 font-medium">Student Savings</p>
            <p className="text-primary-700">50-70% vs salons</p>
          </div>
          <div>
            <p className="text-primary-800 font-medium">Current Traction</p>
            <p className="text-primary-700">2,800+ active users</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-500 text-center">
          All information shared is subject to confidentiality agreements
        </p>
      </div>
    </div>
  );
}