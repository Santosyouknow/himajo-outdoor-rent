import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Home } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

export default function HelpPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FaqItem[] = [
    {
      question: 'Bagaimana cara memesan produk?',
      answer: 'Pilih produk yang ingin disewa, tentukan durasi sewa, isi data pemesanan, dan lakukan pembayaran.'
    },
    {
      question: 'Apa saja metode pembayaran yang tersedia?',
      answer: 'Kami menerima transfer bank (BCA, Mandiri, BNI, BRI) dan pembayaran digital (OVO, Gopay, ShopeePay).'
    },
    {
      question: 'Berapa lama waktu pemrosesan pesanan?',
      answer: 'Pesanan diproses dalam 1x24 jam pada hari kerja setelah pembayaran dikonfirmasi.'
    },
    {
      question: 'Apakah ada biaya tambahan?',
      answer: 'Biaya tambahan hanya dikenakan untuk pengiriman dan asuransi (opsional). Tidak ada biaya tersembunyi.'
    },
    {
      question: 'Bagaimana jika produk rusak saat disewa?',
      answer: 'Segera laporkan kerusakan kepada kami. Biaya perbaikan akan ditanggung sesuai ketentuan yang berlaku.'
    },
    {
      question: 'Bagaimana cara mengembalikan produk?',
      answer: 'Produk dapat dikembalikan langsung ke outlet kami atau melalui jasa kurir yang telah disepakati.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">HIMAJO OUTDOOR RENT</Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center text-sm hover:text-gray-300">
              <Home className="w-4 h-4 mr-1" /> Beranda
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Pusat Bantuan</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan Anda atau hubungi tim dukungan kami untuk bantuan lebih lanjut.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Pertanyaan yang Sering Diajukan</h2>
              <p className="text-gray-600 mt-1">Temukan jawaban atas pertanyaan umum di bawah ini</p>
            </div>
            
            {/* FAQ Accordion */}
            <div className="divide-y divide-gray-200">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-medium text-gray-800">{item.question}</span>
                    {activeIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 pb-4 pt-2 bg-gray-50">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Butuh Bantuan Lebih Lanjut?</h2>
              <p className="text-gray-600 mt-1">Hubungi tim dukungan kami</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Email</h3>
                  <a href="mailto:cs@himajo-outdoor.com" className="text-blue-600 hover:underline">
                    cs@himajo-outdoor.com
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Telepon</h3>
                  <a href="tel:+622112345678" className="text-blue-600 hover:underline">
                    (021) 1234-5678
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Jam Operasional</h3>
                  <p className="text-gray-600">Senin - Minggu, 09.00 - 21.00 WIB</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Alamat</h3>
                  <p className="text-gray-600">Jl. Contoh No. 123, Jakarta Selatan, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Himajo Outdoor Rent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
