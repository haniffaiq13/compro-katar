import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const pengurus = [
    { nama: 'Andi Pratama', jabatan: 'Ketua', phone: '+62 812-3456-7890' },
    { nama: 'Sari Dewi', jabatan: 'Wakil Ketua', phone: '+62 813-4567-8901' },
    { nama: 'Budi Santoso', jabatan: 'Sekretaris', phone: '+62 814-5678-9012' },
    { nama: 'Fatimah', jabatan: 'Bendahara', phone: '+62 815-6789-0123' },
    { nama: 'Dedi Kurniawan', jabatan: 'Koordinator Kegiatan', phone: '+62 816-7890-1234' },
    { nama: 'Maya Sari', jabatan: 'Humas', phone: '+62 817-8901-2345' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontak & Struktur Organisasi</h1>
            <p className="text-xl text-gray-600">Hubungi kami dan kenali pengurus Karang Taruna RW 05</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Alamat Sekretariat</h3>
                    <p className="text-gray-600">
                      Jl. Merdeka No. 123, RW 05<br />
                      Kelurahan Sejahtera<br />
                      Jakarta Selatan 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Telepon</h3>
                    <p className="text-gray-600">+62 812-3456-7890</p>
                    <p className="text-sm text-gray-500">WhatsApp available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@karangtaruna-rw05.org</p>
                    <p className="text-sm text-gray-500">Response dalam 24 jam</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Senin - Jumat: 19.00 - 21.00 WIB</p>
                      <p>Sabtu - Minggu: 08.00 - 17.00 WIB</p>
                      <p className="text-sm text-gray-500">Atau berdasarkan appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="border-t pt-6 mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Media Sosial</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    No. Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Subjek pesan"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors font-medium"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>

          {/* Organization Structure */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Struktur Organisasi</h2>
              <p className="text-gray-600 mt-2">Pengurus Karang Taruna RW 05 Periode 2024-2026</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pengurus.map((person, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {person.nama.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{person.nama}</h3>
                  <p className="text-orange-600 font-medium mb-3">{person.jabatan}</p>
                  <a
                    href={`https://wa.me/${person.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Lokasi Kami</h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">
                Peta Google Maps akan ditampilkan di sini<br />
                <span className="text-sm">(Integrasi dengan Google Maps API)</span>
              </p>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.google.com/?q=Jl.+Merdeka+No.+123+Jakarta+Selatan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium"
              >
                <MapPin className="h-5 w-5" />
                <span>Buka di Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;