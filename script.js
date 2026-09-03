const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const nav = document.querySelector("[data-nav]");
const setHeader = () => header.classList.toggle("scrolled", scrollY > 12);
setHeader();
addEventListener("scroll", setHeader, { passive: true });
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }),
);
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-filter]")
      .forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document
      .querySelectorAll(".entry[data-type]")
      .forEach(
        (entry) =>
          (entry.hidden = filter !== "all" && entry.dataset.type !== filter),
      );
  }),
);
document.querySelector("[data-year]").textContent = new Date().getFullYear();
