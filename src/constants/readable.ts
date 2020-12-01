import { ResourceNodeType } from "../state/types/ResourceNode";

export const resourceNodeTypeReadable: {
  [key in ResourceNodeType]: string;
} = {
  copper: "Copper",
  iron: "Iron",
  limestone: "Limestone",
};
