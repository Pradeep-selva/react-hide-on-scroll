export interface HideProps {
  children: React.ReactNode;
  variant?: "up" | "down";
  showOnPageInit : Boolean;
}

export interface HideState {
  show: Boolean;
  prevYOffset: number;
}
