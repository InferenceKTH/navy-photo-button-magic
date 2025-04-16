
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ExternalLink, Linkedin, Github, Twitter } from 'lucide-react';

interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  socialLinks?: SocialLinks;
}

const TeamMember: React.FC<TeamMemberProps> = ({
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
          <Avatar className="h-24 w-24 mb-4 border-2 border-blue-100">
            <AvatarImage src={imageSrc} alt={name} />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <h3 className="text-xl font-bold mb-1 text-gray-800">{name}</h3>
          <p className="text-sm font-medium text-blue-600 mb-3">{role}</p>
          <p className="text-gray-600 text-sm">{description}</p>
          
          {socialLinks && (
            <div className="flex mt-4 space-x-3">
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${name}'s LinkedIn Profile`}
                  className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
                >
                  <Linkedin size={16} className="text-gray-600" />
                </a>
              )}
              
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
              
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${name}'s Twitter Profile`}
                  className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
                >
                  <Twitter size={16} className="text-gray-600" />
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
