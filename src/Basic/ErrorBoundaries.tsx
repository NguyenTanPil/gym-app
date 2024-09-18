// https://github.com/bvaughn/react-error-boundary
import { ErrorBoundary } from 'react-error-boundary';
type Props = {};

const ErrorBoundaries = (props: Props) => {
  return (
    <ErrorBoundary fallback={<div>Something wrong</div>}>
      ErrorBoundaries
    </ErrorBoundary>
  );
};

export default ErrorBoundaries;
