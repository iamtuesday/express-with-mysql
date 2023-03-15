import Cookies from "js-cookie";
import { fetcher } from "./baseApi";
import Router from "next/router";

//Login
export const setToken = (username: string, jwt: string, id: number) => {
  // if(typeof window === 'undefined'){
  //     return;
  // }

  //Cookies.set('name', 'value', { expires: 7 }) --> Create a cookie that expires 7 days from now, valid across the entire site
  //CREATE A COOKIE
  Cookies.set('id', id.toString());
  Cookies.set("username", username);
  Cookies.set("jwt", jwt);

  // Cookies.get(); // => { name: 'value' } --> Read all visible cookies:
  //READ A COOKIE
  //   if (Cookies.get("username")) {
  //     Router.reload();
  //   }
};

//Logout
export const unsetToken = () => {
  if (typeof window === "undefined") {
    return;
  }
  Cookies.remove("role");
  Cookies.remove("jwt");
  //   Cookies.remove("username");

  window.location.reload(); // =  Router.reload();
};

//Client
export const getUserFromLocalCookie = () => {
  const jwt = getTokenFromLocalCookie();
  if (jwt) {
    // return fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
    return fetcher(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((data) => {
        return data;
      })
      .catch((error) => console.error(error));
  } else {
    return;
  }
};

export const getTokenFromLocalCookie = () => {
  return Cookies.get("jwt");
};
