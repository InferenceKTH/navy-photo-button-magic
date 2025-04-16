
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Github, Mail } from 'lucide-react';

const TeamMember = ({
  name,
  role,
  description,
  imageSrc,
  socialLinks,
}) => {
  // Get initials for avatar fallback
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4 border-2 border-purple-100">
            <AvatarImage src={imageSrc} alt={name} />
            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-600 text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <h3 className="text-xl font-bold mb-1 text-gray-800">{name}</h3>
          <p className="text-sm font-medium text-purple-600 mb-3">{role}</p>
          <p className="text-gray-600 text-sm">{description}</p>
          
          {socialLinks && (
            <div className="flex mt-4 space-x-3">
              {socialLinks.github && (
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${name}'s GitHub Profile`}
                  className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
                >
                  <Github size={16} className="text-gray-600" />
                </a>
              )}
              
              {socialLinks.email && (
                <a 
                  href={`mailto:${socialLinks.email}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Email ${name}`}
                  className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
                >
                  <Mail size={16} className="text-gray-600" />
                </a>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
