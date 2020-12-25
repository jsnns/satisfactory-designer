import { Schematic } from "../types/Schematic";

export const serializeSchematic = (schematic: Schematic): string => {
  return btoa(JSON.stringify(schematic));
};

export const updateSchematicIfNeeded = (
  previousSchematic: Schematic,
  setSchematic: (schematic: Schematic) => void
) => {
  const newSchematicString = getSchematicStringFromURL(window.location.search);

  if (!newSchematicString) return;

  try {
    if (serializeSchematic(previousSchematic) !== newSchematicString) {
      setSchematic(JSON.parse(atob(newSchematicString)));
    }
  } catch (e) {
    console.error("Error decoding schematic", e);
  }
};

export const getSchematicStringFromURL = (
  locationString: string
): string | null => {
  const params = new URLSearchParams(locationString);
  return params.get("schematic");
};
