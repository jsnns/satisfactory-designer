export const RESOURCE_NODE_TYPE = [
  "copper",
  "iron",
  "limestone",
  "coal",
  "oil",
  "caterium",
  "water",
] as const;

export const isResourceNodeType = (a: any): a is ResourceNodeType =>
  RESOURCE_NODE_TYPE.includes(a);

export type ResourceNodeType = typeof RESOURCE_NODE_TYPE[number];
export type ResourceNodePurity = "pure" | "normal" | "impure";
export type CountResourceNodePurity = { [key in ResourceNodePurity]: number };

export const multiplierForPurity: { [key in ResourceNodePurity]: number } = {
  impure: 0.5,
  normal: 1,
  pure: 2,
};
