
export type ClientReview = {
  id: number;
  name: string;
  initials: string;
  service: string;
  rating: number;
  date: string;
  review: string;
};

export const reviews: ClientReview[] = [
  {
    id: 1,
    name: "Ahmed Pervaiz",
    initials: "AP",
    service: "Haircut",
    rating: 5,
    date: "Recent visit",
    review:
      "Hair cutting done by Faraz bhai. He is very professional in cutting and very friendly.",
  },
  {
    id: 2,
    name: "Azib Zahid",
    initials: "AZ",
    service: "Hair & Beard",
    rating: 5,
    date: "Recent visit",
    review: "Zaifat provides me good hair and beard cutting service.",
  },
  {
    id: 3,
    name: "Annas Ali",
    initials: "AA",
    service: "Hairstyling",
    rating: 5,
    date: "Recent visit",
    review: "Nauman provided great hairstyling service.",
  },
  {
    id: 4,
    name: "Usman Raza",
    initials: "UR",
    service: "Hair Color",
    rating: 5,
    date: "Recent visit",
    review:
      "Amazing color job! The team really understood what I wanted and delivered perfectly. Highly recommend Cosmo Salon to everyone.",
  },
  {
    id: 5,
    name: "Bilal Khan",
    initials: "BK",
    service: "Haircut & Beard",
    rating: 5,
    date: "Recent visit",
    review:
      "Best salon in Lahore, hands down. Professional staff, clean environment, and excellent results every single time I visit.",
  },
  {
    id: 6,
    name: "Hamza Sheikh",
    initials: "HS",
    service: "Keratin Treatment",
    rating: 5,
    date: "Recent visit",
    review:
      "Got the keratin treatment done and the results were outstanding. My hair has never felt this smooth and healthy. Great work!",
  },
  {
    id: 7,
    name: "Saad Mahmood",
    initials: "SM",
    service: "Haircut",
    rating: 5,
    date: "Recent visit",
    review:
      "Very skilled barbers who know exactly how to shape your hair. Friendly atmosphere and reasonable pricing. Will definitely come back.",
  },
  {
    id: 8,
    name: "Faisal Iqbal",
    initials: "FI",
    service: "Facial & Haircut",
    rating: 5,
    date: "Recent visit",
    review:
      "Went in for a facial and haircut combo. Both were done with great attention to detail. Left feeling refreshed and confident.",
  },
  {
    id: 9,
    name: "Zain ul Abideen",
    initials: "ZA",
    service: "Hair & Beard",
    rating: 5,
    date: "Recent visit",
    review:
      "Outstanding service from start to finish. The staff is welcoming and the quality of the work is consistently top-notch. Cosmo is my go-to salon.",
  },
];
