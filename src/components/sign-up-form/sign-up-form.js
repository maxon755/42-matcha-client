import React from 'react';
import InputForm, { InputField } from '~/components/input-form';
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginTop: 10,
    width: '100%',
  },

  button: {
    marginTop: 20,
    width: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  }
}));

const SignUpForm = () => {

  const classes = useStyles();

  const handleSubmit = (formState) => {
    console.log('Sign up form is submitted with values');
    console.log(formState);
  };

  return (
    <InputForm className={classes.form} id='sign-up-form'
               onSubmit={handleSubmit}>
      <InputField className={classes.textField} type='text' name='username'
                  rules={[
                    'required',
                    {
                      length: {
                        max: 12,
                        min: 4,
                      }
                    },
                  ]}
      />
      <InputField className={classes.textField} type='email' name='email'
                  rules={[
                    'required',
                    'email',
                  ]}/>
      <InputField className={classes.textField} type='text' name='firstName'
                  rules={[
                    {
                      length: {
                        max: 12,
                        min: 4,
                      }
                    },
                  ]}/>
      <InputField className={classes.textField} type='text' name='lastName'
                  rules={[
                    {length: {max: 12}},
                  ]}/>
      <InputField className={classes.textField} type='password' name='password'
                  rules={[
                    'required',
                    'password',
                    {
                      length: {min: 8}
                    }
                  ]}/>
      <InputField className={classes.textField} type='password'
                  name='confirm-password' rules={[
        'required',
        {
          equal: 'password'
        }
      ]}/>
      <Button className={classes.button} type="submit" variant="contained"
              color="primary">
        Submit
      </Button>
    </InputForm>
  );
};

export default SignUpForm;