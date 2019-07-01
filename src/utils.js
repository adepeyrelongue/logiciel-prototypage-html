import { remote } from "electron";
import path from "path";
import fs from "fs";
import klawSync from "klaw-sync";
import yaml from "js-yaml";
import accents from "remove-accents";

export function kebabCase(libelle) {
    return accents
        .remove(libelle)
        .toLowerCase()
        .replace(/[^a-z 0-9-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

export function camelCase(libelle) {
    return accents
        .remove(libelle)
        .toLowerCase()
        .replace(/[^a-z 0-9]/g, "")
        .trim()
        .replace(/\s+[a-z]/g, s => s.trim().toUpperCase());
}

export function preferences() {
    const fichier = path.resolve(remote.app.getPath('userData'), "preference.yml");

    if (fs.existsSync(fichier)) {
        return yaml.safeLoad(fs.readFileSync(fichier, 'utf8'));
    } else {
        const pref = { proto: false, fichier: false };
        fs.writeFileSync(fichier, yaml.safeDump(pref, { noArrayIndent: true }));
        return pref;
    }
}

export function setPreferences(preferences) {
    const fichier = path.resolve(remote.app.getPath('userData'), "preference.yml");

    let pref = yaml.safeLoad(fs.readFileSync(fichier, 'utf8'));
    pref = { ...pref, ...preferences };
    fs.writeFileSync(fichier, yaml.safeDump(pref, { noArrayIndent: true }));
}

export function chargerConf(chemin) {
    return yaml.safeLoad(fs.readFileSync(path.resolve(__static, chemin), 'utf8'));
}

export function enregistrerConf(chemin, data) {
    fs.writeFileSync(path.resolve(__static, chemin), yaml.safeDump(data, { noArrayIndent: true }));
}

export const composants = chargerConf("composants.yml");

let cle = 1;
function cleUnique() {
    return cle++;
}

function preparerNoeudPourAffichage(composant) {
    composant.cle = cleUnique();

    if (composant.blocs) {
        for (const bloc of composant.blocs) {
            preparerNoeudPourAffichage(bloc);
        }
    } else if (composant.elements) {
        for (const nom of Object.keys(composant.elements)) {
            if (composant.elements[nom]) {
                composant.elements[nom].tag = composants[composant.tag].elements[nom].tag;
            } else {
                composant.elements[nom] = { tag: composants[composant.tag].elements[nom].tag };
            }
            preparerNoeudPourAffichage(composant.elements[nom]);
        }
    } else {
        // définir un ensemble vide de blocs ou éléments
        if (composants[composant.tag].blocs) {
            composant.blocs = [];
        } else if (composants[composant.tag].elements) {
            composant.elements = {};
        }
    }
}

export function dupliquerNoeud(element) {
    const nouvelElement = JSON.parse(JSON.stringify(element))
    preparerNoeudPourAffichage(nouvelElement);
    return nouvelElement;
}

export function chargerModele(fichier, tag) {
    const modele = yaml.safeLoad(fs.readFileSync(fichier, 'utf8'));

    // renseigner définition si vide
    if (!modele.definition) {
        modele.definition = {};
    }

    // renseigner le tag si absent
    if (!modele.definition.tag) {
        modele.definition.tag = tag || "page";
    }

    preparerNoeudPourAffichage(modele.definition);
    return modele;
}

export function chargerModeles(tag, options) {
    let racine;
    if (options) {
        if (options.dossier) {
            racine = path.resolve(options.dossier, tag);
        } else if (options.parent) {
            racine = path.resolve(__static, "modeles", options.parent, tag);
        } else {
            racine = path.resolve(__static, "modeles", tag);
        }
    } else {
        racine = path.resolve(__static, "modeles", tag);
    }

    if (fs.existsSync(racine)) {
        const entrees = klawSync(racine, {
            nodir: true,
            depthLimit: 0
        });
        return entrees.map(entree => {
            const modele = yaml.safeLoad(fs.readFileSync(entree.path, 'utf8'));
            modele.path = entree.path;

            // renseigner définition si vide
            if (!modele.definition) {
                modele.definition = {};
            }

            // renseigner le tag si absent
            if (!modele.definition.tag) {
                modele.definition.tag = tag;
            }

            preparerNoeudPourAffichage(modele.definition);
            return modele;
        });
    } else {
        return [];
    }
}

function preparerNoeudPourEngistrement(composant) {
    delete composant.cle;

    if (composant.blocs) {
        if (composant.blocs.length === 0) {
            delete composant.blocs;
        } else {
            for (const bloc of composant.blocs) {
                preparerNoeudPourEngistrement(bloc);
            }
        }
    } else if (composant.elements) {
        if (Object.keys(composant.elements).length === 0) {
            delete composant.elements;
        } else {
            for (const nom of Object.keys(composant.elements)) {
                const element = composant.elements[nom];

                delete element.tag;
                preparerNoeudPourEngistrement(element);
            }
        }
    }
}

export function enregistrerModele(fichier, definition, libelle) {
    if (path.extname(fichier) === "") {
        fichier = fichier + ".yml";
    }

    const _definition = JSON.parse(JSON.stringify(definition));
    preparerNoeudPourEngistrement(_definition);

    const modele = {
        libelle: libelle || "",
        definition: _definition
    };

    fs.writeFileSync(fichier, yaml.safeDump(modele, { noArrayIndent: true }));
}

export function texteVersParagraphesHtml(texte) {
    return texte.split(/\s*[\r\n]+\s*/).map(p => `<p>${p}</p>`).join("");
}

export function texteVersLignesHtml(texte) {
    return texte.split(/\s*[\r\n]+\s*/).join("<br/>");
}