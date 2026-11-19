import { useCallback } from "react";
import RequestFormModal from "../RequestForm/RequestFormModal";
import { Col, Image, Modal, Row } from "react-bootstrap";
import ClientLogoScroll from "../ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../pages/Customers/CustomersAllData";
import modalQkrHR from "@/assets/images/advertisement/hrManagement/modal-qkrhr.webp";
import "./ModalFormLoad.scss"

const ModalFormLoad = ({ show, handleClose, headerText, btnText  }) => {

// Close handler that resets the form
  const handleModalClose = useCallback(() => {
    handleClose();
  }, [handleClose]);

  return (
    <>
      <Modal size="xl" show={show} onHide={handleModalClose} className="modal-load">
        <Modal.Header closeButton className="red-close">
          <Modal.Title className="mb-1 ">
            <span className="h2" dangerouslySetInnerHTML={{ __html: headerText }}></span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
               <Col lg={7}>
                  <Image loading="lazy" className="img-fluids" src={modalQkrHR} alt="Dashboead" />
                  <ClientLogoScroll logoSlider="logo-scroll logo-slider hr-logo-slider mt-3" ClientLogo={CustomerAllData} hide={false} show={false} count1={4} count2={3} count3={2} count4={2} count5={1} />
               </Col>
                <Col lg={5}>
                    <RequestFormModal variant="gradient" textCenter="text-center" btnClass="rounded-2" submitText={btnText} />
                </Col>
            </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalFormLoad;

