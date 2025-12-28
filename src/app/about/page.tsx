import React from 'react';

export default function AboutPage() {
  
  // ASCII Art "ET"
  const asciiLogo = `
      .---.
     /     \\
    |  E T  |
    |  ___  |
     \\/   \\/ 
     /_____\\ 
    (_______)
  `;

  return (
    <div className="max-w-4xl mx-auto w-full mt-10 px-4">
      
      {/* Contenitore stile Terminale */}
      <div className="bg-[#0e161b] border border-cyan-800 rounded p-6 font-mono text-sm md:text-base shadow-2xl">
        
        {/* Riga di comando fake (Header finestra) */}
        <div className="mb-6 pb-2 border-b border-gray-800 flex gap-2">
           <div className="w-3 h-3 rounded-full bg-red-500"></div>
           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
           <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          
          {/* COLONNA 1: LOGO */}
          <div className="text-cyan-400 font-bold leading-tight whitespace-pre select-none text-center md:text-left">
            {asciiLogo}
          </div>

          {/* COLONNA 2: INFO */}
          <div className="flex-1 w-full space-y-1">
            
            {/* Titolo: User @ Host */}
            <div className="mb-4 text-center md:text-left">
              <span className="text-cyan-400 font-bold">emanueletocci</span>
              <span className="text-gray-100">@</span>
              <span className="text-cyan-400 font-bold">github-profile</span>
              <div className="text-gray-600 text-xs md:text-left">----------------------------------</div>
            </div>

            {/* Dati */}
            <InfoRow label="Role" value="Computer Eng. Student @ UNISA" />
            <InfoRow label="OS" value="Life v21.0 (Student Edition)" />
            <InfoRow label="Main Langs" value="Java, Dart (Flutter), PHP" />
            <InfoRow label="Pinned Repos" value="Bibliotech, Outer Space" />
            <InfoRow label="Interests" value="Self-Hosting, HomeLab, AI" />
            <InfoRow label="Latest Stack" value="Next.js, Tailwind, Docker" />
            <InfoRow label="Shell" value="ZSH (Brain.exe is loading...)" />
            <InfoRow label="Location" value="Salerno, Italy" />
            <InfoRow label="Status" value="Building & Breaking things" />

            {/* HO RIMOSSO LA STRISCIA DI COLORI QUI SOTTO */}

          </div>
        </div>
      </div>
    </div>
  );
}

// Componente riga singolo
const InfoRow = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col md:flex-row md:gap-4">
    <span className="text-cyan-400 font-bold min-w-[120px] text-center md:text-left">{label}:</span>
    <span className="text-gray-300 text-center md:text-left">{value}</span>
  </div>
);