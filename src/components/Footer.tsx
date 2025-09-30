import React from 'react';
import { Users, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Karang Taruna</h3>
                <p className="text-gray-400 text-sm">RW 05 Kelurahan Sejahtera</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Organisasi kepemudaan yang bergerak dalam bidang pengembangan generasi muda 
              dan pemberdayaan masyarakat di lingkungan RW 05.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/berita" className="text-gray-300 hover:text-white transition-colors">
                  Berita & Kegiatan
                </a>
              </li>
              <li>
                <a href="/kontak" className="text-gray-300 hover:text-white transition-colors">
                  Kontak & Struktur
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Visi & Misi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span className="text-gray-300">
                  Jl. Merdeka No. 123, RW 05<br />
                  Kelurahan Sejahtera, Jakarta
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-600" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-600" />
                <span className="text-gray-300">info@karangtaruna-rw05.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Karang Taruna RW 05. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;