import {
  BriefcaseBusiness,
  Factory,
  Building2,
  Compass,
  Globe2,
  GraduationCap,
  Handshake,
  Hotel,
  Landmark,
  Lightbulb,
  LucideIcon,
  Pickaxe,
  PackageSearch,
  Plane,
  ShoppingBag,
  Ticket,
  UsersRound,
  Truck,
  Zap,
} from "lucide-react";

export type Service = {
  slug: string;
  label: string;
  shortLabel: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  accent: string;
  outcomes: string[];
  tabs: string[];
  subservices: string[][];
  architecture:
    | "strategic"
    | "pipeline"
    | "people"
    | "trade"
    | "academic"
    | "property"
    | "network"
    | "travel"
    | "affiliate"
    | "mining";
  /** Real editorial photography used for the service surface. */
  image: string;
};

export type Program = {
  id: number;
  country: string;
  university: string;
  city: string;
  level: "Bachelor" | "Master" | "Doctorat";
  field: string;
  intake: string;
  cost: string;
  website: string;
  description: string;
  documents: string[];
  tags: string[];
};

const commonDocs = [
  "Passeport",
  "Diplôme ou relevés",
  "CV",
  "Lettre de motivation",
];

export const services: Service[] = [
  {
    slug: "mines",
    image: "/assets/global-mines.jpg",
    architecture: "mining",
    label: "Mines",
    shortLabel: "Mines",
    eyebrow: "01 / ressources & valeur",
    description: "Structurer des opportunités minières responsables, de la qualification au partenariat.",
    longDescription: "Global Impact Holdings SARL accompagne l’identification, la qualification et la mise en relation autour de projets miniers en Afrique, avec une attention portée aux données techniques, aux parties prenantes et aux exigences ESG.",
    icon: Pickaxe,
    accent: "from-amber-500/20 to-orange-400/10",
    outcomes: ["Cartographie d’opportunités", "Qualification des partenaires", "Coordination responsable"],
    tabs: ["Présentation", "Opportunités", "Partenaires", "Responsabilité", "Nous contacter"],
    subservices: [["Cadrage du projet", "Zone & ressource", "Objectifs d’exploitation"], ["Recherche d’opportunités", "Lecture documentaire", "Mise en relation"], ["Partenaires techniques", "Institutions", "Investisseurs"], ["Risques & conformité", "Dialogue local", "Suivi ESG"], ["Brief minier", "Réunion de qualification", "Espace sécurisé"]],
  },
  {
    slug: "energie",
    image: "/assets/global-energy.jpg",
    architecture: "strategic",
    label: "Énergie",
    shortLabel: "Énergie",
    eyebrow: "02 / transition & puissance",
    description: "Relier les projets énergétiques aux expertises, capitaux et partenaires adaptés.",
    longDescription: "Nous facilitons la compréhension des projets d’énergie, des besoins d’infrastructure et des alliances nécessaires pour faire progresser des solutions fiables en Afrique et à l’international.",
    icon: Zap,
    accent: "from-yellow-500/20 to-amber-400/10",
    outcomes: ["Lecture de projet", "Recherche de partenaires", "Feuille de route opérationnelle"],
    tabs: ["Présentation", "Projets", "Partenaires", "Déploiement", "Nous contacter"],
    subservices: [["Cadrage énergétique", "Besoins & capacité", "Zone d’intervention"], ["Solaire", "Réseaux", "Solutions hybrides"], ["Opérateurs", "Fournisseurs", "Financeurs"], ["Plan de déploiement", "Coordination", "Suivi"], ["Brief énergie", "Qualification", "Espace sécurisé"]],
  },
  {
    slug: "industrie",
    image: "/assets/global-industry.jpg",
    architecture: "strategic",
    label: "Industrie",
    shortLabel: "Industrie",
    eyebrow: "03 / capacités & production",
    description: "Développer des passerelles industrielles entre savoir-faire, marchés et territoires.",
    longDescription: "Global Impact accompagne les projets industriels dans la recherche de capacités, d’équipements, de fournisseurs et de partenaires capables de soutenir une croissance structurée.",
    icon: Factory,
    accent: "from-slate-500/20 to-cyan-400/10",
    outcomes: ["Diagnostic de capacité", "Sourcing industriel", "Partenariats de production"],
    tabs: ["Présentation", "Capacités", "Sourcing", "Partenariats", "Nous contacter"],
    subservices: [["Objectifs industriels", "Capacité cible", "Calendrier"], ["Équipements", "Sous-traitance", "Unités de production"], ["Recherche fournisseurs", "Qualification", "Contrôle documentaire"], ["Coopération B2B", "Transfert de savoir-faire", "Distribution"], ["Brief industrie", "Visio de cadrage", "Suivi sécurisé"]],
  },
  {
    slug: "commerce-international",
    image: "/assets/global-trade.jpg",
    architecture: "trade",
    label: "Commerce international",
    shortLabel: "Commerce",
    eyebrow: "04 / échanges & marchés",
    description: "Fluidifier l’import-export, de la négociation à la livraison.",
    longDescription: "Nous accompagnons les échanges internationaux avec une approche concrète des marchés, des documents, des partenaires, des Incoterms et des points de passage critiques.",
    icon: ShoppingBag,
    accent: "from-cyan-500/20 to-teal-400/10",
    outcomes: ["Import / export", "Partenaires commerciaux", "Documentation des flux"],
    tabs: ["Présentation", "Marchés", "Import / Export", "Partenariats", "Nous contacter"],
    subservices: [["Choix du marché", "Brief produit", "Plan commercial"], ["Incoterms", "Documentation export", "Coordination douanière"], ["Distributeurs", "Acheteurs", "Accords de coopération"], ["Négociation", "Suivi des commandes", "Relation locale"], ["Brief commerce", "Analyse de faisabilité", "Devis"]],
  },
  {
    slug: "logistique",
    image: "/assets/global-logistics.jpg",
    architecture: "pipeline",
    label: "Logistique",
    shortLabel: "Logistique",
    eyebrow: "05 / flux & exécution",
    description: "Organiser les flux, les délais et les interfaces qui font avancer les opérations.",
    longDescription: "De la recherche de prestataires au suivi des étapes, Global Impact aide à rendre les chaînes logistiques internationales plus lisibles, coordonnées et documentées.",
    icon: Truck,
    accent: "from-orange-500/20 to-rose-400/10",
    outcomes: ["Transport multimodal", "Prestataires qualifiés", "Suivi des délais"],
    tabs: ["Présentation", "Flux", "Prestataires", "Suivi", "Nous contacter"],
    subservices: [["Origine & destination", "Volume", "Délai cible"], ["Route maritime", "Route aérienne", "Transport terrestre"], ["Transitaires", "Douane", "Entrepôts"], ["Documents", "Tracking", "Gestion des écarts"], ["Brief logistique", "Demande de devis", "Suivi sécurisé"]],
  },
  {
    slug: "expertise-internationale",
    image: "/assets/global-expertise.jpg",
    architecture: "network",
    label: "Expertise internationale",
    shortLabel: "International",
    eyebrow: "06 / regard global",
    description: "Lire les environnements internationaux, relier les opportunités et sécuriser les décisions.",
    longDescription: "Nous transformons les enjeux transfrontaliers en feuilles de route lisibles : analyse de contexte, mise en relation qualifiée et coordination des parties prenantes.",
    icon: Globe2,
    accent: "from-violet-500/20 to-fuchsia-400/10",
    outcomes: ["Cartographie d’opportunités", "Veille sectorielle", "Coordination multi-pays"],
    tabs: ["Présentation", "Domaines", "Méthodologie", "Pays", "Nous contacter"],
    subservices: [["Diagnostic international", "Cadrage de projet", "Note de contexte"], ["Mines", "Énergie", "Industrie & commerce"], ["Recherche ciblée", "Lecture des risques", "Feuille de route"], ["Guinée", "Afrique", "International"], ["Brief de qualification", "Devis", "Espace sécurisé"]],
  },
  {
    slug: "investissement-start-up",
    image: "/assets/global-startups.jpg",
    architecture: "strategic",
    label: "Recherche d’investissement pour start-up",
    shortLabel: "Start-up",
    eyebrow: "07 / capital & croissance",
    description: "Préparer les start-up à rencontrer les bons investisseurs et partenaires de croissance.",
    longDescription: "Global Impact recherche des pistes d’investissement et de partenariat pour des start-up à potentiel, en clarifiant le projet, le marché, les besoins de financement et les prochaines étapes.",
    icon: Lightbulb,
    accent: "from-emerald-500/20 to-lime-400/10",
    outcomes: ["Qualification du projet", "Recherche d’investisseurs", "Préparation des échanges"],
    tabs: ["Présentation", "Projet", "Investisseurs", "Préparation", "Nous contacter"],
    subservices: [["Vision & problème", "Produit", "Traction"], ["Marché cible", "Modèle économique", "Besoin de financement"], ["Fonds", "Business angels", "Partenaires stratégiques"], ["Pitch deck", "Data room", "Rendez-vous"], ["Brief start-up", "Recherche ciblée", "Suivi confidentiel"]],
  },
];

export const programs: Program[] = [
  {
    id: 1,
    country: "France",
    university: "Partenaire de Bordeaux",
    city: "Bordeaux",
    level: "Master",
    field: "Commerce international",
    intake: "Septembre 2027",
    cost: "3 770 € / an indicatif",
    website: "https://www.u-bordeaux.fr",
    description:
      "Un parcours pour comprendre les environnements commerciaux, les flux et les stratégies de développement à l’international.",
    documents: [...commonDocs, "Certificat TCF / TEF"],
    tags: ["France", "Business", "Anglais / Français"],
  },
  {
    id: 2,
    country: "France",
    university: "Partenaire Paris Cité",
    city: "Paris",
    level: "Master",
    field: "Relations internationales",
    intake: "Septembre 2027",
    cost: "à préciser selon programme",
    website: "https://u-paris.fr",
    description:
      "Une formation pluridisciplinaire pour analyser les dynamiques internationales, les institutions et les projets transfrontaliers.",
    documents: [...commonDocs, "Relevés de notes", "Preuve de langue"],
    tags: ["France", "International", "Français"],
  },
  {
    id: 3,
    country: "France",
    university: "Partenaire de Strasbourg",
    city: "Strasbourg",
    level: "Bachelor",
    field: "Sciences économiques et gestion",
    intake: "Septembre 2027",
    cost: "à préciser selon programme",
    website: "https://www.unistra.fr",
    description:
      "Un environnement européen pour construire des bases solides en économie, gestion et mobilité académique.",
    documents: [...commonDocs, "Diplôme secondaire", "Preuve de langue"],
    tags: ["France", "Europe"],
  },
  {
    id: 4,
    country: "Canada",
    university: "Partenaire de Montréal",
    city: "Montréal",
    level: "Master",
    field: "Gestion internationale",
    intake: "Automne 2027",
    cost: "à préciser selon profil",
    website: "https://umontreal.ca",
    description:
      "Une formation ouverte sur les marchés mondiaux, l’innovation et la gestion de projets dans des contextes multiculturels.",
    documents: [...commonDocs, "Preuve de langue"],
    tags: ["Canada", "Gestion", "Français"],
  },
  {
    id: 5,
    country: "Canada",
    university: "Partenaire Laval",
    city: "Québec",
    level: "Master",
    field: "Administration des affaires",
    intake: "Automne 2027",
    cost: "à préciser selon programme",
    website: "https://www.ulaval.ca",
    description:
      "Un parcours de gestion et de leadership dans un écosystème francophone nord-américain.",
    documents: [...commonDocs, "GMAT selon programme", "Preuve de langue"],
    tags: ["Canada", "MBA", "Français"],
  },
  {
    id: 6,
    country: "USA",
    university: "University of Illinois Chicago",
    city: "Chicago",
    level: "Bachelor",
    field: "Business Administration",
    intake: "Fall 2027",
    cost: "$34 000 / an indicatif",
    website: "https://www.uic.edu",
    description:
      "Une première expérience académique structurante, au cœur d’un écosystème entrepreneurial et international.",
    documents: [...commonDocs, "Diplôme secondaire", "TOEFL / IELTS"],
    tags: ["USA", "Business", "Anglais"],
  },
  {
    id: 7,
    country: "USA",
    university: "Arizona State University",
    city: "Tempe",
    level: "Master",
    field: "Global Management",
    intake: "Fall 2027",
    cost: "$32 000 / an indicatif",
    website: "https://www.asu.edu",
    description:
      "Un programme tourné vers le management global, l’innovation et les environnements professionnels multiculturels.",
    documents: [...commonDocs, "Diplôme Licence", "TOEFL / IELTS"],
    tags: ["USA", "Management", "Anglais"],
  },
  {
    id: 8,
    country: "Chine",
    university: "Zhejiang University",
    city: "Hangzhou",
    level: "Master",
    field: "International Business",
    intake: "Septembre 2027",
    cost: "à préciser selon programme",
    website: "https://www.zju.edu.cn",
    description:
      "Une partenaire de recherche reconnue, avec une ouverture forte sur l’Asie et les chaînes de valeur mondiales.",
    documents: [...commonDocs, "Plan d’études", "Certificat de langue"],
    tags: ["Chine", "Asie", "Anglais"],
  },
  {
    id: 9,
    country: "Chine",
    university: "Tsinghua University",
    city: "Pékin",
    level: "Master",
    field: "Public Policy & Management",
    intake: "Septembre 2027",
    cost: "à préciser selon programme",
    website: "https://www.tsinghua.edu.cn",
    description:
      "Un environnement académique international pour comprendre politiques publiques, innovation et développement.",
    documents: [...commonDocs, "Plan d’études", "Certificat de langue"],
    tags: ["Chine", "Policy", "Anglais / Chinois"],
  },
  {
    id: 10,
    country: "Russie",
    university: "HSE University",
    city: "Moscou",
    level: "Master",
    field: "Management & Analytics",
    intake: "Septembre 2027",
    cost: "à préciser selon programme",
    website: "https://www.hse.ru",
    description:
      "Un environnement académique exigeant pour croiser management, données et compréhension des marchés.",
    documents: [...commonDocs, "Lettre de motivation"],
    tags: ["Russie", "Data", "Anglais / Russe"],
  },
  {
    id: 11,
    country: "Russie",
    university: "RUDN University",
    city: "Moscou",
    level: "Bachelor",
    field: "International Relations",
    intake: "Septembre 2027",
    cost: "à préciser selon programme",
    website: "https://www.rudn.ru",
    description:
      "Une communauté universitaire internationale et une orientation forte vers les relations entre régions du monde.",
    documents: [...commonDocs, "Diplôme secondaire", "Preuve de langue"],
    tags: ["Russie", "Relations internationales"],
  },
  {
    id: 12,
    country: "Roumanie",
    university: "Bucharest University of Economic Studies",
    city: "Bucarest",
    level: "Bachelor",
    field: "International Economics",
    intake: "Octobre 2027",
    cost: "2 800 € / an indicatif",
    website: "https://www.ase.ro",
    description:
      "Un parcours européen accessible pour bâtir des fondamentaux solides en économie et commerce international.",
    documents: [...commonDocs, "Diplôme secondaire", "Preuve de langue"],
    tags: ["Roumanie", "Europe", "Anglais"],
  },
  {
    id: 13,
    country: "Roumanie",
    university: "Babeș-Bolyai University",
    city: "Cluj-Napoca",
    level: "Master",
    field: "International Business Management",
    intake: "Septembre 2027",
    cost: "à préciser selon programme",
    website: "https://www.ubbcluj.ro",
    description:
      "L’Partenaire Babeș-Bolyai de Cluj-Napoca propose un environnement académique multiculturel, avec des parcours en gestion, économie et études européennes.",
    documents: [...commonDocs, "Diplôme Licence", "Preuve de langue"],
    tags: ["Roumanie", "Cluj-Napoca", "Management"],
  },
  {
    id: 14,
    country: "Roumanie",
    university: "Alexandru Ioan Cuza University",
    city: "Iași",
    level: "Master",
    field: "European Studies",
    intake: "Septembre 2027",
    cost: "à préciser selon programme",
    website: "https://www.uaic.ro",
    description:
      "Une partenaire historique de Iași pour approfondir les politiques européennes, la coopération et la mobilité.",
    documents: [...commonDocs, "Diplôme Licence", "Preuve de langue"],
    tags: ["Roumanie", "Iași", "Europe"],
  },
  {
    id: 15,
    country: "Pologne",
    university: "Kozminski University",
    city: "Varsovie",
    level: "Master",
    field: "Strategic Management",
    intake: "Octobre 2027",
    cost: "à préciser selon programme",
    website: "https://www.kozminski.edu.pl",
    description:
      "Un programme orienté décision, leadership et développement dans des environnements économiques en mouvement.",
    documents: [...commonDocs, "Lettre de recommandation"],
    tags: ["Pologne", "Management", "Anglais"],
  },
  {
    id: 16,
    country: "Pologne",
    university: "University of Warsaw",
    city: "Varsovie",
    level: "Bachelor",
    field: "International Relations",
    intake: "Octobre 2027",
    cost: "à préciser selon programme",
    website: "https://www.uw.edu.pl",
    description:
      "Un parcours international au cœur d’une capitale européenne, entre diplomatie, économie et société.",
    documents: [...commonDocs, "Diplôme secondaire", "Preuve de langue"],
    tags: ["Pologne", "International", "Anglais"],
  },
];

export const countries = [
  "Tous les pays",
  "France",
  "Canada",
  "USA",
  "Chine",
  "Russie",
  "Roumanie",
  "Pologne",
];
export const statusLabels = [
  "Reçu",
  "En cours d’analyse",
  "Documents complémentaires requis",
  "Accepté",
  "Clôturé",
];
const ui = {
  fr: {
    nav: ["Services", "Partenaires", "À propos"],
    login: "Se connecter",
    signup: "Créer un compte",
    heroKicker: "Société internationale multisectorielle · Guinée",
    heroTitle: "Les bonnes connexions créent les bons horizons.",
    heroBody:
      "Global Impact Holdings SARL relie les projets, les marchés et les partenaires depuis la Guinée vers l’international — avec méthode, exigence et proximité.",
    heroCta: "Découvrir notre approche",
    heroSecondary: "Voir nos partenaires",
    home: "Accueil",
    search: "Rechercher",
    theme: "Thème",
    light: "Clair",
    dark: "Sombre",
    system: "Système",
    backHome: "Retour à l’accueil",
    close: "Fermer",
    next: "Suivant",
    previous: "Précédent",
    secureSpace: "Espace sécurisé",
    username: "Identifiant",
    usernameHint: "Choisissez un identifiant libre, lié à votre pays",
    country: "Pays de résidence",
    phone: "Téléphone",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    privacyConsent:
      "J’accepte la politique de confidentialité et le traitement de mes données.",
    twoFactor: "Activer la double authentification (recommandé)",
    show: "Afficher",
    hide: "Masquer",
    remember: "Se souvenir de moi",
    forgot: "Mot de passe oublié ?",
    save: "Enregistrer",
    create: "Créer mon compte",
    submit: "Envoyer",
    admin: "Console opérations",
    adminSubtitle: "Espace interne · accès restreint",
    compactNote:
      "Les informations sont présentées de manière synthétique pour faciliter la décision.",
  },
  en: {
    nav: ["Services", "Studies", "Partners", "About"],
    login: "Sign in",
    signup: "Create account",
    heroKicker: "Multisector international company · Guinea",
    heroTitle: "The right connections create new horizons.",
    heroBody:
      "Global Impact Holdings supports companies, talent and projects that want to move across borders — with method, rigor and proximity.",
    heroCta: "Discover our approach",
    heroSecondary: "Explore our services",
    home: "Home",
    search: "Search",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    backHome: "Back to home",
    close: "Close",
    next: "Next",
    previous: "Back",
    secureSpace: "Secure space",
    username: "Username",
    usernameHint: "Choose any username associated with your country",
    country: "Country of residence",
    phone: "Phone",
    password: "Password",
    confirmPassword: "Confirm password",
    privacyConsent:
      "I accept the privacy policy and the processing of my data.",
    twoFactor: "Enable two-factor authentication (recommended)",
    show: "Show",
    hide: "Hide",
    remember: "Remember me",
    forgot: "Forgot password?",
    save: "Save",
    create: "Create my account",
    submit: "Submit",
    admin: "Operations console",
    adminSubtitle: "Internal space · restricted access",
    compactNote:
      "Information is presented concisely to support clear decisions.",
  },
  zh: {
    nav: ["服务", "留学", "合作伙伴", "关于我们"],
    login: "登录",
    signup: "创建账户",
    heroKicker: "国际支持平台",
    heroTitle: "连接，让视野抵达更远的地方。",
    heroBody:
      "Global Impact Holdings 以严谨、专业和贴近客户的方式，支持企业、人才与跨境项目发展。",
    heroCta: "了解我们的方式",
    heroSecondary: "探索项目",
    home: "首页",
    search: "搜索",
    theme: "主题",
    light: "明亮",
    dark: "深色",
    system: "系统",
    backHome: "返回首页",
    close: "关闭",
    next: "下一步",
    previous: "返回",
    secureSpace: "安全空间",
    username: "用户名",
    usernameHint: "选择与您所在国家相关的任意用户名",
    country: "居住国家",
    phone: "电话",
    password: "密码",
    confirmPassword: "确认密码",
    privacyConsent: "我同意隐私政策及数据处理。",
    twoFactor: "启用双重身份验证（推荐）",
    show: "显示",
    hide: "隐藏",
    remember: "记住我",
    forgot: "忘记密码？",
    save: "保存",
    create: "创建账户",
    submit: "提交",
    admin: "运营控制台",
    adminSubtitle: "内部空间 · 限制访问",
    compactNote: "信息以简洁方式呈现，便于清晰决策。",
  },
  ro: {
    nav: ["Servicii", "Studii", "Parteneri", "Despre noi"],
    login: "Conectare",
    signup: "Creează cont",
    heroKicker: "Platformă de suport internațional",
    heroTitle: "Conexiunile potrivite deschid noi orizonturi.",
    heroBody:
      "Global Impact Holdings sprijină companii, talente și proiecte internaționale cu metodă, rigoare și proximitate.",
    heroCta: "Descoperă abordarea",
    heroSecondary: "Explorează programele",
    home: "Acasă",
    search: "Caută",
    theme: "Temă",
    light: "Luminos",
    dark: "Întunecat",
    system: "Sistem",
    backHome: "Înapoi acasă",
    close: "Închide",
    next: "Continuă",
    previous: "Înapoi",
    secureSpace: "Spațiu securizat",
    username: "Identificator",
    usernameHint: "Alegeți orice identificator asociat țării dumneavoastră",
    country: "Țara de reședință",
    phone: "Telefon",
    password: "Parolă",
    confirmPassword: "Confirmă parola",
    privacyConsent:
      "Accept politica de confidențialitate și prelucrarea datelor.",
    twoFactor: "Activează autentificarea în doi pași (recomandat)",
    show: "Arată",
    hide: "Ascunde",
    remember: "Ține-mă minte",
    forgot: "Ai uitat parola?",
    save: "Salvează",
    create: "Creează contul",
    submit: "Trimite",
    admin: "Consolă operațională",
    adminSubtitle: "Spațiu intern · acces restricționat",
    compactNote: "Informațiile sunt prezentate sintetic pentru decizii clare.",
  },
  pl: {
    nav: ["Usługi", "Studia", "Partnerzy", "O nas"],
    login: "Zaloguj się",
    signup: "Utwórz konto",
    heroKicker: "Międzynarodowa firma wielosektorowa · Gwinea",
    heroTitle: "Dobre połączenia otwierają nowe horyzonty.",
    heroBody:
      "Global Impact Holdings wspiera firmy, talenty i projekty międzynarodowe — metodycznie, rzetelnie i blisko klienta.",
    heroCta: "Poznaj nasze podejście",
    heroSecondary: "Przeglądaj programy",
    home: "Strona główna",
    search: "Szukaj",
    theme: "Motyw",
    light: "Jasny",
    dark: "Ciemny",
    system: "Systemowy",
    backHome: "Wróć na stronę główną",
    close: "Zamknij",
    next: "Dalej",
    previous: "Wstecz",
    secureSpace: "Bezpieczna przestrzeń",
    username: "Identyfikator",
    usernameHint: "Wybierz dowolny identyfikator powiązany z krajem",
    country: "Kraj zamieszkania",
    phone: "Telefon",
    password: "Hasło",
    confirmPassword: "Potwierdź hasło",
    privacyConsent:
      "Akceptuję politykę prywatności i przetwarzanie moich danych.",
    twoFactor: "Włącz uwierzytelnianie dwuskładnikowe (zalecane)",
    show: "Pokaż",
    hide: "Ukryj",
    remember: "Zapamiętaj mnie",
    forgot: "Nie pamiętasz hasła?",
    save: "Zapisz",
    create: "Utwórz konto",
    submit: "Wyślij",
    admin: "Konsola operacyjna",
    adminSubtitle: "Przestrzeń wewnętrzna · dostęp ograniczony",
    compactNote: "Informacje są przedstawione zwięźle, aby ułatwić decyzje.",
  },
  ar: {
    nav: ["الخدمات", "الدراسات", "الشركاء", "من نحن"],
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    heroKicker: "منصة دعم دولية",
    heroTitle: "العلاقات الصحيحة تفتح آفاقاً جديدة.",
    heroBody:
      "تدعم Global Impact Holdings الشركات والمواهب والمشاريع العابرة للحدود بمنهجية وصرامة وقرب.",
    heroCta: "اكتشف نهجنا",
    heroSecondary: "استكشف البرامج",
    home: "الرئيسية",
    search: "بحث",
    theme: "المظهر",
    light: "فاتح",
    dark: "داكن",
    system: "النظام",
    backHome: "العودة إلى الرئيسية",
    close: "إغلاق",
    next: "التالي",
    previous: "رجوع",
    secureSpace: "مساحة آمنة",
    username: "اسم المستخدم",
    usernameHint: "اختر اسم مستخدم حرًا مرتبطًا ببلدك",
    country: "بلد الإقامة",
    phone: "الهاتف",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    privacyConsent: "أوافق على سياسة الخصوصية ومعالجة بياناتي.",
    twoFactor: "تفعيل المصادقة الثنائية (موصى به)",
    show: "إظهار",
    hide: "إخفاء",
    remember: "تذكرني",
    forgot: "هل نسيت كلمة المرور؟",
    save: "حفظ",
    create: "إنشاء حسابي",
    submit: "إرسال",
    admin: "لوحة العمليات",
    adminSubtitle: "مساحة داخلية · وصول محدود",
    compactNote: "تُعرض المعلومات باختصار لتسهيل اتخاذ القرار.",
  },
} as const;
export type Locale = keyof typeof ui;
export const translations = Object.fromEntries(
  Object.entries(ui).map(([locale, copy]) => [locale, { ...copy, ui: copy }])
) as Record<Locale, (typeof ui)[Locale] & { ui: (typeof ui)[Locale] }>;

export const serviceTranslations: Record<
  Locale,
  Record<
    string,
    {
      label: string;
      eyebrow: string;
      description: string;
      tabs: string[];
      outcomes: string[];
    }
  >
> = {
  fr: {},
  en: {
    "expertise-internationale": {
      label: "International expertise",
      eyebrow: "01 / global perspective",
      description: "Read markets, connect opportunities and secure decisions.",
      tabs: [
        "Overview",
        "Areas of work",
        "Methodology",
        "Sectors",
        "Contact us",
      ],
      outcomes: [
        "Opportunity mapping",
        "Targeted sector monitoring",
        "Multi-country coordination",
      ],
    },
    "conseil-business": {
      label: "Business consulting",
      eyebrow: "02 / strategic clarity",
      description: "Give growth ambitions a concrete structure.",
      tabs: [
        "Overview",
        "Strategic support",
        "Structuring",
        "Market development",
        "Contact us",
      ],
      outcomes: [
        "Positioning diagnosis",
        "90-day action plan",
        "Commercial structuring",
      ],
    },
    sourcing: {
      label: "Sourcing",
      eyebrow: "03 / field reliability",
      description: "Find the right suppliers and verify what matters.",
      tabs: [
        "Overview",
        "Suppliers",
        "Products",
        "Quality audit",
        "Contact us",
      ],
      outcomes: ["Supplier research", "Document audit", "Quality control"],
    },
    "ressources-humaines": {
      label: "Human resources",
      eyebrow: "04 / talent & mobility",
      description: "Connect skills, organisations and opportunities.",
      tabs: [
        "Overview",
        "HR needs",
        "International mobility",
        "Placement",
        "Contact us",
      ],
      outcomes: [
        "Profile identification",
        "International mobility",
        "Employer / candidate follow-up",
      ],
    },
    "permis-travail": {
      label: "Work permit & employment contract",
      eyebrow: "05 / work & mobility",
      description:
        "Prepare a work file and supporting documents, subject to review and applicable law.",
      tabs: [
        "Overview",
        "Employment contract",
        "Permit & documents",
        "Appointment",
        "Contact us",
      ],
      outcomes: [
        "Secure candidate file",
        "Work documents for review",
        "Follow-up and appointment",
      ],
    },
    "commerce-international": {
      label: "International trade",
      eyebrow: "05 / controlled flows",
      description: "Smooth import-export from negotiation to delivery.",
      tabs: [
        "Overview",
        "Import / Export",
        "Logistics",
        "Partnerships",
        "Contact us",
      ],
      outcomes: [
        "Import / export",
        "Logistics & customs",
        "Business partnerships",
      ],
    },
    etudes: {
      label: "Global Impact services",
      eyebrow: "06 / academic pathways",
      description: "Guide each study plan towards a realistic application.",
      tabs: [
        "Overview",
        "Explore our services",
        "Required documents",
        "Application tracking",
        "Contact us",
      ],
      outcomes: [
        "Multi-criteria search",
        "Document file",
        "Application tracking",
      ],
    },
    immobilier: {
      label: "Real estate",
      eyebrow: "07 / local grounding",
      description: "Make property choices with method and perspective.",
      tabs: [
        "Overview",
        "Property types",
        "Investment",
        "Support",
        "Contact us",
      ],
      outcomes: [
        "Property search",
        "Opportunity review",
        "Real-estate investment",
      ],
    },
    "voyage-tourisme": {
      label: "Travel & tourism",
      eyebrow: "08 / mobility & hospitality",
      description: "Organise travel, stays and tourism experiences in Africa.",
      tabs: [
        "Overview",
        "Flights",
        "Hotels & stays",
        "Tourism advice",
        "Contact us",
      ],
      outcomes: ["Air tickets", "Hotels in Africa", "Tourism advice"],
    },
    "affiliation-produits": {
      label: "Affiliate products",
      eyebrow: "09 / connected commerce",
      description:
        "Discover products from different brands through the Global Impact portal.",
      tabs: [
        "Overview",
        "Brands",
        "Affiliate links",
        "Orders & tracking",
        "Become a partner",
      ],
      outcomes: ["Brand links", "Redirect catalogue", "Partner traceability"],
    },
    "mines-afrique": {
      label: "Mining & African development",
      eyebrow: "10 / resources & partnerships",
      description:
        "Structure responsible partnerships around African mining companies.",
      tabs: [
        "Overview",
        "Mining projects",
        "Partnerships",
        "Due diligence",
        "Contact us",
      ],
      outcomes: [
        "Project qualification",
        "Industrial partnerships",
        "Expert coordination",
      ],
    },
  },
  zh: {
    "expertise-internationale": {
      label: "国际专业服务",
      eyebrow: "01 / 全球视角",
      description: "洞察市场，连接机会，支持稳健决策。",
      tabs: ["概览", "服务领域", "方法", "行业", "联系我们"],
      outcomes: ["机会地图", "行业监测", "多国协调"],
    },
    "conseil-business": {
      label: "企业咨询",
      eyebrow: "02 / 战略清晰",
      description: "为增长目标建立可执行的结构。",
      tabs: ["概览", "战略支持", "企业结构", "市场发展", "联系我们"],
      outcomes: ["定位诊断", "90天行动计划", "商业结构"],
    },
    sourcing: {
      label: "采购与供应",
      eyebrow: "03 / 现场可靠",
      description: "寻找合适供应商，核查关键事项。",
      tabs: ["概览", "供应商", "产品", "质量审核", "联系我们"],
      outcomes: ["供应商搜索", "文件审核", "质量控制"],
    },
    "ressources-humaines": {
      label: "人力资源",
      eyebrow: "04 / 人才与流动",
      description: "连接技能、组织和机会。",
      tabs: ["概览", "人力需求", "国际流动", "人才配置", "联系我们"],
      outcomes: ["人才识别", "国际流动", "雇主与候选人跟进"],
    },
    "commerce-international": {
      label: "国际贸易",
      eyebrow: "05 / 可控流通",
      description: "从谈判到交付，优化进出口流程。",
      tabs: ["概览", "进出口", "物流", "合作伙伴", "联系我们"],
      outcomes: ["进出口", "物流与海关", "商业合作"],
    },
    etudes: {
      label: "留学与申请",
      eyebrow: "06 / 学术路径",
      description: "为每个留学计划匹配现实可行的申请路径。",
      tabs: ["概览", "探索项目", "所需文件", "申请跟踪", "联系我们"],
      outcomes: ["多条件筛选", "申请文件", "申请跟踪"],
    },
    immobilier: {
      label: "房地产",
      eyebrow: "07 / 本地落地",
      description: "以方法和判断力支持房地产选择。",
      tabs: ["概览", "房产类型", "投资", "支持", "联系我们"],
      outcomes: ["房产搜索", "机会分析", "房地产投资"],
    },
  },
  ro: {
    "expertise-internationale": {
      label: "Expertiză internațională",
      eyebrow: "01 / perspectivă globală",
      description:
        "Citim piețele, conectăm oportunități și sprijinim decizii sigure.",
      tabs: ["Prezentare", "Domenii", "Metodologie", "Sectoare", "Contact"],
      outcomes: [
        "Harta oportunităților",
        "Monitorizare sectorială",
        "Coordonare internațională",
      ],
    },
    "conseil-business": {
      label: "Consultanță de afaceri",
      eyebrow: "02 / claritate strategică",
      description: "Dăm o structură concretă obiectivelor de creștere.",
      tabs: [
        "Prezentare",
        "Strategie",
        "Structurare",
        "Dezvoltarea pieței",
        "Contact",
      ],
      outcomes: [
        "Diagnostic de poziționare",
        "Plan de acțiune 90 zile",
        "Structurare comercială",
      ],
    },
    sourcing: {
      label: "Sourcing",
      eyebrow: "03 / siguranță în teren",
      description:
        "Identificăm furnizorii potriviți și verificăm elementele importante.",
      tabs: ["Prezentare", "Furnizori", "Produse", "Audit calitate", "Contact"],
      outcomes: [
        "Căutare furnizori",
        "Audit documentar",
        "Controlul calității",
      ],
    },
    "ressources-humaines": {
      label: "Resurse umane",
      eyebrow: "04 / talente și mobilitate",
      description: "Conectăm competențele, organizațiile și oportunitățile.",
      tabs: ["Prezentare", "Nevoi HR", "Mobilitate", "Plasare", "Contact"],
      outcomes: [
        "Identificare profiluri",
        "Mobilitate internațională",
        "Urmărire angajator / candidat",
      ],
    },
    "permis-travail": {
      label: "Permis de muncă și contract de muncă",
      eyebrow: "05 / muncă și mobilitate",
      description:
        "Pregătirea unui dosar de muncă și a documentelor aferente, sub rezerva verificării și a legii aplicabile.",
      tabs: [
        "Prezentare",
        "Contract de muncă",
        "Permis și documente",
        "Programare",
        "Contact",
      ],
      outcomes: [
        "Dosar securizat",
        "Documente de muncă pentru analiză",
        "Urmărire și programare",
      ],
    },
    "commerce-international": {
      label: "Comerț internațional",
      eyebrow: "05 / fluxuri controlate",
      description:
        "Fluidizăm importul și exportul, de la negociere la livrare.",
      tabs: [
        "Prezentare",
        "Import / Export",
        "Logistică",
        "Parteneriate",
        "Contact",
      ],
      outcomes: [
        "Import / export",
        "Logistică și vamă",
        "Parteneriate comerciale",
      ],
    },
    etudes: {
      label: "Studii și admitere",
      eyebrow: "06 / trasee academice",
      description:
        "Orientăm fiecare proiect de studiu către o candidatură realistă.",
      tabs: [
        "Prezentare",
        "Programe",
        "Documente",
        "Urmărire dosar",
        "Contact",
      ],
      outcomes: [
        "Filtrare multi-criteriu",
        "Dosar documentar",
        "Urmărirea candidaturii",
      ],
    },
    immobilier: {
      label: "Imobiliare",
      eyebrow: "07 / ancorare locală",
      description:
        "Clarificăm alegerile imobiliare prin metodă și discernământ.",
      tabs: [
        "Prezentare",
        "Tipuri proprietăți",
        "Investiții",
        "Asistență",
        "Contact",
      ],
      outcomes: [
        "Căutare proprietăți",
        "Analiza oportunității",
        "Investiții imobiliare",
      ],
    },
  },
  pl: {},
  ar: {},
};

// Complete localized surfaces for the two services that expose the widest set of
// tabs and workflow choices. They intentionally do not fall back to English.
const travelAndAffiliateTranslations = {
  ro: {
    "voyage-tourisme": {
      label: "Călătorii și turism",
      eyebrow: "08 / mobilitate și ospitalitate",
      description:
        "Organizăm deplasări, sejururi și experiențe turistice în Africa.",
      tabs: [
        "Prezentare",
        "Bilete de avion",
        "Hoteluri și sejururi",
        "Consultanță turistică",
        "Contact",
      ],
      outcomes: [
        "Bilete de avion",
        "Hoteluri în Africa",
        "Consultanță turistică",
      ],
    },
    "affiliation-produits": {
      label: "Afiliere și produse",
      eyebrow: "09 / comerț conectat",
      description:
        "Descoperiți produse de la diferite branduri prin portalul Global Impact.",
      tabs: [
        "Prezentare",
        "Branduri",
        "Linkuri afiliate",
        "Comenzi și urmărire",
        "Deveniți partener",
      ],
      outcomes: [
        "Legături cu branduri",
        "Catalog de redirecționare",
        "Trasabilitatea partenerilor",
      ],
    },
  },
  pl: {
    "voyage-tourisme": {
      label: "Podróże i turystyka",
      eyebrow: "08 / mobilność i gościnność",
      description:
        "Organizujemy podróże, pobyty i doświadczenia turystyczne w Afryce.",
      tabs: [
        "Prezentacja",
        "Bilety lotnicze",
        "Hotele i pobyty",
        "Doradztwo turystyczne",
        "Kontakt",
      ],
      outcomes: ["Bilety lotnicze", "Hotele w Afryce", "Doradztwo turystyczne"],
    },
    "affiliation-produits": {
      label: "Afiliacja i produkty",
      eyebrow: "09 / połączony handel",
      description:
        "Poznawaj produkty różnych marek za pośrednictwem portalu Global Impact.",
      tabs: [
        "Prezentacja",
        "Marki",
        "Linki afiliacyjne",
        "Zamówienia i śledzenie",
        "Zostań partnerem",
      ],
      outcomes: [
        "Linki do marek",
        "Katalog przekierowań",
        "Identyfikowalność partnerów",
      ],
    },
  },
  ar: {
    "voyage-tourisme": {
      label: "السفر والسياحة",
      eyebrow: "08 / التنقل والضيافة",
      description: "ننظم الرحلات والإقامات والتجارب السياحية في أفريقيا.",
      tabs: [
        "نظرة عامة",
        "تذاكر الطيران",
        "الفنادق والإقامات",
        "الاستشارات السياحية",
        "تواصل معنا",
      ],
      outcomes: ["تذاكر الطيران", "فنادق في أفريقيا", "استشارات سياحية"],
    },
    "affiliation-produits": {
      label: "التسويق بالعمولة والمنتجات",
      eyebrow: "09 / تجارة متصلة",
      description: "اكتشف منتجات العلامات المختلفة عبر بوابة Global Impact.",
      tabs: [
        "نظرة عامة",
        "العلامات التجارية",
        "روابط الإحالة",
        "الطلبات والمتابعة",
        "كن شريكاً",
      ],
      outcomes: [
        "روابط العلامات التجارية",
        "كتالوج إعادة التوجيه",
        "تتبع الشركاء",
      ],
    },
  },
  zh: {
    "voyage-tourisme": {
      label: "旅行与旅游",
      eyebrow: "08 / 出行与待客",
      description: "组织非洲旅行、住宿和旅游体验。",
      tabs: ["概览", "机票", "酒店与住宿", "旅游咨询", "联系我们"],
      outcomes: ["机票", "非洲酒店", "旅游咨询"],
    },
    "affiliation-produits": {
      label: "联盟与产品",
      eyebrow: "09 / 连接型商业",
      description: "通过 Global Impact 门户发现不同品牌的产品。",
      tabs: ["概览", "品牌", "联盟链接", "订单与跟踪", "成为合作伙伴"],
      outcomes: ["品牌链接", "跳转目录", "合作伙伴可追溯性"],
    },
  },
} as const;
Object.assign(serviceTranslations.ro, travelAndAffiliateTranslations.ro);
Object.assign(serviceTranslations.pl, travelAndAffiliateTranslations.pl);
Object.assign(serviceTranslations.ar, travelAndAffiliateTranslations.ar);
Object.assign(serviceTranslations.zh, travelAndAffiliateTranslations.zh);

// Every locale has a non-French service surface; locales still being expanded use
// the complete English service vocabulary rather than silently reverting to French.
for (const locale of Object.keys(serviceTranslations) as Locale[]) {
  if (locale === "fr") continue;
  for (const slug of Object.keys(serviceTranslations.en)) {
    if (!serviceTranslations[locale][slug])
      serviceTranslations[locale][slug] = serviceTranslations.en[slug];
  }
}

const arServiceCopy: Record<string, [string, string]> = {
  "expertise-internationale": [
    "الخبرة الدولية",
    "نقرأ الأسواق ونربط الفرص وندعم القرارات الآمنة.",
  ],
  "conseil-business": [
    "استشارات الأعمال",
    "نمنح طموحات النمو هيكلاً عملياً واضحاً.",
  ],
  sourcing: ["التوريد", "نحدد الموردين المناسبين ونتحقق من العناصر المهمة."],
  "ressources-humaines": [
    "الموارد البشرية",
    "نربط بين المهارات والمؤسسات والفرص.",
  ],
  "commerce-international": [
    "التجارة الدولية",
    "نسهّل الاستيراد والتصدير من التفاوض إلى التسليم.",
  ],
  etudes: [
    "الدراسات والقبول",
    "نوجّه كل مشروع دراسي نحو طلب واقعي قابل للتنفيذ.",
  ],
  immobilier: ["العقارات", "نوضح خيارات العقار بالمنهجية وحسن التقدير."],
  "voyage-tourisme": [
    "السفر والسياحة",
    "ننظم الرحلات والإقامات والتجارب السياحية في أفريقيا.",
  ],
  "affiliation-produits": [
    "المنتجات والشراكات",
    "اكتشف منتجات العلامات المختلفة عبر بوابة Global Impact.",
  ],
  "mines-afrique": [
    "التعدين والتنمية الأفريقية",
    "نبني شراكات مسؤولة حول شركات التعدين الأفريقية.",
  ],
};
for (const [slug, [label, description]] of Object.entries(arServiceCopy))
  serviceTranslations.ar[slug] = {
    ...serviceTranslations.ar[slug],
    label,
    description,
  };
const plServiceCopy: Record<string, [string, string]> = {
  "expertise-internationale": [
    "Ekspertyza międzynarodowa",
    "Analizujemy rynki, łączymy możliwości i wspieramy bezpieczne decyzje.",
  ],
  "conseil-business": [
    "Doradztwo biznesowe",
    "Nadajemy ambicjom rozwoju konkretną strukturę.",
  ],
  sourcing: [
    "Sourcing",
    "Wyszukujemy właściwych dostawców i sprawdzamy to, co najważniejsze.",
  ],
  "ressources-humaines": [
    "Zasoby ludzkie",
    "Łączymy kompetencje, organizacje i możliwości.",
  ],
  "commerce-international": [
    "Handel międzynarodowy",
    "Usprawniamy import i eksport od negocjacji do dostawy.",
  ],
  etudes: [
    "Studia i rekrutacja",
    "Prowadzimy każdy projekt studiów do realistycznej aplikacji.",
  ],
  immobilier: [
    "Nieruchomości",
    "Pomagamy podejmować decyzje dotyczące nieruchomości metodycznie.",
  ],
  "voyage-tourisme": [
    "Podróże i turystyka",
    "Organizujemy podróże, pobyty i doświadczenia turystyczne w Afryce.",
  ],
  "affiliation-produits": [
    "Produkty afiliacyjne",
    "Poznawaj produkty różnych marek przez portal Global Impact.",
  ],
  "mines-afrique": [
    "Górnictwo i rozwój Afryki",
    "Budujemy odpowiedzialne partnerstwa wokół afrykańskich spółek wydobywczych.",
  ],
};
for (const [slug, [label, description]] of Object.entries(plServiceCopy))
  serviceTranslations.pl[slug] = {
    ...serviceTranslations.pl[slug],
    label,
    description,
  };
