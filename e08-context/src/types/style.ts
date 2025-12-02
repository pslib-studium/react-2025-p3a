export const colors = ["red", "blue", "green", "orange"] as const;
export type Color = (typeof colors)[number];
//export type Color = "red" | "blue" | "green";