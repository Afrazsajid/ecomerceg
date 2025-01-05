import { defineQuery } from "next-sanity";

// Define the PRODUCTS query
export const PRODUCTS_Query = defineQuery(`
  *[_type=="product" && defined(slug.current) && (!defined($search) || category match $search || seller->name match $search || productname match $search || slug.current match $search)]{
    productname,
    sold,
    description,
    launchAt,
    slug,
    setprice,
    unsetprice,
    image,
    category,
    seller->{
      name,
      image
    }
  }
`);
