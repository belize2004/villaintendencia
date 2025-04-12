import { client } from "./client";
export const getSimpleText = async () => {
  return client.fetch(
    `*[_type == "simpleText"][0]{
      text
    }`,
    {},
    {
      next: { tags: ["simpleText"] }, // <- this is impsortant for tag-based revalidation
    }
  );
};
export const getHomeBanner = async () => {
  return client.fetch(
    `
    *[_type == "homebanner"][0]{
      image {
        asset -> {
          url
        }
      }
    }
    `,
    {},
    { next: { tags: ["homebanner"] } } // Added revalidation tag
  );
};
export const getPropertyDescriptionBanner = async () => {
  return client.fetch(
    `
    *[_type == "propertydescription"][0]{
      image {
        asset -> {
          url
        }
      }
    }
    `,
    {},
    { next: { tags: ["propertydescription"] } } // Added revalidation tag
  );
};

export const getGalleryBanner = async () => {
  return client.fetch(
    `
    *[_type == "gallerybanner"][0]{
      image {
        asset -> {
          url
        }
      }
    }
    `,
    {},
    { next: { tags: ["gallerybanner"] } } // Added revalidation tag
  );
};

export const getDowntownPansacola = async () => {
  return client.fetch(
    `
    *[_type == "downtownpansacola"][0]{
      image {
        asset -> {
          url
        }
      }
    }
    `,
    {},
    { next: { tags: ["downtownpansacola"] } } // Added revalidation tag
  );
};

export const getGalleryItems = async () => {
  const query = `*[_type == "gallery"] | order(_createdAt desc){
  _id,
  title,
  address,
  beds,
  baths,
  area,
  "image": image
}`;

  // This one already has a tag
  const data = await client.fetch(query, {}, { next: { tags: ["gallery"] } });
  return data;
};

export const getGalleryImagesItems = async () => {
  return client.fetch(
    `
    *[_type == "gallery"] | order(_createdAt desc){
      image {
        asset -> {
          url
        }
      }
    }
    `,
    {},
    { next: { tags: ["gallery"] } } // Added revalidation tag
  );
};

export const getGalleryImagesSquare = async () => {
  return client.fetch(
    `
    *[_type == "gallery"] | order(_createdAt desc){
      imageSquare {
        asset -> {
          url
        }
      }
    }
    `,
    {},
    { next: { tags: ["gallery"] } } // Added revalidation tag
  );
};
