
import React from 'react';

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
    <div className="flex items-center cursor-pointer">
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className="h-6 w-6 rounded-full mr-2"
      />
      <button
        onClick={onClick}
        className="bg-[#003399] text-white px-3 py-1 rounded-md hover:bg-blue-800 transition-colors"
      >
        {label}
      </button>
    </div>
  );
};

export default NavyPhotoButton;
