type Props = {
  age?: number;
} & typeof defaultProps;

const defaultProps = {
  age: 31,
};

const TypingDefaultProps = ({ age }: Props) => {
  return <div>{age}</div>;
};

TypingDefaultProps.defaultProps = defaultProps;

export default TypingDefaultProps;
