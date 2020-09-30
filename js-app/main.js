import beans from "./beans.js";
import CSApi from "./CoffeeShopAPI.js";

const button = document.querySelector("#bean-button");
const addBeanButton = document.querySelector("#new__Bean");

button.addEventListener("click", () => {
  CSApi.getAllBeanVarieties().then((beanVarieties) => {
    beans.showAllBeans(beanVarieties);
  });
});

addBeanButton.addEventListener("click", () => {
  beans.addNewBean();
});
