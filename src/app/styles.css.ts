import { style } from "@vanilla-extract/css";

export const main = style({
  margin: 0,
  padding: 0,
  width: "100%",
  minHeight: "100vh",
  boxSizing: "border-box",
  textAlign: "center",
  fontSize: "1.2rem",
  color: "#333",
});

export const section = style({
  margin: "2rem 50px",
});

export const researchList = style({
  listStyle: "disc",
  textAlign: "left",
  display: "inline-block",
  margin: "0 auto",
});

export const logo = style({
  width: "80%",
  height: "auto",
  maxWidth: "300px",
  margin: "50px auto",
});
