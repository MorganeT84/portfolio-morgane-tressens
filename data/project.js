const techno = [
  {
    id: 1,
    name: "MYAS Gallery",
    text: "Une galerie d'art qui vient à vous",
    logo: "/images/logoMG.jpg",
    description: "MYAS Gallery ou <strong>Make Your Art Shine Gallery</strong> est une galerie d’art qui diffuse des œuvres à tous. Cette galerie a pour objectif de représenter des artistes émergeants  sur différents évènements partout en France et en Europe. Elle a la particularité d’exister uniquement dans des endroits éphémères pour rassembler amateurs d’art, collectionneurs et artistes. Pour le moment, MYAS Gallery est présente sur des salons dédiés à l’art, elle a pour objectif de s’exposer sur des lieux divers et atypiques.",
    objectifs: "MYAS Gallery allant à la rencontre de son public a besoin d’un outil pour favoriser sa visibilité, ainsi exposer les œuvres de ses artistes et informer les amateurs de sa présence sur différents évènements dédiés à l’art. L’application remplira ce rôle et permettra aussi de contacter la galeriste pour plus d'informations. Une deuxième application est nécessaire pour la gestion de ces informations  gérée par la galeriste elle-même. Ces deux interfaces vont permettre à MYAS Gallery d’évoluer et d’être vivant sur le web.",
    role: "Cette application est libre d’accès, aucune authentification n'est nécessaire pour naviguer sur le site. Pour le backoffice la galeriste sera admin, après s'être connectée elle pourra accéder à la modification, la suppression ou l’ajout d'œuvres, d’artistes et d'évènements. Un utilisateur non connecté n'a pas accès à ce back-office.",
    techno_front: [
      {
        id: 1,
        name: "HTML / JSX",
      },
      {
        id: 2,
        name: "CSS / SCSS",
      },
      {
        id: 3,
        name: "React",
      },
      {
        id: 4,
        name: "NextJs",
      },
      {
        id: 5,
        name: "Connection aux données :  Axios",
      },
      {
        id: 6,
        name: "Carousel : Embla-carousel",
      },
      {
        id: 7,
        name: "Carte : Leaflet",
      }
    ],
    techno_back: [
      {
        id: 1,
        name: "Doctrine : ORM (object relational mapping) > accès aux données",
      },
      {
        id: 2,
        name: "PhpMyAdmin / Adminer : gestionnaire de base de données",
      },
      {
        id: 3,
        name: "SQL/DQL: manipulation des données",
      },
      {
        id: 4,
        name: "Bootstrap",
      },
      {
        id: 5,
        name: "Twig",
      },
    ],
    gestion:[
      {
        id:1,
        gestion: "groupe",
        description:"Pour concrétiser ma formation, j’ai eu l'opportunité de développer les applications de la galerie d’art avec des étudiants de ma promo. Nous avons formé un groupe de 5 collaborateurs en réunissant nos spécialités. Deux membres de l’équipe se sont chargés de développer la partie Back-end en codant les différentes fonctionnalités nécessaires pour la création d’une API et l’accès aux données via le framework Symfony. Nous étions trois collaborateurs Front-end,  en utilisant la bibliothèque React pour créer une interface utilisateurs efficace et évolutive.<br/>Nous avons mis en place un cadre de développement de type scrum pour la gestion de notre projet en se rapprochant des principes agiles. J’ai rempli le rôle de Product owner pour représenter au mieux les demandes de notre client tout en adaptant  les contraintes techniques au projet. Étant en lien direct avec la galeriste, j’ai pu échanger sur son domaine professionnel pour mieux connaître les besoins d’une galerie d’art, les artistes représentés en tenant compte des objectifs de la cliente, pour transmettre à mon équipe le dessin de l’application que nous devons réaliser. Nous avons établie ensemble le cahier des charges, les maquettes responsives ainsi que le modèle de données nécessaire au contenu du site. <br/>Nous nous sommes rassemblés chaque matin, lors du daily scrum, une quinzaine de minutes avant de se mettre au travail pour montrer ce qui a été mis en place la veille, expliquer ce qui est prévu d’être mis en place dans la journée et parler des problématiques rencontrées. <br/>Nous avons mis en place 4 sprints d’une semaine pour organiser notre travail et présenter notre avancement à nos référents et la galeriste. Après avoir rempli notre objectif de groupe  en créant ces applications, nous avons présenté nos fonctionnalités sur la chaîne Youtube de l’école. (<a href='https://www.youtube.com/watch?v=e5l7CurAFEw' title='lien vers youtube présentation de projets'>https://www.youtube.com/watch?v=e5l7CurAFEw  49ème min</a>)" 
      },
      {
        id:2,
        gestion: "autonomie pour une deuxième version front",
        description:"Ce projet étant destiné à être déployé dans le but de promouvoir l’activité d’une galerie d’art, je me suis penchée sur son amélioration en prenant en compte les objectifs SEO et accessibilités. En effet, nous avons utilisé une bibliothèque de javascript (React) qui opère un rendu asynchrone dans le navigateur du client, de ce fait, côté serveur la page HTML est vierge donc les robots d’indexations vont ignorer mon application. Il est impératif que mon application dispose d’un rendu serveur, j’ai donc utilisé le framework NextJs qui gère le SSR (server side rendering). Je me suis servi de tous les composants React développés avec mes collaborateurs en les adaptant au framework. <br/> Ensuite j’ai effectué plusieurs recherches pour la rédaction des différentes métadonnées utiles au référencement,  j’ai aussi amélioré la structure du code en prenant attention à la structure des balises HTML. J’ai utilisé le package next-sitemap pour la génération du fichier robots.txt et des différents sitemap du site. Prochainement j'envisage de refaire le back-end dans le but d'apporter des améliorations avec mes nouvelles connaissances ainsi que répondre à la demande de la galeriste en fonction de son activité"
      }
    ],
    deployement: [
      {
        id: 1,
        type: "VPS",
        name: "Hostinger",
        description:"Est venu l’heure de la mise en ligne des applications de la galerie d’art. La galeriste avait réservé son nom de domaine lorsqu’elle a décidé du nom de son entreprise. De mon côté, je me suis penchée sur le choix d’un hébergeur adapté à mon développement. Ayant utilisé du PHP pour le back-end et du Node pour le serveur side rendering, je ne peux pas utiliser un serveur mutualisé. Je me suis orienté vers la plateforme Hostinger qui propose un serveur VPS qui me permet de configurer tout ce dont j’ai besoin. J’ai choisi le système d’exploitation Ubuntu 18.04 et j’ai installé via la ligne de commande Nginx comme serveur web ainsi que MySQL, PHP et Node. J’ai configuré github sur le VPS pour enregistrer mes projets et ainsi pouvoir les mettre à jour facilement en cas de modifications. Sur le site d’Hostinger, j’ai configuré les redirections DNS en lien avec le nom de domaine vers l’ip du VPS puis j’ai appliqué sur Nginx les redirections vers le port où est lancé le projet. <br/>Bien sûre, j'ai rencontré plusieurs difficultés pour mettre en place tout cela mais grâce à l'entraide entre développeurs et de multiples recherches, j'ai toujours fini par trouver une solution."
      }
    ],
    url: "https://myasgallery.com/"
  },
  {
    id: 2,
    name: "Thérapeute Christine Toledo",
    text: "Tranfert quantique et Pler-Mo",
    logo: "/images/logoCT.png",
    description: "Christine Toledo est une thérapeute qui propose des thérapies pour le bien être psychique de ses patients.",
    objectifs: "La thérapeute a besoin de visibilité sur pour mettre en avant et décrire ses pratiques à de potentiels patients ainsi que les tarifs pratiqués. Il y aura une page biographie pour présenter celle-ci ainsi qu'une page contact contenant ses coordonnées. L'application permettra de contacter la thérapeute pour plus d'information ou la prise de rendez-vous. ",
    role: "Cette application est libre d’accès, aucune authentification n'est nécessaire pour naviguer sur le site.",
    techno_front: [
      {
        id: 1,
        name: "HTML/JSX",
      },
      {
        id: 2,
        name: "CSS / SCSS",
      },
      {
        id: 3,
        name: "React",
      },
      {
        id: 4,
        name: "NextJs",
      }
    ],
    techno_back: [
      {
        id: 1,
        name: "Node > serveur pour la récupération des données du formulaire de contact",
      },
      {
        id: 2,
        name: "dotenv > utilisation des mots de passe sécurisé",
      },
      {
        id: 3,
        name: "Nodemailer > pour l'envoie des données du formulaire sur l'adresse mail du client",
      },
    ],
    gestion: [
      {
        id: 1,
        gestion: "autonomie",
        description: "Nous nous sommes réunis pour avec la thérapeute pour mettre au point l’apparence et le contenu souhaité de son projet. À partir de là, j’ai pu rédiger le cahier des charges qui va me servir de plan pour la réalisation de l’interface.<br/>J’ai ensuite réalisé les frameworks pour visualiser les différentes fonctionnalités demandées. Puis j’ai réalisé des maquettes graphiques du site, dans les versions desktop et mobile, que j’ai soumis à la thérapeute en attendant leur validation pour commencer la partie technique.<br/>Ayant l’expérience du site précédent, j’ai choisi d’utiliser le framework NextJs pour développer l’application en React et ainsi bénéficier du “Server side rendering” pour un meilleur référencement.<br/>En ce qui concerne le formulaire de contact, n’ayant pas étudié node durant ma formation, j’ai fait des recherches en ce sens pour réussir à implémenter la récupération des données et les transmettre par sur le mail de la thérapeute. Globalement NextJs facilite l’opération en utilisant le package nodemailer. <br/>J’ai mis en place une réunion avec la thérapeute à la fin de mon intégration pour lui montrer l’avancement de mon travail puis j’ai inclus le contenu qu’elle me fournissait. J’ai utilisé Github pour enregistrer et évoluer dans mon code. En parallèle, j’ai exploité le potentiel de Nextjs avec le service cloud Vercel qui m’a permis de déployer le site en temps réel après chaque “commit” qui clôturait l’aboutissement du développement d'une fonctionnalité. Cet outil a permis à la thérapeute de prendre en main son application avec le déploiement final."
      }
    ],
    deployement: [
      {
        id: 1,
        type: "mutualisé",
        name: "PlanetHoster",
        description:"en cours ..."
      }
    ],
    url: "https://therapeute.christinetoledo.fr/"
  }
]

export default techno;