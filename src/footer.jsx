import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>1234 Street Name</p>
            <p>City, State, ZIP</p>
            <p>Email: info@yourcompany.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-white hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.891-4.785 4.652-4.785 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.793.714-1.793 1.76v2.311h3.586l-.467 3.622h-3.119v9.293h6.116c.733 0 1.324-.591 1.324-1.324v-21.35c0-.733-.591-1.325-1.324-1.325z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-white hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.924 2.205-4.924 4.919 0 .385.045.76.127 1.122-4.09-.205-7.719-2.165-10.148-5.144-.423.724-.666 1.561-.666 2.453 0 1.69.86 3.179 2.168 4.055-.799-.025-1.554-.246-2.213-.614v.062c0 2.362 1.682 4.337 3.918 4.782-.409.111-.84.171-1.287.171-.314 0-.616-.03-.916-.086.617 1.926 2.41 3.329 4.533 3.369-1.662 1.3-3.757 2.075-6.033 2.075-.392 0-.779-.023-1.158-.067 2.152 1.384 4.707 2.194 7.455 2.194 8.949 0 13.843-7.416 13.843-13.844 0-.211-.005-.423-.014-.634.949-.684 1.774-1.539 2.428-2.513z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-white hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.014-4.947.072-1.345.062-2.564.348-3.509 1.293-.945.945-1.231 2.164-1.293 3.509-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.062 1.345.348 2.564 1.293 3.509.945.945 2.164 1.231 3.509 1.293 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.345-.062 2.564-.348 3.509-1.293.945-.945 1.231-2.164 1.293-3.509.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.062-1.345-.348-2.564-1.293-3.509-.945-.945-2.164-1.231-3.509-1.293-1.277-.058-1.688-.072-4.947-.072z"/><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.879 0z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-gray-700 mt-8 pt-4">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
