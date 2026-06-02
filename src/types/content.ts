export interface TimelineCard {
  /** Big number label, e.g. "01." */
  number: string;
  /** Date label, e.g. "10 April 2018" */
  date: string;
  /** Title, e.g. "O começo" */
  title: string;
  /** Front (default) image path */
  front: string;
  /** Back (flip-reveal) image path */
  back: string;
  frontAlt: string;
  backAlt: string;
}

export interface HorizontalPanel {
  key: string;
  /** Heading, e.g. "A Cerimônia" */
  heading: string;
  /** Pill button label */
  buttonLabel: string;
  href: string;
  /** Background image path */
  bg: string;
  /** Whether the background is dark (=> white text/border) */
  dark: boolean;
  /** Optional address lines revealed on hover */
  address?: string[];
}

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}
