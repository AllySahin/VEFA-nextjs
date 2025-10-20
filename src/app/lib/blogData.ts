// Dummy blog data and helpers
export const blogs = [
  {
    slug: 'is-guvenligi-ipuclari',
    title: 'İş Güvenliği İçin 10 İpucu',
    summary: 'İş yerinde güvenliği artırmak için uygulayabileceğiniz 10 temel ipucu.',
    content: 'İş güvenliği için ... (detaylı içerik)',
    date: '2025-10-01',
    image: '/images/blog-default.jpg',
  },
  {
    slug: 'forklift-egitimi-neden-onemli',
    title: 'Forklift Eğitimi Neden Önemli?',
    summary: 'Forklift operatörleri için eğitim neden hayati önem taşır?',
    content: 'Forklift eğitimi ... (detaylı içerik)',
    date: '2025-09-15',
    image: '/images/blog-default.jpg',
  },
];

export function getAllBlogs() {
  return blogs;
}

export function getBlogBySlug(slug: string) {
  return blogs.find(b => b.slug === slug);
}
