const headers = new Headers({
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*"
});

const enterAccount = async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  await fetch("http://api-challenges3.ddns.net:8081/api/Auth/SignIn", {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ email: email.value, password: password.value }),
    headers
  })
  .then(res => {
    if(document.querySelector("#response")) document.querySelector("#response").remove();

    const response = document.createElement("p");
    response.style.color = "black";
    response.id = "response";

    if(res.status === 400 || res.status === 401 ||res.status === 404) {
      response.textContent = `Não foi possível logar :(`;
    }
    else {
      setTimeout(() => {
        toDashboardFunction();
      }, 500);
    }

    const container = document.querySelector("#login");
    container.insertAdjacentElement("afterbegin", response);
  })
}

const registerAccount = async (e) => {
  e.preventDefault();

  validateRegister();

  const email = document.querySelector("#login");
  const password = document.querySelector("#password");

  await fetch("http://api-challenges3.ddns.net:8081/api/Auth/SignUp", {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ email: email.value, password: password.value }),
    headers
  })
  .then(res => {
    console.log(res);
    if(document.querySelector("#response")) document.querySelector("#response").remove();

    const response = document.createElement("p");
    response.style.color = "white";
    response.id = "response";

    if(res.status === 400 || res.status === 404) {
      response.textContent = `Não foi possível cadastrar :(`;
    }
    else if(res.status === 409) {
      response.textContent = `Este email já está cadastrado!`;
    } 
    else {
      setTimeout(() => {
        toLoginFunction();
      }, 500);
    }

    const container = document.querySelector("#register");
    container.insertAdjacentElement("afterbegin", response);
  })
}

const validateRegister = () => {
  const email = document.querySelector("#login");
  const password = document.querySelector("#password");

  if(!email.value || email.value === undefined) email.classList.add("form--error");
  else if(email.classList.contains("form--error")) email.classList.remove("form--error");

  if(!password.value || password.value.length < 4) password.classList.add("form--error");
  else if(password.classList.contains("form--error")) password.classList.remove("form--error");
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

const toLoginFunction = () => {
  deleteRegister();

  createLogin();

  const background = document.querySelector("#background");
  background.style.height = "0vh";
}

const deleteRegister = () => {
  const searchContainer = document.querySelector("#register");

  setTimeout(() => {
    searchContainer.style.opacity = "0";
  }, 200);

  setTimeout(() => {
    searchContainer.remove();
  }, 500);
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
  login.id = "login";

  const password = document.createElement("input");
  password.type = "password";
  password.placeholder = "Digite a sua senha...";
  password.id = "password";

  const enter = document.createElement("section");
  enter.classList.add("enter--register");

  const toLoginRedirect = document.createElement("a");
  toLoginRedirect.textContent = "aqui";
  const toLogin = document.createElement("p");
  toLogin.innerHTML = "Já possui uma conta? Clique ";
  toLogin.style.color = "white";
  toLogin.insertAdjacentElement("beforeend", toLoginRedirect);
  toLoginRedirect.addEventListener("click", toLoginFunction);

  const loginAccount = document.createElement("button");
  loginAccount.textContent = "Registrar";
  loginAccount.addEventListener("click", registerAccount);

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
  login.id = "email";

  const password = document.createElement("input");
  password.type = "password";
  password.placeholder = "Digite a sua senha...";
  password.id = "password";

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
  loginAccount.addEventListener("click", enterAccount);

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

const toDashboardFunction = () => {
  const dashboard = document.querySelector("#dashboard");
  dashboard.style.width = "3000px";
  dashboard.style.height = "3000px";

  setInterval(() => {
    const title = document.querySelector("#hello");
    title.style.opacity = "1";
  }, 1000);
}

const start = () => {
  const app = document.querySelector("#app");

  const background = document.createElement("main");
  background.id = "background";
  background.classList.add("background");

  const dashboard = document.createElement("main");
  dashboard.id = "dashboard";
  dashboard.classList.add("bg--dashboard");

  const title = document.createElement("h1");
  title.style.fontSize = "3rem";
  title.style.fontFamily = "Poppins";
  title.style.fontWeight = "700";
  title.style.color = "#7342e2";
  title.style.zIndex = "40";
  title.style.opacity = "0";
  title.style.transition = "all 0.5s ease";
  title.classList.add("center");
  title.id = "hello";
  title.textContent = "Hello He4rt";

  app.appendChild(background);

  dashboard.appendChild(title);
  app.appendChild(dashboard);

  createLogin();
}

start();
