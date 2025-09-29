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
  Sparkles,
  TrendingUp,
  DollarSign,
  Users
} from "lucide-react";

const treatmentCategories = [
  "Hair Services", "Makeup & Beauty", "Nail Services", "Facial Treatments",
  "Special Events", "Bridal Services", "Men's Grooming"
];

const budgetRanges = ["£10-25", "£25-50", "£50-75", "£75-100", "£100+"];
const locations = ["Central London", "North London", "South London", "East London", "West London"];
const urgency = ["ASAP", "This Week", "This Month", "Flexible"];

const mockClients = [
  {
    id: 1,
    name: "Emily Watson",
    avatar: "EW",
    treatmentWanted: "Bridal Hair & Makeup Package",
    budget: "£150-200",
    location: "Central London",
    urgency: "This Month",
    description: "Looking for a talented student to do my bridal hair and makeup. Wedding is in 6 weeks, would love to do a trial first.",
    postedTime: "2 hours ago",
    proposals: 12,
    verified: true,
    responseRate: "90%",
    avgRating: 4.8,
    totalBookings: 23,
    category: "Bridal Services"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    avatar: "MJ",
    treatmentWanted: "Modern Haircut & Styling",
    budget: "£25-35",
    location: "North London",
    urgency: "This Week",
    description: "Need a fresh, modern haircut for a job interview. Open to student suggestions for style that suits my face shape.",
    postedTime: "5 hours ago",
    proposals: 8,
    verified: true,
    responseRate: "95%",
    avgRating: 4.9,
    totalBookings: 15,
    category: "Hair Services"
  },
  {
    id: 3,
    name: "Priya Singh",
    avatar: "PS",
    treatmentWanted: "Gel Manicure & Nail Art",
    budget: "£20-30",
    location: "East London",
    urgency: "ASAP",
    description: "Looking for creative nail art for a special event this weekend. Love colorful, intricate designs!",
    postedTime: "1 hour ago",
    proposals: 15,
    verified: true,
    responseRate: "88%",
    avgRating: 4.7,
    totalBookings: 31,
    category: "Nail Services"
  },
  {
    id: 4,
    name: "Sarah Chen",
    avatar: "SC",
    treatmentWanted: "Balayage Hair Color",
    budget: "£60-80",
    location: "South London",
    urgency: "Flexible",
    description: "Want to try balayage for the first time. Looking for a student who specializes in hair coloring and can work with Asian hair.",
    postedTime: "1 day ago",
    proposals: 6,
    verified: true,
    responseRate: "92%",
    avgRating: 4.6,
    totalBookings: 18,
    category: "Hair Services"
  },
  {
    id: 5,
    name: "James Miller",
    avatar: "JM",
    treatmentWanted: "Deep Cleansing Facial",
    budget: "£35-45",
    location: "West London",
    urgency: "This Week",
    description: "Looking for a deep cleansing facial treatment. Have sensitive skin, so need someone experienced with different skin types.",
    postedTime: "3 hours ago",
    proposals: 9,
    verified: false,
    responseRate: "85%",
    avgRating: 4.5,
    totalBookings: 12,
    category: "Facial Treatments"
  },
  {
    id: 6,
    name: "Luna Rodriguez",
    avatar: "LR",
    treatmentWanted: "Evening Makeup Look",
    budget: "£40-55",
    location: "Central London",
    urgency: "ASAP",
    description: "Need glamorous evening makeup for a work gala tonight. Must be comfortable with bold, dramatic looks.",
    postedTime: "30 minutes ago",
    proposals: 22,
    verified: true,
    responseRate: "97%",
    avgRating: 4.9,
    totalBookings: 28,
    category: "Makeup & Beauty"
  }
];

function FilterComponent() {
  return (
    <div className="space-y-6">
      {/* Treatment Category */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Treatment Category</h4>
        <div className="space-y-2">
          {treatmentCategories.map((category) => (
            <label key={category} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-600">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Budget Range */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Budget Range</h4>
        <div className="space-y-2">
          {budgetRanges.map((range) => (
            <label key={range} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-600">{range}</span>
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

      {/* Urgency */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Urgency</h4>
        <div className="space-y-2">
          {urgency.map((level) => (
            <label key={level} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-600">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Client Type */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Client Type</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-600">Verified clients only</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-600">High rated clients</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-600">Repeat clients</span>
          </label>
        </div>
      </div>
    </div>
  );
}

function ClientRequestCard({ client }: { client: typeof mockClients[0] }) {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "ASAP": return "bg-red-100 text-red-700";
      case "This Week": return "bg-orange-100 text-orange-700";
      case "This Month": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
          {client.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900">{client.name}</h3>
            {client.verified && (
              <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                Verified
              </Badge>
            )}
            <Badge className={`text-xs ${getUrgencyColor(client.urgency)}`}>
              {client.urgency}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-current text-amber-400" />
              {client.avgRating} rating
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {client.totalBookings} bookings
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {client.location}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-primary-600 mb-1">{client.budget}</p>
          <p className="text-xs text-gray-500">{client.postedTime}</p>
        </div>
      </div>

      {/* Treatment Request */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2">{client.treatmentWanted}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{client.description}</p>
      </div>

      {/* Category Badge */}
      <div className="mb-4">
        <Badge variant="outline" className="text-xs">
          {client.category}
        </Badge>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 py-3 border-t border-b border-gray-100 mb-4 text-center">
        <div>
          <p className="text-lg font-semibold text-gray-900">{client.proposals}</p>
          <p className="text-xs text-gray-600">Proposals</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">{client.responseRate}</p>
          <p className="text-xs text-gray-600">Response Rate</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">{client.totalBookings}</p>
          <p className="text-xs text-gray-600">Total Bookings</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button className="flex-1" size="sm">
          <MessageCircle className="w-4 h-4 mr-2" />
          Send Proposal
        </Button>
        <Button variant="outline" size="sm">
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
        <Button variant="outline" size="sm">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default function ClientsDirectoryPage() {
  return (
    <DirectoryLayout
      title="Client Requests"
      subtitle="Browse client requests and send proposals for treatments you'd like to provide"
      searchPlaceholder="Search by treatment, budget, or location..."
      filterComponent={<FilterComponent />}
      stats={{
        total: 342,
        available: 156,
        label: "open requests"
      }}
    >
      {/* Sort and View Options */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Showing {mockClients.length} of 342 requests
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select className="text-sm border border-gray-200 rounded px-3 py-1">
            <option>Most Recent</option>
            <option>Highest Budget</option>
            <option>Most Urgent</option>
            <option>Fewest Proposals</option>
            <option>Best Match</option>
            <option>Highest Rated Clients</option>
          </select>
        </div>
      </div>

      {/* Urgent Requests */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-semibold text-gray-900">Urgent Requests</h2>
          <Badge className="bg-red-100 text-red-700">ASAP</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockClients.filter(client => client.urgency === "ASAP").map((client) => (
            <ClientRequestCard key={client.id} client={client} />
          ))}
        </div>
      </div>

      {/* High Value Requests */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-green-500" />
          <h2 className="text-lg font-semibold text-gray-900">High Value Requests</h2>
          <Badge className="bg-green-100 text-green-700">£50+</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockClients.filter(client =>
            parseInt(client.budget.split('-')[1]) >= 50
          ).slice(0, 2).map((client) => (
            <ClientRequestCard key={client.id} client={client} />
          ))}
        </div>
      </div>

      {/* All Requests */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">All Open Requests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockClients.filter(client =>
            client.urgency !== "ASAP" && parseInt(client.budget.split('-')[1]) < 50
          ).map((client) => (
            <ClientRequestCard key={client.id} client={client} />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <Button variant="outline" size="lg">
          Load More Requests
        </Button>
      </div>

      {/* Stats Banner */}
      <div className="mt-8 bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-200 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-primary-900 mb-1">Student Success Stats</h3>
            <p className="text-sm text-primary-700">Students earning through our platform</p>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-primary-900">£847</p>
              <p className="text-xs text-primary-700">Avg. monthly earnings</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-900">92%</p>
              <p className="text-xs text-primary-700">Proposal acceptance rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-900">4.8</p>
              <p className="text-xs text-primary-700">Average student rating</p>
            </div>
          </div>
        </div>
      </div>
    </DirectoryLayout>
  );
}