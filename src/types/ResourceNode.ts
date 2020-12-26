export const RESOURCE_NODE = [
  "iron",
  "copper",
  "limestone",
  "coal",
  "uranium",
  "sulfur",
  "bauxite",
  "quartz",
  "caterium",
  "water",
  "oil",
] as const;

export const NEEDS_PIPE: ResourceNode[] = ["oil", "water"];

export const isResourceNodeType = (a: any): a is ResourceNode =>
  RESOURCE_NODE.includes(a);

export type ResourceNode = typeof RESOURCE_NODE[number];
export const PURITY = ["pure", "normal", "impure"] as const;
export type Purity = typeof PURITY[number];

export const purityReadbable: { [key in Purity]: string } = {
  impure: "Impure",
  normal: "Normal",
  pure: "Pure",
};

export const multiplierForPurity: { [key in Purity]: number } = {
  impure: 0.5,
  normal: 1,
  pure: 2,
};

export const resourceNodeTypeReadable: {
  [key in ResourceNode]: string;
} = {
  copper: "Copper",
  iron: "Iron",
  limestone: "Limestone",
  coal: "Coal",
  oil: "Oil",
  caterium: "Caterium",
  water: "Water",
  bauxite: "Bauxite",
  quartz: "Quartz",
  sulfur: "Sulfur",
  uranium: "Uranium",
};
