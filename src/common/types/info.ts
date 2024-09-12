export interface InfoItemProps {
  title: string;
  count: number;
  unit?: string;
  percent: number;
  backgroundPercent?: string;
  icon: JSX.Element;
  isShow?: boolean;
  [propname: string]: React.ReactNode | string | undefined;
}
