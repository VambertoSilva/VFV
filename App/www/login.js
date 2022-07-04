const btnLogin = document.getElementsById("btnLogin");
const pageLogin = document.getElementsById("Login");
const pagePrincipal = document.getElementsById("Principal");

btnLogin.addEventListener("click", () => {
  pageLogin.classList.add("hidden");
  pagePrincipal.classList.remove("hidden");
});
