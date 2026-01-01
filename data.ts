
import { Publication, Project, Education } from './types';

export const RESEARCHER_NAME = "Tochukwu Oluwatosin Maduka";

export const HERO_BIO = "I am a doctoral researcher specializing in the interactions between environmental pollutants and biological systems, with a particular focus on allergen–pollutant–microplastic interactions, phytochemistry, and molecular simulations. My research integrates experimental spectroscopy, surface chemistry, and multiscale computational modeling to understand toxicity mechanisms and develop nature-inspired mitigation strategies.";

export const METRICS = {
  researchGate: "295.4",
  citations: 230,
  hIndex: 10,
  i10Index: 10
};

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Doctor of Philosophy (PhD) – Materials Science",
    institution: "Graduate School of Science and Engineering, Saitama University, Japan",
    period: "2023 – 2026 (Expected)",
    supervisors: ["Prof. Qingyue Wang", "Prof. Miho Suzuki"]
  },
  {
    degree: "Master of Science (MSc) – Chemistry",
    institution: "Imo State University, Owerri, Nigeria",
    period: "2019 – 2021",
    thesis: "Isolation, Characterization, and Molecular Docking of Compounds from Zanthoxylum rhetsa"
  },
  {
    degree: "Bachelor of Science (BSc) – Chemistry",
    institution: "Imo State University, Nigeria",
    period: "2011 – 2015"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "phd-main",
    title: "The Interaction and Toxic Potential of Cedar Pollen Allergen with Atmospheric Pollutants, and Their Control Using Essential Oil Extracted from Waste Hiba (Thujopsis dolabrata) Biomass",
    period: "2023 – 2026",
    description: "My doctoral research explores the synergy between urban pollution and natural allergens, aiming to provide sustainable mitigation techniques.",
    highlights: [
      "Allergen–microplastic adsorption mechanisms",
      "Gas-phase pollutant–protein chemical modification",
      "Essential oil–mediated control of allergenicity",
      "IgE binding and allergen persistence"
    ],
    techniques: ["UV–Vis", "FTIR", "SDS-PAGE", "ELISA", "MD Simulations", "DFT"]
  },
  {
    id: "microplastic-toxicity",
    title: "Molecular Simulation of Microplastic Toxicity to Aquatic Organisms",
    period: "Parallel Theme",
    description: "Investigating how microplastics interact with cellular membranes and proteins in aquatic life using computational models.",
    highlights: [
      "Computational screening of bioactive compounds",
      "Risk assessment of microplastics and PCEs",
      "Biocompatibility evaluation"
    ],
    techniques: ["MD Simulations", "AutoDock Vina", "Toxicity Prediction"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    year: 2025,
    title: "Molecular Dynamics Simulation of Cry j 1 Allergen Adsorption on a PET Microplastic Surface",
    authors: "Maduka, T.O. et al.",
    journal: "MDPI",
    doi: "10.3390/xxxxx",
    bibtex: `@article{maduka2025molecular,\n  title={Molecular Dynamics Simulation of Cry j 1 Allergen Adsorption on a PET Microplastic Surface},\n  author={Maduka, T.O. and others},\n  journal={MDPI},\n  year={2025}\n}`
  },
  {
    id: "p2",
    year: 2025,
    title: "Dual-site doping of PET-derived carbon quantum dots for pollutant adsorption",
    authors: "Enyoh, C.E.; Maduka, T.O. et al.",
    journal: "Separation and Purification Technology",
    bibtex: `@article{enyoh2025dual,\n  title={Dual-site doping of PET-derived carbon quantum dots for pollutant adsorption},\n  author={Enyoh, C.E. and Maduka, T.O. and others},\n  journal={Separation and Purification Technology},\n  year={2025}\n}`
  },
  {
    id: "p3",
    year: 2025,
    title: "Microplastic pollution and health risks in road dust",
    authors: "Rana, M.S.; Maduka, T.O. et al.",
    journal: "Microplastics",
    bibtex: `@article{rana2025microplastic,\n  title={Microplastic pollution and health risks in road dust},\n  author={Rana, M.S. and Maduka, T.O. and others},\n  journal={Microplastics},\n  year={2025}\n}`
  },
  {
    id: "p4",
    year: 2024,
    title: "Phytochemistry and pharmacology of Thujopsis dolabrata",
    authors: "Maduka, T.O. et al.",
    journal: "Industrial Crops and Products",
    bibtex: `@article{maduka2024phytochemistry,\n  title={Phytochemistry and pharmacology of Thujopsis dolabrata},\n  author={Maduka, T.O. and others},\n  journal={Industrial Crops and Products},\n  year={2024}\n}`
  },
  {
    id: "p5",
    year: 2022,
    title: "Microplastic toxicity via MD simulations",
    authors: "Enyoh, C.E.; Maduka, T.O. et al.",
    journal: "Chemosphere",
    bibtex: `@article{enyoh2022microplastic,\n  title={Microplastic toxicity via MD simulations},\n  author={Enyoh, C.E. and Maduka, T.O. and others},\n  journal={Chemosphere},\n  year={2022}\n}`
  }
];

export const SKILLS = {
  experimental: [
    "Biomass preparation & characterization",
    "Essential oil extraction (Steam distillation)",
    "Natural product isolation",
    "Spectroscopy (UV-Vis, FTIR, NMR)",
    "Molecular Biology (SDS-PAGE, ELISA, SPR)",
    "GC-MS & LC-MS"
  ],
  computational: [
    "Molecular Docking (AutoDock Vina)",
    "Molecular Dynamics (MD) Simulations",
    "Density Functional Theory (DFT)",
    "ADMET & Toxicity Prediction",
    "Machine Learning & QSAR"
  ]
};
