import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div>
          <div className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              MC
            </span>{" "}
            <span className="text-foreground">BĂNG TUYẾT</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            MC Băng Tuyết là một MC chuyên nghiệp tại Học viện kỹ năng mềm ST
            Lighthouse, mang đến những trải nghiệm sự kiện đáng nhớ.
          </p>
        </div>

        {/* About */}
        <div className="hidden lg:block">
          <h3 className="font-semibold mb-4 text-foreground">About</h3>
          <ul className="space-y-3 text-sm">
            {["About Us", "Study Case", "Blogs", "Portfolio", "Careers"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div className="hidden lg:block">
          <h3 className="font-semibold mb-4 text-foreground">Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Event Hosting",
              "Corporate Events",
              "Wedding MC",
              "Conference Hosting",
              "Training Sessions",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-foreground">
            Get In Touch with Us
          </h3>
          <p className="text-muted-foreground text-sm mb-2">
            Need Answers? Need help?
          </p>
          <p className="text-muted-foreground text-sm mb-4">Just email us</p>
          <form className="flex items-center gap-2">
            <Input
              placeholder="Your email"
              className="rounded-md bg-background border-border focus:border-primary"
            />
            <button
              type="submit"
              className="inline-flex items-center p-2 rounded-md border border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 text-primary"
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

          {/* Social Links */}
          <div className="mt-6">
            <h4 className="text-sm font-medium text-foreground mb-3">
              Follow Us
            </h4>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Dribbble, href: "#", label: "Dribbble" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-muted hover:bg-accent text-muted-foreground hover:text-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 MC Băng Tuyết. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 sm:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
