import { ChangeEvent, MouseEvent, SyntheticEvent, useState } from 'react';

type Props = {};

const FormAndEvents = (props: Props) => {
  const [value, setValue] = useState<string>('');

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log({ event });
    event.preventDefault();
  };

  const inputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
    };

    const name = target.name.value;
    console.log({ name });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type='button' onClick={handleClick}>
          Click me
        </button>

        <input name='name' type='text' value={value} onChange={inputChange} />
      </form>
    </div>
  );
};

export default FormAndEvents;
