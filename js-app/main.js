import beans from "./beans.js";

const beanUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
  getAllBeanVarieties().then((beanVarieties) => {
    beans.showAllBeans(beanVarieties);

  });

});

function getAllBeanVarieties() {
  return fetch(beanUrl).then((resp) => resp.json());
}

const getAllCoffee = () => {
  return fetch(coffeeUrl).then((response) => response.json());
};

