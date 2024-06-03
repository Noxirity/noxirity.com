import { useMemo } from 'react';

function Stars({ count }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      style: {
        left: `${Math.floor(Math.random() * 100)}vw`,
        top: `${Math.floor(Math.random() * 100)}vh`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${Math.random() * 3 + 2}s`, // Random duration between 2s and 5s
      },
    }));
  }, []); // Empty dependency array means this runs only once

  return (
    <div className="container-stars">
      {stars.map(star => (
        <div key={star.id} className="star" style={star.style}></div>
      ))}
    </div>
  );
}

export default Stars;