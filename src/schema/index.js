import { array, number, object, string } from "yup";

export const PostSchema = object({
  sectionOneTitle: string().required("Title is required"),
  date: string().required("Date is required"),
  volume: number()
    .min(0, "This field cannot be negative")
    .required("Volume is required"),
  sectionOneImage: string().required("Backgroud Image is required"),
  sectionTwoTitle: string().required("Title is required"),
  sectionTwoImage: string().required("Image is required"),
  sectionTwoQAndA: array().of(
    object().shape({
      question: string(),
      answer: string().when(["question"], {
        is: (question) => question && question.length > 0,
        then: (schema) => schema.required("Answer is required"),
      }),
    })
  ),
  sectionThreeTitle: string().required("Title is required"),
  sectionThreeDescription: string().required("Description is required"),
  sectionThreePosts: array().of(
    object().shape({
      image: string(),
      title: string().when(["image"], {
        is: (image) => image && image.length > 0,
        then: (schema) => schema.required("Title is required"),
      }),
      description: string().when(["title"], {
        is: (title) => title && title.length > 0,
        then: (schema) => schema.required("Description is required"),
      }),
    })
  ),
  sectionFourTitle: string().required("Title is required"),
  sectionFourDescription: string().required("Description is required"),
  sectionFourPosts: array().of(
    object().shape({
      image: string(),
      title: string().when(["image"], {
        is: (image) => image && image.length > 0,
        then: (schema) => schema.required("Title is required"),
      }),
      description: string().when(["title"], {
        is: (title) => title && title.length > 0,
        then: (schema) => schema.required("Description is required"),
      }),
      readMoreLink: string().when(["description"], {
        is: (description) => description && description.length > 0,
        then: (schema) => schema.required("Read more link is required"),
      }),
    })
  ),
  sectionFiveTitle: string().required("Title is required"),
  sectionFiveImage: string().required("Image is required"),
  sectionFiveQAndA: array().of(
    object().shape({
      question: string(),
      answer: string().when(["question"], {
        is: (question) => question && question.length > 0,
        then: (schema) => schema.required("Answer is required"),
      }),
    })
  ),
  sectionSixImage: string().required("Image is required"),
  sectionSixFigures: array().of(
    object().shape({
      field: string(),
      figure: number()
        .min(0, "This field cannot be negative")
        .when(["field"], {
          is: (field) => field && field.length > 0,
          then: (schema) => schema.required("Figure is required"),
        }),
    })
  ),
  sectionSevenTitle: string().required("Title is required"),
  sectionSevenDescription: string().required("Description is required"),
  sectionSevenPosts: array().of(
    object().shape({
      image: string(),
      title: string().when(["image"], {
        is: (image) => image && image.length > 0,
        then: (schema) => schema.required("Title is required"),
      }),
      description: string().when(["title"], {
        is: (title) => title && title.length > 0,
        then: (schema) => schema.required("Description is required"),
      }),
    })
  ),
});
