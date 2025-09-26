
import React from "react";
import { Star, Quote, Building, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    company: "TechCorp Industries",
    industry: "Technology",
    location: "San Francisco, CA",
    date: "December 2023",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face",
    content: "Rapid Code Crafters transformed our entire project management workflow. We've reduced processing time by 60% and improved team collaboration significantly. The team's expertise and attention to detail exceeded our expectations.",
    project: "Enterprise CRM System",
    results: ["60% faster processing", "Improved team collaboration", "Streamlined workflows"]
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "Growth Solutions",
    industry: "Consulting",
    location: "New York, NY",
    date: "November 2023",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    content: "The custom CRM they built exceeded our expectations. Our sales team is more efficient, and we have better visibility into our pipeline than ever before. Outstanding work and excellent communication throughout.",
    project: "Sales Pipeline Management",
    results: ["40% increase in sales efficiency", "Better pipeline visibility", "Improved reporting"]
  },
  {
    name: "Emily Rodriguez",
    role: "COO",
    company: "Manufacturing Plus",
    industry: "Manufacturing",
    location: "Chicago, IL",
    date: "October 2023",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    content: "The quality control system they developed has been a game-changer for our operations. We've seen a 35% reduction in defects and achieved 100% compliance in our recent audit. Highly recommend their services!",
    project: "Quality Control System",
    results: ["35% reduction in defects", "100% compliance rate", "Automated quality processes"]
  },
  {
    name: "David Wilson",
    role: "VP of Operations",
    company: "Retail Dynamics",
    industry: "Retail",
    location: "Austin, TX",
    date: "September 2023",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    content: "Our inventory management was a nightmare before working with Rapid Code Crafters. Now we have real-time visibility, automated reordering, and have reduced stockouts by 50%. The ROI has been incredible.",
    project: "Inventory Management System",
    results: ["50% reduction in stockouts", "Automated reordering", "Real-time inventory tracking"]
  },
  {
    name: "Lisa Thompson",
    role: "HR Director",
    company: "People First Corp",
    industry: "Human Resources",
    location: "Seattle, WA",
    date: "August 2023",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face",
    content: "The HR management platform revolutionized our hiring process. We're now 70% faster in hiring and our employee satisfaction scores have improved dramatically. The team was professional and delivered on time.",
    project: "HR Management Platform",
    results: ["70% faster hiring", "90% employee satisfaction", "Reduced admin time by 55%"]
  },
  {
    name: "Robert Kim",
    role: "Project Manager",
    company: "Construction Dynamics",
    industry: "Construction",
    location: "Denver, CO",
    date: "July 2023",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
    content: "The project management suite has given us unprecedented visibility into our projects. We've improved delivery times by 45% and reduced cost overruns significantly. Outstanding technical expertise and support.",
    project: "Project Management Suite",
    results: ["45% improvement in delivery", "30% reduction in cost overruns", "Real-time project visibility"]
  },
  {
    name: "Jennifer Davis",
    role: "Customer Success Manager",
    company: "ServiceHub Solutions",
    industry: "Technology Services",
    location: "Boston, MA",
    date: "June 2023",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face",
    content: "Our customer support portal has transformed how we handle customer inquiries. Ticket resolution is 65% faster, and customer satisfaction has increased by 40%. The team provided excellent training and ongoing support.",
    project: "Customer Support Portal",
    results: ["65% faster ticket resolution", "40% increase in satisfaction", "Reduced support costs by 30%"]
  },
  {
    name: "Andrew Martinez",
    role: "Operations Manager",
    company: "Logistics Pro",
    industry: "Logistics",
    location: "Miami, FL",
    date: "May 2023",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    content: "The logistics tracking system has streamlined our entire supply chain. We now have real-time visibility into all shipments and have reduced delivery delays by 55%. Exceptional work and fantastic results!",
    project: "Logistics Tracking System",
    results: ["55% reduction in delays", "Real-time shipment tracking", "Improved supply chain visibility"]
  }
];

const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
const totalReviews = reviews.length;
const industries = [...new Set(reviews.map(review => review.industry))];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              Client
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"> Reviews</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Don't just take our word for it. Here's what our clients say about working with Rapid Code Crafters.
            </p>
            
            {/* Review Stats */}
            <div className="flex justify-center items-center space-x-8 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-lg font-semibold text-white">{averageRating.toFixed(1)}</span>
                </div>
                <p className="text-gray-400">Average Rating</p>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{totalReviews}</div>
                <p className="text-gray-400">Total Reviews</p>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{industries.length}</div>
                <p className="text-gray-400">Industries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-colors relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-blue-800/50" />
                </div>
                
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Review Content */}
                  <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                    "{review.content}"
                  </blockquote>
                  
                  {/* Project & Results */}
                  <div className="mb-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <h4 className="font-semibold text-gray-200 mb-2">Project: {review.project}</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {review.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-white">{review.name}</div>
                        <div className="text-sm text-gray-400">{review.role}</div>
                        <div className="flex items-center space-x-1 text-sm text-gray-400 mt-1">
                          <Building className="w-3 h-3" />
                          <span>{review.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2 text-blue-300 border-blue-400/50 bg-blue-500/10">
                        {review.industry}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{review.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
                        <Calendar className="w-3 h-3" />
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your business operations and achieve similar results? 
            Let's discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Keeping original button structure, updated styles for clarity */}
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Get Your Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
