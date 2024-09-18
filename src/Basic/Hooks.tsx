import { useCallback, useEffect, useReducer, useRef, useState } from 'react';

type Props = {};
type User = {
  name: string;
  age: number;
};

enum CountActionKind {
  increment = 'increment',
  decrement = 'decrement',
}

interface ActionType {
  type: CountActionKind;
  payload: number;
}

const initialState = { count: 0 };

function reducer(state: typeof initialState, action: ActionType) {
  switch (action.type) {
    case CountActionKind.increment:
      return { count: state.count + action.payload };
    case CountActionKind.decrement:
      return { count: state.count - action.payload };
    default:
      throw new Error(`Unknown action`);
  }
}

export function useLoading() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const load = async (aPromise: Promise<unknown>) => {
    setIsLoading(true);

    return aPromise.finally(() => setIsLoading(false));
  };

  return [isLoading, load] as const;
}

const Hooks = (props: Props) => {
  const [value, setValue] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [tempUser, setTempUser] = useState<User>({} as User);

  const divRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const updateValue = useCallback((value: string) => {
    console.log({ value });
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    intervalRef.current = setInterval(() => {}, 100);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div ref={divRef}>
      Count: {state.count}
      <button
        onClick={() =>
          dispatch({ type: CountActionKind.decrement, payload: 5 })
        }
      >
        -
      </button>
      <button
        onClick={() =>
          dispatch({ type: CountActionKind.increment, payload: 5 })
        }
      >
        +
      </button>
    </div>
  );
};

export default Hooks;
