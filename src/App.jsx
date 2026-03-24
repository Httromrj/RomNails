import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight,
  Camera,
  Heart,
  Image,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const brand = {
  name: 'Studio Aura',
  handle: '@studioaura.nails',
  city: 'Rio de Janeiro, RJ',
  heroBadge: 'Nail design de luxo com assinatura autoral',
  heroTitle: 'Unhas que parecem joia.',
  heroSubtitle:
    'Descubra os estilos mais desejados do studio, conheça a experiência e escolha seu próximo atendimento com mais segurança e encanto.',
  ctaPrimary: 'Agendar pelo WhatsApp',
  ctaSecondary: 'Ver coleções',
  stats: [
    { value: '88k', label: 'mulheres inspiradas pelo nosso estilo' },
    { value: '1.7k', label: 'publicações que reforçam desejo e confiança' },
    { value: 'VIP', label: 'experiência exclusiva em cada atendimento' },
  ],
  nav: ['Serviços', 'Coleções', 'Experiência', 'Contato'],
  services: [
    {
      title: 'Alongamento Signature',
      text: 'Estrutura impecável, curvatura elegante e um acabamento que chama atenção sem perder sofisticação.',
      price: 'a partir de R$ 180',
    },
    {
      title: 'Banho em Gel Glow',
      text: 'Brilho sofisticado e longa duração para quem ama mãos polidas, delicadas e sempre bonitas.',
      price: 'a partir de R$ 120',
    },
    {
      title: 'Nail Art Deluxe',
      text: 'Aplicações, pedrarias e efeitos cintilantes para quem gosta de unhas com presença e personalidade.',
      price: 'sob consulta',
    },
  ],
  highlights: [
    'Atendimento com hora marcada e clima sem pressa',
    'Materiais premium e acabamento minucioso',
    'Estilo autoral pensado para mulheres exigentes',
  ],
  reviews: [
    {
      name: 'Camila R.',
      text: 'Foi a primeira vez que senti que o atendimento inteiro combinava com o resultado. Tudo parece mais premium.',
    },
    {
      name: 'Fernanda M.',
      text: 'Eu vim pelo visual, fiquei pela delicadeza e pela sensação de cuidado. Dá vontade de marcar de novo na hora.',
    },
    {
      name: 'Juliana S.',
      text: 'As unhas ficaram lindas, mas o que me ganhou foi a experiência completa. Parece uma marca de luxo.',
    },
  ],
  faqs: [
    {
      q: 'Como faço para agendar?',
      a: 'Você pode chamar no WhatsApp e receber as opções de horário, serviço e orientação para o atendimento ideal.',
    },
    {
      q: 'Vocês atendem por horário marcado?',
      a: 'Sim. A experiência foi pensada para ser reservada, tranquila e com atenção total em cada cliente.',
    },
    {
      q: 'Posso enviar referência antes?',
      a: 'Sim. Muitas clientes chegam com inspirações do Instagram e nós ajudamos a traduzir isso para um resultado elegante e viável.',
    },
  ],
}

const images = {
  hero:
    'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1600&q=80',
  portrait:
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80',
  nails1:
    'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80',
  nails2:
    'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80',
  nails3:
    'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80',
  nails4:
    'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=80',
}

const Button = ({ children, href, className = '', target }) => (
  <a
    href={href}
    target={target}
    rel={target === '_blank' ? 'noreferrer' : undefined}
    className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-px hover:scale-[1.03] ${className}`}
  >
    <span className="absolute inset-0 translate-y-full bg-[var(--color-dark)] transition-transform duration-500 group-hover:translate-y-0" />
    <span className="relative z-10">{children}</span>
    <ArrowUpRight className="relative z-10 h-4 w-4" />
  </a>
)

const Navbar = ({ solid }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div
        className={`w-full max-w-6xl rounded-[2.5rem] border px-4 py-3 transition-all duration-500 md:px-6 ${
          solid
            ? 'border-[var(--color-border)] bg-[rgba(252,248,246,0.82)] text-[var(--color-primary)] shadow-[0_20px_60px_rgba(42,22,30,0.12)] backdrop-blur-xl'
            : 'border-transparent bg-transparent text-white'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="font-heading text-sm font-semibold uppercase tracking-[0.3em]">
            {brand.name}
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {brand.nav.map((item) => (
              <a
                key={item}
                href={`#${item === 'Serviços' ? 'services' : item === 'Coleções' ? 'gallery' : item === 'Experiência' ? 'experience' : 'contact'}`}
                className="text-xs uppercase tracking-[0.24em] transition duration-300 hover:-translate-y-px hover:text-[var(--color-accent)]"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button
              href="https://wa.me/5521996727314"
              target="_blank"
              className="bg-[var(--color-accent)] text-[var(--color-primary)]"
            >
              {brand.ctaPrimary}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] md:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
        {open ? (
          <div className="mt-4 rounded-[2rem] border border-[var(--color-border)] bg-[rgba(252,248,246,0.95)] p-4 md:hidden">
            <div className="flex flex-col gap-4 text-[var(--color-primary)]">
              {brand.nav.map((item) => (
                <a
                  key={item}
                  href={`#${item === 'Serviços' ? 'services' : item === 'Coleções' ? 'gallery' : item === 'Experiência' ? 'experience' : 'contact'}`}
                  className="text-xs font-semibold uppercase tracking-[0.22em]"
                >
                  {item}
                </a>
              ))}
              <Button
                href="https://wa.me/5521996727314"
                target="_blank"
                className="justify-center bg-[var(--color-accent)] text-[var(--color-primary)]"
              >
                {brand.ctaPrimary}
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}

const Hero = ({ sectionRef, textRef }) => (
  <section id="hero" ref={sectionRef} className="relative flex min-h-[100dvh] items-end overflow-hidden rounded-b-[3rem]">
    <img src={images.hero} alt="Nail design premium" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,20,35,0.15)_0%,rgba(51,20,35,0.46)_42%,rgba(28,10,20,0.94)_100%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,198,218,0.24),transparent_28%)]" />
    <div className="relative z-10 grid w-full gap-8 px-5 pb-10 pt-32 md:px-12 md:pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-20 lg:pb-20">
      <div ref={textRef} className="max-w-4xl">
        <div className="hero-copy mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-[var(--color-accent)]" />
          {brand.heroBadge}
        </div>
        <h1 className="hero-copy font-heading text-[clamp(3.4rem,8vw,7.4rem)] font-semibold uppercase leading-[0.88] tracking-[-0.07em] text-white">
          {brand.heroTitle}
        </h1>
        <p className="hero-copy mt-5 max-w-2xl text-sm leading-8 text-white/72 md:text-base">
          {brand.heroSubtitle}
        </p>
        <div className="hero-copy mt-8 flex flex-col items-start gap-4 sm:flex-row">
          <Button
            href="https://wa.me/5521996727314"
            target="_blank"
            className="bg-[var(--color-accent)] text-[var(--color-primary)]"
          >
            {brand.ctaPrimary}
          </Button>
          <Button
            href="#gallery"
            className="border border-white/20 bg-white/8 text-white"
          >
            {brand.ctaSecondary}
          </Button>
        </div>
        <div className="hero-copy mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-white/8 p-4 backdrop-blur-md sm:grid-cols-3">
          {brand.stats.map((item) => (
            <div key={item.label}>
              <p className="font-heading text-3xl font-semibold tracking-[-0.05em] text-[var(--color-accent)]">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-copy flex items-end justify-end">
        <div className="w-full max-w-sm rounded-[2.5rem] border border-white/12 bg-[rgba(255,255,255,0.12)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-md">
          <div className="mb-4 flex items-center gap-3">
            <img src={images.portrait} alt="Perfil da profissional" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="font-heading text-lg font-semibold text-white">{brand.name}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/56">{brand.handle}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={images.nails1} alt="" className="aspect-square rounded-[1.4rem] object-cover" />
            <img src={images.nails2} alt="" className="aspect-square rounded-[1.4rem] object-cover" />
          </div>
          <div className="mt-4 flex items-center justify-between rounded-[1.5rem] bg-white/10 px-4 py-3 text-white/78">
            <div className="flex items-center gap-2">
              <Image className="h-4 w-4 text-[var(--color-accent)]" />
              <span className="text-xs uppercase tracking-[0.2em]">Presença marcante</span>
            </div>
            <span className="font-mono text-xs">+ estilo autoral</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Services = ({ sectionRef, cardsRef }) => (
  <section id="services" ref={sectionRef} className="section-shell">
    <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        <p className="eyebrow">Serviços</p>
        <h2 className="section-title text-[var(--color-primary)]">
          Mais que unhas. Uma imagem que ela quer mostrar.
        </h2>
      </div>
      <p className="text-sm leading-8 text-[var(--color-body)] md:text-base">
        Escolha o serviço ideal, encontre o estilo que mais combina com você e agende seu horário com leveza e confiança.
      </p>
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      {brand.services.map((service, index) => (
        <article key={service.title} ref={(node) => (cardsRef.current[index] = node)} className="feature-card">
          <div className="mb-6 flex items-center justify-between">
            <span className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-body)]">
              {index === 0 ? 'Mais pedido' : index === 1 ? 'Brilho e duracao' : 'Alto impacto'}
            </span>
            <Heart className="h-4 w-4 text-[var(--color-accent)]" />
          </div>
          <p className="feature-title">{service.title}</p>
          <p className="feature-description">{service.text}</p>
          <div className="mt-8 rounded-[2rem] bg-[var(--color-primary)] p-5 text-[var(--color-text)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/54">Investimento</p>
            <p className="mt-3 font-heading text-3xl font-semibold tracking-[-0.05em] text-[var(--color-accent)]">{service.price}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
)

const Gallery = ({ sectionRef, refs }) => (
  <section id="gallery" ref={sectionRef} className="section-shell">
    <div className="mb-12 text-center">
      <p className="eyebrow">Coleções</p>
      <h2 className="section-title text-[var(--color-primary)]">
        Inspiração para você escolher o visual que mais combina com seu momento.
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-[var(--color-body)] md:text-base">
        Descubra acabamentos, formas e composições pensadas para quem ama unhas elegantes, femininas e muito bem finalizadas.
      </p>
    </div>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {[
        { image: images.nails1, title: 'Rosé Cristal', label: 'Delicado com brilho fino' },
        { image: images.nails2, title: 'Nude Couture', label: 'Elegância com acabamento limpo' },
        { image: images.nails3, title: 'Glow Rosé', label: 'Brilho acetinado e feminino' },
        { image: images.nails4, title: 'Luxe Shine', label: 'Visual para quem gosta de destaque' },
      ].map((item, index) => (
        <article key={item.title} ref={(node) => (refs.current[index] = node)} className="overflow-hidden rounded-[2.2rem] border border-[var(--color-border)] bg-white shadow-[0_20px_60px_rgba(42,22,30,0.08)]">
          <img src={item.image} alt={item.title} className="h-80 w-full object-cover" />
          <div className="p-5">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/12 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
              <Camera className="h-3 w-3" />
              Editorial pick
            </div>
            <p className="font-heading text-2xl font-semibold tracking-[-0.05em] text-[var(--color-primary)]">{item.title}</p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-body)]">{item.label}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
)

const Experience = ({ sectionRef, refs }) => (
  <section id="experience" ref={sectionRef} className="section-shell">
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div className="overflow-hidden rounded-[3rem] bg-[var(--color-primary)] p-6 text-[var(--color-text)]">
        <img src={images.portrait} alt="Profissional do studio" className="h-[34rem] w-full rounded-[2.2rem] object-cover" />
      </div>
      <div>
        <p className="eyebrow">Experiência</p>
        <h2 className="section-title text-[var(--color-primary)]">
          O que ela compra não é só um serviço. É sensação.
        </h2>
        <div className="mt-8 space-y-4">
          {brand.highlights.map((item, index) => (
            <div key={item} ref={(node) => (refs.current[index] = node)} className="feature-card flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-accent)]">
                {index === 0 ? <Sparkles className="h-5 w-5" /> : index === 1 ? <Star className="h-5 w-5" /> : <Heart className="h-5 w-5" />}
              </div>
              <div>
                <p className="font-heading text-xl font-semibold tracking-[-0.04em] text-[var(--color-primary)]">{item}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-body)]">
                  Cada detalhe foi pensado para que você sinta delicadeza, confiança e cuidado desde o primeiro contato.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const Reviews = ({ sectionRef, refs }) => (
  <section ref={sectionRef} className="section-shell">
    <div className="mb-12 text-center">
      <p className="eyebrow">Prova social</p>
      <h2 className="section-title text-[var(--color-primary)]">
        Quando tudo transmite cuidado, a confiança vem naturalmente.
      </h2>
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      {brand.reviews.map((review, index) => (
        <article key={review.name} ref={(node) => (refs.current[index] = node)} className="feature-card">
          <div className="mb-5 flex items-center gap-1 text-[var(--color-accent)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="text-base leading-8 text-[var(--color-primary)]">
            “{review.text}”
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-body)]">
            {review.name}
          </p>
        </article>
      ))}
    </div>
  </section>
)

const Contact = ({ sectionRef }) => (
  <section id="contact" ref={sectionRef} className="section-shell">
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="overflow-hidden rounded-[3rem] bg-[var(--color-primary)] px-6 py-10 text-[var(--color-text)] md:px-8">
        <p className="eyebrow text-white/58">Contato</p>
        <h2 className="font-heading text-[clamp(2.6rem,5vw,5rem)] font-semibold uppercase leading-[0.92] tracking-[-0.06em]">
        Seu próximo horário começa aqui.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-8 text-white/70 md:text-base">
          Fale conosco, tire suas dúvidas e encontre o atendimento ideal para o visual que você quer viver.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <div className="inline-flex items-center gap-3 text-sm text-white/76">
            <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
            {brand.city}
          </div>
          <div className="inline-flex items-center gap-3 text-sm text-white/76">
            <Image className="h-4 w-4 text-[var(--color-accent)]" />
            {brand.handle}
          </div>
          <div className="inline-flex items-center gap-3 text-sm text-white/76">
            <Phone className="h-4 w-4 text-[var(--color-accent)]" />
            Atendimento via WhatsApp
          </div>
        </div>
      </div>
      <div className="rounded-[3rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_60px_rgba(42,22,30,0.08)] md:p-8">
        <div className="mb-6 flex items-center gap-3 rounded-full bg-[var(--color-accent)]/12 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
          <MessageCircle className="h-4 w-4" />
          Perguntas frequentes
        </div>
        <div className="space-y-4">
          {brand.faqs.map((faq) => (
            <div key={faq.q} className="rounded-[2rem] bg-[var(--color-primary)]/4 p-5">
              <p className="font-heading text-xl font-semibold tracking-[-0.04em] text-[var(--color-primary)]">{faq.q}</p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-body)]">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button
            href="https://wa.me/5521996727314"
            target="_blank"
            className="w-full justify-center bg-[var(--color-primary)] text-white"
          >
            {brand.ctaPrimary}
          </Button>
        </div>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="rounded-t-[4rem] bg-[var(--color-primary)] px-5 py-12 text-white md:px-10 lg:px-14">
    <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
      <div>
        <p className="font-heading text-3xl font-semibold uppercase tracking-[-0.05em]">{brand.name}</p>
        <p className="mt-4 max-w-sm text-sm leading-7 text-white/62">
          Nail design com apresentação refinada, atendimento acolhedor e uma experiência pensada para mulheres que gostam de se sentir impecáveis.
        </p>
      </div>
      <div>
        <p className="footer-label">Navegação</p>
        <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
          <a href="#services">Serviços</a>
          <a href="#gallery">Coleções</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
      <div>
        <p className="footer-label">Canal principal</p>
        <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-white/72">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
          WhatsApp disponível
        </div>
      </div>
    </div>
  </footer>
)

function App() {
  const [navSolid, setNavSolid] = useState(false)
  const heroRef = useRef(null)
  const heroTextRef = useRef(null)
  const servicesRef = useRef(null)
  const serviceCardsRef = useRef([])
  const galleryRef = useRef(null)
  const galleryCardsRef = useRef([])
  const experienceRef = useRef(null)
  const experienceCardsRef = useRef([])
  const reviewsRef = useRef(null)
  const reviewCardsRef = useRef([])
  const contactRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setNavSolid(!entry.isIntersecting),
      { threshold: 0.35 },
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy', {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 1.1,
        ease: 'power3.out',
      })

      gsap.from(serviceCardsRef.current, {
        scrollTrigger: { trigger: servicesRef.current, start: 'top 72%' },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from(galleryCardsRef.current, {
        scrollTrigger: { trigger: galleryRef.current, start: 'top 72%' },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from(experienceCardsRef.current, {
        scrollTrigger: { trigger: experienceRef.current, start: 'top 72%' },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from(reviewCardsRef.current, {
        scrollTrigger: { trigger: reviewsRef.current, start: 'top 72%' },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      style={{
        '--color-primary': '#2A1620',
        '--color-accent': '#E8B8C8',
        '--color-background': '#FCF8F6',
        '--color-dark': '#120A10',
        '--color-text': '#FFF7FA',
        '--color-body': '#7D6873',
        '--color-border': 'rgba(42,22,32,0.1)',
      }}
      className="bg-[var(--color-background)] text-[var(--color-primary)]"
    >
      <svg className="absolute h-0 w-0">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="1.15" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>
      <div className="noise-overlay" />
      <Navbar solid={navSolid} />
      <main className="space-y-6 pb-6">
        <Hero sectionRef={heroRef} textRef={heroTextRef} />
        <Services sectionRef={servicesRef} cardsRef={serviceCardsRef} />
        <Gallery sectionRef={galleryRef} refs={galleryCardsRef} />
        <Experience sectionRef={experienceRef} refs={experienceCardsRef} />
        <Reviews sectionRef={reviewsRef} refs={reviewCardsRef} />
        <Contact sectionRef={contactRef} />
      </main>
      <Footer />
    </div>
  )
}

export default App
