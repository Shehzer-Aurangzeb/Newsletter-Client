import React from "react";
import { useFormik } from "formik";
import { useLoading } from "../../../../state/loading/hooks";
import { useAuth } from "../../../../hooks/useAuth";
import { LOGINFORMINITIALVALUES } from "../../../../constants";
import { LogInSchema } from "../../../../schema";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

function Form() {
  const { isLoading } = useLoading();
  const { loginUser } = useAuth();
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: LOGINFORMINITIALVALUES,
    validationSchema: LogInSchema,
    onSubmit: async (results, onSubmit) => {
      await loginUser(results);
      onSubmit.setSubmitting(false);
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full justify-center"
    >
      <Input
        label="Email"
        placeholder="Email"
        name="email"
        error={touched.email && errors.email}
        onChange={handleChange}
        value={values.email}
        className="w-full"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Password"
        name="password"
        error={touched.password && errors.password}
        onChange={handleChange}
        value={values.password}
        className="w-full"
      />
      <Button
        type="submit"
        className="w-full mt-5"
        title="Sign In"
        isLoading={isLoading}
      />
    </form>
  );
}

export default Form;
