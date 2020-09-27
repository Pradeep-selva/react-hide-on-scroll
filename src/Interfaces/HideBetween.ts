export interface HideBetweenProps {
  children: React.ReactNode;
  inverse?: Boolean;
  startDivID?: String;
  endDivID?: String;
  startDivOffset?: number;
  endDivOffset?: number;
  startHeight?: number;
  endHeight?: number;
  div?: Boolean;
  height?: Boolean;
}

export interface HideBetweenState {
  show: Boolean | undefined;
}
