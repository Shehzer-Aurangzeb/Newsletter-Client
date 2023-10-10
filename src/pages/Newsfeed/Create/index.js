import React from "react";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { PostSchema } from "../../../schema";
import { PATHS, POSTFORMINITIALVALUES } from "../../../constants";
import { eyeIcon } from "../../../constants/assets";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import DynamicQAndAFields from "./DynamicFieldsInput/QAndA";
import DynamicPostFields from "./DynamicFieldsInput/Posts";
import DynamicFiguresFields from "./DynamicFieldsInput/Figures";
import FormActions from "./FormActions";
import { useApp } from "../../../context/AppProvider";
import { useLoading } from "../../../state/loading/hooks";
import { useNewsfeed } from "../../../state/newsfeed/hooks";

function CreateNewsfeed() {
  // const [files, setFiles] = useState({});
  const { createNewsfeed, editNewsfeed } = useApp();
  const { unpreviewedNewsfeed } = useNewsfeed();
  const { isLoading } = useLoading();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isEditPage = () => {
    return pathname.includes("edit");
  };
  const { handleSubmit, handleChange, values, touched, errors, setFieldValue } =
    useFormik({
      initialValues: isEditPage() ? unpreviewedNewsfeed : POSTFORMINITIALVALUES,
      validationSchema: PostSchema,

      onSubmit: async (results, onSubmit) => {
        // console.log("results :>> ", results);
        if (isEditPage()) {
          const response = await editNewsfeed(results);
          if (response.id) navigate(`${PATHS.NEWSFEED}/${response.id}/preview`);
        }
        const response = await createNewsfeed(results);
        if (response.id) navigate(`${PATHS.NEWSFEED}/${response.id}/preview`);
        onSubmit.setSubmitting(false);
      },
    });

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      // setFiles((prev) => {
      //   return {
      //     ...prev,
      //     [name]: file,
      //   };
      // });
      const reader = new FileReader();
      reader.onload = (e) => {
        setFieldValue(name, e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleAddRemoveField = (name, action, field) => {
    if (action === "remove" && values[name].length === 1) return;
    if (action === "add") {
      const updatedState = values[name].toSpliced(
        values[name].length,
        0,
        field
      );
      setFieldValue(name, updatedState);
    }
    if (action === "remove") {
      const updatedState = values[name].toSpliced(values[name].length - 1, 1);
      setFieldValue(name, updatedState);
    }
  };

  return (
    <div className="w-full h-full p-8 md:p-[37px]">
      <h1 className="text-center mb-10 font-nunito font-bold text-3xl">
        Create Newsletter
      </h1>
      <form
        className="flex flex-row gap-y-5 flex-wrap gap-x-5 max-w-[820px] mx-auto"
        noValidate
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-nunito font-bold w-full text-link">
          Section One
        </h1>
        <Input
          label="Title"
          placeholder="Title"
          name="sectionOneTitle"
          error={touched.sectionOneTitle && errors.sectionOneTitle}
          onChange={handleChange}
          value={values.sectionOneTitle}
          className="w-full max-w-[400px]"
        />
        <Input
          label="Date"
          placeholder="Date"
          name="date"
          type="date"
          error={touched.date && errors.date}
          onChange={handleChange}
          value={values.date}
          className="w-full max-w-[400px]"
        />
        <Input
          label="Volume"
          placeholder="Volume"
          name="volume"
          type="number"
          error={touched.volume && errors.volume}
          onChange={handleChange}
          value={values.volume}
          className="w-full max-w-[400px]"
        />

        <Input
          label="Section Image"
          name="sectionOneImage"
          type="file"
          error={touched.sectionOneImage && errors.sectionOneImage}
          onChange={handleFileChange}
          file={values.sectionOneImage}
          className="w-full max-w-[400px]"
        />
        <h1 className="text-2xl font-nunito font-bold w-full text-link ">
          Section Two
        </h1>
        <Input
          label="Title"
          placeholder="Title"
          name="sectionTwoTitle"
          error={touched.sectionTwoTitle && errors.sectionTwoTitle}
          onChange={handleChange}
          value={values.sectionTwoTitle}
          className="w-full max-w-[400px]"
        />
        <Input
          label="Section Image"
          type="file"
          name="sectionTwoImage"
          error={touched.sectionTwoImage && errors.sectionTwoImage}
          onChange={handleFileChange}
          value={values.sectionTwoImage}
          file={values.sectionTwoImage}
          className="w-full max-w-[400px]"
        />
        {values.sectionTwoQAndA.map((value, index) => (
          <DynamicQAndAFields
            key={index}
            onChange={handleChange}
            name={`sectionTwoQAndA[${index}]`}
            value={value}
            error={
              errors.sectionTwoQAndA &&
              touched.sectionTwoQAndA &&
              touched.sectionTwoQAndA[index] &&
              errors.sectionTwoQAndA[index] &&
              touched.sectionTwoQAndA[index].answer &&
              errors.sectionTwoQAndA[index].answer
            }
          />
        ))}
        <FormActions
          handleAddRemoveField={handleAddRemoveField}
          fieldName={"sectionTwoQAndA"}
          field={{
            question: "",
            answer: "",
          }}
        />

        <h1 className="text-2xl font-nunito font-bold w-full text-link ">
          Section Three
        </h1>
        <Input
          label="Title"
          placeholder="Title"
          name="sectionThreeTitle"
          error={touched.sectionThreeTitle && errors.sectionThreeTitle}
          onChange={handleChange}
          value={values.sectionThreeTitle}
          className="w-full max-w-[400px]"
        />
        <Input
          label="Section Description"
          placeholder={"Description"}
          textArea={true}
          name="sectionThreeDescription"
          error={
            touched.sectionThreeDescription && errors.sectionThreeDescription
          }
          onChange={handleChange}
          value={values.sectionThreeDescription}
          className="w-full"
        />

        {values.sectionThreePosts.map((value, index) => (
          <DynamicPostFields
            key={index}
            onChange={handleChange}
            name={`sectionThreePosts[${index}]`}
            value={value}
            handleFileChange={handleFileChange}
            error={
              errors.sectionThreePosts &&
              touched.sectionThreePosts &&
              touched.sectionThreePosts[index] &&
              errors.sectionThreePosts[index]
                ? {
                    title:
                      touched.sectionThreePosts[index].title &&
                      errors.sectionThreePosts[index].title,
                    description:
                      touched.sectionThreePosts[index].description &&
                      errors.sectionThreePosts[index].description,
                  }
                : {
                    title: "",
                    description: "",
                  }
            }
          />
        ))}
        <FormActions
          handleAddRemoveField={handleAddRemoveField}
          fieldName={"sectionThreePosts"}
          field={{
            title: "",
            image: "",
            description: "",
          }}
        />
        <h1 className="text-2xl font-nunito font-bold w-full text-link ">
          Section Four
        </h1>
        <Input
          label="Title"
          placeholder="Title"
          name="sectionFourTitle"
          error={touched.sectionFourTitle && errors.sectionFourTitle}
          onChange={handleChange}
          value={values.sectionFourTitle}
          className="w-full max-w-[400px]"
        />
        <Input
          label="Section Description"
          placeholder={"Description"}
          textArea={true}
          name="sectionFourDescription"
          error={
            touched.sectionFourDescription && errors.sectionFourDescription
          }
          onChange={handleChange}
          value={values.sectionFourDescription}
          className="w-full"
        />

        {values.sectionFourPosts.map((value, index) => (
          <DynamicPostFields
            key={index}
            onChange={handleChange}
            name={`sectionFourPosts[${index}]`}
            value={value}
            handleFileChange={handleFileChange}
            readMoreField={true}
            error={
              errors.sectionFourPosts &&
              touched.sectionFourPosts &&
              touched.sectionFourPosts[index] &&
              errors.sectionFourPosts[index]
                ? {
                    title:
                      touched.sectionFourPosts[index].title &&
                      errors.sectionFourPosts[index].title,
                    description:
                      touched.sectionFourPosts[index].description &&
                      errors.sectionFourPosts[index].description,
                    readMoreLink:
                      touched.sectionFourPosts[index].readMoreLink &&
                      errors.sectionFourPosts[index].readMoreLink,
                  }
                : {
                    title: "",
                    description: "",
                    readMoreLink: "",
                  }
            }
          />
        ))}
        <FormActions
          handleAddRemoveField={handleAddRemoveField}
          fieldName={"sectionFourPosts"}
          field={{
            title: "",
            image: "",
            description: "",
            readMoreLink: "",
          }}
        />
        <h1 className="text-2xl font-nunito font-bold w-full text-link ">
          Section Five
        </h1>
        <Input
          label="Title"
          placeholder="Title"
          name="sectionFiveTitle"
          error={touched.sectionFiveTitle && errors.sectionFiveTitle}
          onChange={handleChange}
          value={values.sectionFiveTitle}
          className="w-full max-w-[400px]"
        />
        <Input
          label="Section Image"
          type="file"
          name="sectionFiveImage"
          error={touched.sectionFiveImage && errors.sectionFiveImage}
          onChange={handleFileChange}
          value={values.sectionFiveImage}
          file={values.sectionFiveImage}
          className="w-full max-w-[400px]"
        />
        {values.sectionFiveQAndA.map((value, index) => (
          <DynamicQAndAFields
            key={index}
            onChange={handleChange}
            name={`sectionFiveQAndA[${index}]`}
            value={value}
            error={
              errors.sectionFiveQAndA &&
              touched.sectionFiveQAndA &&
              touched.sectionFiveQAndA[index] &&
              errors.sectionFiveQAndA[index] &&
              touched.sectionFiveQAndA[index].answer &&
              errors.sectionFiveQAndA[index].answer
            }
          />
        ))}
        <FormActions
          handleAddRemoveField={handleAddRemoveField}
          fieldName={"sectionFiveQAndA"}
          field={{
            question: "",
            answer: "",
          }}
        />
        <h1 className="text-2xl font-nunito font-bold w-full text-link ">
          Section Six
        </h1>

        <Input
          label="Section Image"
          type="file"
          name="sectionSixImage"
          error={touched.sectionSixImage && errors.sectionSixImage}
          onChange={handleFileChange}
          value={values.sectionSixImage}
          file={values.sectionSixImage}
          className="w-full max-w-[400px]"
        />
        {values.sectionSixFigures.map((value, index) => (
          <DynamicFiguresFields
            key={index}
            onChange={handleChange}
            name={`sectionSixFigures[${index}]`}
            value={value}
            error={
              errors.sectionSixFigures &&
              touched.sectionSixFigures &&
              touched.sectionSixFigures[index] &&
              errors.sectionSixFigures[index] &&
              touched.sectionSixFigures[index].figure &&
              errors.sectionSixFigures[index].figure
            }
          />
        ))}
        <FormActions
          handleAddRemoveField={handleAddRemoveField}
          fieldName={"sectionSixFigures"}
          field={{
            field: "",
            figure: "",
          }}
        />

        <h1 className="text-2xl font-nunito font-bold w-full text-link ">
          Section Seven
        </h1>
        <Input
          label="Title"
          placeholder="Title"
          name="sectionSevenTitle"
          error={touched.sectionSevenTitle && errors.sectionSevenTitle}
          onChange={handleChange}
          value={values.sectionSevenTitle}
          className="w-full max-w-[400px]"
        />
        <Input
          label="Section Description"
          placeholder={"Description"}
          textArea={true}
          name="sectionSevenDescription"
          error={
            touched.sectionSevenDescription && errors.sectionSevenDescription
          }
          onChange={handleChange}
          value={values.sectionSevenDescription}
          className="w-full"
        />

        {values.sectionSevenPosts.map((value, index) => (
          <DynamicPostFields
            key={index}
            onChange={handleChange}
            name={`sectionSevenPosts[${index}]`}
            value={value}
            handleFileChange={handleFileChange}
            error={
              errors.sectionSevenPosts &&
              touched.sectionSevenPosts &&
              touched.sectionSevenPosts[index] &&
              errors.sectionSevenPosts[index]
                ? {
                    title:
                      touched.sectionSevenPosts[index].title &&
                      errors.sectionSevenPosts[index].title,
                    description:
                      touched.sectionSevenPosts[index].description &&
                      errors.sectionSevenPosts[index].description,
                  }
                : {
                    title: "",
                    description: "",
                  }
            }
          />
        ))}
        <FormActions
          handleAddRemoveField={handleAddRemoveField}
          fieldName={"sectionSevenPosts"}
          field={{
            title: "",
            image: "",
            description: "",
          }}
        />
        <Button
          type="submit"
          className="w-full"
          title="Preview"
          isLoading={isLoading}
          icon={eyeIcon}
        />
      </form>
    </div>
  );
}

export default CreateNewsfeed;
