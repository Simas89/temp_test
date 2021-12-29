import { MuiButtonPrimary, MuiTextField, Spacer } from 'common/components';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { REGEX_ALPHABET_AND_NUMBERS } from 'config';
import { Box } from '@mui/material';
import { Poppins } from 'common/typography';

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(
      REGEX_ALPHABET_AND_NUMBERS,
      'Only alphabets and numbers are allowed'
    )
    .min(2, 'Must be at least 2 characters')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .required('Required'),
});

export const SignInForm = () => {
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema,
      onSubmit: (val) => {
        console.log(val);
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <Box display='flex' flexDirection='column' maxWidth={400} margin='auto'>
        <MuiTextField
          id='username'
          name='username'
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          placeholder='Username'
          aligncenter={1}
          fullWidth
          error={Boolean(touched.username && errors.username)}
          helperText={touched.username && errors.username}
        />
        <Spacer xs={16} horizontal />
        <MuiTextField
          id='password'
          name='password'
          type='password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          placeholder='Password'
          aligncenter={1}
          fullWidth
          error={Boolean(touched.password && errors.password)}
          helperText={touched.password && errors.password}
        />
        <Spacer xs={21} />
        <Poppins size={12} align='center'>
          Oops! I forgot my password
        </Poppins>
      </Box>

      <Spacer xs={33} />
      <div className='button-wrapper'>
        <div className='max-width-400'>
          <MuiButtonPrimary fullWidth type='submit'>
            Sign-in
          </MuiButtonPrimary>
        </div>
      </div>
    </form>
  );
};
