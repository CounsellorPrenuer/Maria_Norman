export default {
  name: 'mentoriaPackage',
  title: 'Mentoria Packages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Package Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Package Image',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
    {
      name: 'sessions',
      title: 'Number of Sessions',
      type: 'number',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'featured',
      title: 'Featured Package',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    }
  ],
  orderings: [
    {
      title: 'Custom Order',
      name: 'customOrder',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
};
