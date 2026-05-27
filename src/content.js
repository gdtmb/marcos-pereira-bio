import {
  BookOpen,
  Brain,
  CalendarDays,
  Car,
  Download,
  FileText,
  GraduationCap,
  Mail,
  Megaphone,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

/*
  ARQUIVO DE MANUTENCAO DA LANDING PAGE

  Para atualizar textos, links e materiais, edite preferencialmente este arquivo.
  Evite alterar o App.jsx, pois ele concentra a estrutura visual da pagina.
*/

export const links = {
  instagram: "https://www.instagram.com/gdt__mb/",
  threads: "https://www.threads.com/@gdt__mb",
  lattes: "http://lattes.cnpq.br/4534194728757831",
  whatsapp: "",
  email: "",
};

export const site = {
  brandShort: "GDT",
  brandName: "GDT | Gestão e Direito de Trânsito",
  author: "Marcos Pereira",
  footer: "© Marcos Pereira. GDT | Gestão e Direito de Trânsito.",
};

export const hero = {
  badge: "Gestão e Direito de Trânsito",
  title: "GDT | Gestão e Direito de Trânsito | Marcos Pereira",
  subtitle:
    "Conteúdo técnico, materiais, artigos e reflexões sobre trânsito, Direito de Trânsito, gestão pública, mobilidade, segurança viária, formação, cidadania, educação e uso aplicado de tecnologias.",
  note:
    "Um espaço de organização, produção e difusão de conhecimento especializado, com linguagem técnica, institucional e acessível para profissionais, estudantes e interessados na área de trânsito.",
};

export const featuredLinks = [
  {
    title: "Atlas da Violência 2026",
    subtitle: "Referência oficial: Ipea e FBSP",
    href: "https://drive.google.com/file/d/1gr0Lp_6sfhrjRww7d9Mf5Yrmnb7NrH3I/view?usp=sharing",
    icon: FileText,
  },
  {
    title: "Curso IA Para Todos",
    subtitle: "Gratuito, on-line e com certificado",
    href: "https://www.secti.pe.gov.br/ia-para-todos",
    icon: Brain,
  },
  {
    title: "Materiais técnicos GDT",
    subtitle: "Estudos, dados e documentos de apoio",
    href: "https://drive.google.com/drive/folders/11nFhRvHF2xC7Vgmq8cPw0XHvMseYtnPK?usp=drive_link",
    icon: Download,
  },
  {
    title: "Artigos e publicações",
    subtitle: "Textos, análises e referências",
    href: "https://drive.google.com/drive/folders/1Rcp2yxgPISjkX755IMQsiNiF7qPJnO_E?usp=drive_link",
    icon: FileText,
  },
];

export const constructionNotice = {
  enabled: true,
  title: "Espaço em construção",
  text:
    "Esta página está em fase de organização e incorporação contínua de conteúdo. Novos materiais, artigos, publicações e referências serão disponibilizados gradualmente.",
};

export const resources = [
 {
  tag: "Materiais técnicos",
  title: "Guias, estudos, dados e documentos de apoio",
  text:
    "Reúne arquivos, roteiros, apresentações, estudos, indicadores, referências oficiais e materiais de consulta sobre trânsito, Direito de Trânsito e gestão pública.",
  icon: Download,
  href: "https://drive.google.com/drive/folders/11nFhRvHF2xC7Vgmq8cPw0XHvMseYtnPK?usp=drive_link",
},
  {
    tag: "Artigos",
    title: "Textos, análises e publicações",
    text:
      "Textos, análises e publicações sobre Direito de Trânsito, educação, segurança viária, mobilidade, cidadania e atuação institucional.",
    icon: FileText,
    href: "https://drive.google.com/drive/folders/1Rcp2yxgPISjkX755IMQsiNiF7qPJnO_E?usp=drive_link",
  },
  {
    tag: "Formação",
    title: "Aulas, palestras e capacitações",
    text:
      "Materiais e informações relacionados a aulas, palestras, capacitações, eventos acadêmicos e atividades de formação técnica.",
    icon: GraduationCap,
    href: "https://drive.google.com/drive/folders/14QDxBCdU-_1XioJWkbhpyn565uIYXllB?usp=drive_link",
  },
  {
    tag: "Reflexões",
    title: "Trânsito, ética pública e vida em sociedade",
    text:
      "Reflexões sobre trânsito, ética pública, comportamento humano, responsabilidade coletiva e preservação da vida.",
    icon: BookOpen,
    href: "https://drive.google.com/drive/folders/1eWZ8HuVLuIBc40wcU4f5pZkeRhSQ9ip1?usp=drive_link",
  },
];

export const themes = [
  {
    icon: Car,
    title: "Matéria de trânsito",
    text:
      "Estudo do trânsito como fenômeno humano, social, jurídico, administrativo e educacional.",
  },
  {
    icon: Scale,
    title: "Direito de Trânsito",
    text:
      "Reflexões sobre aplicação normativa, processos administrativos de trânsito, competências institucionais, atuação colegiada e finalidade social da norma.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança viária",
    text:
      "Conteúdos voltados à preservação da vida, redução de riscos, prevenção de sinistros e responsabilidade coletiva na mobilidade.",
  },
  {
    icon: Users,
    title: "Gestão pública e cidadania",
    text:
      "Temas relacionados à organização institucional, políticas públicas, participação social, governança e qualificação da atuação estatal.",
  },
  {
    icon: GraduationCap,
    title: "Formação e educação",
    text:
      "Conteúdos voltados à docência, capacitações, educação para o trânsito, formação de profissionais e construção de cultura cidadã.",
  },
  {
    icon: Brain,
    title: "Comportamento e mobilidade",
    text:
      "Abordagens sobre Psicologia do Trânsito, percepção de risco, conduta humana, tomada de decisão e cultura de segurança viária.",
  },
];

export const about = {
  eyebrow: "Quem sou",
  title:
    "Servidor público, educador e especialista em Gestão e Direito de Trânsito e em Inteligência Artificial na Prática.",
  text:
    "Bacharel em Direito, especialista em Gestão e Direito de Trânsito e em Inteligência Artificial na Prática. Servidor público estadual efetivo do DETRAN-PE desde 2008, atualmente exerce a função de Coordenador Técnico do Conselho Estadual de Trânsito de Pernambuco - CETRAN/PE. Atua com visão técnica, jurídica, educacional e institucional, reunindo experiência em colegiados, assessoramento, supervisão, docência, capacitações, produção de materiais e participação em comissões e grupos de trabalho voltados ao trânsito, à segurança viária, à gestão pública, à educação e ao uso aplicado de tecnologias.",
  tags: [
    "Gestão e Direito de Trânsito",
    "Inteligência Artificial aplicada",
    "Gestão pública",
    "Educação e segurança viária",
  ],
};

export const audience = [
  "Servidores, gestores e profissionais da área de trânsito",
  "Educadores, instrutores e profissionais da formação de condutores",
  "Estudantes e profissionais interessados em Direito de Trânsito",
  "Pesquisadores, docentes e interessados em mobilidade e segurança viária",
  "Pessoas que buscam conteúdo técnico, educativo e institucional sobre trânsito",
];

export const invitations = [
  {
    icon: CalendarDays,
    title: "Convidar para aula ou palestra",
    text:
      "Temas relacionados à matéria de trânsito, Direito de Trânsito, gestão pública, educação, segurança viária, mobilidade e uso aplicado de tecnologias.",
  },
  {
    icon: FileText,
    title: "Solicitar material ou publicação",
    text:
      "Canal para acesso a conteúdos, textos, materiais de apoio, referências técnicas e publicações formativas.",
  },
  {
    icon: Mail,
    title: "Parceria ou contato",
    text:
      "Espaço para convites, eventos, projetos, cursos e iniciativas compatíveis com os valores técnicos, educacionais e institucionais.",
  },
];

export const complementary = [
  {
    icon: BookOpen,
    title: "Fé, valores e espiritualidade",
    text:
      "Reflexões cristãs, mensagens de vida e conteúdos relacionados à ética, ao propósito, à responsabilidade humana e à cidadania.",
  },
  {
    icon: Brain,
    title: "Inteligência artificial aplicada",
    text:
      "Uso responsável de IA na educação, produção de conhecimento, organização de materiais, comunicação e inovação na gestão pública.",
  },
  {
    icon: Megaphone,
    title: "Parcerias e indicações",
    text:
      "Espaço futuro para cursos, produtos, indicações e oportunidades compatíveis com os valores e a finalidade educativa do projeto.",
  },
];

export const transparencyNote =
  "Este espaço reúne conteúdos pessoais, acadêmicos, técnicos e profissionais. As opiniões e materiais aqui publicados são de responsabilidade autoral, salvo quando houver indicação expressa de vínculo institucional, fonte oficial ou autoria de terceiros.";
