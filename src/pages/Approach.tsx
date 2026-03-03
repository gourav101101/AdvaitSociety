"use client";

import { motion } from "motion/react";

export default function Approach() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-forest mb-6"
        >
          The Advait <span className="text-gold italic">Philosophy</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-forest/80 max-w-3xl mx-auto leading-relaxed"
        >
          We believe in the body's innate capability to heal itself. Our
          approach centers on balancing the acid-alkaline levels, restoring
          harmony without the intervention of synthetic medicines.
        </motion.p>
      </section>

      {/* The Legacy */}
      <section className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl shadow-lg w-full h-[450px] bg-white flex items-center justify-center p-8 overflow-hidden">
                <img
                  src="/logomain.png"
                  alt="Dr. Lajpatrai Mehra - Guru of Neurotherapy"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-sans font-semibold tracking-widest text-sage uppercase mb-2">
                The Legacy
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif text-forest mb-4">
                Dr. S L Chouhan's Practice
              </h3>
              <p className="text-forest/80 leading-relaxed mb-6">
                Dr. S L Chouhan practices LMNT (Lajpatrai Mehra Neurotherapy),
                an ancient Indian therapy that restores blood, lymph, and nervous
                signal flow through calculated pressure points - completely drug-free.
              </p>
              <div className="border-l-4 border-blue-600 pl-6 italic text-forest text-lg font-serif bg-blue-50 py-4 rounded-r-xl">
                "The body is its own best physician. We merely provide the right
                conditions for it to do its work."
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Experts */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 shadow-lg text-center">
          <h3 className="text-3xl md:text-4xl font-serif text-forest mb-6">
            Why Choose Advait Society?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-forest/70">Patients Successfully Treated</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-forest/70">Natural & Drug-Free</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
              <p className="text-forest/70">Side Effects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
