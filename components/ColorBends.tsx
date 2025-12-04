import React from 'react';
import './ColorBends.css';

interface ColorBendsProps {
    className?: string;
    colors?: string[];
    rotation?: number;
    speed?: number;
    scale?: number;
    frequency?: number;
    warpStrength?: number;
    mouseInfluence?: number;
    parallax?: number;
    noise?: number;
    transparent?: boolean;
    style?: React.CSSProperties;
    autoRotate?: number;
}

const ColorBends: React.FC<ColorBendsProps> = ({
    className = '',
    colors = ["#ff5c7a", "#8a5cff", "#00ffd1", "#ffd700"],
    transparent = false,
    speed = 1.5,
}) => {
    const baseDurations = [20, 25, 30, 22];
    const durations = baseDurations.map(d => d / speed);
    return (
        <div className={`color-bends-container ${className}`} style={{ mixBlendMode: 'screen' }}>
            {/* Base gradient background - only show if not transparent */}
            {!transparent && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]"></div>
            )}

            {/* Animated color bends */}
            <div className="absolute inset-0">
                {/* Bend 1 */}
                <div
                    className="absolute w-[150%] h-[150%] -top-1/2 -left-1/4 opacity-70"
                    style={{
                        background: `radial-gradient(ellipse at center, ${colors[0]} 0%, transparent 60%)`,
                        animation: `float1 ${durations[0]}s ease-in-out infinite`,
                    }}
                ></div>

                {/* Bend 2 */}
                <div
                    className="absolute w-[150%] h-[150%] -bottom-1/2 -right-1/4 opacity-70"
                    style={{
                        background: `radial-gradient(ellipse at center, ${colors[1]} 0%, transparent 60%)`,
                        animation: `float2 ${durations[1]}s ease-in-out infinite`,
                    }}
                ></div>

                {/* Bend 3 */}
                <div
                    className="absolute w-[120%] h-[120%] top-1/4 left-1/3 opacity-60"
                    style={{
                        background: `radial-gradient(ellipse at center, ${colors[2]} 0%, transparent 70%)`,
                        animation: `float3 ${durations[2]}s ease-in-out infinite`,
                    }}
                ></div>

                {/* Bend 4 */}
                <div
                    className="absolute w-[100%] h-[100%] bottom-1/3 right-1/4 opacity-50"
                    style={{
                        background: `radial-gradient(circle at center, ${colors[3]} 0%, transparent 50%)`,
                        animation: `float4 ${durations[3]}s ease-in-out infinite`,
                    }}
                ></div>
            </div>

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
