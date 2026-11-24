export default {
  name: 'galleryPhoto',
  title: 'Gallery Photo / चित्र दीर्घा',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Photo Title / चित्र शीर्षक',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'उदा. राष्ट्रपति भवन में राष्ट्रीय शिक्षक पुरस्कार 2025'
    },
    {
      name: 'image',
      title: 'Image / फ़ोटो',
      type: 'image',
      options: {
        hotspot: true // Enables visual cropping
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category / श्रेणी',
      type: 'string',
      options: {
        list: [
          { title: 'Awards / राष्ट्रीय पुरस्कार', value: 'Awards' },
          { title: 'Sainik School / सैनिक स्कूल नालंदा', value: 'Sainik School' },
          { title: 'Training / शिक्षक प्रशिक्षण', value: 'Training' },
          { title: 'Curriculum / NCERT व CBSE नवाचार', value: 'Curriculum' },
          { title: 'Leadership / प्रशासनिक कार्य', value: 'Leadership' }
        ]
      },
      initialValue: 'Awards'
    },
    {
      name: 'date',
      title: 'Date / Year / वर्ष या तिथि',
      type: 'string',
      description: 'उदा. सितम्बर 2025 या 2024'
    },
    {
      name: 'description',
      title: 'Description / संक्षिप्त विवरण',
      type: 'text',
      rows: 2,
      description: 'फोटो के बारे में 1-2 लाइन'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'category'
    }
  }
};
