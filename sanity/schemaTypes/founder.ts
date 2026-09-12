export default {
  name: 'founder',
  title: 'Founder Information',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'text',
    },
    {
      name: 'experience',
      title: 'Experience (Years)',
      type: 'number',
    },
    {
      name: 'philosophy',
      title: 'Philosophy',
      type: 'text',
    }
  ]
};
