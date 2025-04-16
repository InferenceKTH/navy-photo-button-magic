import React from 'react';
import TeamMember from '@/components/TeamMember';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';

// Team member data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Project Lead",
    description: "Computer Science student with expertise in UI/UX design and project management.",
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      twitter: "https://twitter.com/"
    }
  },
  {
    name: "Sam Chen",
    role: "Backend Developer",
    description: "Database expert focused on system architecture and performance optimization.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      twitter: "https://twitter.com/"
    }
  },
  {
    name: "Taylor Williams",
    role: "Frontend Developer",
    description: "Creative coder with a passion for responsive design and user experience.",
    imageSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150",
  },
  {
    name: "Jordan Lee",
    role: "Algorithm Specialist",
    description: "Mathematics student implementing smart course recommendation algorithms.",
    imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150",
  },
  {
    name: "Morgan Smith",
    role: "Data Analyst",
    description: "Statistical analysis expert focused on curriculum patterns and student needs.",
    imageSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150",
  },
  {
    name: "Casey Martinez",
    role: "UX Researcher",
    description: "Conducts user interviews and testing to improve the course planning experience.",
    imageSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150",
  },
  {
    name: "Riley Wang",
    role: "Mobile Developer",
    description: "Creating the mobile application version of our course planner solution.",
    imageSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&h=150",
  },
  {
    name: "Jamie Park",
    role: "Academic Liaison",
    description: "Works with faculty to ensure course data accuracy and availability.",
    imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
  },
  {
    name: "Quinn Davis",
    role: "Quality Assurance",
    description: "Ensures the platform works flawlessly through rigorous testing protocols.",
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Course Planner Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            We're a dedicated team of students building the ultimate course planning solution to simplify academic journeys.
          </p>
          <Card className="bg-white/60 backdrop-blur-sm border-none shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-600">
                Our mission is to help students navigate their educational paths with confidence 
                by providing intuitive tools for course selection, degree planning, and academic success.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Course Planning Solution
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Intuitive Course Selection</h3>
              <p className="text-gray-600 mb-6">
                Our course planner helps students find and organize their courses with an intuitive interface 
                that simplifies the complex task of academic planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open("https://inferencekth.github.io/Find-My-Next-Course/", "_blank")}
                  className="bg-[#003399] hover:bg-[#001a4d] gap-2"
                >
                  Try It Now <ExternalLink size={16} />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById('product-video')?.scrollIntoView({ behavior: 'smooth' })}
                  className="gap-2"
                >
                  Watch Demo <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500" 
                alt="Course Planner Interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500" 
                alt="Students Using Course Planner" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Academic Path Visualization</h3>
              <p className="text-gray-600 mb-6">
                Visualize your entire academic journey with our interactive degree planning tools that help you 
                stay on track and meet all graduation requirements.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span> Course prerequisite mapping
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span> Semester load balancing
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span> Degree requirement tracking
                </li>
              </ul>
            </div>
          </div>
          
          <div id="product-video" className="aspect-w-16 aspect-h-9 mb-12 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <div className="flex items-center justify-center h-full p-8 bg-gray-100 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Product Demonstration</h3>
                <p className="text-gray-600 mb-4">A video demonstration would be placed here to showcase the product in action.</p>
                <p className="text-sm text-gray-500">(This is a placeholder for an actual product video)</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-8">
              This product was developed as part of a student project at the KTH Royal Institute of Technology in Stockholm, Sweden.
            </p>
            <Button 
              onClick={() => window.open("https://inferencekth.github.io/Find-My-Next-Course/", "_blank")}
              className="bg-[#003399] hover:bg-[#001a4d] gap-2"
            >
              Visit Our Project Website <ExternalLink size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 px-4 bg-white/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Meet Our Team
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </h2>
          
          <div className="mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-8">
                Our diverse team of computer science students brings together expertise in algorithms, 
                data structures, user experience design, and academic planning to create an innovative solution.
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&h=600" 
                  alt="Team Photo" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Note: Team photo shows participating members who have consented to image publication.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                description={member.description}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions or feedback about our course planner? We'd love to hear from you!
          </p>
          <Button 
            className="bg-[#003399] hover:bg-[#001a4d]"
            onClick={() => window.open("mailto:team@courseplanner-example.com", "_blank")}
          >
            Contact Us
          </Button>
          <p className="mt-12 text-sm text-gray-500">
            This project was developed as part of a course at KTH Royal Institute of Technology. 
            All content on this site adheres to principles of decency and respect.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
