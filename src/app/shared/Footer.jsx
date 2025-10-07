export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-400">MyShop</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Your trusted destination for quality products with professional service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📧 support@myshop.com</li>
            <li>📞 +880 1234 567 890</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
