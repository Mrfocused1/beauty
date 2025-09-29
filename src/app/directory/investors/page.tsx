"use client";

import { DirectoryLayout } from "../components/DirectoryLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
  Heart,
  Eye,
  TrendingUp,
  DollarSign,
  Users,
  Building,
  Award,
  Target,
  Briefcase,
  GraduationCap
} from "lucide-react";

const investmentTypes = [
  "Chair Rental Funding", "Salon Startup Investment", "Equipment Financing",
  "Staff Recruitment", "Franchise Opportunities", "Student Partnerships"
];

const investmentAmounts = ["£300-£1,000", "£1,000-£5,000", "£5,000-£15,000", "£15,000-£30,000", "£30,000-£50,000", "£50,000+"];
const locations = ["Central London", "North London", "South London", "East London", "West London", "UK Wide"];
const studentLevels = ["Final Year", "Graduate", "Experienced Student", "Any Level"];

const mockOpportunities = [
  {
    id: 1,
    title: "Chair Rental - High-End Salon Partnership",
    studentName: "Sarah Johnson",
    studentAvatar: "SJ",
    school: "London College of Beauty",
    level: "Graduate",
    specialty: "Hair Coloring & Styling",
    location: "Central London",
    investmentNeeded: "£2,500",
    projectedReturn: "15-20% annually",
    description: "Seeking investment for chair rental at premium Mayfair salon. Strong client base with 90% booking rate.",
    riskLevel: "Low",
    duration: "12 months",
    postedTime: "2 days ago",
    interestedInvestors: 8,
    verified: true,
    studentRating: 4.9,
    completedTreatments: 156,
    monthlyRevenue: "£3,200",
    category: "Chair Rental Funding",
    highlights: ["Prime location", "Established clientele", "Proven track record"]
  },
  {
    id: 2,
    title: "Startup Salon - Beauty Hub Opening",
    studentName: "Maya Patel & Team",
    studentAvatar: "MP",
    school: "Academy of Beauty Professionals",
    level: "Graduate",
    specialty: "Full Service Salon",
    location: "East London",
    investmentNeeded: "£25,000",
    projectedReturn: "25-30% ROI",
    description: "Two graduates opening modern beauty hub. Seeking investors for equipment, fit-out, and initial working capital.",
    riskLevel: "Medium",
    duration: "24 months",
    postedTime: "1 week ago",
    interestedInvestors: 15,
    verified: true,
    studentRating: 4.8,
    completedTreatments: 234,
    monthlyRevenue: "£4,800",
    category: "Salon Startup Investment",
    highlights: ["Growing area", "Multi-service", "Strong business plan"]
  },
  {
    id: 3,
    title: "Equipment Financing - Advanced Beauty Tools",
    studentName: "James Thompson",
    studentAvatar: "JT",
    school: "Elite Beauty Institute",
    level: "Final Year",
    specialty: "Facial Treatments & Skincare",
    location: "South London",
    investmentNeeded: "£8,500",
    projectedReturn: "18-22% annually",
    description: "Financing needed for professional facial equipment to expand treatment offerings and increase revenue.",
    riskLevel: "Low",
    duration: "18 months",
    postedTime: "4 days ago",
    interestedInvestors: 6,
    verified: true,
    studentRating: 4.7,
    completedTreatments: 98,
    monthlyRevenue: "£2,100",
    category: "Equipment Financing",
    highlights: ["High-demand treatments", "Quick payback", "Growing market"]
  },
  {
    id: 4,
    title: "Recruitment Partnership - Expanding Team",
    studentName: "Zara Ahmed",
    studentAvatar: "ZA",
    school: "Professional Beauty Academy",
    level: "Graduate",
    specialty: "Makeup & Special Events",
    location: "North London",
    investmentNeeded: "£12,000",
    projectedReturn: "20-25% annually",
    description: "Successful makeup artist looking to expand team. Seeking investment to recruit and train 3 additional students.",
    riskLevel: "Medium",
    duration: "12 months",
    postedTime: "5 days ago",
    interestedInvestors: 11,
    verified: true,
    studentRating: 4.9,
    completedTreatments: 189,
    monthlyRevenue: "£5,600",
    category: "Staff Recruitment",
    highlights: ["Proven business model", "High demand", "Scalable opportunity"]
  },
  {
    id: 5,
    title: "Mobile Beauty Service Expansion",
    studentName: "Oliver Chen",
    studentAvatar: "OC",
    school: "London Beauty College",
    level: "Graduate",
    specialty: "Mobile Beauty Services",
    location: "West London",
    investmentNeeded: "£15,000",
    projectedReturn: "22-28% ROI",
    description: "Mobile beauty service seeking investment for vehicle, equipment, and expansion into corporate clients.",
    riskLevel: "Medium",
    duration: "20 months",
    postedTime: "1 week ago",
    interestedInvestors: 9,
    verified: true,
    studentRating: 4.6,
    completedTreatments: 78,
    monthlyRevenue: "£3,400",
    category: "Student Partnerships",
    highlights: ["Unique service model", "Corporate contracts", "Growth potential"]
  },
  {
    id: 6,
    title: "Bridal Beauty Specialist Partnership",
    studentName: "Emma Rodriguez",
    studentAvatar: "ER",
    school: "Metropolitan Beauty School",
    level: "Final Year",
    specialty: "Bridal Hair & Makeup",
    location: "Central London",
    investmentNeeded: "£5,500",
    projectedReturn: "20-25% annually",
    description: "Specializing in bridal services. Seeking investment for premium tools and marketing to target luxury wedding market.",
    riskLevel: "Low",
    duration: "15 months",
    postedTime: "3 days ago",
    interestedInvestors: 12,
    verified: true,
    studentRating: 4.8,
    completedTreatments: 67,
    monthlyRevenue: "£2,800",
    category: "Student Partnerships",
    highlights: ["High-value services", "Seasonal demand", "Premium market"]
  }
];

function FilterComponent() {
  return (
    <div className="space-y-6">
      {/* Investment Type */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Investment Type</h4>
        <div className="space-y-2">
          {investmentTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-600">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Investment Amount */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Investment Amount</h4>
        <div className="space-y-2">
          {investmentAmounts.map((amount) => (
            <label key={amount} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-600">{amount}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Location</h4>
        <div className="space-y-2">
          {locations.map((location) => (
            <label key={location} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-600">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Student Level */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Student Level</h4>
        <div className="space-y-2">
          {studentLevels.map((level) => (
            <label key={level} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-600">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Risk Level */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Risk Level</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-600">Low Risk</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-600">Medium Risk</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-600">Verified students only</span>
          </label>
        </div>
      </div>
    </div>
  );
}

function OpportunityCard({ opportunity }: { opportunity: typeof mockOpportunities[0] }) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "bg-green-100 text-green-700";
      case "Medium": return "bg-yellow-100 text-yellow-700";
      case "High": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
          {opportunity.studentAvatar}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{opportunity.title}</h3>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm text-gray-600">{opportunity.studentName}</span>
            {opportunity.verified && (
              <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                <Award className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            )}
            <Badge className={`text-xs ${getRiskColor(opportunity.riskLevel)}`}>
              {opportunity.riskLevel} Risk
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <GraduationCap className="w-3 h-3" />
              {opportunity.school}
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-current text-amber-400" />
              {opportunity.studentRating}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {opportunity.location}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-primary-600 mb-1">{opportunity.investmentNeeded}</p>
          <p className="text-xs text-gray-500">{opportunity.postedTime}</p>
        </div>
      </div>

      {/* Investment Details */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 leading-relaxed mb-3">{opportunity.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {opportunity.highlights.map((highlight, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {highlight}
            </Badge>
          ))}
        </div>
      </div>

      {/* Category */}
      <div className="mb-4">
        <Badge variant="secondary" className="text-xs">
          {opportunity.category}
        </Badge>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-4 gap-3 py-3 border-t border-b border-gray-100 mb-4 text-center">
        <div>
          <p className="text-sm font-semibold text-gray-900">{opportunity.projectedReturn}</p>
          <p className="text-xs text-gray-600">Expected Return</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{opportunity.duration}</p>
          <p className="text-xs text-gray-600">Duration</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{opportunity.monthlyRevenue}</p>
          <p className="text-xs text-gray-600">Monthly Revenue</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{opportunity.interestedInvestors}</p>
          <p className="text-xs text-gray-600">Interest</p>
        </div>
      </div>

      {/* Student Info */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <div>
            <span className="text-gray-600">Specialty: </span>
            <span className="font-medium text-gray-900">{opportunity.specialty}</span>
          </div>
          <div>
            <span className="text-gray-600">Level: </span>
            <span className="font-medium text-gray-900">{opportunity.level}</span>
          </div>
          <div>
            <span className="text-gray-600">Treatments: </span>
            <span className="font-medium text-gray-900">{opportunity.completedTreatments}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button className="flex-1" size="sm">
          <Briefcase className="w-4 h-4 mr-2" />
          Express Interest
        </Button>
        <Button variant="outline" size="sm">
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
        <Button variant="outline" size="sm">
          <MessageCircle className="w-4 h-4 mr-2" />
          Contact
        </Button>
        <Button variant="outline" size="sm">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default function InvestorsDirectoryPage() {
  return (
    <DirectoryLayout
      title="Investment Opportunities"
      subtitle="Discover promising investment opportunities with talented beauty students"
      searchPlaceholder="Search by student name, investment type, or location..."
      filterComponent={<FilterComponent />}
      stats={{
        total: 127,
        available: 89,
        label: "opportunities"
      }}
    >
      {/* Sort and View Options */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Showing {mockOpportunities.length} of 127 opportunities
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select className="text-sm border border-gray-200 rounded px-3 py-1">
            <option>Best ROI</option>
            <option>Lowest Risk</option>
            <option>Highest Student Rating</option>
            <option>Investment Amount: Low to High</option>
            <option>Investment Amount: High to Low</option>
            <option>Most Recent</option>
            <option>Most Interest</option>
          </select>
        </div>
      </div>

      {/* High ROI Opportunities */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-500" />
          <h2 className="text-lg font-semibold text-gray-900">High ROI Opportunities</h2>
          <Badge className="bg-green-100 text-green-700">25%+ Returns</Badge>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockOpportunities.filter(opp =>
            parseInt(opp.projectedReturn.split('-')[1]) >= 25
          ).map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </div>

      {/* Low Risk Investments */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-gray-900">Low Risk Investments</h2>
          <Badge className="bg-blue-100 text-blue-700">Stable Returns</Badge>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockOpportunities.filter(opp => opp.riskLevel === "Low").map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </div>

      {/* All Opportunities */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">All Available Opportunities</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockOpportunities.filter(opp =>
            opp.riskLevel !== "Low" && parseInt(opp.projectedReturn.split('-')[1]) < 25
          ).map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <Button variant="outline" size="lg">
          Load More Opportunities
        </Button>
      </div>

      {/* Investment Stats Banner */}
      <div className="mt-8 bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-200 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-primary-900 mb-1">Platform Investment Stats</h3>
            <p className="text-sm text-primary-700">Successful investments on Larabeaut</p>
          </div>
          <div className="grid grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-primary-900">22.3%</p>
              <p className="text-xs text-primary-700">Average ROI</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-900">£1.2M</p>
              <p className="text-xs text-primary-700">Total invested</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-900">94%</p>
              <p className="text-xs text-primary-700">Success rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-900">847</p>
              <p className="text-xs text-primary-700">Students funded</p>
            </div>
          </div>
        </div>
      </div>
    </DirectoryLayout>
  );
}