from pathlib import Path
root = Path(__file__).resolve().parents[1]

site = root / "client/src/lib/siteData.ts"
s = site.read_text()
s = s.replace('nav: ["Services", "Études", "Partenaires", "À propos"]', 'nav: ["Services", "Partenaires", "À propos"]')
s = s.replace('"ICX Power Solutions accompagne les entreprises, les talents et les projets qui veulent avancer au-delà des frontières — avec méthode, exigence et proximité."', '"Global Impact Holdings SAR relie les projets, les marchés et les partenaires depuis la Guinée vers l’international — avec méthode, exigence et proximité."')
s = s.replace('heroSecondary: "Explorer les programmes"', 'heroSecondary: "Voir nos partenaires"')
site.write_text(s)

home = root / "client/src/pages/Home.tsx"
s = home.read_text()
s = s.replace('''    const studyResults = programs
      .filter(
        program => searchCategory === "all" || searchCategory === "studies"
      )
      .filter(program =>
        `${program.university} ${program.field} ${program.city} ${program.country}`
          .toLowerCase()
          .includes(normalized)
      )
      .map(program => ({
        type: "Étude",
        title: program.field,
        detail: `${program.university} · ${program.city}`,
        href: "/etudes",
      }));
    return [...serviceResults, ...studyResults].slice(0, 6);''', '    return serviceResults.slice(0, 6);')
s = s.replace('''        <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5">
          <span className="grid size-14 place-items-center overflow-hidden rounded-2xl bg-white ring-1 ring-border">
            <img
              src="/assets/lorondo-logo.jpg"''', '''        <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5">
          <span className="grid size-14 place-items-center overflow-hidden rounded-2xl bg-white ring-1 ring-border">
            <img
              src="/assets/lorondo-logo.jpg"''')
# Replace the detailed legacy Romanian legal panel in the partners page.
s = s.replace('GLOBAL IMPACT HOLDINGS SAR · Roumanie', 'GLOBAL IMPACT HOLDINGS SAR · Guinée')
s = s.replace('Hlincea 47, Iași, 700715, Roumanie · CAEN 7020 · créée le 13 mai 2026', 'Siège social : Guinée · gih.sale@outlook.com')
# Keep this legacy component unreachable but prevent public route exposure and visible old service navigation.
s = s.replace('if (location === "/etudes")', 'if (location === "/_legacy-etudes")')
home.write_text(s)

app = root / "client/src/App.tsx"
s = app.read_text().replace('      <Route path="/etudes" component={Home} />\n', '')
s = s.replace('aria-label="Ouvrir ICX Intelligence"', 'aria-label="Ouvrir Global Impact Intelligence"')
s = s.replace('ICX Intelligence', 'Global Impact Intelligence')
app.write_text(s)

admin = root / "client/src/admin/AdminConsole.tsx"
s = admin.read_text().replace('icxps.sale@outlook.com', 'gih.sale@outlook.com').replace('Besoin ou programme d’études…', 'Besoin, secteur ou projet…').replace('BREVO_REPLY_TO=icxps.sale@outlook.com', 'BREVO_REPLY_TO=gih.sale@outlook.com')
admin.write_text(s)

assistant = root / "client/src/pages/Assistant.tsx"
s = assistant.read_text().replace('ICX Intelligence', 'Global Impact Intelligence').replace('contactez ICX directement', 'contactez Global Impact directement').replace('Études & admissions', 'Recherche d’investissement')
assistant.write_text(s)

routers = root / "server/routers.ts"
s = routers.read_text()
start = s.index('const icxKnowledgeBase = `')
end = s.index('`;', start) + 2
kb = '''const icxKnowledgeBase = `Contexte de référence Global Impact Holdings SAR : société basée en Guinée, dirigée par K. Marcel Traoré. Adresse de direction : gih.sale@outlook.com. Services : Mines, Énergie, Industrie, Commerce international, Logistique, Expertise internationale et Recherche d’investissement pour start-up. Global Impact relie des projets, des partenaires et des opportunités entre la Guinée, l’Afrique et les marchés internationaux. Chaque sous-service permet de préciser le besoin, répondre à une évaluation courte, puis ouvrir un espace sécurisé pour enregistrer une demande et joindre des documents. Tarification : les prestations sont étudiées sur brief et devis ; ne donne jamais de prix inventé. Documents de départ généralement utiles : identité/passeport, coordonnées, contexte du projet, budget ou calendrier, justificatifs spécifiques au service. Pour une entreprise partenaire : demander raison sociale, interlocuteur, email, besoin, pays concernés et objectif de coopération. ICX Power Solutions est un partenaire de Global Impact. Ne présente jamais ce contexte comme un contrat, une garantie ou un avis juridique. Pour les mines et l’énergie, rappeler que les audits techniques, juridiques, environnementaux, sociaux, sécurité et conformité doivent être réalisés par des experts qualifiés.`;'''
s = s[:start] + kb + s[end:]
s = s.replace("Tu es ICX Intelligence, l'assistant officiel indépendant d'ICX POWER SOLUTIONS SRL.", "Tu es Global Impact Intelligence, l'assistant officiel de Global Impact Holdings SAR.")
s = s.replace('Pour ICX, propose', 'Pour Global Impact, propose').replace('contacter ICX ou commencer une demande', 'contacter Global Impact ou commencer une demande')
routers.write_text(s)

# Update the public HTML description and boot labels.
index = root / "client/index.html"
s = index.read_text().replace('expertise internationale, conseil business, sourcing, commerce, études et immobilier', 'mines, énergie, industrie, commerce international, logistique, expertise internationale et investissement start-up').replace('ICX POWER SOLUTIONS', 'GLOBAL IMPACT HOLDINGS SAR').replace('ICX Power Solutions', 'Global Impact Holdings')
index.write_text(s)
admin_html = root / "client/admin.html"
s = admin_html.read_text().replace('Console privée d’administration ICX Power Solutions.', 'Console privée d’administration Global Impact Holdings SAR.').replace('ICX Operations', 'Global Impact Operations')
admin_html.write_text(s)
