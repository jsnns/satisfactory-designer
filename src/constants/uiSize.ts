export type Size = "small" | "medium" | "large";
export const pxForSize: {[key in Size]: number} = {
    large: 32,
    medium: 16,
    small: 8
}