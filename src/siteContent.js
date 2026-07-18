export const WHATSAPP_NUMBER = "5511999837093";
export const WHATSAPP_MESSAGE =
  "Olá, gostaria de solicitar um orçamento com a Figueroa Indústria.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const NAV_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contato", href: "/contato" },
];

export const HERO_HIGHLIGHTS = ["Solda", "Caldeiraria", "Usinagem"];

export const ABOUT_DIFFERENTIALS = [
  "Projetos em CAD 3D",
  "Reforma e modernização industrial",
  "Caldeiraria, solda e usinagem",
  "Compromisso com resultado",
];

export const DIFFERENTIALS = [
  {
    title: "Leitura técnica real",
    text: "Avaliação do equipamento e do conjunto para propor a reforma certa para a operação.",
    icon: "handshake",
  },
  {
    title: "Serviço pesado",
    text: "Atuação em estruturas, componentes robustos, eixos, rolamentos e conjuntos industriais.",
    icon: "gauge",
  },
  {
    title: "Execução organizada",
    text: "Processo com critério técnico, segurança, pintura e acabamento compatíveis com a necessidade do cliente.",
    icon: "shield",
  },
  {
    title: "Solução sob medida",
    text: "Cada reforma e adequação parte da condição real da máquina e da demanda operacional.",
    icon: "settings",
  },
];

export const PROJECTS = [
  {
    key: "estrutura-dobra-chapas",
    title: "Estrutura para automação de dobra de chapas",
    text: "Fabricação da estrutura metálica de uma máquina automatizada para dobra de chapas, com base robusta e preparação para integração do conjunto.",
    tags: ["Estrutura de máquina", "Dobra de chapas", "Caldeiraria"],
    accent: "project-visual--blueprint",
  },
  {
    key: "esteira-transportadora-palets",
    title: "Esteira transportadora para transporte de paletes",
    text: "Projeto completo da Figueroa para transporte de paletes, com desenvolvimento, fabricação da estrutura e integração de uma esteira transportadora para operação industrial.",
    tags: ["Esteira transportadora", "Paletes", "Projeto completo"],
    accent: "project-visual--assembly",
  },
  {
    key: "pergolados-bem-estar",
    title: "Pergolados e bem-estar",
    text: "Linha de produtos da Figueroa com pergolados, ninho e suporte de rede, unindo estrutura metálica, acabamento e propostas de conforto para ambientes residenciais e de lazer.",
    tags: ["Pergolado", "Ninho", "Suporte de rede"],
    accent: "project-visual--flow",
  },
];

export const CONTACT_DETAILS = [
  {
    label: "Telefone / WhatsApp",
    value: "(11) 99983-7093",
    href: WHATSAPP_LINK,
    type: "phone",
  },
  {
    label: "Endereço",
    value: "Olympia da Silveira Franco, 63 - Lt. Jd. Arizona, Itatiba - SP, CEP 13255-155",
    href: "https://www.google.com/maps/search/?api=1&query=Olympia+da+Silveira+Franco,+63,+Lt.+Jd.+Arizona,+Itatiba,+SP,+13255-155",
    type: "map",
  },
];

export const FOOTER_SUMMARY = [
  "Caldeiraria industrial",
  "Solda",
  "Usinagem",
  "Projetos em CAD 3D",
  "Reforma industrial",
  "Soluções sob medida",
];

export const FOOTER_COMMERCIAL = [
  "WhatsApp: (11) 99983-7093",
  "Olympia da Silveira Franco, 63 - Lt. Jd. Arizona, Itatiba - SP, CEP 13255-155",
];

export const INOVA_SCRIPT_LINK = "https://site-inovascript.vercel.app/";
