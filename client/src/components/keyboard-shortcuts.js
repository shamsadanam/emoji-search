export const _ks = () => {
  document.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "/":
        return document.querySelector(".input-field").focus();
      case "Escape":
        return document.querySelector("input:focus").blur();

      default:
        return null;
    }
  });
};
