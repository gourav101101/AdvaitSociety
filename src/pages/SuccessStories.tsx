"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function SuccessStories() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif text-forest mb-6">
            Success <span className="text-gold italic">Stories</span>
          </h1>
          <p className="text-lg text-forest/80 max-w-2xl mx-auto">
            Real transformations from patients who reclaimed their health
            through our holistic approach.
          </p>
        </div>

        {/* Featured Video Story */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 p-12"
          >
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-4">
                Featured Story
              </span>
              <h3 className="text-4xl font-serif text-forest mb-4">
                Rajesh Kumar's Journey: Diabetes-Free After 15 Years
              </h3>
              <p className="text-forest/80 text-lg leading-relaxed mb-6">
                "मैं 15 सालों से इंसुलिन पर निर्भर था। Advait Society के न्यूरोथेरेपी और हर्बल उपचार ने मेरी जिंदगी बदल दी। आज मैं बिना किसी दवा के स्वस्थ जीवन जी रहा हूं। मेरा शुगर लेवल अब पूरी तरह नियंत्रित है।"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  RK
                </div>
                <div>
                  <p className="font-semibold text-forest">Rajesh Kumar</p>
                  <p className="text-sm text-forest/60">Indore • Type 2 Diabetes • 8 Months Treatment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              condition: "Chronic Back Pain",
              name: "Priya Sharma",
              location: "Indore",
              duration: "4 Months",
              quote:
                "मुझे 5 साल से कमर दर्द था। दवाइयों से कोई फायदा नहीं हुआ। यहाँ के न्यूरोथेरेपी से मैं पूरी तरह ठीक हो गई। अब मैं बिना दर्द के अपना काम कर पाती हूं।",
              initials: "PS",
            },
            {
              condition: "Speech Delay",
              name: "Aarav Patel (Age 6)",
              location: "Manawar",
              duration: "7 Months",
              quote:
                "हमारे बेटे को बोलने में बहुत दिक्कत थी। यहाँ के स्पीच थेरेपिस्ट ने बहुत प्यार से उसे सिखाया। अब वह पूरे वाक्य बोलता है और स्कूल में अच्छा कर रहा है।",
              initials: "AP",
            },
            {
              condition: "High Blood Pressure",
              name: "Suresh Verma",
              location: "Indore",
              duration: "5 Months",
              quote:
                "10 साल से BP की दवा खा रहा था। यहाँ के हर्बल उपचार और न्यूरोथेरेपी से मेरा BP अब नॉर्मल रहता है। दवा की जरूरत नहीं पड़ती।",
              initials: "SV",
            },
            {
              condition: "Migraine",
              name: "Anjali Deshmukh",
              location: "Indore",
              duration: "3 Months",
              quote:
                "हर हफ्ते माइग्रेन का दर्द होता था। यहाँ के इलाज से अब मुझे बिल्कुल आराम है। मैं अपनी नौकरी और घर दोनों संभाल पा रही हूं।",
              initials: "AD",
            },
            {
              condition: "Arthritis",
              name: "Ramesh Joshi",
              location: "Manawar",
              duration: "6 Months",
              quote:
                "घुटनों में दर्द के कारण चलना मुश्किल हो गया था। यहाँ के प्राकृतिक उपचार से अब मैं आराम से चल पाता हूं। ऑपरेशन की जरूरत नहीं पड़ी।",
              initials: "RJ",
            },
            {
              condition: "Thyroid Disorder",
              name: "Kavita Singh",
              location: "Indore",
              duration: "8 Months",
              quote:
                "थायराइड की वजह से वजन बढ़ता जा रहा था। यहाँ के हर्बल मेडिसिन से मेरा थायराइड लेवल नॉर्मल हो गया। अब मैं स्वस्थ महसूस करती हूं।",
              initials: "KS",
            },
          ].map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-beige"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  {story.initials}
                </div>
                <div>
                  <h4 className="font-serif text-xl text-forest">
                    {story.name}
                  </h4>
                  <p className="text-sage text-sm font-medium">
                    {story.condition} • {story.location}
                  </p>
                </div>
              </div>
              <p className="text-forest/70 italic mb-6">"{story.quote}"</p>
              <div className="border-t border-beige pt-4">
                <span className="text-xs text-forest/50 uppercase tracking-wider font-semibold">
                  Treatment Duration: {story.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
