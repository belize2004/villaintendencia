// schemas/gallery.js

export default {
  name: "gallery", // Name of the schema
  title: "Gallery", // Title in Sanity Studio
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image (should be 16/9)",
      type: "image",
      required: true,
      options: {
        hotspot: true, // Allow for cropping the image
      },
      validation: (Rule) => Rule.required().error("Image is required"), // Custom validation
    },
    {
      name: "imageSquare",
      title: "Image For Galler(should be square)",
      type: "image",
      required: true,
      options: {
        hotspot: true, // Allow for cropping the image
      },
      validation: (Rule) => Rule.required().error("Image is required"), // Custom validation
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
      validation: (Rule) => Rule.required().error("Image is required"), // Custom validation

      // The title of the gallery item
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required().error("Image is required"), // Custom validation

      required: true, // Address of the property
    },
    {
      name: "beds",
      title: "Beds",
      type: "string",
      validation: (Rule) => Rule.required().error("Image is required"), // Custom validation

      required: true, // Beds information
    },
    {
      name: "baths",
      title: "Baths",
      type: "string",
      validation: (Rule) => Rule.required().error("Image is required"), // Custom validation

      required: true, // Baths information
    },
    {
      name: "area",
      title: "Area",
      type: "string",
      required: true,
      validation: (Rule) => Rule.required().error("Image is required"), // Custom validation
      // Area in square feet or meters
    },
  ],
};
