import { MuiButtonPrimary, MuiTextField, Spacer } from 'common/components';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { REGEX_ALPHABET } from 'config';

const validationSchema = Yup.object({
  forename: Yup.string()
    .matches(REGEX_ALPHABET, 'Only alphabets are allowed')
    .min(2, 'Must be at least 2 characters')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  surname: Yup.string()
    .matches(REGEX_ALPHABET, 'Only alphabets are allowed')
    .min(2, 'Must be at least 2 characters')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
});

export const SignUpForm = () => {
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        forename: '',
        surname: '',
      },
      validationSchema,
      onSubmit: (val) => {
        console.log(val);
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-wrapper'>
        <div className='max-width-400'>
          <MuiTextField
            id='forename'
            name='forename'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.forename}
            placeholder='Forename'
            aligncenter={1}
            fullWidth
            error={Boolean(touched.forename && errors.forename)}
            helperText={touched.forename && errors.forename}
          />
          <Spacer xs={16} horizontal />
          <MuiTextField
            id='surname'
            name='surname'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
            placeholder='Surname'
            aligncenter={1}
            fullWidth
            error={Boolean(touched.surname && errors.surname)}
            helperText={touched.surname && errors.surname}
          />
        </div>
      </div>
      <Spacer xs={16} />
      <div className='button-wrapper'>
        <div className='max-width-400'>
          <MuiButtonPrimary fullWidth type='submit'>
            Sign-up
          </MuiButtonPrimary>
        </div>
      </div>
    </form>
  );
};
