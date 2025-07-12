import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Dribbble } from "lucide-react"; // Lucide for icons

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div>
          <div className="text-2xl font-bold text-blue-600">
            MC <span className="text-black">BĂNG TUYẾT</span>
          </div>
          <p className="text-gray-600 text-sm">
            MC Băng Tuyết là một MC chuyên nghiệp tại Học viện kỹ năng mềm ST
            Lighthouse
          </p>
        </div>

        {/* About */}
        <div className="hidden lg:block">
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Study Case
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us (hidden on small screens) */}
        <div className="hidden lg:block">
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <Facebook size={18} className="text-blue-600" />
              <a href="#" className="hover:underline">
                fb.com/DigitalUX
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={18} className="text-pink-500" />
              <a href="#" className="hover:underline">
                @DigitalUX
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={18} className="text-blue-400" />
              <a href="#" className="hover:underline">
                @DigitalUX
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Dribbble size={18} className="text-pink-400" />
              <a href="#" className="hover:underline">
                Dribbble.com/DigitalUx
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Get In touch with Us</h3>
          <p className="text-gray-700 text-sm mb-1">
            Need Answers? Need help ?
          </p>
          <p className="text-gray-700 text-sm mb-3">Just email us</p>
          <form className="flex items-center gap-2">
            <Input placeholder="Your email" className="rounded-md" />
            <button
              type="submit"
              className="inline-flex items-center p-2 rounded-md border border-blue-400 hover:bg-blue-50 transition text-blue-500"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#11112a] py-4 mt-2">
        <div className="text-center text-white text-sm font-semibold">
          Designed By Hmimi Chioukh 2022
        </div>
      </div>
    </footer>
  );
}
