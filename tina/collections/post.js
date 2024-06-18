/**
 * @type {import('tinacms').Collection}
 */
import postType from "./postType";
import postCategory from "./postCategory";
import postResourceType from "./postResourceType";
import postTags from "./postTags";

export default {
  label: "Posts",
  name: "post",
  path: "content/post",
  fields: [
    { type: "boolean", label: "Draft", name: "draft", defaultItem: true },
    { type: "string", label: "Title", name: "title", required: true },
    { type: "datetime", label: "Date", name: "date", required: true },
    { type: "number", label: "Priority", name: "priority" },
    {
      type: "string",
      label: "Category",
      name: "category",
      options: postCategory,
      required: true,
    },
    {
      type: "string",
      label: "Type of resource",
      name: "typeOfResource",
      options: postResourceType,
      required: true,
    },
    {
      type: "string",
      label: "Type",
      name: "type",
      required: true,
      options: postType,
    },
    {
      type: "string",
      label: "Link url",
      name: "linkUrl",
      ui: {
        parse(value) {
          return value.trim();
        },
      },
    },
    {
      type: "image",
      name: "image",
      label: "image",
      ui: {
        parse(value) {
          //add leading slash to value if it doesnt exist
          return value.startsWith("/") ? value : `/${value}`;
        },
      },
    },
    {
      type: "string",
      label: "Tags",
      name: "tags",
      list: true,
      options: postTags,
    },
    {
      type: "string",
      label: "Blog Post Body",
      name: "body",
      isBody: true,
      ui: {
        component: "textarea",
      },
    },
  ],
  ui: {
    // router: ({ document }) => {
    //   return `/posts/${document._sys.filename}`;
    // },
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: true,
      // Example of using a custom slugify function
      slugify: (values) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
        return `${values?.title?.toLowerCase().replace(/ /g, "-")}`;
      },
    },
  },
};
