import { client } from "./client";

export const getHomeBanner = async () => {
  return client.fetch(`
    *[_type == "homebanner"][0]{
      image {
        asset -> {
          url
        }
      }
    }
  `);
};
export const getGalleryBanner = async () => {
  return client.fetch(`
      *[_type == "gallerybanner"][0]{
        image {
          asset -> {
            url
          }
        }
      }
    `);
};
export const getDowntownPansacola = async () => {
  return client.fetch(`
        *[_type == "downtownpansacola"][0]{
          image {
            asset -> {
              url
            }
          }
        }
      `);
};
export const getGalleryItems = async () => {
  return client.fetch(`
    *[_type == "gallery"]{
      _id,
      title,
      address,
      beds,
      baths,
      area,
      "image": image
    }
  `);
};
export const getGalleryImagesItems = async () => {
  return client.fetch(`
      *[_type == "gallery"]{
        image {
          asset -> {
            url
          }
        }
      }
    `);
};
export const getGalleryImagesSquare = async () => {
  return client.fetch(`
        *[_type == "gallery"]{
          imageSquare {
            asset -> {
              url
            }
          }
        }
      `);
};
