import { useEffect } from 'react';
import IconButton from './IconButton';
import useDataRef from 'hooks/useDataRef';
import LoadingIndicator from './LoadingIndicator';
import { Repeat } from 'react-feather';
import clsx from 'clsx';

/**
 *
 * @param {LoadingContentProps} props
 */
function LoadingContent(props) {
  const {
    size,
    error,
    loading,
    children,
    onReload,
    onMount,
    loadingContent,
    errorContent,
    className,
    ...rest
  } = props;

  const dataRef = useDataRef({ onReload, onMount });

  useEffect(() => {
    dataRef.current.onMount?.();
  }, [dataRef]);

  if (!loading && !error) {
    return children?.() || children;
  }

  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center',
        className,
      )}
      {...rest}
    >
      {error ? (
        <>
          {/* <Typography variant="body2">Refresh</Typography> */}
          {errorContent || (
            <IconButton onClick={() => onReload?.()} variant="secondary">
              <Repeat />
            </IconButton>
          )}
        </>
      ) : (
        loadingContent || <LoadingIndicator size={size} />
      )}
    </div>
  );
}

LoadingContent.defaultProps = {
  size: 40,
  children: null,
};

export default LoadingContent;

/**
 * @typedef {{
 * size: string | number,
 * onMount: Function,
 * onReload: Function,
 * error: boolean,
 * loading: boolean,
 * errorContent: React.ReactNode,
 * loadingContent: React.ReactNode,
 * } & React.ComponentPropsWithoutRef<'div'>} LoadingContentProps
 */
