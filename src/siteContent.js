export const WHATSAPP_NUMBER = "5511999837093";
export const WHATSAPP_MESSAGE =
  "Ola, gostaria de solicitar um orcamento com a Axis Industria.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contato", href: "/contato" },
];

export const HERO_HIGHLIGHTS = [
  "Solda",
  "Caldeiraria",
  "Usinagem",
];

export const ABOUT_DIFFERENTIALS = [
  "Projetos em CAD 3D",
  "Reforma e modernizacao industrial",
  "Caldeiraria, solda e usinagem",
  "Compromisso com resultado",
];

export const DIFFERENTIALS = [
  {
    title: "Leitura tecnica real",
    text: "Avaliacao do equipamento e do conjunto para propor a reforma certa para a operacao.",
    icon: "handshake",
  },
  {
    title: "Servico pesado",
    text: "Atuacao em estruturas, componentes robustos, eixos, rolamentos e conjuntos industriais.",
    icon: "gauge",
  },
  {
    title: "Execucao organizada",
    text: "Processo com criterio tecnico, seguranca, pintura e acabamento compativeis com a necessidade do cliente.",
    icon: "shield",
  },
  {
    title: "Solucao sob medida",
    text: "Cada reforma e adequacao parte da condicao real da maquina e da demanda operacional.",
    icon: "settings",
  },
];

export const PROJECTS = [
  {
    key: "estrutura-dobra-chapas",
    title: "Estrutura para automacao de dobra de chapas",
    text: "Fabricacao da estrutura metalica de uma maquina automatizada para dobra de chapas, com base robusta e preparacao para integracao do conjunto.",
    tags: ["Estrutura de maquina", "Dobra de chapas", "Caldeiraria"],
    accent: "project-visual--blueprint",
  },
  {
    key: "esteira-transportadora-palets",
    title: "Esteira transportadora para transporte de palets",
    text: "Projeto completo Axis para transporte de palets, com desenvolvimento, fabricacao da estrutura e integracao de uma esteira transportadora para operacao industrial.",
    tags: ["Esteira transportadora", "Palets", "Projeto completo"],
    accent: "project-visual--assembly",
  },
  {
    key: "pergolados-bem-estar",
    title: "Pergolados e bem-estar",
    text: "Linha de produtos Axis com pergolados, ninho e suporte de rede, unindo estrutura metalica, acabamento e propostas de conforto para ambientes residenciais e de lazer.",
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
    label: "Endereco",
    value: "R. Marcos Dian, 420 - Jardim de Lucca, Itatiba - SP, 13255-210",
    href: "https://www.google.com/maps/search/?api=1&query=R.+Marcos+Dian,+420+-+Jardim+de+Lucca,+Itatiba+-+SP,+13255-210",
    type: "map",
  },
];

export const FOOTER_SUMMARY = [
  "Caldeiraria industrial",
  "Solda",
  "Usinagem",
  "Projetos em CAD 3D",
  "Reforma industrial",
  "Solucoes sob medida",
];

export const FOOTER_COMMERCIAL = [
  "WhatsApp: (11) 99983-7093",
  "R. Marcos Dian, 420 - Jardim de Lucca, Itatiba - SP, 13255-210",
];

export const INOVA_SCRIPT_LINK = "https://site-inovascript.vercel.app/";
