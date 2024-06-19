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
  // Setting a default will auto-populate new items with the given values
  defaultItem: {
    draft: true,
  },
  fields: [
    { type: "boolean", label: "Draft", name: "draft" },
    { type: "string", label: "Title", name: "title", required: true },
    {
      type: "string",
      label: "Summary",
      name: "summary",
      ui: {
        component: "textarea",
      },
    },
    { type: "datetime", label: "Date", name: "date", required: true },
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
      options: postType,
      required: true,
    },
    {
      type: "string",
      label: "Link url (for Type: Link)",
      name: "linkUrl",
      ui: {
        parse(value) {
          return value.trim();
        },
      },
    },
    { type: "number", label: "Priority", name: "priority" },
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
    filename: {
      readonly: true,
      slugify: (values) => {
        return `${values.type === "link" ? "link-" : ""}${values?.title
          ?.toLowerCase()
          .replace(/ /g, "-")}`;
      },
    },
    router: ({ document }) => {
      if (document._sys.filename.split("-")[0] !== "link") {
        return `/post/${document._sys.filename}`;
      }
      return undefined;
    },
  },
};
