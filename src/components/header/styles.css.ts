import { style } from "@vanilla-extract/css";

export const header = style({
  width: "100%",
  height: 60,
  padding: "20px 40px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  verticalAlign: "middle",
  gap: "1rem",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#114111",
});

export const nav = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  flex: 1,
});

export const navList = style({
  listStyle: "none",
  display: "flex",
  gap: "1rem",
  margin: 0,
  padding: 0,
  flexWrap: "wrap",
  justifyContent: "flex-end",
  textAlign: "center",
  "@media": {
    "screen and (max-width: 780px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

export const navItem = style({
  padding: "auto",
  height: "2rem",
  textAlign: "center",
  alignContent: "center",
  textDecoration: "none",
  color: "#0070f3",
  ":hover": {
    textDecoration: "underline",
  },
});

export const navItemText = style({
  margin: "auto",
  fontSize: "1rem",
  fontWeight: "500",
  color: "#0070f3",
  ":hover": {
    textDecoration: "wavy",
  },
});

export const button = style({
  visibility: "hidden",
  position: "fixed",
  right: "20px",
  top: "20px",
});
