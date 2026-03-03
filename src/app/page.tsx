import Home from "@/src/pages/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LMNT Neurotherapy Clinic in Indore | Drug-Free Natural Healing",
  description: "Leading Neurotherapy clinic in Indore by Dr. S L Chouhan. Natural treatment for Diabetes, Back Pain, Migraine, Arthritis, High BP. 500+ patients healed. Zero medicines, zero side effects. Call +91 6260107683",
  keywords: [
    "neurotherapy indore",
    "lmnt therapy",
    "drug free treatment",
    "natural healing indore",
    "diabetes treatment without medicine",
    "back pain cure indore",
    "migraine treatment",
    "herbal medicine indore"
  ],
  alternates: {
    canonical: 'https://advaitsociety.com',
  },
  openGraph: {
    title: "Advait Society - Best Neurotherapy Clinic in Indore",
    description: "500+ patients healed naturally. Expert LMNT Neurotherapy by Dr. S L Chouhan. Book consultation today!",
    url: 'https://advaitsociety.com',
  },
};

export default function Page() {
  return <Home />;
}
