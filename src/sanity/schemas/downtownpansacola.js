export default {
  name: "downtownpansacola",
  title: "Downtown Pansacola",
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
