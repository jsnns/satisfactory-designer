import { Schematic } from "../types/Schematic";

export const serializeSchematic = (schematic: Schematic): string => {
  return btoa(JSON.stringify(schematic));
};

export const updateSchematicIfNeeded = (
  newSchematicString: string,
  previousSchematic: Schematic,
  setSchematic: (schematic: Schematic) => void
) => {
  if (serializeSchematic(previousSchematic) !== newSchematicString) {
    setSchematic(JSON.parse(atob(newSchematicString)));
  }
};
