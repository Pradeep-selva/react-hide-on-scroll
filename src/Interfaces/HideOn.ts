export interface HideOnProps {
  children: React.ReactNode;
  inverse?: Boolean;
  divID?: String;
  offset?: number;
  height?: number;
  atDiv?: Boolean;
  atHeight?: Boolean;
  showOnPageInit: Boolean;
}

export interface HideOnState {
  show: Boolean | undefined;
}
