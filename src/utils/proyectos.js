const projects = [
  {
    id: 10,
    name: "Calles Construction",
    year: 2024,
    month: "Sep",
    author: "Brandon Castillo",
    image:
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732610191/calles.png",
    web: "https://calles-construction.vercel.app/",
    youtube: "https://www.youtube.com/embed/tPLa2s6PF-E",
    video: "https://www.youtube.com/watch?v=tPLa2s6PF-E",
    github: "http://github.com/pibelanzallamas/calles-construction",
    description:
      "Web site to showcase Calle's Construction different works, from drywall, to electricity, allows to upload jobs with details and images.",
    descripcion:
      "Sitio web explorador e informativo de los trabajos realizados por la empresa de construccion Calle's Construction ubicada en New Jersey, permite agregar trabajos con detalle e imagenes.",
    tags: ["react", "vite", "sass", "axios", "javascript"],
  },
  {
    id: 9,
    name: "Yu-Gi-Oh! Randomizer!",
    year: 2024,
    month: "Jul",
    author: "Brandon Castillo",
    image:
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732663508/yugi.png",
    web: "https://givemeayugiohcard.vercel.app/",
    youtube: "https://www.youtube.com/embed/ffR6Gch-64M?si=sXYb7vc3YC0FX-9z",
    video: "https://www.youtube.com/watch?v=ffR6Gch-64M",
    github: "http://github.com/pibelanzallamas/givemeayugiohcard",
    description: "Get a Yu-Gi-Oh! card.",
    descripcion: "Obtene un carta Yu-Gi-Oh!",
    tags: ["react", "vite", "sass", "axios", "javascript"],
  },
  {
    id: 8,
    name: "Mood Checker",
    year: 2024,
    month: "Jul",
    author: "Brandon Castillo",
    image:
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732664586/mood.png",
    web: "https://calles-construction.vercel.app/",
    youtube: "https://www.youtube.com/embed/uBFMMUuiVNg?si=eEaU3xc94zIVHRlR",
    video: "https://www.youtube.com/watch?v=uBFMMUuiVNg",
    github: "http://github.com/pibelanzallamas/calles-construction",
    description: "Website for recommending music based on your mood.",
    descripcion: "Sitio web que te recomienda musica segun tu estado de animo.",
    tags: ["react", "vite", "sass", "axios", "javascript"],
  },
  {
    id: 7,
    name: "Abuelitos",
    year: 2024,
    month: "May",
    author: "Brandon Castillo",
    image:
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732665477/elder.png",
    web: "https://yourelder.vercel.app/",
    youtube: "https://www.youtube.com/embed/Ch5kE_baIUA?si=j8ZKJAfV1SqcWlQV",
    video: "https://www.youtube.com/watch?v=Ch5kE_baIUA",
    github: "http://github.com/pibelanzallamas/yourelder",
    description: "Youtube song searcher for elders.",
    descripcion: "Buscador de Youtube más simplificado.",
    tags: ["react", "html", "youtube"],
  },
  {
    id: 6,
    name: "Carbon Copy",
    year: 2024,
    month: "May",
    author: "Brandon Castillo",
    image:
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732568128/carbon.png",
    web: "http://carbon-copy-omega.vercel.app",
    youtube: "https://www.youtube.com/embed/Nm8IPGoRfsI?si=h4T4HCtKldUgbeUb",
    video: "https://www.youtube.com/watch?v=Nm8IPGoRfsI",
    github: "https://github.com/pibelanzallamas/carbon-copy",
    description: "Application to edit and export code to PNG images.",
    descripcion: "Aplicación para editar y exportar código a imágenes PNG.",
    tags: [
      "react",
      "redux",
      "nodejs",
      "sass",
      "dotenv",
      "jwt",
      "javascript",
      "ace-react",
      "sequelize",
      "postgres",
    ],
  },
  {
    id: 5,
    name: "Dreamer Paintings",
    year: 2023,
    month: "nov",
    author: "Brandon Castillo",
    image:
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732626769/dreamer.png",
    darkimage: "/projects-img/dp/dreamer-paintings-dark.png",
    web: "https://dreamer-paintings.vercel.app",
    youtube: "https://www.youtube.com/embed/vVAOLCLHERQ?si=VWodVsSxDQwnyytl",
    video: "https://www.youtube.com/watch?v=vVAOLCLHERQ",
    github: "https://github.com/pibelanzallamas/dreamers-paintings",
    description:
      "Exploratory and informative website showcasing the paintings of a talented friend from the city of Buenos Aires.",
    descripcion:
      "Sitio web explorador e informativo de las pinturas de un talentoso amigo, de la ciudad de Buenos Aires.",
    tags: ["react", "redux", "sass", "vite", "javascript", "html", "css"],
  },
  {
    id: 4,
    name: "House of Dev",
    year: 2023,
    month: "sep",
    author: "Brandon Castillo",
    image:
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732568386/house.png",
    web: "https://house-of-dev-client.vercel.app",
    youtube: "https://www.youtube.com/embed/ihdiqy8aBIU?si=wYhTO8X4uZLANW6c",
    video: "https://www.youtube.com/watch?v=ihdiqy8aBIU",
    github: "https://github.com/pibelanzallamas/house-of-dev-client-deploy",
    description:
      "Web application for searching properties with various filters, sorting options, favorites, scheduling appointments, email confirmation, and admin mode.",
    descripcion:
      "Aplicación web para buscar propiedades con diversos filtros, opciones de ordenamiento, favoritos, programación de citas, confirmación por correo electrónico y modo administrador.",
    tags: [
      "html",
      "css",
      "javascript",
      "nodejs",
      "express",
      "postgres",
      "sequelize",
      "jwt",
      "mui",
      "redux",
    ],
  },
  {
    id: 3,
    name: "My Movie Crib",
    year: 2023,
    month: "jul",
    author: "Brandon Castillo",
    image:
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732567910/crib.png",
    web: "https://my-movie-crib-front.vercel.app/1",
    youtube: "https://player.vimeo.com/video/897978371?h=3227292034",
    video: "https://vimeo.com/897978371?share=copy",
    github: "https://github.com/pibelanzallamas/my-movie-crib-front",
    description:
      "Web application for searching movies, viewing the trending ones, saving favorites, and visiting their websites.",
    descripcion:
      "Aplicación web para buscar películas, ver las más populares, guardar favoritas y visitar sus sitios web.",
    tags: [
      "html",
      "css",
      "javascript",
      "nodejs",
      "express",
      "postgres",
      "sequelize",
      "bulma",
      "jwt",
    ],
  },
  {
    id: 2,
    name: "Metalhead",
    year: 2023,
    month: "may",
    author: "Brandon Castillo",
    image:
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732841668/metal.png",
    web: "https://pibelanzallamas.github.io/metalhead",
    youtube: "https://www.youtube.com/embed/MixyinKSZhk?si=Oo-y5EnDjF4wcmSJ",
    video: "https://www.youtube.com/watch?v=MixyinKSZhk",
    github: "https://github.com/pibelanzallamas/metalhead",
    description:
      "Little project that includes a mixtape of ps1 videogames, breakcore music and live nineties bands.",
    descripcion:
      "Pequeño proyecto que incluye una mezcla de videojuegos de PS1, música breakcore y bandas de los noventa",
    tags: ["html", "css", "nodejs", "express", "postgres", "sql"],
  },
  {
    id: 1,
    name: "Sacrificial Suicide",
    year: 2023,
    month: "feb",
    author: "Brandon Castillo",
    image:
      "https://res.cloudinary.com/daynclfo8/image/upload/v1732841819/sacri.png",
    web: "https://pibelanzallamas.github.io/sacrificial-suicide/",
    youtube: "https://www.youtube.com/embed/5aZPzEy0ANc?si=A7DxxHmdLj-j5wnN",
    video: "https://www.youtube.com/watch?v=5aZPzEy0ANc",
    github: "https://github.com/pibelanzallamas/sacrificialsuicide",
    description: "Little project that counts your days alive.",
    descripcion: "Pequeño proyecto que te calcula los días vivo.",
    tags: ["html", "css", "nodejs", "express", "postgres", "sql"],
  },
];

export default projects;
