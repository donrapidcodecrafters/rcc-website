import React from "react";
import { Zap, Database, Workflow, Users, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Database,
    title: "Custom Database Design",
    description: "Tailored data structures that perfectly match your business requirements and scale with your growth."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks and create intelligent workflows that save time and reduce errors."
  },
  {
    icon: TrendingUp,
    title: "Advanced Reporting",
    description: "Real-time dashboards and analytics that provide actionable insights for better decision-making."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Connect your teams with seamless sharing, permissions, and collaboration features."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with role-based access controls and data protection protocols."
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description: "Fast deployment with our proven methodologies - go from concept to launch in weeks."
  }
];

export default function FeatureCards() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Rapid Code Crafters?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine deep QuickBase expertise with business acumen to deliver solutions 
            that transform how your organization operates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-blue-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-600/30">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}