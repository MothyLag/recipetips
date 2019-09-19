export interface IFooterButtonProps {
  text: string;
  color?: string;
  ButtonAction?: (...params: any[]) => void;
  form?: string;
}
