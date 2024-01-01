import InitNavigation from "./modules/navigation";

InitNavigation();

document.addEventListener("astro:after-swap", () => {
  InitNavigation();
});
