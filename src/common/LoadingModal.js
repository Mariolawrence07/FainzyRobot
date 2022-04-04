import Modal from "./Modal";
import LoadingIndicator from "./LoadingIndicator";
import clsx from "clsx";
import "./LoadingModal.css";

/**
 *
 * @param {import('./Modal').ModalProps} props
 */
export function LoadingModal(props) {
  const { className, ...rest } = props;
  return (
    <Modal className={clsx("LoadingModal", className)} {...rest}>
      <LoadingIndicator />
    </Modal>
  );
}

export default LoadingModal;
