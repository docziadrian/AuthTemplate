export interface Message {
  severity: 'error' | 'info' | 'warning';
  title: string;
  msg: string;
}
