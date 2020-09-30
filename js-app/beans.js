import CSApi from "./CoffeeShopAPI.js";

const beans = {
  showAllBeans(beans) {
    let beanHTML = '<div class = "bean__Pic">';
    let beanDiv = document.querySelector("#container");
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
      beanHTML += "</div>";
      beanDiv.innerHTML = beanHTML;
    }
  },
  //Almost, but not quite...
  //   addNewBean() {
  //     let beanHTML = `<div class="bean__Pic">
  //                         <form action="https://localhost:5001/api/beanvariety/" method="POST">
  //                             <label for="name">Bean Name:</label>
  //                             <input type="text" id="name" name="name" required /><br />
  //                             <label for="region">Region:</label>
  //                             <input type="text" id="region" name="region" required /><br />
  //                             <label for="notes">Notes:</label>
  //                             <input type="text" id="notes" name="notes" />
  //                             <button type="submit" value="submit" for="addNewBean">Submit</button>
  //                         </form>
  //                     </div>`;
  //     let beanDiv = document.querySelector("#container");
  //     beanDiv.innerHTML = beanHTML;
  //   },
  addNewBean() {
    let beanHTML = `<div class="bean__Pic">
                         <form >
                             <label for="name">Bean Name:</label>
                             <input class="beanName" type="text" id="name" name="name" required /><br />
                             <label for="region">Region:</label>
                             <input class="beanRegion" type="text" id="region" name="region" required /><br />                             
                             <label for="notes">Notes:</label>
                             <input type="text" id="notes" name="notes" />
                             <button class="Add__Bean__Button"type="button" >Submit</button>
                         </form>
                     </div>`;
    let beanDiv = document.querySelector("#container");
    beanDiv.innerHTML = beanHTML;

    document
      .querySelector(".Add__Bean__Button")
      .addEventListener("click", (e) => {
        buildABean();
      });
  },
};

export default beans;

const buildABean = () => {
  let beanObj = {
    name: document.querySelector(".beanName").value,
    region: document.querySelector(".beanRegion").value,
  };
  console.log(beanObj);
  try {
    beanObj.notes = document.querySelector(".beanNotes").value;
  } catch {}
  CSApi.addNewBean(beanObj);
};
