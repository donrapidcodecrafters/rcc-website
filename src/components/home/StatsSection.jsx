import React from "react";
import { Building, Clock, Award, HeartHandshake } from "lucide-react";

const stats = [
  {
    icon: Building,
    value: "200+",
    label: "Companies Served",
    description: "From startups to Fortune 500"
  },
  {
    icon: Clock,
    value: "500+",
    label: "Applications Built",
    description: "Custom solutions delivered"
  },
  {
    icon: Award,
    value: "98%",
    label: "Client Satisfaction",
    description: "Based on project reviews"
  },
  {
    icon: HeartHandshake,
    value: "10+",
    label: "Years Experience",
    description: "In QuickBase development"
  }
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of organizations 
            achieve remarkable results with QuickBase.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gray-700/50 rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}