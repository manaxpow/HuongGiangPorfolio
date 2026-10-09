import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { personal } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo behavior: just show the success state.
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <section id="contact" className="section scroll-mt-nav">
      <div className="container-wide">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Let's <span className="gradient-text">build</span> something.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Open to Marketing roles — full-time, freelance, or contract. I
              usually reply within a day.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-6">
          {/* Info */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-indigo-500 p-8 text-white">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3), transparent 40%)",
                }}
              />
              <div className="relative space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    Get in touch
                  </h3>
                  <p className="mt-1 text-white/80">
                    Send a message or reach me directly.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-3 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <div>
                      <div className="text-xs text-white/70">Email</div>
                      <div className="font-medium">{personal.email}</div>
                    </div>
                  </a>
                  <a
                    href={`tel:${personal.phone}`}
                    className="flex items-center gap-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-3 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <div>
                      <div className="text-xs text-white/70">Phone</div>
                      <div className="font-medium">{personal.phoneDisplay}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur px-4 py-3">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <div className="text-xs text-white/70">Location</div>
                      <div className="font-medium">{personal.location}</div>
                    </div>
                  </div>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-3 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <div>
                      <div className="text-xs text-white/70">LinkedIn</div>
                      <div className="font-medium">/in/huong-giang</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border bg-card p-6 md:p-8 space-y-5"
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">
                    Message sent!
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thanks for reaching out — I'll get back to you within a
                    day.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's it about?"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about the role or project..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    variant="gradient"
                    className="w-full rounded-full"
                  >
                    <Send className="h-4 w-4" />
                    Send message
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you'll reach my inbox at{" "}
                    <span className="text-foreground">{personal.email}</span>.
                  </p>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
