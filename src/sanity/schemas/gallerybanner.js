export default {
  name: "gallerybanner",
  title: "Gallery Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image (should be 16/9)",
      type: "image",
      required: true,
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Image is required"), // Custom validation
    },
  ],
};
