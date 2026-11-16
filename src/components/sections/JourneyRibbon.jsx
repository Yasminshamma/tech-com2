export default function JourneyRibbon() {
  return (
    <svg className="ribbon" id="ribbon" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="rbGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1" />
        <mask id="rbMask" maskUnits="userSpaceOnUse"><path id="rbMaskPath" fill="none" stroke="#fff" strokeWidth="60" strokeLinecap="round" /></mask>
        <mask id="rbMaskDots" maskUnits="userSpaceOnUse"><path id="rbMaskDotsPath" fill="none" stroke="#fff" strokeWidth="60" strokeLinecap="round" /></mask>
      </defs>
      <g mask="url(#rbMask)">
        <path id="rbShadow" fill="none" stroke="#0a1330" strokeOpacity=".16" strokeLinecap="round" />
        <path id="rbBody" fill="none" stroke="url(#rbGrad)" strokeLinecap="round" />
        <path id="rbHi" fill="none" stroke="#fff" strokeOpacity=".55" strokeLinecap="round" />
      </g>
      <g mask="url(#rbMaskDots)"><path id="rbDots" fill="none" stroke="url(#rbGrad)" strokeLinecap="round" /></g>
      <circle id="rbStar" cx="0" cy="0" r="7" fill="#ff7a2f" />
    </svg>
  );
}
