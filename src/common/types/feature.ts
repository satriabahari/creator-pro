export interface FeatureProps {
  id: number;
  title: string;
  description: string;
  image: string;
  aosType?: string;
  aosDelay?: number;
  isShow?: boolean;
  colSpan?: string;
  className?: string;
  [propname: string]: React.ReactNode | string | undefined;
}
