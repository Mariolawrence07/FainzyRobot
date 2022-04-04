import clsx from 'clsx';
import Modal from './Modal';
import Paper from './Paper';
import IconButton from './IconButton';
import { X } from 'react-feather';
import './Dialog.css';

/**
 *
 * @param {DialogProps} props
 */
function Dialog(props) {
  const { classes, className, children, onClose, ...rest } = props;
  return (
    <Modal className={clsx('Dialog', className, classes.root)} {...rest}>
      <Paper className={clsx('Dialog__paper', classes.paper)}>
        <div className="absolute top-2 right-2">
          <IconButton onClick={onClose} variant="tertiary">
            <X />
          </IconButton>
        </div>
        {children}
      </Paper>
    </Modal>
  );
}

export default Dialog;

Dialog.defaultProps = {
  classes: {},
};

/**
 * @typedef {{classes: {root: string; paper: string}} & import('./Modal').ModalProps} DialogProps
 */
