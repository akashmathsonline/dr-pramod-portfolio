import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'uhka7oz2',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);
export const urlFor = (source: any) => {
  if (!source) {
    return {
      width: () => ({ url: () => '/images/placeholder.jpg' }),
      url: () => '/images/placeholder.jpg'
    };
  }
  return builder.image(source);
};

// Fallback initial photos so website is never blank
export const fallbackPhotos = [
  {
    _id: 'photo-1',
    title: 'National Teachers\' Award 2025 Felicitation',
    category: 'Awards',
    date: 'September 2025',
    description: 'Conferred by Hon\'ble President of India Smt. Droupadi Murmu at Vigyan Bhawan, New Delhi.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvoFHRj29vO2fQq6KMHHDpeLlL-InpJu7i2iMAkx-VUSw9vepjpeK3FxVrVtGIORUrFB3dQ3O03goEgj5f2QkugOtA0XXT0dbxohssJsvECRdBbidEVOnX0FTIKYNwAm_Jvr-Ybiv8Ah0mZ8N63-ZvhuOMrHeFRHVAFvzttofqYOqomlVXcEHDysy0VQE/s1600/WhatsApp%20Image%202026-09-02%20at%2015.41.22.jpeg'
  },
  {
    _id: 'photo-2',
    title: 'Mentoring Cadets at Sainik School Nalanda',
    category: 'Sainik School',
    date: '2024',
    description: 'Guiding future NDA officers in biological sciences and discipline.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_oqmkBetzIqUnPhicZdo5ldPdWdUOqZMM1Eb-ZiZ6e_baa7w8AVF1GYypR00Izr9CALZiwHTgpc-7sTNZze4IZBkuHtfCTuGjGG5MK_945emy0DqYEXA7VjwKTorHuxKB8nvZT5f5dhmgKEjYfyuRL_g-0RKscv-bWzI-I3z5OOrnRY8TSwcyR3zBWcQ/s1600/WhatsApp%20Image%202026-09-02%20at%2015.41.25.jpeg'
  },
  {
    _id: 'photo-3',
    title: 'National Educator Capacity Building Workshop',
    category: 'Training',
    date: '2024',
    description: 'Master training session on NEP 2020 pedagogy for principals and senior faculty.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0qEStekO_-TfmtSBPaB8VpBLvT7HK9XvV2g6nrjmC6MqlQeDtvRB5lKMdUtyxSu3MdBHX1IM1sythF9NhAyv1fQQMZvi7m5H63fBbwgsmE7SSIyhi-FIKBm-FTapOsJPSYKXNUsv4E0ljUvw7UHe62WZB_ml7dAvuEZ_vNpLVu6MrmtzV6quYWpgu23w/s1600/WhatsApp%20Image%202026-09-02%20at%2015.41.32.jpeg'
  },
  {
    _id: 'photo-4',
    title: 'NCERT & CBSE Curriculum Development Committee',
    category: 'Curriculum',
    date: '2023',
    description: 'Framing laboratory manuals and innovative teaching techniques for secondary schools.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoTLmnC0OxGmfC6oNebwjjFgQ3Gr7f4Eh2_GIDXjUZIRlDSeHMrhR1-jNsSzVSnew6dtoxeALUvndyV-P1-LaFXxnl80gtQOTrzPUA7Ptw0Xfrho7xtpN5tGassbKjjGAVRNbpoBonzWufzWyuZax7CejvykQ6VcI6TzRmDYNIk85JUU6cRw1TTyuQ-jo/s1600/WhatsApp%20Image%202026-09-02%20at%2015.41.30%20%281%29.jpeg'
  },
  {
    _id: 'photo-5',
    title: 'Senior Master Academic Administration',
    category: 'Leadership',
    date: '2024',
    description: 'Leading administrative planning and student welfare at Sainik School Nalanda.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfI3d5Cj1z042ZSQiFS8hr_jSVIZrya6lIsxIK1nj1Tu_KKBs0mQKbaQAipQrPwGBILX4qQwGZh-MdEpXrye3Q8fmvrbPZgCt4ACOS_LAcPHMRxlDhcp3pXAE76V7KelD0TTdn6TrG8_dZo_DiDS8NdIWk11n5nVSPbNL8P68IttknGBTRJYF-XApwdXU/s1600/WhatsApp%20Image%202026-09-02%20at%2015.41.30.jpeg'
  }
];

// Fallback initial articles
export const fallbackArticles = [
  {
    _id: 'post-1',
    title: 'राष्ट्रीय शिक्षा नीति 2020 और वैज्ञानिक दृष्टिकोण का विकास',
    language: 'Hindi',
    category: 'NEP 2020',
    excerpt: 'कक्षा कक्ष में केवल पाठ्यपुस्तक तक सीमित न रहकर विद्यार्थियों में जिज्ञासा और वैज्ञानिक अनुसंधान की प्रवृत्ति जगाना ही नई शिक्षा नीति का मूल उद्देश्य है।',
    content: `शिक्षा केवल सूचनाओं का संग्रह नहीं है, बल्कि चरित्र निर्माण और बौद्धिक क्षमता का विस्तार है। राष्ट्रीय शिक्षा नीति (NEP 2020) भारत की शिक्षा व्यवस्था में एक क्रांतिकारी परिवर्तन लेकर आई है। 28 वर्षों के अध्यापन अनुभव से मैंने यह अनुभव किया है कि जब विद्यार्थी स्वयं प्रयोग करके सीखते हैं, तो उनका आत्मविश्वास बहुगुणित हो जाता है।

सैनिक स्कूल नालंदा में हमने जीवन विज्ञान प्रयोगशाला में ऐसे नवाचार किए हैं जिससे छात्र प्रकृति के निकट रहकर जैविक पारिस्थितिकी को समझ सकें। यह दृष्टिकोण उन्हें न केवल बोर्ड परीक्षाओं में 100% सफलता दिलाता है, बल्कि NDA जैसी कठिन परीक्षाओं में भी तार्किक सोच विकसित करता है।`,
    publishedAt: '2025-09-10',
    readTime: '4 min read / ४ मिनट'
  },
  {
    _id: 'post-2',
    title: 'Nurturing Future Leaders: The Sainik School Paradigm',
    language: 'English',
    category: 'Mentorship',
    excerpt: 'How military discipline combined with compassionate academic mentorship shapes young cadets into visionary leaders for the Armed Forces and society.',
    content: `Over nearly three decades of mentoring young cadets at Sainik School Nalanda, one enduring truth has stood out: potential is universal, but mentorship makes it exceptional. 

Guiding 168+ cadets into the National Defence Academy (NDA) requires not just rigorous biological sciences coaching, but holistic psychological counseling. Understanding adolescent behavior and channelizing youthful energy towards purposeful national service is the cornerstone of our educational philosophy.`,
    publishedAt: '2025-08-15',
    readTime: '5 min read'
  },
  {
    _id: 'post-3',
    title: 'विद्यार्थियों में मानसिक स्वास्थ्य और परीक्षा तनाव प्रबंधन',
    language: 'Hindi',
    category: 'Counselling',
    excerpt: 'मनोदर्पण (MANODARPAN) परामर्श पहल के तहत किशोर विद्यार्थियों के तनाव को समझना और उन्हें सकारात्मक दिशा में प्रेरित करने के व्यावहारिक उपाय।',
    content: `परीक्षा के समय विद्यार्थियों पर अभिभावकों और समाज की अपेक्षाओं का भारी दबाव होता है। एनसीईआरटी एवं सीबीएसई के काउंसलर के रूप में, मैंने पाया है कि संवादहीनता ही तनाव की सबसे बड़ी जड़ है।

शिक्षकों और माता-पिता को चाहिए कि वे अंकों से अधिक बच्चे के सीखने की प्रक्रिया और उसकी मानसिक प्रसन्नता को प्राथमिकता दें। नियमित खेल, प्राणायाम, और खुले मन से चर्चा बच्चों को मानसिक रूप से सुदृढ़ बनाती है।`,
    publishedAt: '2025-06-20',
    readTime: '6 min read / ६ मिनट'
  }
];

export async function getGalleryPhotos() {
  try {
    const data = await sanityClient.fetch(`
      *[_type == "galleryPhoto"] | order(_createdAt desc) {
        _id,
        title,
        category,
        image,
        description,
        date
      }
    `);
    if (data && data.length > 0) {
      return data.map((item: any) => ({
        ...item,
        imageUrl: item.image ? urlFor(item.image).width(1200).url() : null
      }));
    }
  } catch (err) {
    console.warn('Sanity API not reachable, using fallback gallery data.');
  }
  return fallbackPhotos;
}

export async function getBlogPosts() {
  try {
    const data = await sanityClient.fetch(`
      *[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        language,
        category,
        excerpt,
        content,
        publishedAt,
      }
    `);
    if (data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn('Sanity API not reachable, using fallback blog data.');
  }
  return fallbackArticles;
}
