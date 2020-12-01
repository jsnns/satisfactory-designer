import copper from "../images/resources/copper.png";
import iron from "../images/resources/iron.png";
import limestone from "../images/resources/limestone.png";
import { ResourceNodeType } from "../state/types/ResourceNode";

export const imageForNodeType: { [key in ResourceNodeType]: string } = {
  copper,
  limestone,
  iron,
};
