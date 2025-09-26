import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Linkedin } from "lucide-react";

// Simple utility to create page URLs
function createPageUrl(pageName) {
  const route = pageName.toLowerCase() === 'home' ? '/' : `/${pageName.toLowerCase()}`;
  return route;
}

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "Services", path: createPageUrl("Services") },
    { name: "Portfolio", path: createPageUrl("Portfolio") },
    { name: "Reviews", path: createPageUrl("Reviews") },
    { name: "Contact", path: createPageUrl("Contact") }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d53f28c182c53bc93b4af6/84980fb83_logo2.png"
                alt="Rapid Code Crafters"
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-white">Rapid Code Crafters</span>
                <div className="text-xs text-blue-400 font-medium">Bringing Clarity to Complexity</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-200 hover:text-blue-400 relative ${
                    isActive(item.path) 
                      ? 'text-blue-400' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-blue-400 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <Link to={createPageUrl("Contact")}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition-colors shadow-lg">
                  Get Started
                </button>
              </Link>
            </div>

            <button
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-medium transition-colors ${isActive(item.path) ? 'text-blue-400' : 'text-gray-300'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Footer content goes here... */}
           <p className="text-sm text-center text-gray-500">
              © 2024 Rapid Code Crafters LLC. All rights reserved.
            </p>
        </div>
      </footer>
    </div>
  );
}