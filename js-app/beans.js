const beans = {
  showAllBeans(beans) {
    let beanHTML = "";
    let beanDiv = document.querySelector("#beans");
    console.log(typeof beans);
    console.log(beans[0].name);
    if (beans !== null) {
      const beanArray = beans;
      for (let i = 0; i < beans.length; i++) {
        beanHTML += `<div>
                        <h4>${beans[i].name}</h4>
                        <p>${beans[i].region}</p>
                        <p>${beans[i].notes}</p>
                        <div>`;
      }
      beanDiv.innerHTML = beanHTML;
    }
  },
};

export default beans;
