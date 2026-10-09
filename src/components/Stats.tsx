import { stats } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

export function Stats() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="container-wide">
        <div className="rounded-3xl bg-gradient-to-br from-pink-500/10 via-fuchsia-500/10 to-indigo-500/10 border border-primary/15 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="text-center md:text-left">
                  <div className="font-display text-4xl sm:text-5xl font-bold gradient-text leading-none">
                    <CountUp
                      to={s.value}
                      prefix={s.prefix ?? ""}
                      suffix={s.suffix ?? ""}
                    />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-foreground">
                    {s.label}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {s.sub}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
