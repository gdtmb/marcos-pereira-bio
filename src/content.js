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
    "Conteúdo técnico, materiais, artigos e conteúdos voltados para reflexões sobre a matéria de trânsito, Direito de Trânsito, gestão pública, mobilidade, segurança viária, formação, cidadania e educação.",
  note:
    "Um espaço de organização, formação e difusão de conhecimento especializado, com linguagem técnica, institucional e acessível para profissionais, estudantes e interessados no trânsito.",
};

export const quickLinks = [
  { label: "Materiais técnicos", href: "#materiais", icon: Download },
  { label: "Artigos e publicações", href: "#materiais", icon: FileText },
  { label: "Aulas e formações", href: "#convites", icon: GraduationCap },
  { label: "Contato e convites", href: "#contato", icon: Mail },
];

export const constructionNotice = {
  enabled: true,
  title: "Espaço em construção",
  text:
    "Esta seção está em fase de organização e incorporação contínua de conteúdo. Novos materiais, artigos e publicações serão disponibilizados gradualmente.",
};

export const resources = [
  {
    tag: "Materiais técnicos",
    title: "Guias, modelos e documentos de apoio",
    text:
      "Reúne arquivos, roteiros, apresentações, modelos e materiais de consulta sobre trânsito, Direito de Trânsito e gestão pública.",
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
      "Reflexões sobre trânsito como fenômeno humano, social, jurídico, administrativo e educacional.",
  },
  {
    icon: Scale,
    title: "Direito de Trânsito",
    text:
      "Estudos e reflexões sobre aplicação normativa, processos administrativos de trânsito, atuação colegiada, competências institucionais e finalidade social da norma.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança viária",
    text:
      "Conteúdos orientados à preservação da vida, redução de riscos e responsabilidade coletiva na mobilidade.",
  },
  {
    icon: Users,
    title: "Gestão pública e cidadania",
    text:
      "Organização institucional, políticas públicas, participação social e qualificação da atuação estatal.",
  },
  {
    icon: GraduationCap,
    title: "Formação e educação",
    text:
      "Materiais voltados à docência, capacitações, educação para o trânsito e formação de profissionais.",
  },
  {
    icon: Brain,
    title: "Comportamento e mobilidade",
    text:
      "Psicologia do Trânsito, percepção de risco, conduta humana e cultura de segurança viária.",
  },
];

export const about = {
  eyebrow: "Quem sou",
  title: "Servidor público, educador e articulador institucional.",
  text:
    "Bacharel em Direito, especialista em Gestão e Direito de Trânsito, servidor público estadual efetivo do DETRAN-PE. Atua com visão técnica, jurídica, educacional e humana, reunindo experiência em colegiados, docência, capacitações, produção de materiais e participação em espaços de formulação e debate sobre segurança viária.",
  tags: ["Direito de Trânsito", "Gestão pública", "Educação", "Segurança viária"],
};

export const audience = [
  "Servidores, gestores e profissionais da área de trânsito",
  "Educadores, instrutores e profissionais da formação de condutores",
  "Estudantes e profissionais interessados em Direito de Trânsito",
  "Pesquisadores, docentes e interessados em segurança viária",
  "Pessoas que buscam conteúdo técnico com responsabilidade pública",
];

export const invitations = [
  {
    icon: CalendarDays,
    title: "Convidar para aula ou palestra",
    text:
      "Temas: matéria de trânsito, Direito de Trânsito, gestão pública, educação, segurança viária e mobilidade.",
  },
  {
    icon: FileText,
    title: "Solicitar material ou publicação",
    text:
      "Canal para organização de conteúdos, textos, materiais de apoio e referências técnicas.",
  },
  {
    icon: Mail,
    title: "Propor parceria ou contato",
    text:
      "Espaço para convites, cursos, eventos, projetos e iniciativas compatíveis com os valores do GDT.",
  },
];

export const complementary = [
  {
    icon: BookOpen,
    title: "Fé, valores e espiritualidade",
    text:
      "Reflexões cristãs, mensagens de vida e conteúdos que dialogam com ética, propósito e responsabilidade humana.",
  },
  {
    icon: Brain,
    title: "Inteligência artificial aplicada",
    text:
      "Uso responsável de IA para educação, produção de conhecimento, organização de materiais e inovação na gestão pública.",
  },
  {
    icon: Megaphone,
    title: "Parcerias e indicações",
    text:
      "Espaço futuro para cursos, produtos e oportunidades compatíveis com os valores do projeto.",
  },
];

export const transparencyNote =
  "Este espaço reúne conteúdos pessoais, acadêmicos e profissionais. As opiniões e materiais aqui publicados são de responsabilidade autoral, salvo quando houver indicação expressa de vínculo institucional ou fonte oficial.";
