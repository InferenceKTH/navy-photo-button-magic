
import React from 'react';
import TeamMember from '@/components/TeamMember';
import { Card, CardContent } from '@/components/ui/card';

// Team member data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Project Lead",
    description: "Computer Science student with expertise in UI/UX design and project management.",
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
  },
  {
    name: "Sam Chen",
    role: "Backend Developer",
    description: "Database expert focused on system architecture and performance optimization.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
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

      {/* Team Members Section */}
      <section className="py-16 px-4 bg-white/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Meet Our Team
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </h2>
          
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
          <button className="bg-[#003399] text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
