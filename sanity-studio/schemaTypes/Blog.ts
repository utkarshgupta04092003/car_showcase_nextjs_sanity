import { defineField, defineType } from 'sanity'

export const blog = defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        defineField({
            title: 'Blog Header Image',
            name: 'blogimg',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                },
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
                }
            ]
        }),
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative text',
                            description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ]
        }),

        defineField({
            name: 'createdat',
            type: 'datetime',
            title: 'Created At'
        }),
        defineField({
            name: 'metadata',
            type: 'string',
            title: 'Meta Description'
        }), 
        defineField({
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [{ type: 'author'}]
        }),
    ],
})