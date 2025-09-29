"use client";

import { useState } from "react";
import { OnboardingLayout } from "../components/OnboardingLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  GraduationCap,
  User,
  School,
  Camera,
  MapPin,
  Phone,
  Mail,
  Check,
  Upload,
  Clock
} from "lucide-react";

export default function StudentOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    { id: 1, title: "Personal Info", icon: User },
    { id: 2, title: "Education", icon: School },
    { id: 3, title: "Profile", icon: Camera },
    { id: 4, title: "Verification", icon: Check },
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
      title="Join as a Student"
      subtitle="Start building your portfolio and earning money while you learn"
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
                      w-16 h-1 mx-2 transition-all
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
        {currentStep === 2 && <EducationStep />}
        {currentStep === 3 && <ProfileStep />}
        {currentStep === 4 && <VerificationStep />}
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
          onClick={currentStep === totalSteps ? () => window.location.href = '/directory/clients' : nextStep}
          className="flex items-center gap-2"
        >
          {currentStep === totalSteps ? 'Submit Application' : 'Continue →'}
        </Button>
      </div>

      {/* Live stats */}
      <div className="text-center mt-6 text-sm text-gray-600">
        <div className="flex items-center justify-center gap-1 mb-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>2,847 students active today</span>
        </div>
        <p>Join thousands earning while learning</p>
      </div>
    </OnboardingLayout>
  );
}

// Step Components
function PersonalInfoStep() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tell us about yourself</h3>
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
        <p className="text-xs text-gray-500 mt-1">We'll use this to send you booking notifications</p>
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" type="tel" placeholder="+44 7123 456789" className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">Clients may need to contact you about appointments</p>
      </div>

      <div>
        <Label htmlFor="location">Location *</Label>
        <Input id="location" placeholder="City, Country" className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">Helps clients find students near them</p>
      </div>
    </div>
  );
}

function EducationStep() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Education</h3>
      </div>

      <div>
        <Label htmlFor="institution">Institution Name *</Label>
        <Input id="institution" placeholder="Your college or training school" className="mt-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="course">Course/Program *</Label>
          <Input id="course" placeholder="e.g., Beauty Therapy Level 3" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="year">Year of Study *</Label>
          <select id="year" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
            <option value="">Select year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="final">Final Year</option>
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="specialization">Specialization/Focus Areas</Label>
        <Input id="specialization" placeholder="e.g., Facial treatments, Massage therapy, Nail art" className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">What treatments are you most interested in?</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex gap-2">
          <GraduationCap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium">Verification Required</p>
            <p>We'll need to verify your enrollment with your institution</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileStep() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Build Your Profile</h3>
      </div>

      <div>
        <Label>Profile Photo</Label>
        <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors cursor-pointer">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Click to upload your photo</p>
          <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB</p>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          <strong>Tip:</strong> Students with photos get 3x more bookings
        </p>
      </div>

      <div>
        <Label htmlFor="bio">About You</Label>
        <textarea
          id="bio"
          rows={4}
          placeholder="Tell clients about your experience, what you're passionate about, and what they can expect..."
          className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 mt-1"
        />
        <p className="text-xs text-gray-500 mt-1">Share your passion for beauty therapy!</p>
      </div>

      <div>
        <Label htmlFor="availability">Typical Availability</Label>
        <Input id="availability" placeholder="e.g., Weekday evenings, Saturday mornings" className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">When are you usually available for appointments?</p>
      </div>
    </div>
  );
}

function VerificationStep() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Final Step: Verification</h3>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex gap-2">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-green-800">
            <p className="font-medium">Almost Done!</p>
            <p>We'll review your application and verify your enrollment within 24-48 hours</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <Clock className="w-4 h-4 text-primary-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">What happens next?</p>
            <p className="text-sm text-gray-600">We'll verify your enrollment and create your profile</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <Mail className="w-4 h-4 text-primary-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Email confirmation</p>
            <p className="text-sm text-gray-600">You'll receive an email once approved</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-primary-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Start earning</p>
            <p className="text-sm text-gray-600">Begin accepting bookings and building your portfolio</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}