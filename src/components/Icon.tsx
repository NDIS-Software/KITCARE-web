type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, React.ReactNode> = {
  person: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
    </>
  ),
  shield: <path d="M12 22s7-3.5 7-10V5l-7-3-7 3v7c0 6.5 7 10 7 10Z" />,
  community: (
    <>
      <circle cx="12" cy="7" r="3" />
      <circle cx="5.5" cy="11" r="2.5" />
      <circle cx="18.5" cy="11" r="2.5" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  heart: (
    <path d="M12 21s-7.5-4.4-9.4-9.2C1.2 8.2 3.6 5 7 5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.4 0 5.8 3.2 4.4 6.8C19.5 16.6 12 21 12 21Z" />
  ),
  care: (
    <>
      <path d="M7 21v-7a5 5 0 0 1 10 0v7" />
      <path d="M6 10h12" />
      <path d="M12 5v10" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
  transport: (
    <>
      <path d="M5 16V9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v7" />
      <path d="M4 16h16" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v10H8l-4 4V5Z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 12.5-1.5 8 5-3 5 3-1.5-8" />
    </>
  ),
  hands: (
    <>
      <path d="m4 13 4 4a4 4 0 0 0 5.7 0l1.3-1.3" />
      <path d="m20 13-4 4" />
      <path d="m8 13 3-3 3 3" />
    </>
  ),
  pin: (
    <>
      <path d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

export function Icon({ name, className = "size-8" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name] ?? paths.heart}
    </svg>
  );
}

