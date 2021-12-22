import { Toast, ToastContainer } from 'react-bootstrap';

const SPToast = ({ toast, setToast, message, variant }) => {
  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast
        onClose={() => setToast(false)}
        show={toast}
        delay={3000}
        autohide
        className="d-inline-block m-1"
        bg={variant.toLowerCase()}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body className="text-white success">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
export default SPToast;
