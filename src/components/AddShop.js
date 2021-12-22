import { Button, Modal } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addNewShop } from '../api';
import { useState } from 'react';
import SPToast from './SPToast';

const AddShop = ({ addShopModal, handleAddShopModal }) => {
  const dispatch = useDispatch();
  const [toast, setToast] = useState(false);

  const initialValues = {
    name: '',
    area: '',
    category: '',
    date: '',
    endDate: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Shop name is required'),
    area: Yup.string().required('Shop area is required'),
    category: Yup.string().required('Shop category is required'),
    startDate: Yup.date().required('Shop start date is required'),
    endDate: Yup.date()
      .min(
        Yup.ref('startDate'),
        'Shop Closing date should not be before Opening Date'
      )
      .required('Shop end date is required'),
  });

  const shopAreas = [
    {
      value: 'Thane',
      label: 'Thane',
    },
    {
      value: 'Pune',
      label: 'Pune',
    },
    {
      value: 'Mumbai Suburban',
      label: 'Mumbai Suburban',
    },
    {
      value: 'Nashik',
      label: 'Nashik',
    },
    {
      value: 'Nagpur',
      label: 'Nagpur',
    },
    {
      value: 'Ahmednagar',
      label: 'Ahmednagar',
    },
    {
      value: 'Solapur',
      label: 'Solapur',
    },
  ];

  const shopCategories = [
    {
      value: 'Grocery',
      label: 'Grocery',
    },
    {
      value: 'Butcher',
      label: 'Butcher',
    },
    {
      value: 'Baker',
      label: 'Baker',
    },
    {
      value: 'Chemist',
      label: 'Chemist',
    },
    {
      value: 'Stationery shop',
      label: 'Stationery shop',
    },
  ];

  const onSubmit = (fields) => {
    fields['id'] = Date.now();
    dispatch(addNewShop(fields));
    handleAddShopModal();
    setToast((preState) => !preState);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(fields) => onSubmit(fields)}
        render={({ errors, touched, isValid, resetForm, handleSubmit }) => (
          <Modal
            show={addShopModal}
            onHide={handleAddShopModal}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Shop</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Shop Name</label>
                  <Field
                    name="name"
                    type="text"
                    className={
                      'form-control' +
                      (errors.name && touched.name ? ' is-invalid' : '')
                    }
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="area">Shop Area</label>
                  <Field
                    as="select"
                    name="area"
                    className={
                      'form-control' +
                      (errors.area && touched.area ? ' is-invalid' : '')
                    }
                  >
                    <option value="" label="Select a Shop Area" />
                    {shopAreas.map((shopArea) => (
                      <option
                        key={shopArea.value}
                        value={shopArea.value}
                        label={shopArea.label}
                      />
                    ))}
                  </Field>

                  <ErrorMessage
                    name="area"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Shop Category</label>
                  <Field
                    as="select"
                    name="category"
                    className={
                      'form-control' +
                      (errors.category && touched.category ? ' is-invalid' : '')
                    }
                  >
                    <option value="" label="Select a Shop category" />
                    {shopCategories.map((shopCategory) => (
                      <option
                        key={shopCategory.value}
                        value={shopCategory.value}
                        label={shopCategory.label}
                      />
                    ))}
                  </Field>
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="startDate">Shop Start Date</label>
                  <Field
                    name="startDate"
                    type="date"
                    className={
                      'form-control' +
                      (errors.startDate && touched.startDate
                        ? ' is-invalid'
                        : '')
                    }
                  />
                  <ErrorMessage
                    name="startDate"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endDate">Shop End Date</label>
                  <Field
                    name="endDate"
                    type="date"
                    className={
                      'form-control' +
                      (errors.endDate && touched.endDate ? ' is-invalid' : '')
                    }
                  />
                  <ErrorMessage
                    name="endDate"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  handleAddShopModal();
                  resetForm();
                }}
              >
                Close
              </Button>
              <Button
                type="button"
                variant="primary"
                disabled={!isValid}
                onClick={handleSubmit}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      />
      <SPToast
        toast={toast}
        setToast={setToast}
        message="Shop added successfully."
        variant="success"
      />
    </>
  );
};
export default AddShop;
