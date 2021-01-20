const deleteRegister = () => {
  const searchContainer = document.querySelector("#register");

  setTimeout(() => {
    searchContainer.style.opacity = "0";
  }, 200);

  setTimeout(() => {
    searchContainer.remove();
  }, 500);
}

const toLoginFunction = () => {
  deleteRegister();

  createLogin();

  const background = document.querySelector("#background");
  background.style.height = "0vh";
}

const createRegister = () => {
  const app = document.querySelector("#app");
  const container = document.createElement("main");
  container.classList.add("container--register");
  container.classList.add("center");
  container.id="register"

  const header = document.createElement("header");
  header.classList.add("header--register");

  const title = document.createElement("h1");
  title.textContent = "Criar Conta";
  title.style.color = "white";
  title.style.fontSize = "2rem";
  title.style.fontWeight = "700";

  const img = document.createElement("img");
  img.src = "./src/assets/he4rt-white.png";
  img.width = "100";
  img.alt = "Logo da He4rt Developers com a coloração branca.";

  const formulary = document.createElement("form");
  formulary.classList.add("form--register");

  const login = document.createElement("input");
  login.placeholder = "Digite o seu email..."
  login.type = "email";

  const password = document.createElement("input");
  password.type = "password";
  password.placeholder = "Digite a sua senha...";

  const enter = document.createElement("section");
  enter.classList.add("enter--register");

  const toLoginRedirect = document.createElement("a");
  toLoginRedirect.textContent = "aqui";
  const toLogin = document.createElement("p");
  toLogin.innerHTML = "Já possui uma conta? Clique ";
  toLogin.insertAdjacentElement("beforeend", toLoginRedirect);
  toLoginRedirect.addEventListener("click", toLoginFunction);

  const loginAccount = document.createElement("button");
  loginAccount.textContent = "Registrar";

  enter.insertAdjacentElement("afterbegin", toLogin);
  enter.insertAdjacentElement("beforeend", loginAccount);

  formulary.insertAdjacentElement("afterbegin", login);
  formulary.insertAdjacentElement("beforeend", password);
  formulary.insertAdjacentElement("beforeend", enter);

  container.insertAdjacentElement("afterbegin", header);
  container.insertAdjacentElement("afterbegin", formulary);

  header.insertAdjacentElement("afterbegin", title);
  header.insertAdjacentElement("beforeend", img);

  app.appendChild(container);

  setTimeout(() => {
    const searchContainer = document.querySelector("#register");
    searchContainer.style.opacity = "1";
  }, 200);
}

const createLogin = () => {
  const app = document.querySelector("#app");

  const container = document.createElement("main");
  container.classList.add("container--login");
  container.classList.add("center");
  container.id = "login";

  const header = document.createElement("header");
  header.classList.add("header--login");

  const title = document.createElement("h1");
  title.textContent = "Realizar Login";
  title.style.fontSize = "2rem";
  title.style.fontWeight = "700";

  const img = document.createElement("img");
  img.src = "./src/assets/he4rt.png";
  img.width = "100";
  img.alt = "Logo da He4rt Developers com a coloração preta.";

  const formulary = document.createElement("form");
  formulary.classList.add("form--login");

  const login = document.createElement("input");
  login.placeholder = "Digite o seu email..."
  login.type = "email";

  const password = document.createElement("input");
  password.type = "password";
  password.placeholder = "Digite a sua senha...";

  const enter = document.createElement("section");
  enter.classList.add("enter--login");

  const toRegisterRedirect = document.createElement("a");
  toRegisterRedirect.textContent = "aqui";
  const toRegister = document.createElement("p");
  toRegister.innerHTML = "Ainda não possui conta? Clique ";
  toRegister.insertAdjacentElement("beforeend", toRegisterRedirect);
  toRegisterRedirect.addEventListener("click", toRegisterFunction);

  const loginAccount = document.createElement("button");
  loginAccount.textContent = "Entrar";

  enter.insertAdjacentElement("afterbegin", toRegister);
  enter.insertAdjacentElement("beforeend", loginAccount);

  formulary.insertAdjacentElement("afterbegin", login);
  formulary.insertAdjacentElement("beforeend", password);
  formulary.insertAdjacentElement("beforeend", enter);

  container.insertAdjacentElement("afterbegin", header);
  container.insertAdjacentElement("afterbegin", formulary);

  header.insertAdjacentElement("afterbegin", title);
  header.insertAdjacentElement("beforeend", img);

  app.appendChild(container);
}

const toRegisterFunction = () => {
  const background = document.querySelector("#background");
  background.style.height = "100vh";

  createRegister();

  setTimeout(() => {
    const login = document.querySelector("#login");
    login.remove();
  }, 1000);
}

const start = () => {
  const app = document.querySelector("#app");

  const background = document.createElement("main");
  background.id = "background";
  background.classList.add("background");

  app.appendChild(background);

  createLogin();
}

start();