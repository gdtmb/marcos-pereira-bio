import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, ShieldCheck, Users } from "lucide-react";
import {
  about,
  audience,
  complementary,
  constructionNotice,
  hero,
  invitations,
  links,
  quickLinks,
  resources,
  site,
  themes,
  transparencyNote,
} from "./content";

function BrandMark() {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-400 bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-900/20">
      {site.brandShort}
    </div>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-amber-700">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>}
    </div>
  );
}

function LinkButton({ href, children, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-slate-950 text-white hover:bg-slate-800"
      : variant === "gold"
      ? "bg-amber-500 text-slate-950 hover:bg-amber-400"
      : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50";

  return (
    <a
      href={href}
      target={href.startsWith("#") ? "_self" : "_blank"}
      rel={href.startsWith("#") ? undefined : "noreferrer"}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold shadow-sm transition ${styles}`}
    >
      {children}
      {!href.startsWith("#") && <ExternalLink className="h-4 w-4" />}
    </a>
  );
}

function ResourceCard({ item }) {
  const Icon = item.icon;
  const content = (
    <article className="h-full rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-700">{item.tag}</span>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
      {item.href && <p className="mt-5 inline-flex items-center gap-2 text-sm font-black text-amber-700">Acessar <ExternalLink className="h-4 w-4" /></p>}
    </article>
  );
  if (!item.href) return content;
  return <a href={item.href} target="_blank" rel="noreferrer" className="block h-full">{content}</a>;
}

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <BrandMark />
            <div>
              <p className="text-sm font-black leading-tight text-slate-950">{site.brandName}</p>
              <p className="text-xs font-medium text-slate-500">{site.author}</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-slate-700 md:flex">
            <a href="#materiais" className="hover:text-slate-950">Materiais</a>
            <a href="#eixos" className="hover:text-slate-950">Eixos</a>
            <a href="#convites" className="hover:text-slate-950">Convites</a>
            <a href="#contato" className="hover:text-slate-950">Contato</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.20),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.12),transparent_36%)]" />
        <div className="absolute right-0 top-0 hidden h-full w-1/3 bg-slate-950 md:block [clip-path:polygon(26%_0,100%_0,100%_100%,0_100%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.08fr_0.92fr] md:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-800">
              <ShieldCheck className="h-4 w-4" />{hero.badge}
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">{hero.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{hero.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="#materiais" variant="primary">Acessar materiais</LinkButton>
              <LinkButton href={links.instagram} variant="secondary">Ver Instagram</LinkButton>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-500">{hero.note}</p>
          </motion.div>
          <motion.aside initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl md:mr-4">
            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full border-[14px] border-amber-500/80" />
            <div className="relative grid gap-3">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} className="flex items-center justify-between rounded-2xl bg-white/10 p-4 transition hover:bg-white/15">
                    <span className="flex items-center gap-3 text-sm font-bold"><Icon className="h-5 w-5 text-amber-300" />{item.label}</span>
                    <ArrowRight className="h-4 w-4 text-amber-300" />
                  </a>
                );
              })}
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-7 sm:grid-cols-3">
          <LinkButton href={links.instagram} variant="secondary">Instagram</LinkButton>
          <LinkButton href={links.threads} variant="secondary">Threads</LinkButton>
          <LinkButton href={links.lattes} variant="secondary">Currículo Lattes</LinkButton>
        </div>
      </section>

      <section id="materiais" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle eyebrow="Conteúdos e recursos" title="Conteúdo especializado em Gestão e Direito de Trânsito">
          Materiais, artigos, publicações, aulas, reflexões e conteúdos formativos organizados para apoiar profissionais, estudantes e interessados na matéria de trânsito.
        </SectionTitle>
        {constructionNotice.enabled && (
          <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-center shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">{constructionNotice.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{constructionNotice.text}</p>
          </div>
        )}
        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((item) => <ResourceCard key={item.title} item={item} />)}
        </div>
      </section>

      <section id="eixos" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Eixos editoriais" title="Os temas da identidade GDT">
                Conteúdos técnicos e formativos sobre trânsito, Direito de Trânsito, gestão pública e segurança viária, articulando norma, educação, mobilidade, comportamento humano, cidadania, responsabilidade pública e tecnologias aplicadas, incluindo inteligência artificial.
          </SectionTitle>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {themes.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-10 flex justify-end"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white"><Icon className="h-5 w-5" /></div></div>
                  <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-300">{about.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-black">{about.title}</h2>
          <p className="mt-5 leading-8 text-slate-200">{about.text}</p>
          <div className="mt-6 flex flex-wrap gap-3">{about.tags.map((tag) => <span key={tag} className="rounded-full bg-white/10 px-4 py-2 text-sm">{tag}</span>)}</div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-700">Para quem é</p>
          <h2 className="mt-4 text-3xl font-black text-slate-950">Públicos que podem se conectar ao conteúdo</h2>
          <div className="mt-6 grid gap-3">{audience.map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"><Users className="mt-0.5 h-5 w-5 text-amber-700" /><p className="font-semibold text-slate-700">{item}</p></div>)}</div>
        </div>
      </section>

      <section id="convites" className="bg-slate-100 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Convites e oportunidades" title="Aulas, palestras, cursos e projetos">
            Este bloco funciona como porta de entrada para convites profissionais, parcerias responsáveis e futuras ofertas de materiais, cursos ou conteúdos pagos, sempre com observância ética e institucional.
          </SectionTitle>
          <div className="grid gap-5 md:grid-cols-3">
            {invitations.map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="rounded-[1.5rem] bg-white p-6 shadow-sm"><Icon className="h-8 w-8 text-amber-700" /><h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Conteúdos complementares" title="Outras dimensões, sem perder o eixo principal">
            Fé, inteligência artificial, reflexões pessoais e parcerias podem integrar a página como conteúdos complementares, preservando a identidade central em Gestão e Direito de Trânsito.
          </SectionTitle>
          <div className="grid gap-5 md:grid-cols-3">
            {complementary.map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"><Icon className="h-8 w-8 text-amber-700" /><h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-300">Contato</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">Vamos fortalecer o debate técnico sobre trânsito, cidadania e segurança viária?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">Acompanhe as publicações, acesse os materiais disponíveis ou entre em contato para convites, aulas, capacitações, projetos e parcerias.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><LinkButton href={links.instagram} variant="gold">Falar pelo Instagram</LinkButton><LinkButton href={links.threads} variant="secondary">Acompanhar no Threads</LinkButton></div>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-sm leading-7 text-slate-300"><strong className="text-white">Nota de transparência:</strong> {transparencyNote}</div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-5 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-300">{site.footer}</p>
          <div className="flex gap-4 text-sm"><a href={links.instagram} target="_blank" rel="noreferrer" className="hover:text-amber-300">Instagram</a><a href={links.threads} target="_blank" rel="noreferrer" className="hover:text-amber-300">Threads</a><a href={links.lattes} target="_blank" rel="noreferrer" className="hover:text-amber-300">Lattes</a></div>
        </div>
      </footer>
    </main>
  );
}
