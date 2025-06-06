import { style } from "@vanilla-extract/css";

export const header = style({
  width: "100%",
  height: 60,
  margin: 0,
  padding: "20px 40px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  verticalAlign: "middle",
  gap: "1rem",
  "@media": {
    "screen and (max-width: 780px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

export const title = style({
  margin: 0,
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#116111",
});

export const nav = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  flex: 1,
  "@media": {
    "screen and (max-width: 780px)": {
      display: "none",
      padding: "20px",
      position: "fixed",
      top: 60,
      right: 20,
      backgroundColor: "#f0f0f0",
      zIndex: 1000,
      borderRadius: "8px",
      border: "1px solid #ccc",
      justifySelf: "flex-end",
    },
  },
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
    textDecoration: "underline",
  },
});

export const button = style([
  {
    visibility: "hidden",
    position: "fixed",
    right: "20px",
    top: "20px",
    width: "60px",
    height: "60px",
    border: "none",
    "@media": {
      "screen and (max-width: 780px)": {
        visibility: "visible",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    ":active": {
      backgroundColor: "#e0e0e0",
    },
  },
]);
