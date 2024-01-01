import InitNavigation from "./modules/navigation";
import CookieController from "@protodigital/cookie-controller";

InitNavigation();
new CookieController();

document.addEventListener("astro:after-swap", () => {
  InitNavigation();
  new CookieController();
});
