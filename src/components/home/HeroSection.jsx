import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-transparent rounded-full opacity-40 -mb-32 -ml-32" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium mb-6 border border-blue-600/30">
              ✨ Trusted by 200+ Companies
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Unlock Your 
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent"> Business</span>
              <br />
              Potential
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
              Transform your operations with custom QuickBase solutions. We design, build, and optimize 
              powerful applications that streamline workflows and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl("Portfolio")}>
                <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white group">
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  See Our Work
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 mt-12 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Apps Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gray-800 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300 border border-gray-700">
              <div className="bg-gray-700 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold">
                  QuickBase Dashboard
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Project Efficiency</span>
                  <span className="text-sm font-semibold text-green-400">↗ +47%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Processing Time</span>
                  <span className="text-sm font-semibold text-blue-400">↘ -60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Data Accuracy</span>
                  <span className="text-sm font-semibold text-purple-400">99.2%</span>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 w-32 z-20 transform hover:scale-110 transition-transform">
              <div className="text-xs text-gray-400 mb-1">ROI Increase</div>
              <div className="text-lg font-bold text-green-400">+240%</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 w-36 z-20 transform hover:scale-110 transition-transform">
              <div className="text-xs text-gray-400 mb-1">Time Saved/Week</div>
              <div className="text-lg font-bold text-blue-400">32 Hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}