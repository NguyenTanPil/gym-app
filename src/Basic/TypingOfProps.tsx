type Props = {
  message: string;
  count: number;
  disabled: boolean;
  name: string[];
  status: 'waiting' | 'success';
  obj: {
    id: string;
    title: string;
  };
  objArray: {
    id: string;
    title: string;
  }[];
  dict: {
    [key: string]: string;
  };
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setState: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
  childrenElement: React.JSX.Element;
  style: React.CSSProperties;
};

const TypingOfProps = (props: Props) => {
  return <div>TypingOfProps</div>;
};

export default TypingOfProps;
