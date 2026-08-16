import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';

export const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found"
        description="The page you are looking for does not exist."
        noindex={true}
      />
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#07162D] px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37]/10 mb-8">
            <span className="text-4xl font-serif text-[#D4AF37]">404</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Page Not Found
          </h1>
          
          <p className="text-lg text-[#C7D2E4] mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button as={Link} to="/" variant="primary" className="w-full sm:w-auto">
              <ArrowLeft className="w-4 h-4 mr-2" /> Return to Home
            </Button>
            <Button as={Link} to="/contact" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5">
              Contact Support <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};
