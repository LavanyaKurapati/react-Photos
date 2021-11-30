import { Modal, ModalHeader, ModalBody } from "reactstrap";

const ImagePreview = ({ title, url, closePreview }) => {
  return (
    <Modal size="lg" isOpen>
      <ModalHeader toggle={closePreview}>{title}</ModalHeader>
      <ModalBody>
        <img src={url} alt={url} width="90%" height="90%" />
      </ModalBody>
    </Modal>
  );
};

export default ImagePreview;
