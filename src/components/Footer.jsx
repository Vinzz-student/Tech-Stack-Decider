import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About */}
          <div className="col-span-1 md:col-span-2 md:col-start-2 text-center">
            <h3 className="text-xl font-bold mb-4">
              <span className="gradient-text">TechStack</span>
              <span className="text-gray-300">Decider</span>
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Membantu developer pemula memilih teknologi yang tepat untuk project mereka.
              Dapatkan rekomendasi personalized berdasarkan kebutuhan spesifikmu.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2026 TechStack Decider. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm flex items-center mt-4 sm:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for developers
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;