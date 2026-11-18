export type ServiceId = "institutional" | "landing" | "redesign" | "store";

export type Service = {
  id: ServiceId;
  title: string;
  body: string;
  cta: string;
  message: string;
};

export const site = {
  metaTitle: "RZ design — Seu próximo endereço é digital",
  metaDescription:
    "A RZ design cria sites sob medida em São Paulo. Site institucional, landing page, loja online e reformulação.",
  skip: "Pular para o conteúdo",
  menuOpen: "Abrir menu",
  menuClose: "Fechar menu",
  book: "Agendar conversa",
  waGreeting: "Olá, vim pelo site da RZ design e gostaria de agendar uma conversa.",
  nav: [
    { href: "#servicos", label: "Serviços" },
    { href: "#processo", label: "Processo" },
    { href: "#contato", label: "Contato" },
  ],
  hero: ["Seu próximo", "endereço", "é digital."],
  about: {
    title: ["Sobre a", "RZ design"],
    body: "Somos uma empresa de design e desenvolvimento de sites, sediada em São Paulo. Criamos soluções sob medida para as necessidades de cada cliente, unindo clareza visual e experiência fácil de usar.",
  },
  services: {
    title: ["Nossos", "serviços"],
    lede: "De uma página objetiva a um site com mais caminhos, o projeto é dimensionado para o que seu negócio precisa comunicar agora — e preparado para evoluir.",
    items: [
      {
        id: "institutional",
        title: "Site institucional",
        body: "Páginas para apresentar seu negócio, explicar serviços e facilitar o contato.",
        cta: "Agendar conversa sobre um site",
        message: "Olá, RZ design. Quero conversar sobre um site institucional.",
      },
      {
        id: "landing",
        title: "Landing page",
        body: "Uma página objetiva para apresentar um serviço, campanha ou lançamento.",
        cta: "Agendar conversa sobre uma página",
        message: "Olá, RZ design. Quero conversar sobre uma landing page.",
      },
      {
        id: "redesign",
        title: "Reformulação de site",
        body: "Nós transformamos sites antigos ou desatualizados. Renovamos o visual, reorganizamos as informações e melhoramos a navegação para transmitir mais credibilidade, valorizar seus serviços e proporcionar uma experiência melhor aos seus clientes.",
        cta: "Agendar conversa sobre redesign",
        message: "Olá, RZ design. Quero conversar sobre a reformulação de um site.",
      },
      {
        id: "store",
        title: "Loja online",
        body: "Uma vitrine de produtos para apresentar suas opções e facilitar o contato, sem carrinho.",
        cta: "Agendar conversa sobre loja online",
        message: "Olá, RZ design. Quero conversar sobre uma loja online.",
      },
    ] satisfies Service[],
  },
  why: {
    title: ["Por que", "ter um", "site?"],
    note: "Um espaço próprio na internet ajuda as pessoas a entender o que você faz e a dar o próximo passo com confiança.",
    items: [
      {
        title: "Mais credibilidade",
        body: "Apresente seu negócio, deixe visível a sua forma de trabalhar em um lugar organizado e com a sua identidade.",
      },
      {
        title: "Presença a qualquer hora",
        body: "Seu site pode ser visitado mesmo quando você não está disponível para responder uma mensagem.",
      },
      {
        title: "Contato mais fácil",
        body: "Reúna as informações essenciais e mostre com clareza como alguém pode falar com você.",
      },
      {
        title: "Mais caminhos até você",
        body: "Uma presença bem estruturada ajuda quem procura o que você oferece a encontrar e conhecer seu negócio.",
      },
    ],
  },
  process: {
    title: ["Como o projeto", "acontece."],
    lede: "Um caminho claro para transformar as necessidades do teu negócio em uma presença digital própria.",
    steps: [
      {
        n: "01",
        title: "Conversa inicial",
        body: "Entendemos o seu negócio, seu público e o que o seu site precisa comunicar.",
      },
      {
        n: "02",
        title: "Estrutura e design",
        body: "Organizamos o conteúdo e definimos uma direção visual para as páginas.",
      },
      {
        n: "03",
        title: "Desenvolvimento e ajustes",
        body: "Construímos o site para diferentes telas e refinamos os detalhes com você.",
      },
      {
        n: "04",
        title: "Publicação",
        body: "Revisamos a experiência final e colocamos o site no ar.",
      },
    ],
  },
  contact: {
    title: ["Vamos", "conversar", "sobre o", "seu site?"],
    lede: "Tem uma ideia para o seu site? Chame a RZ design no WhatsApp e vamos conversar sobre o que você precisa.",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      service: "Serviço que deseja",
      servicePlaceholder: "Selecione um serviço",
      submit: "Enviar no WhatsApp",
      nameError: "Informe seu nome.",
      serviceError: "Selecione um serviço.",
    },
  },
} as const;
