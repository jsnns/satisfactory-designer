export type ResourceNodeType = "copper" | "iron" | "limestone";
export type ResourceNodePurity = "pure" | "normal" | "impure";

export interface ResourceNode {
  type: ResourceNodeType;
  purity: ResourceNodePurity;
}
