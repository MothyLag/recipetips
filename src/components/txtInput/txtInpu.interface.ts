export interface InputProps {
  name: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | undefined) => void;
}
