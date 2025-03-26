import React from 'react';
import { Link } from 'react-router-dom'; // Importujeme Link pro směrování

interface TopicButtonProps {
  to: string; // URL pro směr, na který tlačítko odkazuje
  children: React.ReactNode;
}

const TopicButton: React.FC<TopicButtonProps> = ({ to, children }) => {
  return (
    <Link to={to}> {/* Používáme Link pro směrování */}
      <button className="px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-blue-100 text-blue-700 hover:bg-blue-50/50 transition-all duration-200">
        {children}
      </button>
    </Link>
  );
};

export default TopicButton;
