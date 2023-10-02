import { fetchProduceData } from "./produce-data-fetcher";
import { produceCardTemplate } from "./produce-template";

async function renderProduce() {
    let produce = await fetchProduceData('./db/produce-data.json')
  
    const cardsContainer = document.querySelector('#cards');
    const fragment = document.createDocumentFragment();
  
    produce.forEach((p) => {
      fragment.appendChild(produceCardTemplate(p));
    });
  
    cardsContainer.appendChild(fragment);
  }

export { renderProduce }