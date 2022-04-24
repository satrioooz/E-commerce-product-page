import ProductThumbnail1 from "../images/image-product-1-thumbnail.jpg";
import ProductOne from "../images/image-product-1.jpg";
import ProductTwo from "../images/image-product-2.jpg";
import ProductThumbnail2 from "../images/image-product-2-thumbnail.jpg";
import ProductTree from "../images/image-product-3.jpg";
import ProductThumbnail3 from "../images/image-product-3-thumbnail.jpg";
import ProductFour from "../images/image-product-4.jpg";
import ProductThumbnail4 from "../images/image-product-4-thumbnail.jpg";

export const Images = [ProductOne, ProductTwo, ProductTree, ProductFour];

export const Data = {
  title: "Fall Limited Edition Sneakers",
  price: 125,
  // RANDOM ID + 1
  // id: Math.floor(Math.random() * 100) + 1,
  pic: [
    {
      image: ProductOne,
      thumbnail: ProductThumbnail1,
    },
    {
      image: ProductTwo,
      thumbnail: ProductThumbnail2,
    },
    {
      image: ProductTree,
      thumbnail: ProductThumbnail3,
    },
    {
      image: ProductFour,
      thumbnail: ProductThumbnail4,
    },
  ],
};
