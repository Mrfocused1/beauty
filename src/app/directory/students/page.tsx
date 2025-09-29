"use client";

import { DirectoryLayout } from "../components/DirectoryLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Clock,
  Scissors,
  Palette,
  Sparkles,
  Eye,
  Heart,
  MessageCircle,
  Calendar,
  Award,
  TrendingUp
} from "lucide-react";

const treatments = [
  "Haircut & Styling", "Hair Coloring", "Highlights", "Balayage", "Hair Extensions",
  "Makeup Application", "Bridal Makeup", "Special Event Makeup", "Eyebrow Shaping",
  "Eyelash Extensions", "Nail Art", "Manicure", "Pedicure", "Facial Treatments"
];

const levels = ["Beginner", "Intermediate", "Advanced", "Graduate"];
const locations = ["Central London", "North London", "South London", "East London", "West London"];

const mockStudents = [
  {
    id: 1,
    name: "Sarah Johnson",
    school: "London College of Beauty",
    level: "Advanced",
    rating: 4.9,
    reviews: 127,
    avatar: "SJ",
    specialties: ["Hair Coloring", "Balayage", "Makeup Application"],
    location: "Central London",
    priceRange: "£15-45",
    nextAvailable: "Today 2:00 PM",
    completedTreatments: 89,
    responseTime: "< 1 hour",
    verified: true,
    portfolio: 24
  },
  {
    id: 2,
    name: "Maya Patel",
    school: "Academy of Beauty Professionals",
    level: "Intermediate",
    rating: 4.8,
    reviews: 93,
    avatar: "MP",
    specialties: ["Nail Art", "Manicure", "Eyebrow Shaping"],
    location: "North London",
    priceRange: "£10-30",
    nextAvailable: "Tomorrow 10:00 AM",
    completedTreatments: 67,
    responseTime: "< 2 hours",
    verified: true,
    portfolio: 18
  },
  {
    id: 3,
    name: "James Thompson",
    school: "Elite Beauty Institute",
    level: "Graduate",
    rating: 4.9,
    reviews: 156,
    avatar: "JT",
    specialties: ["Haircut & Styling", "Hair Extensions", "Facial Treatments"],
    location: "South London",
    priceRange: "£20-60",
    nextAvailable: "Today 4:30 PM",
    completedTreatments: 134,
    responseTime: "< 30 mins",
    verified: true,
    portfolio: 31
  },
  {
    id: 4,
    name: "Zara Ahmed",
    school: "Professional Beauty Academy",
    level: "Advanced",
    rating: 4.7,
    reviews: 84,
    avatar: "ZA",
    specialties: ["Bridal Makeup", "Special Event Makeup", "Eyelash Extensions"],
    location: "East London",
    priceRange: "£18-50",
    nextAvailable: "Tomorrow 3:00 PM",
    completedTreatments: 72,
    responseTime: "< 1 hour",
    verified: true,
    portfolio: 22
  },
  {
    id: 5,
    name: "Oliver Chen",
    school: "London Beauty College",
    level: "Intermediate",
    rating: 4.6,
    reviews: 61,
    avatar: "OC",
    specialties: ["Highlights", "Hair Coloring", "Pedicure"],
    location: "West London",
    priceRange: "£12-35",
    nextAvailable: "Today 6:00 PM",
    completedTreatments: 45,
    responseTime: "< 3 hours",
    verified: true,
    portfolio: 15
  },
  {
    id: 6,
    name: "Emma Rodriguez",
    school: "Metropolitan Beauty School",
    level: "Beginner",
    rating: 4.5,
    reviews: 28,
    avatar: "ER",
    specialties: ["Haircut & Styling", "Makeup Application", "Manicure"],
    location: "Central London",
    priceRange: "£8-25",
    nextAvailable: "Tomorrow 11:00 AM",
    completedTreatments: 23,
    responseTime: "< 4 hours",
    verified: true,
    portfolio: 8
  }
];

function FilterComponent() {
  return (
    <div className="space-y-6">
      {/* Treatment Type */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Treatment Type</h4>
        <div className="space-y-2">
          {treatments.slice(0, 6).map((treatment) => (
            <label key={treatment} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-600">{treatment}</span>
            </label>
          ))}
          <button className="text-sm text-primary-600 hover:text-primary-700">
            Show all treatments
          </button>
        </div>
      </div>

      {/* Experience Level */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Experience Level</h4>
        <div className="space-y-2">
          {levels.map((level) => (
            <label key={level} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-600">{level}</span>
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

      {/* Availability */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Availability</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-600">Available today</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-600">Available this week</span>
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

function StudentCard({ student }: { student: typeof mockStudents[0] }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
          {student.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900">{student.name}</h3>
            {student.verified && (
              <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                <Award className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-1">{student.school}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-current text-amber-400" />
              {student.rating} ({student.reviews})
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {student.location}
            </span>
          </div>
        </div>
        <div className="text-right">
          <Badge variant="outline" className="mb-2">
            {student.level}
          </Badge>
          <p className="text-sm font-semibold text-gray-900">{student.priceRange}</p>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {student.specialties.map((specialty, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 py-3 border-t border-b border-gray-100 mb-4 text-center">
        <div>
          <p className="text-lg font-semibold text-gray-900">{student.completedTreatments}</p>
          <p className="text-xs text-gray-600">Treatments</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">{student.portfolio}</p>
          <p className="text-xs text-gray-600">Portfolio</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">{student.responseTime}</p>
          <p className="text-xs text-gray-600">Response</p>
        </div>
      </div>

      {/* Availability */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-green-500" />
          <span className="text-gray-600">Next available:</span>
          <span className="font-medium text-gray-900">{student.nextAvailable}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button className="flex-1" size="sm">
          <Calendar className="w-4 h-4 mr-2" />
          Book Now
        </Button>
        <Button variant="outline" size="sm">
          <Eye className="w-4 h-4 mr-2" />
          View Profile
        </Button>
        <Button variant="outline" size="sm">
          <Heart className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="sm">
          <MessageCircle className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default function StudentsDirectoryPage() {
  return (
    <DirectoryLayout
      title="Find Beauty Students"
      subtitle="Connect with talented students offering professional treatments at student-friendly prices"
      searchPlaceholder="Search by name, treatment, or location..."
      filterComponent={<FilterComponent />}
      stats={{
        total: 847,
        available: 234,
        label: "students"
      }}
    >
      {/* Sort and View Options */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Showing {mockStudents.length} of 847 students
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select className="text-sm border border-gray-200 rounded px-3 py-1">
            <option>Best Match</option>
            <option>Highest Rated</option>
            <option>Most Reviews</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
            <option>Available Now</option>
          </select>
        </div>
      </div>

      {/* Featured Students */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary-500" />
          <h2 className="text-lg font-semibold text-gray-900">Featured Students</h2>
          <Badge className="bg-primary-100 text-primary-700">Top Rated</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockStudents.slice(0, 2).map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>

      {/* All Students */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">All Available Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockStudents.slice(2).map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <Button variant="outline" size="lg">
          Load More Students
        </Button>
      </div>
    </DirectoryLayout>
  );
}