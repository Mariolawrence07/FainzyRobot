import {
  forwardRef,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
} from "react";
import clsx from "clsx";
import Backdrop from "./Backdrop";
import Portal from "./Portal";
import "./Modal.css";

// @TODO handle Esc key for closing backdrop
export const Modal = forwardRef(
  /**
   *
   * @param {ModalProps} props
   * @param {import("react").Ref<HTMLObElement>} ref
   */
  (props, ref) => {
    const {
      open,
      BackdropProps,
      closeAfterTransition,
      container,
      disableBackdropClick,
      disablePortal,
      disableScrollLock,
      hideBackdrop,
      keepMounted,
      onBackdropClick,
      onClose,
      className,
      children,
      ...rest
    } = props;

    const _ref = useRef(null);

    useImperativeHandle(ref, () => _ref.current, []);

    const handleBackdropClick = (event) => {
      if (!disableBackdropClick) {
        onBackdropClick(event);
        onClose();
      }
    };

    useLayoutEffect(() => {
      if (open && !disableScrollLock) {
        container.style.overflow = "hidden";
      }
    }, [container.style, disableScrollLock, open]);

    // useEffect(() => {
    //   const current = _ref.current;
    //   function handleTransitionRun() {
    //     console.log("transition runing");

    //     if (closeAfterTransition) {
    //       // setTransitioning(true);
    //     }
    //   }

    //   function handleTransitionEnd() {
    //     console.log('trasition end');

    //     setTransitioning(false);
    //   }
    //   if (current) {
    //     current.addEventListener("transitionrun", handleTransitionEnd);
    //     current.addEventListener("transitionend", handleTransitionEnd);
    //   }
    //   return () => {
    //     if (current) {
    //       current.addEventListener("transitionrun", handleTransitionRun);
    //       current.addEventListener("transitionend", handleTransitionEnd);
    //     }
    //   };
    // }, [closeAfterTransition]);

    // useEffect(() => {
    //   // setTransitioning(false);
    // }, [open]);

    if (keepMounted || open) {
      return (
        <Portal container={container} disablePortal={disablePortal}>
          <div
            ref={_ref}
            className={clsx("Modal", className, {
              "Modal--open": open,
              "Modal--keepMounted": keepMounted,
            })}
            {...rest}
          >
            {hideBackdrop ? null : (
              <Backdrop
                open={open}
                onClick={handleBackdropClick}
                {...BackdropProps}
              />
            )}
            {children}
          </div>
        </Portal>
      );
    }

    return null;
  }
);

Modal.defaultProps = {
  onClose: () => {},
  onBackdropClick: () => {},
  container: document.body,
};

export default Modal;

/**
 * @typedef {{
 *  open?: boolean;
 *  BackdropProps?: BackdropProps;
 *  closeAfterTransition?: boolean;
 *  container?: HTMLElement;
 *  disablePortal?: boolean;
 *  disableBackdropClick?: boolean;
 *  disableScrollLock?: boolean;
 *  hideBackdrop?: boolean;
 *  keepMounted?: boolean;
 *  onBackdropClick?: Function;
 *  onClose?: Function;
 * } & import("react").ComponentPropsWithRef<"div">} ModalProps
 */
