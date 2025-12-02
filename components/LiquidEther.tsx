import React, { useEffect, useRef } from 'react';

interface LiquidEtherProps {
    className?: string;
}

const LiquidEther: React.FC<LiquidEtherProps> = ({ className = '' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Blob/Liquid particle system
        class LiquidBlob {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            baseRadius: number;
            color: { r: number; g: number; b: number };
            pulseSpeed: number;
            pulseOffset: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1.2;
                this.vy = (Math.random() - 0.5) * 1.2;
                this.baseRadius = Math.random() * 180 + 120;
                this.radius = this.baseRadius;

                // Vibrant colors: cyan, magenta, purple, blue
                const colors = [
                    { r: 0, g: 212, b: 255 },      // cyan
                    { r: 255, g: 0, b: 255 },      // magenta
                    { r: 139, g: 92, b: 246 },     // purple
                    { r: 59, g: 130, b: 246 },     // blue
                    { r: 168, g: 85, b: 247 },     // violet
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.pulseSpeed = 0.015 + Math.random() * 0.025;
                this.pulseOffset = Math.random() * Math.PI * 2;
            }

            update(time: number) {
                this.x += this.vx;
                this.y += this.vy;

                // Pulse effect
                this.radius = this.baseRadius + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 30;

                // Wrap around edges with smooth transition
                if (this.x < -this.radius) this.x = canvas.width + this.radius;
                if (this.x > canvas.width + this.radius) this.x = -this.radius;
                if (this.y < -this.radius) this.y = canvas.height + this.radius;
                if (this.y > canvas.height + this.radius) this.y = -this.radius;
            }

            draw(ctx: CanvasRenderingContext2D) {
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.radius
                );

                // More vibrant gradient with higher opacity
                gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.6)`);
                gradient.addColorStop(0.4, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.3)`);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create blobs
        const blobs: LiquidBlob[] = [];
        const blobCount = 10;
        for (let i = 0; i < blobCount; i++) {
            blobs.push(new LiquidBlob());
        }

        let time = 0;
        let animationId: number;

        const animate = () => {
            time += 0.015;

            // Clear with slight trail effect for liquid feel
            ctx.fillStyle = 'rgba(6, 0, 16, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw blobs
            blobs.forEach(blob => {
                blob.update(time);
                blob.draw(ctx);
            });

            // Add glow overlay for more vibrant effect
            ctx.globalCompositeOperation = 'lighter';
            blobs.forEach(blob => {
                const glowGradient = ctx.createRadialGradient(
                    blob.x, blob.y, 0,
                    blob.x, blob.y, blob.radius * 0.7
                );
                glowGradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.15)`);
                glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(blob.x, blob.y, blob.radius * 0.7, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.globalCompositeOperation = 'source-over';

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 ${className}`}
            style={{
                background: 'radial-gradient(ellipse at top, #0a0520 0%, #060010 50%, #000000 100%)',
            }}
        />
    );
};

export default LiquidEther;
