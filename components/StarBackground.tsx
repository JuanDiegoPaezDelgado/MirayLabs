
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    
    // Configuración
    const starCount = 800;
    const speed = 2; // Velocidad de las estrellas

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Recalcular centro y resetear transformación
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.translate(width / 2, height / 2);
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * width, // Profundidad inicial
          pz: 0 // Previous Z (para hacer la estela)
        });
        // Inicializar pz
        stars[i].pz = stars[i].z;
      }
    };

    const update = () => {
      // Fondo transparente (o semi-transparente para efecto trail)
      ctx.fillStyle = "rgba(5, 5, 5, 0.4)"; 
      ctx.fillRect(-width / 2, -height / 2, width, height);
      
      ctx.fillStyle = "white";

      stars.forEach((star) => {
        // Mover estrella hacia el espectador
        star.z -= speed;

        // Si la estrella pasa al espectador, reiniciarla al fondo
        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.pz = width;
        }

        // Proyección 3D a 2D
        // x_screen = x / z * escala
        const sx = (star.x / star.z) * width;
        const sy = (star.y / star.z) * height;

        // Posición anterior para dibujar la línea (estela)
        const px = (star.x / star.pz) * width;
        const py = (star.y / star.pz) * height;
        
        star.pz = star.z;

        // Dibujar solo si está dentro de la pantalla
        if (sx >= -width / 2 && sx <= width / 2 && sy >= -height / 2 && sy <= height / 2) {
          // Calculamos el grosor basado en la cercanía (más cerca = más grande)
          const radius = (1 - star.z / width) * 1.5;
          
          ctx.beginPath();
          // Opción 1: Círculos simples
          // ctx.arc(sx, sy, radius, 0, Math.PI * 2);
          // ctx.fill();

          // Opción 2: Líneas (efecto velocidad)
          ctx.lineWidth = radius;
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - star.z / width})`; // Opacidad basada en cercanía
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(sx, sy);
          ctx.stroke();
        }
      });

      requestRef.current = requestAnimationFrame(update);
    };

    // Inicialización
    window.addEventListener('resize', resize);
    resize();
    initStars();
    update();

    return () => {
      window.removeEventListener('resize', resize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'transparent', display: 'block' }}
    />
  );
};

export default StarBackground;