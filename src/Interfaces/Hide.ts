export interface HideProps {
  children: React.ReactNode;
  variant?: "up" | "down";
}

export interface HideState {
  show: Boolean;
  prevYOffset: number;
}
