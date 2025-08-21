import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function ResponsiveContainer({ 
  children, 
  className = '',
  id 
}: ResponsiveContainerProps) {
  return (
    <div 
      id={id}
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ${className}`}
    >
      {children}
    </div>
  );
}