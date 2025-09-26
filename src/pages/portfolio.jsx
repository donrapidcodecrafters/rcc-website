
import React from "react";
import { ExternalLink, Users, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Enterprise CRM System",
    company: "TechCorp Industries",
    industry: "Technology",
    description: "Complete customer relationship management system with sales pipeline, lead tracking, and automated follow-ups.",
    results: ["60% increase in sales efficiency", "40% reduction in lead response time", "95% user adoption rate"],
    technologies: ["QuickBase", "Zapier", "Salesforce Integration"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    metrics: { users: 150, timeToLive: "6 weeks", efficiency: "60%" }
  },
  {
    title: "Project Management Suite",
    company: "Construction Dynamics",
    industry: "Construction",
    description: "Comprehensive project tracking system with resource management, timeline tracking, and budget monitoring.",
    results: ["45% improvement in project delivery", "30% reduction in cost overruns", "Real-time visibility across all projects"],
    technologies: ["QuickBase", "Microsoft Project", "Financial APIs"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    metrics: { users: 75, timeToLive: "8 weeks", efficiency: "45%" }
  },
  {
    title: "Inventory Management System",
    company: "Retail Plus",
    industry: "Retail",
    description: "Advanced inventory tracking with automated reordering, supplier management, and demand forecasting.",
    results: ["50% reduction in stockouts", "25% decrease in carrying costs", "Automated 80% of manual processes"],
    technologies: ["QuickBase", "EDI Integration", "Barcode Scanning"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    metrics: { users: 45, timeToLive: "5 weeks", efficiency: "50%" }
  },
  {
    title: "HR Management Platform",
    company: "People First Corp",
    industry: "Human Resources",
    description: "End-to-end HR solution covering recruitment, onboarding, performance tracking, and employee development.",
    results: ["70% faster hiring process", "90% employee satisfaction score", "Reduced admin time by 55%"],
    technologies: ["QuickBase", "ATS Integration", "Performance Tools"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    metrics: { users: 200, timeToLive: "10 weeks", efficiency: "70%" }
  },
  {
    title: "Quality Control System",
    company: "Manufacturing Excellence",
    industry: "Manufacturing",
    description: "Comprehensive quality management with inspection workflows, compliance tracking, and corrective actions.",
    results: ["35% reduction in defects", "100% compliance audit success", "Streamlined quality processes"],
    technologies: ["QuickBase", "IoT Sensors", "Statistical Analysis"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    metrics: { users: 85, timeToLive: "7 weeks", efficiency: "35%" }
  },
  {
    title: "Customer Support Portal",
    company: "ServiceHub Solutions",
    industry: "Technology Services",
    description: "Integrated support system with ticket management, knowledge base, and customer communication tools.",
    results: ["65% faster ticket resolution", "40% increase in customer satisfaction", "Reduced support costs by 30%"],
    technologies: ["QuickBase", "Zendesk API", "Live Chat Integration"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    metrics: { users: 125, timeToLive: "6 weeks", efficiency: "65%" }
  }
];

const skills = [
  { name: "QuickBase Development", level: 98 },
  { name: "Database Design", level: 95 },
  { name: "Workflow Automation", level: 92 },
  { name: "API Integration", level: 88 },
  { name: "Report & Dashboard Design", level: 94 },
  { name: "User Training & Support", level: 90 },
  { name: "Business Process Analysis", level: 87 },
  { name: "Data Migration", level: 85 }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our Work &
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"> Expertise</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Discover how we've helped businesses transform their operations with custom QuickBase solutions. 
              Each project showcases our commitment to delivering measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-400">Real solutions, real results for real businesses</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-colors overflow-hidden">
                <div className="aspect-video bg-gray-700 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-80 hover:opacity-100"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-blue-300 border-blue-400/50 bg-blue-500/10">
                      {project.industry}
                    </Badge>
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <p className="text-sm text-gray-400">{project.company}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 py-4 bg-gray-900/50 rounded-lg px-4 border border-gray-700">
                    <div className="text-center">
                      <Users className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-white">{project.metrics.users}</div>
                      <div className="text-xs text-gray-400">Users</div>
                    </div>
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-green-400 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-white">{project.metrics.timeToLive}</div>
                      <div className="text-xs text-gray-400">Delivery</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-white">+{project.metrics.efficiency}</div>
                      <div className="text-xs text-gray-400">Efficiency</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-300 border-gray-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Core Skills</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                With over 10 years of experience in QuickBase development, we've mastered every aspect 
                of the platform. Our expertise spans from simple database design to complex enterprise integrations.
              </p>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm font-semibold text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">QuickBase Certified</h3>
                  <p className="text-gray-400">Advanced Developer & Solution Architect</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-900/50 rounded-lg border border-blue-800/50">
                    <div className="text-2xl font-bold text-blue-300 mb-1">500+</div>
                    <div className="text-sm text-gray-400">Apps Built</div>
                  </div>
                  <div className="text-center p-4 bg-green-900/50 rounded-lg border border-green-800/50">
                    <div className="text-2xl font-bold text-green-300 mb-1">200+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-purple-900/50 rounded-lg border border-purple-800/50">
                    <div className="text-2xl font-bold text-purple-300 mb-1">10+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-orange-900/50 rounded-lg border border-orange-800/50">
                    <div className="text-2xl font-bold text-orange-300 mb-1">98%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-gray-200 mb-2">Certifications & Awards</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• QuickBase Advanced Developer Certification</li>
                    <li>• Solution Architect Certification</li>
                    <li>• Partner of the Year Award 2023</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
