import React from 'react';

const Header = ({ selectedPlatform, onBackToPlatforms }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={onBackToPlatforms} 
            data-testid="back-to-platforms-btn"
            className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-xs sm:text-sm">Voltar</span>
          </button>

          {/* JOGO CLUB Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/logos/jogo-club.png" 
              alt="JOGO CLUB" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              style={{ filter: 'drop-shadow(0 0 10px rgba(45, 212, 191, 0.3))' }}
            />
            <span className="text-base sm:text-lg font-bold">
              <span className="text-teal-400">JOGO</span>
              <span className="text-white"> CLUB</span>
            </span>
          </div>

          {/* Platform Logo */}
          <img 
            src={`/logos/${selectedPlatform}.png`} 
            alt={selectedPlatform} 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
