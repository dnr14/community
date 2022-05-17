import { ComponentType } from 'react';
import Progress from 'components/common/Progress';

const withLoading = <P extends object>(Component: ComponentType<P>) => {
  const hoc = (props: P & ProgressProps) => {
    return (
      <>
        <Progress {...props} />
        <Component {...props} />
      </>
    );
  };

  return hoc;
};

export default withLoading;
