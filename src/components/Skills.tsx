import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench } from "lucide-react";

// Each skill gets a deterministic level (60-95) so the bars look real.
// Pulled out of the data so the data file stays clean.
const LEVELS: Record<string, number> = {
  "Marketing campaign planning": 92,
  "Marketing strategy": 85,
  "Project management": 82,
  "Social media management": 95,
  "Content & video production": 90,
  "Trade activation & CTKM": 80,
  "POSM production & supplier coordination": 78,
  "Data analytics & reporting": 84,
};

function SkillBar({ name }: { name: string }) {
  const level = LEVELS[name] ?? 80;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setVal(level), 80);
      return () => clearTimeout(t);
    }
  }, [inView, level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-muted-foreground tabular-nums"
        >
          {inView ? level : 0}%
        </motion.span>
      </div>
      <Progress value={val} />
    </div>
  );
}

function Marquee() {
  const items = [...skills.tools, ...skills.tools];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-3 animate-marquee py-2">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="shrink-0 rounded-full border bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm hover:text-foreground hover:border-primary/40 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section scroll-mt-nav">
      <div className="container-wide">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Skills
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              The full <span className="gradient-text">marketing stack</span>.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hard skills honed on the job, soft skills sharpened by tight
              deadlines, and a tools belt that keeps growing.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Tabs defaultValue="hard" className="mt-10">
            <TabsList className="mb-8">
              <TabsTrigger value="hard">Hard skills</TabsTrigger>
              <TabsTrigger value="soft">Soft skills</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="hard">
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 rounded-2xl border bg-card p-6 md:p-8">
                {skills.hard.map((s) => (
                  <SkillBar key={s} name={s} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="soft">
              <div className="rounded-2xl border bg-card p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border bg-background px-4 py-2 text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="rounded-2xl border bg-card p-6 md:p-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Wrench className="h-4 w-4" />
                  Tools I reach for daily
                </div>
                <div className="mt-6">
                  <Marquee />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
