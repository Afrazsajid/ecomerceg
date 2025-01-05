import { defineField, defineType } from 'sanity';

export const product= defineType({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    defineField({
      name: 'launchAt',
      type: 'datetime',
      title: 'Launch Date',
    }),
    defineField({
      name: 'sold',
      type: 'number',
      title: 'Units Sold',
    }),
    defineField({
      name: 'seller',
      type: 'reference',

      to:{type:"seller"}
      
    }),
    defineField({
      name: 'productname',
      type: 'string',
      title: 'Product Name',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Product ID',
      options:{
        source:"productname"
      }
    }),
    defineField({
      name: 'image',
      type: 'url',
      title: 'Product Image URL',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'unsetprice',
      type: 'string',
      title: 'Unset Price',
    }),
    defineField({
      name: 'setprice',
      type: 'string',
      title: 'Set Price',
    }),
  ],
});


