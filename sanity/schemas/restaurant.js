import {defineField, defineType} from 'sanity'

export const restaurant = defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Restaurant',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restaurant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restaurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Restaurant Address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 Stars)',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
