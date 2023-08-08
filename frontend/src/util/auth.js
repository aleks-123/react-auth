import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExparationDate = localStorage.getItem("exparation");
  const exparationDate = new Date(storedExparationDate);
  const now = new Date();
  const duration = exparationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");
  const tokenDuration = getTokenDuration();

  if (!token) {
    return null;
  }

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function loader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
  return null;
}
