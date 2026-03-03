import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import "@/src/index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Advait Society - LMNT Neurotherapy Clinic in Indore | Drug-Free Natural Healing",
    template: "%s | Advait Society"
  },
  description: "Leading LMNT Neurotherapy clinic in Indore, Madhya Pradesh. Dr. S L Chouhan offers drug-free natural treatment for Diabetes, Back Pain, Migraine, Arthritis, BP & more. 500+ patients healed. Book consultation: +91 6260107683",
  keywords: [
    "Neurotherapy Indore",
    "LMNT therapy Indore",
    "Drug-free treatment Indore",
    "Natural healing Indore",
    "Dr S L Chouhan",
    "Diabetes treatment without medicine",
    "Back pain treatment Indore",
    "Migraine cure Indore",
    "Herbal medicine Indore",
    "Alternative medicine Madhya Pradesh",
    "Neurotherapy clinic near me",
    "Best neurotherapist Indore"
  ],
  authors: [{ name: "Dr. S L Chouhan" }],
  creator: "Advait Society",
  publisher: "Advait Society",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://advaitsociety.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Advait Society - LMNT Neurotherapy Clinic in Indore",
    description: "Drug-free natural healing for chronic conditions. 500+ patients treated successfully. Expert LMNT Neurotherapy by Dr. S L Chouhan.",
    url: 'https://advaitsociety.com',
    siteName: 'Advait Society',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Advait Society - Neurotherapy Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advait Society - LMNT Neurotherapy Clinic',
    description: 'Drug-free natural healing in Indore. 500+ patients healed.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Advait Society',
  description: 'LMNT Neurotherapy and Natural Healing Clinic',
  url: 'https://advaitsociety.com',
  telephone: '+916260107683',
  email: 'support@advaitsociety.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Aerodrum road, Anjani Nagar, Kalani Nagar',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    postalCode: '452005',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.7196,
    longitude: 75.8577,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  image: 'https://advaitsociety.com/og-image.jpg',
  founder: {
    '@type': 'Person',
    name: 'Dr. S L Chouhan',
    jobTitle: 'LMNT Neurotherapy Specialist',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
  },
  medicalSpecialty: ['Neurotherapy', 'Alternative Medicine', 'Herbal Medicine'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/logomain.png" />
        <link rel="apple-touch-icon" href="/logomain.png" />
        <meta name="theme-color" content="#1e3a5f" />
      </head>
      <body>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
