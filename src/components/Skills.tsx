import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  ListChecks,
  Share2,
  Video,
  Tag,
  PackageOpen,
  BarChart3,
  Palette,
  Film,
  Wand2,
  Smartphone,
  Bot,
  Atom,
  Notebook,
  FileSpreadsheet,
  Presentation,
  Megaphone,
  LineChart,
  Music2,
  Wrench,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Lightbulb,
  ListChecks,
  Share2,
  Video,
  Tag,
  PackageOpen,
  BarChart3,
  Palette,
  Film,
  Wand2,
  Smartphone,
  Bot,
  Atom,
  Notebook,
  FileSpreadsheet,
  Presentation,
  Megaphone,
  LineChart,
  Music2,
};

// Gradient cycle for the icon badges
const gradients = [
  "from-pink-500 to-rose-500",
  "from-fuchsia-500 to-purple-500",
  "from-violet-500 to-indigo-500",
  "from-purple-500 to-pink-500",
];

function HardSkillCard({
  skill,
  index,
}: {
  skill: { name: string; icon: string; description: string };
  index: number;
}) {
  const Icon = iconMap[skill.icon] ?? SparklesPlaceholder;
  const gradient = gradients[index % gradients.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1"
    >
      <div
        aria-hidden
        className={cn(
          "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40",
          gradient
        )}
      />
      <div
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
          gradient
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-semibold leading-snug">{skill.name}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
        {skill.description}
      </p>
    </motion.div>
  );
}

// Fallback for unknown icons
function SparklesPlaceholder(props: React.SVGProps<SVGSVGElement>) {
  return <BarChart3 {...props} />;
}

function ToolCard({
  tool,
  index,
}: {
  tool: { name: string; icon: string };
  index: number;
}) {
  const Icon = iconMap[tool.icon] ?? Wrench;
  const gradient = gradients[index % gradients.length];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
      className="group flex flex-col items-center gap-3 rounded-2xl border bg-card p-5 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-1"
    >
      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",
          gradient
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-sm font-semibold">{tool.name}</div>
      </div>
    </motion.div>
  );
}

function Marquee() {
  const items = [...skills.tools, ...skills.tools];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max gap-3 animate-marquee py-2">
        {items.map((t, i) => {
          const Icon = iconMap[t.icon] ?? Wrench;
          return (
            <span
              key={`${t.name}-${i}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm hover:text-foreground hover:border-primary/40 transition-colors"
            >
              <Icon className="h-3.5 w-3.5 text-primary" />
              {t.name}
            </span>
          );
        })}
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.hard.map((s, i) => (
                  <HardSkillCard key={s.name} skill={s} index={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="soft">
              <div className="rounded-2xl border bg-card p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="inline-flex items-center gap-1.5 rounded-full border bg-background px-4 py-2 text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      <Heart className="h-3 w-3 fill-pink-500 text-pink-500" />
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.tools.map((t, i) => (
                  <ToolCard key={t.name} tool={t} index={i} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
