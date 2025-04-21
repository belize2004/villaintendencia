export default {
  name: "gallery-ordered",
  title: "Gallery (Ordered)",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "object",
          name: "galleryItem",
          title: "Gallery Image",
          fields: [
            {
              name: "image",
              title: "Landscape Image (16:9)",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) =>
                Rule.required().error("Landscape image is required"),
            },
            {
              name: "imageSquare",
              title: "Square Image (1:1)",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) =>
                Rule.required().error("Square image is required"),
            },
          ],
          preview: {
            select: {
              landscape: "image",
              square: "imageSquare",
            },
            prepare({ landscape, square }) {
              return {
                title: "Gallery Image Set",
                media: landscape || square,
              };
            },
          },
        },
      ],
      options: {
        sortable: true,
      },
    },
  ],
};
