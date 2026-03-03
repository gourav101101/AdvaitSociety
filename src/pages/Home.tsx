"use client";

import { motion } from "motion/react";
import { Leaf, Activity, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-blue-100 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-700 text-sm font-semibold">Advanced Neurotherapy Center</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 mb-6 leading-tight">
              Heal Naturally with
              <span className="block text-blue-600 mt-2">Neurotherapy</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Drug-free healing through LMNT Neurotherapy and Herbal Medicine. Restore your body's natural balance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-blue-700 transition-all hover:scale-105 text-center shadow-lg"
              >
                Contact Us Now
              </Link>
              <Link
                href="/therapies"
                className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-base font-semibold hover:bg-blue-50 transition-all text-center"
              >
                Explore Therapies
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img
                src="/demo.jpeg"
                alt="Neurotherapy treatment"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Patients Healed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Natural Treatment</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Side Effects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">CONDITIONS WE TREAT</span>
            <h3 className="text-4xl md:text-5xl font-serif text-forest mb-4">
              We Can Help You With
            </h3>
            <p className="text-forest/70 max-w-2xl mx-auto">Natural treatment for various chronic and acute conditions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Diabetes", "High Blood Pressure", "Chronic Back Pain", "Arthritis",
              "Migraine", "Thyroid Disorders", "Cervical Pain", "Sciatica",
              "Asthma", "Kidney Stones", "Speech Delay", "Paralysis"
            ].map((condition, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-blue-50 p-4 rounded-xl text-center hover:bg-blue-100 transition-colors"
              >
                <p className="text-forest font-semibold">{condition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-blue-200 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">HOW IT WORKS</span>
            <h3 className="text-4xl md:text-5xl font-serif mb-4">
              Your Healing Journey
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">Simple steps to start your natural healing process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Book Consultation", 
                desc: "Contact us via phone or WhatsApp",
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              },
              { 
                step: "02", 
                title: "Diagnosis", 
                desc: "Complete health assessment by Dr. S L Chouhan",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              },
              { 
                step: "03", 
                title: "Treatment Plan", 
                desc: "Personalized LMNT therapy sessions",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              },
              { 
                step: "04", 
                title: "Recovery", 
                desc: "Natural healing without medicines",
                icon: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-400/50">
                  {/* Step number */}
                  <div className="text-6xl font-bold text-white/10 absolute top-4 right-4 group-hover:text-white/20 transition-colors">
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  
                  <h4 className="text-xl font-serif mb-3 text-white">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
                
                {/* Connector line */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Advait Difference */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">WHY CHOOSE US</span>
            <h3 className="text-4xl md:text-5xl font-serif text-forest">
              The Advait Difference
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: <Activity className="w-8 h-8 text-gold" />,
                title: "Root-Cause Healing",
                desc: "We identify and treat the underlying imbalances in your body without medicines.",
              },
              {
                icon: <Award className="w-8 h-8 text-gold" />,
                title: "LMNT Neurotherapy",
                desc: "Ancient Indian therapy to restore blood, lymph, and nervous signal flow.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-sm border border-beige hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-beige flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-serif text-forest mb-4">
                  {feature.title}
                </h4>
                <p className="text-forest/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Therapies */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">OUR WORK</span>
              <h3 className="text-4xl md:text-5xl font-serif text-forest">
                Our Impact
              </h3>
            </div>
            <Link
              href="/success-stories"
              className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors bg-white px-6 py-3 rounded-xl shadow-sm"
            >
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Health Camps",
                image: "/demo1.jpeg",
                desc: "Free health checkup and consultation camps for community wellness.",
              },
              {
                title: "Patient Care",
                image: "/demo.jpeg",
                desc: "Personalized treatment with Dr. S L Chouhan using LMNT Neurotherapy.",
              },
            ].map((therapy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={therapy.image}
                  alt={therapy.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h4 className="text-2xl font-serif text-cream mb-2">
                    {therapy.title}
                  </h4>
                  <p className="text-cream/80 text-sm leading-relaxed opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {therapy.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">TESTIMONIALS</span>
            <h3 className="text-4xl md:text-5xl font-serif text-forest">
              What Our Patients Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                condition: "Diabetes",
                quote: "15 साल से इंसुलिन पर निर्भर था। आज मैं बिना किसी दवा के स्वस्थ जीवन जी रहा हूं।",
                initials: "RK"
              },
              {
                name: "Priya Sharma",
                condition: "Back Pain",
                quote: "5 साल से कमर दर्द था। न्यूरोथेरेपी से मैं पूरी तरह ठीक हो गई।",
                initials: "PS"
              },
              {
                name: "Suresh Verma",
                condition: "High BP",
                quote: "10 साल से BP की दवा खा रहा था। अब मेरा BP नॉर्मल रहता है।",
                initials: "SV"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-beige"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-serif text-forest">{testimonial.name}</h4>
                    <p className="text-sm text-sage">{testimonial.condition}</p>
                  </div>
                </div>
                <p className="text-forest/70 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 shadow-lg border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-32 h-32 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold mx-auto">
                  SC
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-3xl font-serif text-forest mb-2">Dr. S L Chouhan</h3>
                <p className="text-blue-600 font-semibold mb-4">LMNT Neurotherapy Specialist</p>
                <p className="text-forest/80 leading-relaxed mb-4">
                  Certified practitioner of Lajpatrai Mehra Neurotherapy with years of experience in treating chronic conditions naturally. Dr. Chouhan has successfully helped 500+ patients recover without medicines.
                </p>
                <div className="flex gap-4">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-blue-600">500+</p>
                    <p className="text-xs text-forest/60">Patients Treated</p>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-blue-600">100%</p>
                    <p className="text-xs text-forest/60">Drug-Free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">FAQ</span>
            <h3 className="text-4xl md:text-5xl font-serif text-forest">
              Common Questions
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is Neurotherapy painful?",
                a: "No, LMNT Neurotherapy is completely painless. It involves gentle pressure application on specific body points."
              },
              {
                q: "How many sessions are needed?",
                a: "Treatment duration varies by condition. Most patients see improvement within 4-8 sessions, but chronic conditions may require more."
              },
              {
                q: "Are there any side effects?",
                a: "Zero side effects. This is a completely natural, drug-free treatment that works with your body's healing mechanisms."
              },
              {
                q: "Can I stop my current medications?",
                a: "Never stop medications without consulting your doctor. We work alongside your existing treatment and gradually reduce dependency as you heal."
              },
              {
                q: "What is the success rate?",
                a: "We have successfully treated 500+ patients with various chronic conditions. Results vary by individual and condition severity."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-beige"
              >
                <h4 className="font-serif text-lg text-forest mb-2">{faq.q}</h4>
                <p className="text-forest/70">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">VISIT US</span>
            <h3 className="text-4xl md:text-5xl font-serif text-forest">
              Our Clinics
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h4 className="text-2xl font-serif text-forest mb-4">Indore Center</h4>
              <div className="space-y-3 text-forest/80">
                <p>📍 Aerodrum road, Anjani Nagar, Kalani Nagar</p>
                <p>Madhya Pradesh 452005</p>
                <p>📞 +91 6260107683</p>
                <p>📧 support@advaitsociety.com</p>
                <p className="font-semibold text-blue-600 mt-4">⏰ Mon-Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h4 className="text-2xl font-serif text-forest mb-4">Manawar Center</h4>
              <div className="space-y-3 text-forest/80">
                <p>📍 Manawar</p>
                <p>Madhya Pradesh</p>
                <p>📞 +91 6260107683</p>
                <p>📧 support@advaitsociety.com</p>
                <p className="font-semibold text-blue-600 mt-4">⏰ Mon-Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Schedule your consultation with Dr. S L Chouhan today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl text-sm font-semibold tracking-wide uppercase hover:bg-blue-700 transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
