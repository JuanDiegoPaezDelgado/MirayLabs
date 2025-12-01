import React, { useState } from 'react';

export const CatLogo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  const [imageError, setImageError] = useState(false);

  // Fallback SVG if the PNG is not found
  if (imageError) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M12 2C8 2 5 4.5 5 8C5 11 7 14 7 18C7 19.1 7.9 20 9 20H15C16.1 20 17 19.1 17 18C17 14 19 11 19 8C19 4.5 16 2 12 2Z"
          fill="url(#cat_gradient_fallback)"
          fillOpacity="0.1"
        />
        <path
          d="M12 2C8 2 5 4.5 5 8C5 10.5 6.5 12.8 8.5 14"
          stroke="url(#cat_gradient_fallback)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M19 8C19 10.5 17.5 12.8 15.5 14"
          stroke="url(#cat_gradient_fallback)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9 20H15"
          stroke="url(#cat_gradient_fallback)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7 18L8.5 14"
          stroke="url(#cat_gradient_fallback)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17 18L15.5 14"
          stroke="url(#cat_gradient_fallback)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Ears */}
        <path d="M8 7L6 4" stroke="url(#cat_gradient_fallback)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 7L18 4" stroke="url(#cat_gradient_fallback)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Whiskers/Face details */}
        <path d="M10 12H14" stroke="url(#cat_gradient_fallback)" strokeWidth="1.5" strokeLinecap="round" />

        <defs>
          <linearGradient id="cat_gradient_fallback" x1="5" y1="2" x2="19" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <img
      src="/Gato_de_lineas_con_resplandor_purpura.png"
      alt="Miraylabs Logo"
      className={`object-contain ${className}`}
      onError={() => setImageError(true)}
    />
  );
};