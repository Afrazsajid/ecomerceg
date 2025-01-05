import {  UserIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: "seller",
  title: "Seller",
  type: "document",
  icon:UserIcon,

  fields: [
    
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required."),
    }),
    defineField({
        name: "id",
        title: "ID",
        type: "slug",

        options:{
            source:"name"
        },
        validation: (Rule) => Rule.required().error("ID is required."),
      }),
      
    defineField({
      name: "image",
      title: "Image",
      type: "url",
      
      validation: (Rule) => Rule.required().error("Image is required."),
    }),
  ],
});
