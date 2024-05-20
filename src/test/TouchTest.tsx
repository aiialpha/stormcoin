import React, { useState } from 'react';
import './touch.css';

interface TouchPoint {
  id: number;
  x: number;
  y: number;
}

const TouchTest: React.FC = () => {
  const [touchPoints, setTouchPoints] = useState<TouchPoint[]>([]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const newTouchPoints = Array.from(event.touches).map(touch => ({
      id: touch.identifier,
      x: touch.clientX,
      y: touch.clientY
    }));
    setTouchPoints(newTouchPoints);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const updatedTouchPoints = Array.from(event.touches).map(touch => ({
      id: touch.identifier,
      x: touch.clientX,
      y: touch.clientY
    }));
    setTouchPoints(updatedTouchPoints);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const remainingTouchPoints = touchPoints.filter(point =>
      Array.from(event.touches).some(touch => touch.identifier === point.id)
    );
    setTouchPoints(remainingTouchPoints);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const mousePoint = { id: 0, x: event.clientX, y: event.clientY };
    setTouchPoints([mousePoint]);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      setTouchPoints([{ id: 0, x: moveEvent.clientX, y: moveEvent.clientY }]);
    };

    const handleMouseUp = () => {
      setTouchPoints([]);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      id="touchArea"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
    >
      {touchPoints.map(point => (
        <div
          key={point.id}
          className="touchPoint"
          style={{ left: point.x - 10, top: point.y - 10 }}
        />
      ))}
    </div>
  );
};

export default TouchTest;
