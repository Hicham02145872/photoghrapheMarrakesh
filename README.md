# Linagraphy — Next.js et Tailwind CSS

Page d’accueil responsive inspirée de https://www.linagraphy.com/, avec sa palette terre cuite et ses photographies. La composition a été réinterprétée dans une direction éditoriale : hero en arche, sections aérées, galerie filtrable et visionneuse native accessible au clavier.

## Démarrer

```sh
npm install
npm run dev
```

Ouvrir http://127.0.0.1:3000.

```sh
npm run build
npm run typecheck
```

Le build produit un site statique dans `out/`, déployable sur un hébergement statique. `npm start` n’est pas adapté au mode export statique ; utiliser le serveur de développement pour la prévisualisation ou servir `out/` après compilation.

## Contenu et contact

- Les images dans `public/images/` proviennent du site de référence et sont utilisées pour la reproduction demandée. Leur présence ne constitue pas une autorisation de réutilisation publique.
- Coordonnées reprises de la référence : Hello@linagraphy.com et +212 681 31 81 81.
- Le formulaire prépare un lien mailto et ouvre le logiciel de messagerie. Il n’envoie et ne stocke aucune demande. L’utilisateur doit envoyer son message depuis son application e-mail.
- Galerie : filtres par catégorie ; clic pour agrandir ; Échap pour fermer.
- Le site a été analysé par son HTML, son CSS et ses photos. Le site original a été analysé via son HTML, ses styles et ses images ; la version locale a ensuite été vérifiée dans le navigateur.

## Structure

- `app/page.tsx` : sections, galerie et formulaire.
- `app/globals.css` : Tailwind CSS, tokens et styles responsive.
- `app/layout.tsx` : métadonnées et langue.
- `next.config.ts` : export statique.

Version locale de démonstration, sans publication automatique ni backend.

## Vérification de cette version

- `npm run build` : réussi, page exportée dans `out/`.
- `npm run typecheck` : réussi.
- Vérification HTTP locale : accueil et image principale accessibles, accueil HTTP 200.
- Contrôles navigateur effectués dans un viewport de 700 px : menu mobile, navigation vers le portfolio, filtre Familles, ouverture d’une photographie, fermeture par Échap et accordéon FAQ. Les autres tailles restent à vérifier visuellement.


## Rubriques complètes

- `/services` : 15 fiches de séances et lieux, avec pages `/services/[slug]`.
- `/portfolio` : galerie filtrable et agrandissement des photographies.
- `/conseils` : guides de préparation et FAQ accessible avec `details/summary`.
- `/blog` : trois articles éditoriaux originaux, avec pages `/blog/[slug]`. Il ne s’agit pas d’une migration des archives du site original.
- `/contact` : coordonnées et demande par messagerie locale, sans stockage ni envoi automatique.

Navigation, pied de page, galerie et formulaire partagés entre les pages. UI/UX Pro Max a été installé depuis le dépôt officiel nextlevelbuilder/ui-ux-pro-max-skill puis consulté pour la hiérarchie, la navigation, les zones tactiles et les métadonnées. La palette du site de référence a été conservée.

Vérification de cette extension : build statique réussi, TypeScript réussi, réponses HTTP 200 sur les cinq rubriques, l’accueil, une fiche service et un article. Les illustrations des services proviennent des photographies déjà téléchargées et ne représentent pas nécessairement les lieux évoqués.

## Typographie et palette

Les skills Font Pairing et Color Combo ont été appliqués à toutes les pages : Playfair Display (titres normaux et italiques) et DM Sans (textes et interface), chargées localement avec next/font/local et font-display: swap. Les licences OFL se trouvent dans app/fonts/.

Palette adaptée de « Terracotta Bloom × Sand Dune » : ivoire #fcf8f3, sable #eedcc8, brun #35251e, texte secondaire #705c50, terre cuite #a04830 et survol #843a27. Les rôles sont centralisés dans les variables CSS de app/globals.css, y compris les boutons, les filtres, le pied de page et les formulaires.

Contrastes calculés : brun/ivoire 13,84:1 ; texte secondaire/sable 4,71:1 ; terre cuite/ivoire 5,73:1 ; texte du bouton au survol 7,59:1. Le terre cuite clair #c96a4a est réservé aux usages décoratifs.

## Galerie horizontale liée au défilement vertical

La galerie reste ancrée à 24 px du haut de l’écran pendant que la progression verticale de la page fait glisser horizontalement les photographies. La hauteur de la séquence dépend du nombre de photos filtrées. Aucun événement de molette n’est capturé. La page reprend son défilement normal après la dernière image. Les flèches et points déplacent la page jusqu’à la position correspondante dans la séquence.

Sur mobile, le geste reste un défilement vertical normal. En mouvement réduit, la section reste courte et les commandes changent la photo sans transition. Les filtres et l’agrandissement restent disponibles.

Contrôle navigateur : la position verticale de la galerie reste à 24 px pendant que sa piste horizontale passe de -877 px à -1332 px et que le compteur avance de 02/06 à 03/06.

# photoghrapheMarrakesh
