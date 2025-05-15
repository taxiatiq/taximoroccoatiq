import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Mohammed Bennani',
      role: 'Entrepreneur',
      content: 'J\'utilise régulièrement GrandTaxi Rabat pour mes déplacements professionnels. Le service est toujours ponctuel et les chauffeurs sont courtois. Hautement recommandé!',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      name: 'Leila Tahiri',
      role: 'Professeur universitaire',
      content: 'Le service est excellent, j\'apprécie particulièrement la propreté des véhicules et la ponctualité. Mes trajets quotidiens vers l\'université sont devenus beaucoup plus agréables.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      name: 'Karim Alaoui',
      role: 'Touriste',
      content: 'Lors de ma visite à Rabat, j\'ai utilisé GrandTaxi pour explorer la ville et les environs. Le chauffeur était également un excellent guide touristique. Une expérience formidable!',
      rating: 4,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="section bg-secondary-500 py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-white">Ce que disent nos clients</h2>
          <p className="text-gray-300 text-lg">
            La satisfaction de nos clients est notre priorité. Découvrez ce qu'ils pensent de notre service.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/4">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-3/4 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonials[currentIndex].rating ? "fill-primary-500 text-primary-500" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div>
                    <p className="font-bold text-lg text-secondary-800">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-secondary-500" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-secondary-500" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-primary-500' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;