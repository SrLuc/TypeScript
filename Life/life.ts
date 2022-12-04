interface Life {
	homeostasis: boolean;
	membrane: boolean;
	organelles: boolean;
	geneticMaterial: string;
}

interface Virus extends Life {}
const influenzaA_H1N2: Virus = {homeostasis: false, membrane: false, organelles: false, geneticMaterial: "DNA",};
const influenzaA_H2N8: Virus = {homeostasis: false, membrane: false, organelles: false, geneticMaterial: "RNA",};

interface Bacterium extends Life {}
const Salmonella: Bacterium = {homeostasis: false, membrane: true, organelles: true, geneticMaterial: "RNA",};
const  ClostridiumTetani: Bacterium = {homeostasis: true, membrane: true, organelles: true, geneticMaterial: "DNA",};


