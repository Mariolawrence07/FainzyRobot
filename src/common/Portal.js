import ReactDOM from 'react-dom';

/**
 *
 * @param {PortalProps} props
 * @returns
 */
export function Portal(props) {
  const { disablePortal, children, container } = props;

  if (disablePortal) {
    return children;
  }
  return ReactDOM.createPortal(children, container);
}

Portal.defaultProps = {
  container: document.body,
};

export default Portal;

/**
 * @typedef {{
 * children:import("react").ReactNode;
 * container: HTMLElement;
 * disablePortal: boolean;
 * }} PortalProps
 */
