"use client";

import { ReactNode, useState } from "react";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, SlidersHorizontal, ChevronDown, ChevronUp, Home } from "lucide-react";
import Link from "next/link";

interface DirectoryLayoutProps {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  filterComponent: ReactNode;
  children: ReactNode;
  stats?: {
    total: number;
    available: number;
    label: string;
  };
}

export function DirectoryLayout({
  title,
  subtitle,
  searchPlaceholder,
  filterComponent,
  children,
  stats
}: DirectoryLayoutProps) {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Container className="py-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </Button>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-lg text-gray-600 mb-6">{subtitle}</p>

            {stats && (
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>{stats.total} total {stats.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>{stats.available} available now</span>
                </div>
              </div>
            )}
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder={searchPlaceholder}
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>

              {/* Filter Toggle */}
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>

            {/* Filter Component */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                {filterComponent}
              </div>
            )}
          </div>

          {/* Content */}
          <div className={`grid grid-cols-1 gap-8 ${showFilters ? 'lg:grid-cols-4' : ''}`}>
            {/* Sidebar Filters - Hidden on mobile, shown on large screens */}
            {showFilters && (
              <div className="hidden lg:block">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Quick Filters
                  </h3>
                  {filterComponent}
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className={showFilters ? 'lg:col-span-3' : ''}>
              {children}
            </div>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}