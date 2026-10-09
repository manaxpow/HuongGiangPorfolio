import { Heart, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { personal, nav } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted/20">
      <div className="container-wide py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white text-sm">
                {personal.initials}
              </span>
              {personal.firstName}
              <span className="text-primary">.</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {personal.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Navigate</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="hover:text-primary transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" /> {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phone}`}
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" /> {personal.phoneDisplay}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {personal.location}
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-2 border-t pt-6 text-xs text-muted-foreground">
          <div>© {year} {personal.name}. All rights reserved.</div>
          <div className="inline-flex items-center gap-1.5">
            Made with <Heart className="h-3 w-3 fill-pink-500 text-pink-500" /> in Ho Chi Minh City
          </div>
        </div>
      </div>
    </footer>
  );
}
