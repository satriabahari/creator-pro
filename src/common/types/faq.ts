export interface FaqProps {
  question: string;
  answer: string;
  isShow?: boolean;
  [propname: string]: React.ReactNode | string | undefined;
}
