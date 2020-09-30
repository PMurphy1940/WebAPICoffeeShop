const CSUrl = "https://localhost:5001/api";

const CSApi = {
  getAllBeanVarieties() {
    return fetch(`${CSUrl}/beanvariety/`).then((resp) => resp.json());
  },

  addNewBean(beanObject) {
    return fetch(`${CSUrl}/beanvariety/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(beanObject),
    }).then((data) => data.json);
  },

  getAllCoffee() {
    return fetch(`${CSUrl}/coffee/`).then((response) => response.json());
  },
};

export default CSApi;
