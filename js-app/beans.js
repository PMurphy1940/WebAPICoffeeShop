const beans = {
  showAllBeans(beans) {
    let beanHTML = "";
    let beanDiv = document.querySelector("#beans");
    console.log(typeof beans);
    console.log(beans[0].name);
    if (beans !== null) {
      for (let i = 0; i < beans.length; i++) {
        beanHTML += `<div class = "bean__Card">
                        <h3 class = "card__Center">${beans[i].name}</h3>
                        <p class = "region">${beans[i].region}</p>
                        <p class = "notes">${beans[i].notes}</p>
                    </div>`;
      }
      beanDiv.innerHTML = beanHTML;
    }
  },
};

export default beans;
