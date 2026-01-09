import { GraduationCap, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="resources" className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">KLE Technological University</h3>
                <p className="text-xs text-primary-foreground/70">Department of Mathematics</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-md mb-6">
              Creating Value, Leveraging Knowledge. This comprehensive Linear Algebra course (25EMAB202) 
              is designed for Mechanical Engineering students to master essential mathematical concepts 
              for real-world engineering applications.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4" />
              Hubballi, Karnataka, India
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Course Materials</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="#chapters" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Chapter 1: Introduction
                </a>
              </li>
              <li>
                <a href="#chapters" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Chapter 2: Gauss Elimination
                </a>
              </li>
              <li>
                <a href="#chapters" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Chapter 3: Linear Independence
                </a>
              </li>
              <li>
                <a href="#chapters" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Chapter 4: Orthogonality
                </a>
              </li>
              <li>
                <a href="#chapters" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Chapter 5: Eigenvalues
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="#labs" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Lab Assessments
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Python Notebooks
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
                  GeoGebra Tools
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Reference Textbooks
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 KLE Technological University. Course Code: 25EMAB202
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <span>3rd Semester | Mechanical Engineering</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">31 Planned Hours</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
