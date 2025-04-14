export default {
  name: "video",
  type: "document",
  title: "Video",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "videoFile",
      type: "file",
      title: "Video File",
      options: {
        accept: "video/*",
      },
    },
  ],
};
