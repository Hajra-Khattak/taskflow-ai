const iconPaths = {
  home: "M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6",
  check: "m5 12 4 4L19 6",
  arrow: "M5 12h14m-7-7 7 7-7 7",
  plus: "M12 5v14m-7-7h14",
  calendar: "M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2z",
  chart: "M3 3v18h18M8 16v-5m5 5V6m5 10V9",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2",
  target: "M12 2v4m0 12v4M2 12h4m12 0h4M12 12l5-5m-5 5-5 5",
  sparkles: "m12 3 2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3z",
  book: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5zM4 17h16",
  flame: "M12 22c5 0 8-3.5 8-8 0-3-2-5-3-7-1 3-3 4-3 4 0-5-3-8-5-10 0 5-6 8-6 14 0 4 3 7 9 7z",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m18 6-12 12M6 6l12 12",
  moon: "M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13z",
  sun: "M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4m0-12.8L17 7M7 17l-1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  bolt: "m13 2-3 9h7L9 22l2-9H4l9-11z",
  trophy: "M8 21h8m-4-4v4M7 4h10v6a5 5 0 0 1-10 0zM7 7H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4",
  heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z",
};

export default function Icon({ name, size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={iconPaths[name] || iconPaths.sparkles} />
    </svg>
  );
}
