function produceCardTemplate({productName, brand, category, price, quantity, barcode, nutritionalFacts, imageIndex, ...produce}) {
    const template = `
    <div
        class="border-slate-600 border-2 p-6 shadow-lg shadow-slate-400 rounded-lg flex flex-col gap-6 sm:w-[100%] lg:w-[48.5%] sm:mx-6 lg:mx-0">
        <div class="flex flex-row gap-6 h-[12rem]">
          <img src="/grocery-images/${imageIndex}.jpg" class="rounded-lg h-full" alt="${productName}"></img>
          <div class="flex flex-col gap-2 text-slate-800">
            <h2 class="font-bold text-4xl">${productName}</h2>
            <p class="text-2xl">Brand: ${brand}</p>
            <p>Category: ${category}</p>
            <p>${quantity} in stock</p>
            <p class="font-bold text-[1.5rem] mt-4 text-red-600">$${price} each</p>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex">
            <p class="rounded-lg bg-gray-200 p-2 w-[75%]">${nutritionalFacts}</p>
            <p class="text-center barcode w-[25%]">${barcode}</p>
          </div>
          <button
            class="border-[.125rem] border-slate-600 bg-transparent text-slate-600 font-bold py-2 px-4 rounded-lg">Add
            To Cart</button>
        </div>
      </div>
          
      `
      
      const elm = document.createRange().createContextualFragment(template)

      return elm
}

export {produceCardTemplate}