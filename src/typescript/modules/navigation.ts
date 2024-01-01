const ITEM_ATTR = "data-ui-nav-item";

const InitNavigation = () => {
  const navItems = document.querySelectorAll(
    `[${ITEM_ATTR}]`
  ) as NodeListOf<HTMLLIElement>;

  navItems.forEach((item) => {
    const link = item.querySelector("a") as HTMLAnchorElement;
    const unorderedList = item.querySelector("ul") as HTMLUListElement;
    if (!link) return;
    if (!unorderedList) return;

    if (
      link.href === window.location.href ||
      window.location.href.startsWith(link.href)
    ) {
      link?.classList.add("active");
      unorderedList?.classList.add("active");
    }
  });

  const links = document.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>;
  links.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("current");
    }
  });
};

export default InitNavigation;
