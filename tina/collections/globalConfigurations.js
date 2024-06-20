/**
 * @type {import('tinacms').Collection}
 */

export default {
  label: "Global configurations",
  name: "globalConfigurations",
  path: "content/globals",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    global: true,
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      label: "Languages",
      name: "languages",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label };
        },
      },
      fields: [
        { type: "string", label: "Code", name: "code", required: true },
        { type: "string", label: "Label", name: "label", required: true },
      ],
    },
  ],
};
