import { defineQuery } from "next-sanity";

export const PRODUCTS_Query= defineQuery(`*[_type=="product" && defined(slug.current)]{
  productname,sold,description,launchAt,
    slug,
    setprice,
    unsetprice,
    image,
    category,
    seller->{
      name,image
    }
}
`)