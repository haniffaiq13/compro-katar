import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, Zap, Calendar, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Karang Taruna RW 05
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Bersama Membangun Generasi Muda yang Berkarakter dan Berprestasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/berita"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Lihat Kegiatan</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/kontak"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tentang Karang Taruna
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Organisasi kepemudaan di tingkat RW yang bergerak dalam bidang pengembangan 
                generasi muda dan pemberdayaan masyarakat.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Kegiatan Karang Taruna"
                  className="w-full h-96 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Target className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Visi</h3>
                      <p className="text-gray-600">
                        Menjadi organisasi pemuda yang unggul, mandiri, dan berkontribusi nyata 
                        bagi pembangunan masyarakat RW 05.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Heart className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Misi</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Mengembangkan potensi dan kreativitas pemuda</li>
                        <li>• Membangun karakter generasi muda yang positif</li>
                        <li>• Melaksanakan kegiatan sosial kemasyarakatan</li>
                        <li>• Menjadi wadah aspirasi dan partisipasi pemuda</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Program Unggulan
              </h2>
              <p className="text-xl text-gray-600">
                Berbagai kegiatan yang kami laksanakan untuk memajukan generasi muda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pengembangan SDM
                </h3>
                <p className="text-gray-600">
                  Pelatihan keterampilan, workshop, dan program pengembangan diri 
                  untuk meningkatkan kapasitas pemuda.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Kegiatan Sosial
                </h3>
                <p className="text-gray-600">
                  Bakti sosial, gotong royong, dan program kepedulian masyarakat 
                  yang rutin dilaksanakan.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Olahraga & Seni
                </h3>
                <p className="text-gray-600">
                  Turnamen olahraga, pertunjukan seni, dan kompetisi yang membangun 
                  sportivitas dan kreativitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Kegiatan Terkini
                </h2>
                <p className="text-xl text-gray-600">
                  Update terbaru dari aktivitas dan program Karang Taruna
                </p>
              </div>
              <Link
                to="/berita"
                className="hidden md:flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold"
              >
                <span>Lihat Semua</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {[
                {
                  title: "Gotong Royong Bersih-Bersih Lingkungan RW 05",
                  date: "10 September 2025",
                  image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400"
                },
                {
                  title: "Pelatihan Keterampilan Digital untuk Pemuda",
                  date: "15 September 2025",
                  image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=400"
                },
                {
                  title: "Turnamen Futsal Karang Taruna Se-Kelurahan",
                  date: "22 September 2025",
                  image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400"
                }
              ].map((activity, index) => (
                <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{activity.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {activity.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center md:hidden">
              <Link
                to="/berita"
                className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold"
              >
                <span>Lihat Semua Kegiatan</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bergabunglah Bersama Kami
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Mari bersama-sama membangun komunitas yang lebih baik dan generasi muda yang berkualitas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontak"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <MapPin className="h-5 w-5" />
                <span>Info Kontak</span>
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Hubungi WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;