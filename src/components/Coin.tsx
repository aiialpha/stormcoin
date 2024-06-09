// src/Coin.tsx
import React, { useEffect, useRef, useState } from 'react';

interface CoinProps {
  touch: (event: React.TouchEvent<HTMLCanvasElement>) => void;
}

const Coin: React.FC<CoinProps> = ( {touch})  => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [coinColor, setCoinColor] = useState('#FFD700'); // Gold color
  const coinSize = 120; // Increase size for realism
  const canvasSize = coinSize * 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Function to draw the coin with shading, highlights, and curved strip with ridges
    const drawCoin = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the coin base with gradient for shading
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        coinSize / 4,
        canvas.width / 2,
        canvas.height / 2,
        coinSize
      );
      gradient.addColorStop(0, coinColor);
      gradient.addColorStop(1, '#b8860b'); // Darker gold color for depth

      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, coinSize, 0, 2 * Math.PI);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Add highlights to give a shiny effect
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, coinSize, 0, Math.PI);
      ctx.globalAlpha = 0.1; // Set transparency for highlights
      ctx.fillStyle = '#fff700';
      ctx.fill();
      ctx.globalAlpha = 1; // Reset transparency

      // Draw the curved strip with ridges
      const stripRadius = coinSize * 0.85; // Adjust strip radius for position
      const numRidges = 5000;
      const ridgeWidth = 2; // Width of each ridge
      const stripAngle = Math.PI * 10; // Angle at which strip is drawn
      const ridgeAngleIncrement = stripAngle / numRidges;

      ctx.beginPath();
      for (let i = 0; i < numRidges; i++) {
        const angle = stripAngle - i * ridgeAngleIncrement;
        const x = canvas.width / 2 + stripRadius * Math.cos(angle);
        const y = canvas.height / 2 + stripRadius * Math.sin(angle);
        const endX = canvas.width / 2 + (stripRadius + ridgeWidth) * Math.cos(angle);
        const endY = canvas.height / 2 + (stripRadius + ridgeWidth) * Math.sin(angle);
        ctx.moveTo(x, y);
        ctx.lineTo(endX, endY);
      }
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FFD700'; // Color of the ridges
      ctx.stroke();

      // Add some text or emblem in the center
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 40px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('⚡', canvas.width / 2, canvas.height / 2);
    };

    // Initial draw
    drawCoin();
  }, [coinColor, coinSize]);

  // Function to handle touch/click
  const handleInteraction = () => {
    setCoinColor((prevColor) => (prevColor === '#FFD700' ? '#FFD700' : '#FFD700')); // Toggle between gold and silver
  };

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize}
      height={canvasSize}
      onClick={handleInteraction}
      onTouchStart={touch}
      id='coin'
    />
  );
};

export default Coin;
