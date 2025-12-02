import React from 'react';

interface ColorBendsProps {
    className?: string;
}

const ColorBends: React.FC<ColorBendsProps> = ({ className = '' }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]"></div>

            {/* Animated color bends */}
            <div className="absolute inset-0">
                {/* Bend 1 - Cyan */}
                <div
                    className="absolute w-[150%] h-[150%] -top-1/2 -left-1/4 opacity-30"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.3) 0%, transparent 50%)',
                        animation: 'float1 20s ease-in-out infinite',
                    }}
                ></div>

                {/* Bend 2 - Magenta */}
                <div
                    className="absolute w-[150%] h-[150%] -bottom-1/2 -right-1/4 opacity-30"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(255, 0, 255, 0.3) 0%, transparent 50%)',
                        animation: 'float2 25s ease-in-out infinite',
                    }}
                ></div>

                {/* Bend 3 - Purple */}
                <div
                    className="absolute w-[120%] h-[120%] top-1/4 left-1/3 opacity-20"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.4) 0%, transparent 60%)',
                        animation: 'float3 30s ease-in-out infinite',
                    }}
                ></div>

                {/* Bend 4 - Yellow accent */}
                <div
                    className="absolute w-[100%] h-[100%] bottom-1/3 right-1/4 opacity-15"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.2) 0%, transparent 40%)',
                        animation: 'float4 22s ease-in-out infinite',
                    }}
                ></div>
            </div>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#060010]/60 via-transparent to-[#060010]/80"></div>

            <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10%, -10%) rotate(5deg); }
          66% { transform: translate(-5%, 5%) rotate(-3deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-8%, 8%) rotate(-4deg); }
          66% { transform: translate(12%, -6%) rotate(6deg); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10%, 10%) scale(1.1); }
        }
        
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15%, -15%) rotate(10deg); }
        }
      `}</style>
        </div>
    );
};

export default ColorBends;
