export interface SosmedItemProps {
  icon: JSX.Element;
  title: string;
  className?: string;
  isShow?: boolean;
  isActive?: boolean;
  [propname: string]: React.ReactNode | string | undefined;
}
