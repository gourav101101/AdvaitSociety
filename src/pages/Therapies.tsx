"use client";

import { motion } from "motion/react";

export default function Therapies() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif text-forest mb-6">
            Treatment <span className="text-gold italic">Approach</span>
          </h1>
          <p className="text-lg text-forest/80 max-w-2xl mx-auto">
            Natural healing methods combining Neurotherapy (LMNT) and Herbal Medicine to restore your body's balance.
          </p>
        </div>

        {/* Neurotherapy */}
        <section id="neurotherapy" className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-forest mb-6">
                Neurotherapy (LMNT)
              </h2>
              <p className="text-forest/80 leading-relaxed mb-6">
                LMNT Neurotherapy uses calculated pressure on specific body parts
                to restore blood, lymph, and nerve flow - addressing root causes without drugs.
              </p>
              <h4 className="font-serif text-xl text-forest mb-4">
                What to Expect in a Session
              </h4>
              <ul className="space-y-4">
                {[
                  "Consultation to understand your medical history.",
                  "Physical examination to identify imbalances.",
                  "Pressure application to stimulate nerve centers.",
                  "Personalized treatment plan for recovery.",
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-beige flex items-center justify-center text-forest font-serif font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-forest/80 pt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
                alt="Neurotherapy"
                className="rounded-2xl shadow-lg w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Herbal Medicine */}
        <section id="herbal" className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1974&auto=format&fit=crop"
                alt="Herbal Medicine"
                className="rounded-2xl shadow-lg w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-forest mb-6">
                Herbal Medicine
              </h2>
              <p className="text-forest/80 leading-relaxed mb-6">
                Traditional plant-based remedies customized for your specific condition
                to support natural healing alongside Neurotherapy.
              </p>
              <div className="bg-white p-8 rounded-2xl border border-beige shadow-sm">
                <h4 className="font-serif text-xl text-forest mb-4">
                  Personalized Herbal Solutions
                </h4>
                <p className="text-forest/80 leading-relaxed">
                  Each patient receives unique herbal formulations tailored to their needs,
                  ensuring pure and effective natural remedies without side effects.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Speech Therapy */}
        <section id="speech">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-forest mb-6">
                Specialized Speech Therapy
              </h2>
              <p className="text-forest/80 leading-relaxed mb-8">
                For speech concerns, we collaborate with experienced therapists
                providing programs for children and adults to improve communication and fluency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h5 className="font-serif text-lg text-forest mb-2">
                    For Children
                  </h5>
                  <p className="text-forest/70 text-sm">
                    Addressing developmental delays, articulation issues, and
                    stuttering with engaging exercises.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h5 className="font-serif text-lg text-forest mb-2">
                    For Adults
                  </h5>
                  <p className="text-forest/70 text-sm">
                    Post-stroke rehabilitation and neurological recovery,
                    focusing on regaining clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
