
import React from 'react';
import NavyPhotoButton from '@/components/NavyPhotoButton';

const Index = () => {
  // Example function for button click
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Navy Photo Button Example</h1>
      
      <div className="space-y-6">
        {/* Example with profile photo */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-medium mb-3">Profile Button</h2>
          <NavyPhotoButton 
            onClick={handleButtonClick}
            label="Sign out"
            imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=60&h=60"
            imageAlt="Profile Photo"
          />
        </div>
        
        {/* Example with icon photo */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-medium mb-3">Icon Button</h2>
          <NavyPhotoButton 
            onClick={handleButtonClick}
            label="Settings"
            imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=60&h=60"
            imageAlt="Settings Icon"
            className="px-5 py-2.5"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
