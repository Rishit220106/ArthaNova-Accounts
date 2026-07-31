import React from 'react';

export const UKFlag = ({ className = "w-6 h-4 rounded-[2px] shadow-sm shrink-0 border border-[#07162D]/15 inline-block align-middle" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 600 300">
    <clipPath id="uk-clip-flags">
      <rect width="600" height="300" />
    </clipPath>
    <g clipPath="url(#uk-clip-flags)">
      <rect width="600" height="300" fill="#012169" />
      <path d="M0,0 L600,300 M600,0 L0,300" stroke="#fff" strokeWidth="60" />
      <path d="M0,0 L600,300 M600,0 L0,300" stroke="#C8102E" strokeWidth="40" />
      <path d="M300,0 V300 M0,150 H600" stroke="#fff" strokeWidth="100" />
      <path d="M300,0 V300 M0,150 H600" stroke="#C8102E" strokeWidth="60" />
    </g>
  </svg>
);

export const USFlag = ({ className = "w-6 h-4 rounded-[2px] shadow-sm shrink-0 border border-[#07162D]/15 inline-block align-middle" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 741 390">
    <rect width="741" height="390" fill="#b22234" />
    <path d="M0,30H741M0,90H741M0,150H741M0,210H741M0,270H741M0,330H741" stroke="#fff" strokeWidth="30" />
    <rect width="296.4" height="210" fill="#3c3b6e" />
    <g fill="#fff">
      <circle cx="30" cy="20" r="9" /><circle cx="90" cy="20" r="9" /><circle cx="150" cy="20" r="9" /><circle cx="210" cy="20" r="9" /><circle cx="270" cy="20" r="9" />
      <circle cx="60" cy="50" r="9" /><circle cx="120" cy="50" r="9" /><circle cx="180" cy="50" r="9" /><circle cx="240" cy="50" r="9" />
      <circle cx="30" cy="80" r="9" /><circle cx="90" cy="80" r="9" /><circle cx="150" cy="80" r="9" /><circle cx="210" cy="80" r="9" /><circle cx="270" cy="80" r="9" />
      <circle cx="60" cy="110" r="9" /><circle cx="120" cy="110" r="9" /><circle cx="180" cy="110" r="9" /><circle cx="240" cy="110" r="9" />
      <circle cx="30" cy="140" r="9" /><circle cx="90" cy="140" r="9" /><circle cx="150" cy="140" r="9" /><circle cx="210" cy="140" r="9" /><circle cx="270" cy="140" r="9" />
      <circle cx="60" cy="170" r="9" /><circle cx="120" cy="170" r="9" /><circle cx="180" cy="170" r="9" /><circle cx="240" cy="170" r="9" />
      <circle cx="30" cy="195" r="9" /><circle cx="90" cy="195" r="9" /><circle cx="150" cy="195" r="9" /><circle cx="210" cy="195" r="9" /><circle cx="270" cy="195" r="9" />
    </g>
  </svg>
);

export const AUFlag = ({ className = "w-6 h-4 rounded-[2px] shadow-sm shrink-0 border border-[#07162D]/15 inline-block align-middle" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1200 600">
    <rect width="1200" height="600" fill="#00008B" />
    <g transform="scale(0.5)">
      <rect width="1200" height="600" fill="#012169" />
      <path d="M0,0 L1200,600 M1200,0 L0,600" stroke="#fff" strokeWidth="120" />
      <path d="M0,0 L1200,600 M1200,0 L0,600" stroke="#C8102E" strokeWidth="80" />
      <path d="M600,0 V600 M0,300 H1200" stroke="#fff" strokeWidth="200" />
      <path d="M600,0 V600 M0,300 H1200" stroke="#C8102E" strokeWidth="120" />
    </g>
    <polygon fill="#fff" points="300,370 312,410 350,400 325,430 350,460 312,450 300,490 288,450 250,460 275,430 250,400 288,410" />
    <circle cx="900" cy="150" r="26" fill="#fff" />
    <circle cx="1020" cy="270" r="26" fill="#fff" />
    <circle cx="900" cy="450" r="26" fill="#fff" />
    <circle cx="780" cy="330" r="26" fill="#fff" />
    <circle cx="960" cy="390" r="18" fill="#fff" />
  </svg>
);
