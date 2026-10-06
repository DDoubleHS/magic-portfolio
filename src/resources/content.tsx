import { About, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Luan",
  lastName: "Costa",
  name: `Luan Costa`,
  role: "Fotógrafo",
  avatar: "/images/avatar.jpg",
  email: "costa.luanv@gmail.com",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Portuguese", "English"], // optional: Leave the array empty if you don't want to display languages
  locale: "pt", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/DDoubleHS",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/luanvcosta/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/luancosta.raw",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: false,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/CarroBG.jpg",
  label: "Home",
  title: "LuanCosta.Raw - Portifólio",
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Captando momentos através da luz. Fotografia cinematográfica.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Luan Costa</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projetos
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Me chamo {person.firstName} {person.lastName}. O meu trabalho explora a fotografia automobilística, arquitetura e retratos numa atmosfera <Text as="span" size="xl" weight="strong">cinematográfica</Text>. <br /> Foco em captar a essência visual através de contrastes pesados e luz dura.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre Mim",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/5511970209428?text=Ol%C3%A1%2C%20Luan!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20ensaio",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Com 21 anos e nascido em São Paulo, encontro na luz e nas sombras profundas a minha principal linguagem. Meu trabalho foca em fotografia automobilística, arquitetura e retratos, sempre buscando uma atmosfera cinematográfica. Mais do que apenas registrar, meu objetivo é esculpir as formas através do contraste absoluto, revelando a estética crua em cada detalhe.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "LC.RAW",
        timeframe: "2024 - Present",
        role: "Fotógrafo",
        achievements: [f
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formação",
    institutions: [
      {
        name: "Vinicius Waknin - Fotografia Avançada",
        description: <>Estudo sobre a fotografia avançada, pós edição e manipulação de luz.<br /> Professor: Vinicius Waknin.</>,
      },
      {
        name: "Leandro Duarte - Ensaios Internos / Externos / Sensuais",
        description: <>Estudo sobre Fotografia, ensaios internos, ensaios externos e sensuais. <br /> Professor: Leandro Duarte.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Fotografia & Pós-Produção",
        description: (
          <>Especialização em fotografia automotiva, arquitetura e retratos. Domínio de iluminação dura, estética Low-Key e retoque digital avançado.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Engenharia Audiovisual & TI",
        description: (
          <>Experiência em integração de sistemas, configuração de videowalls de alta complexidade e desenvolvimento de automações para salas de controle.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};


const work: Work = {
  path: "/work",
  label: "Projetos",
  title: `Projetos – ${person.name}`,
  description: `Projetos de fotografia e audiovisual por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Galeria de Fotos – ${person.name}`,
  description: `Repertório completo - ${person.name}`,

  images: [
    {
      src: "/images/gallery/Chevette.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/BMWFire.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Peace.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/SharkTire.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mercedes.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Dreams.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/NSX.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/FinalLight.jpg",
      alt: "image",
      orientation: "vertical",
    },
        {
      src: "/images/gallery/Colours.jpg",
      alt: "image",
      orientation: "vertical",
    },
       {
      src: "/images/gallery/Corte Frio.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Tyre.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Vitor.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Hunter Eye.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Flying.jpg",
      alt: "image",
      orientation: "vertical",
    },
    
    
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
