
import React from 'react';
import { cn } from '@/lib/utils';

interface NavyPhotoButtonProps {
  onClick?: () => void;
  label: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const NavyPhotoButton = ({
  onClick,
  label,
  imageSrc,
  imageAlt,
  className,
}: NavyPhotoButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center bg-[#003399] text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors",
        className
      )}
    >
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className="h-6 w-6 rounded-full mr-3"
      />
      <span>{label}</span>
    </button>
  );
};

export default NavyPhotoButton;
