from pathlib import Path
import json

root = Path(__file__).resolve().parents[1]

# 1) Replace the public service catalogue with the exact Global Impact scope.
site = root / "client/src/lib/siteData.ts"
s = site.read_text()
start = s.index("export const services: Service[] = [")
end = s.index("export const programs: Program[] = [")
services = '''export const services: Service[] = [
  {
    slug: "mines",
    image: "/assets/global-mines.jpg",
    architecture: "mining",
    label: "Mines",
    shortLabel: "Mines",
    eyebrow: "01 / ressources & valeur",
    description: "Structurer des opportunités minières responsables, de la qualification au partenariat.",
    longDescription: "Global Impact Holdings SAR accompagne l’identification, la qualification et la mise en relation autour de projets miniers en Afrique, avec une attention portée aux données techniques, aux parties prenantes et aux exigences ESG.",
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

'''
s = s[:start] + services + s[end:]
# Add the two icons used by the new service catalogue if absent.
s = s.replace('  BriefcaseBusiness,\n', '  BriefcaseBusiness,\n  Factory,\n')
s = s.replace('  UsersRound,\n', '  UsersRound,\n  Truck,\n  Zap,\n')
s = s.replace('  Globe2,\n', '  Globe2,\n') if '  Globe2,' in s else s.replace('  Compass,\n', '  Compass,\n  Globe2,\n')
s = s.replace('  Lightbulb,\n', '  Lightbulb,\n') if '  Lightbulb,' in s else s.replace('  Landmark,\n', '  Landmark,\n  Lightbulb,\n')
site.write_text(s)

# Partner ecosystem: explicitly include ICX Power Solutions as a partner.
partners = root / "client/src/lib/partners.json"
data = json.loads(partners.read_text())
if not any(item.get("name") == "ICX Power Solutions" for item in data):
    data.insert(0, {
        "name": "ICX Power Solutions",
        "logo": "/assets/icx-logo.png",
        "description": "Partenaire stratégique · solutions énergétiques et expertise opérationnelle",
        "link": "",
        "legalStatus": "Partenaire intégré à l’écosystème Global Impact Holdings SAR",
        "source": ""
    })
partners.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

# Main public copy and visible labels.
for rel in ["client/src/pages/Home.tsx", "client/src/lib/i18n.ts", "client/index.html", "client/admin.html", "client/src/pages/Assistant.tsx", "client/src/pages/AuthPanel.tsx"]:
    path = root / rel
    text = path.read_text()
    text = text.replace("ICX POWER SOLUTIONS SRL", "GLOBAL IMPACT HOLDINGS SAR")
    text = text.replace("ICX Power Solutions SRL", "Global Impact Holdings SAR")
    text = text.replace("ICX Power Solutions", "Global Impact Holdings")
    text = text.replace("ICX Power Solutions", "Global Impact Holdings")
    text = text.replace("icxps.sale@outlook.com", "gih.sale@outlook.com")
    path.write_text(text)

home = root / "client/src/pages/Home.tsx"
s = home.read_text()
# Remove Studies from the public navigation and replace its visible CTAs with partner/contact paths.
s = s.replace('    { label: copy.nav[1], href: "/etudes" },\n    { label: copy.nav[2], href: "/partenaires" },\n    { label: copy.nav[3], href: "/#about" },', '    { label: copy.nav[1], href: "/partenaires" },\n    { label: copy.nav[2], href: "/#about" },')
s = s.replace('    "all" | "services" | "studies"\n', '    "all" | "services"\n')
s = s.replace('''                  <button
                    onClick={() => setSearchCategory("studies")}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${searchCategory === "studies" ? "bg-amber-600 text-white" : "bg-muted text-muted-foreground"}`}
                  >
                    {copy.studies}
                  </button>
''', '')
s = s.replace('onClick={() => setLocation("/etudes")}', 'onClick={() => setLocation("/partenaires")}')
s = s.replace('{copy.explorePrograms}', '{copy.partnersButton}')
s = s.replace('{copy.viewStudies}', '{copy.partnersButton}')
# Keep only K. Marcel Traoré in the leadership section.
old = '''              <PersonCard
                initials="JL"
                name="Jean Lansana Koundouno"
                role={copy.direction}
                color="bg-slate-800"
                photo="/assets/jean-lansana-enhanced.webp"
                locale={locale}
              />
'''
s = s.replace(old, '')
# Use the requested address in the visible contact link and Guinea as headquarters.
s = s.replace('mailto:gih.sale@outlook.com', 'mailto:gih.sale@outlook.com')
s = s.replace('''            GLOBAL IMPACT HOLDINGS SAR
            <br />
            CUI 54675848 · J2026031336000
            <br />
            Str. Hlincea 47, Iași, 700715, Roumanie
            <br />
            <span className="text-slate-500">
              CAEN 7020 · créée le 13 mai 2026
            </span>''', '''            GLOBAL IMPACT HOLDINGS SAR
            <br />
            Siège social · Guinée
            <br />
            gih.sale@outlook.com
            <br />
            <span className="text-slate-500">
              Direction générale · K. Marcel Traoré
            </span>''')
# Partner strip: add the requested partner visibly.
needle = '''        <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5">
          <span className="grid size-14 place-items-center overflow-hidden rounded-2xl bg-white ring-1 ring-border">'''
partner = '''        <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5">
          <span className="grid size-14 place-items-center overflow-hidden rounded-2xl bg-white ring-1 ring-border">
            <img src="/assets/icx-logo.png" loading="lazy" decoding="async" alt="Logo ICX Power Solutions" className="size-full object-contain p-1" />
          </span>
          <div>
            <p className="font-semibold">ICX Power Solutions</p>
            <p className="mt-1 text-sm text-muted-foreground">Partenaire stratégique · énergie & opérations</p>
          </div>
          <ChevronRight className="ml-auto size-5 text-muted-foreground" />
        </div>
''' + needle
if 'alt="Logo ICX Power Solutions"' not in s:
    s = s.replace(needle, partner, 1)
home.write_text(s)

# French core copy: make the public positioning coherent with Global Impact and Guinea.
i18n = root / "client/src/lib/i18n.ts"
s = i18n.read_text()
replacements = {
    '"Études"': '"Partenaires"',
    '"Services, universités, domaines…"': '"Services, marchés, secteurs…"',
    '"Recherchez une expertise, une université, une ville ou un domaine d’études."': '"Recherchez un service, un secteur, un marché ou une expertise."',
    '"ICX Power Solutions accompagne les entreprises, les talents et les projets qui veulent avancer au-delà des frontières — avec méthode, exigence et proximité."': '"Global Impact Holdings SAR relie les projets, les marchés et les partenaires depuis la Guinée vers l’international — avec méthode, exigence et proximité."',
    '"ICX Power Solutions crée un cadre de confiance pour faire avancer un projet, une entreprise ou une candidature avec des interlocuteurs fiables."': '"Global Impact Holdings SAR crée un cadre de confiance pour faire avancer des projets miniers, énergétiques, industriels et commerciaux avec des interlocuteurs fiables."',
    '"Une plateforme, plusieurs trajectoires"': '"Une plateforme, plusieurs leviers de croissance"',
    '"Pensée pour les décisions qui comptent."': '"Pensée pour les projets qui doivent avancer."',
    '"Voir la plateforme Études"': '"Voir nos partenaires"',
    '"Votre prochaine étape mérite un vrai point de départ."': '"Votre projet mérite un point de départ solide."',
    '"Service Études"': '"Global Impact Holdings SAR"',
    '"Études & admissions"': '"Recherche d’investissement"',
    '"programmes d’études"': '"opportunités d’investissement"',
    '"études"': '"projets"',
    '"Contacter ICX POWER SOLUTIONS SRL"': '"Contacter Global Impact Holdings SAR"',
    '"Des liens qui prolongent notre expertise."': '"Des partenaires qui renforcent notre impact."',
    '"Nouvelle expansion"': '"Depuis la Guinée vers l’international"',
    '"Voyager, séjourner, acheter et investir avec un cadre ICX."': '"Mines, énergie, industrie et commerce : des connexions qui créent de la valeur."',
    '"Des axes en développement pour les billets d’avion, l’hôtellerie africaine, l’affiliation de marques, le tourisme et les partenariats miniers responsables."': '"Global Impact développe des passerelles entre la Guinée, l’Afrique et les marchés internationaux dans les mines, l’énergie, l’industrie, le commerce et la logistique."',
    '"Deux regards complémentaires pour relier l’opérationnel, le cadre légal et l’exigence de suivi."': '"Une direction engagée pour relier l’opérationnel, les partenaires et l’exigence de suivi."',
}
for a,b in replacements.items():
    s = s.replace(a,b)
# All locale nav arrays should avoid the Studies label in the second position.
s = s.replace('"Studies"', '"Partners"').replace('"留学"', '"合作伙伴"').replace('"Studii"', '"Parteneri"').replace('"Studia"', '"Partnerzy"').replace('"الدراسات"', '"الشركاء"')
i18n.write_text(s)

# Super-admin default for manual Entra configuration.
env = root / "server/_core/env.ts"
s = env.read_text().replace('"icxps.sale@outlook.com"', '"gih.sale@outlook.com"')
env.write_text(s)

# Admin-facing titles and email sender defaults.
brevo = root / "server/_core/brevo.ts"
s = brevo.read_text().replace('"ICX Power Solutions"', '"Global Impact Holdings SAR"')
brevo.write_text(s)

# Ensure a route manifest exists for the public SPA.
routes = root / "client/public/manus-routes.json"
routes.write_text(json.dumps({"routes": [
    {"path": "/", "title": "Global Impact Holdings SAR"},
    {"path": "/services/:slug", "title": "Service Global Impact"},
    {"path": "/partenaires", "title": "Partenaires"},
    {"path": "/contact", "title": "Contact"},
    {"path": "/connexion", "title": "Connexion"},
    {"path": "/inscription", "title": "Inscription"},
    {"path": "/mon-espace", "title": "Mon espace"},
]}, ensure_ascii=False, indent=2) + "\n")

# Remove the deleted leader's public asset from the working tree.
old_photo = root / "client/public/assets/jean-lansana-enhanced.webp"
if old_photo.exists():
    old_photo.unlink()
