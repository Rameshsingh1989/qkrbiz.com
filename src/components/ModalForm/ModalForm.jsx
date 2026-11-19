import { useCallback } from "react";
import { Modal } from "react-bootstrap";
import AddRequestForm from "../RequestForm/AddRequestForm";
import useSanitizeHtml from "../../hooks/useSanitizeHtml";

const ModalForm = ({ show, handleClose, headerText, btnText  }) => {
  const sanitizeHtml = useSanitizeHtml();

// Close handler that resets the form
  const handleModalClose = useCallback(() => {
    handleClose();
  }, [handleClose]);

  return (
    <>
      <Modal size="lg" show={show} onHide={handleModalClose} className="modal-top">
        <Modal.Header closeButton>
          <Modal.Title className="mb-1">
            <span dangerouslySetInnerHTML={sanitizeHtml(headerText)}></span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddRequestForm variant="gradient" textCenter="text-center" btnClass="rounded-pill" submitText={btnText} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalForm;
