export interface tagProps {
  id: string,
  name: string;
  backgroundColor: string;
  color: string;
  isDismissed: boolean;
}

export interface keyboardProps {
  letter: string;
  status: string; // default, good, wrong
}

export interface letterProps {
  id: string,
  letter: string,
  status: string //hidden good wrong
}
