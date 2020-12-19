import React from "react";
import { atom } from "recoil";

export type Modal = {
  element: React.ReactElement;
  title: string;
};

export const currentModal = atom<Modal | null>({
  key: "CurrentModal",
  default: null,
});
