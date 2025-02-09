import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
  audience: "mern-food-ordering-app-api",
  issuerBaseURL: "https://dev-c5dcemhaske1mdu0.us.auth0.com/",
  tokenSigningAlg: "RS256",
});
