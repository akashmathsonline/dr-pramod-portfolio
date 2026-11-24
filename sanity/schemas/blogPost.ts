export default {
  name: 'blogPost',
  title: 'Blog Post / विचार व आलेख',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title / शीर्षक',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'e.g. राष्ट्रीय शिक्षा नीति 2020 और विज्ञान शिक्षा'
    },
    {
      name: 'slug',
      title: 'Slug / URL Identifer',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'language',
      title: 'Language / भाषा',
      type: 'string',
      options: {
        list: [
          { title: 'हिंदी (Hindi)', value: 'Hindi' },
          { title: 'English', value: 'English' }
        ],
        layout: 'radio'
      },
      initialValue: 'Hindi'
    },
    {
      name: 'category',
      title: 'Category / श्रेणी',
      type: 'string',
      options: {
        list: [
          { title: 'NEP 2020 / शिक्षा नीति', value: 'NEP 2020' },
          { title: 'Life Science / जीवन विज्ञान', value: 'Life Science' },
          { title: 'Mentorship / मार्गदर्शन', value: 'Mentorship' },
          { title: 'Counselling / परामर्श (MANODARPAN)', value: 'Counselling' },
          { title: 'Sainik School / रक्षा शिक्षा', value: 'Sainik School' },
          { title: 'General / सामान्य विचार', value: 'General' }
        ]
      },
      initialValue: 'NEP 2020'
    },
    {
      name: 'publishedAt',
      title: 'Published Date / प्रकाशन तिथि',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0]
    },
    {
      name: 'excerpt',
      title: 'Short Summary / संक्षिप्त सारांश',
      type: 'text',
      rows: 3,
      description: 'आलेख का छोटा सारांश (2-3 पंक्तियों में)'
    },
    {
      name: 'content',
      title: 'Full Article / पूरा आलेख',
      type: 'text',
      rows: 15,
      description: 'यहाँ सर अपना पूरा लेख लिख सकते हैं (हिंदी या इंग्लिश में)'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'language',
    }
  }
};
