import { defineField, defineType } from 'sanity'

export const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        
        defineField({
            name: 'title',
            type: 'string',
            title: 'Author Name'
        }),
        defineField({
            name: 'authorImage',
            type: 'image',
            title: 'Author Image'
        }),
        defineField({
            name: 'aboutauthor',
            title: "About",
            type: 'string'
        })
    ],
})