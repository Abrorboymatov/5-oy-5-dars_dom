
let cards = document.querySelector("#cards");

function getDate() {
  const http = new XMLHttpRequest();

  return new Promise((res, rej) => {
    http.addEventListener("readystatechange", () => {
      if (http.readyState === 4 && http.status === 200) {
        res(JSON.parse(http.response));
      } else if (http.readyState === 4) {
        rej("opps nimadir hto");
      }
    });

    http.open("GET", "https://fakestoreapi.com/products");
    http.send();
  });
}

getDate()
  .then((data) => addUi(data))
  .catch((error) => console.log("oops nimadir hato"));

function addUi(data) {
  data.forEach((element) => {
    let div = document.createElement("div");
    div.classList.add(
      "p-[10px]",
      "rounded-[5px]",
      "w-[232px]",
      "cursor-pointer",
      "hover:shadow-sm"
    );

    div.innerHTML = `
    <img src="${element.image}" alt="" class="w-full h-48 object-contain transform transition-transform duration-300 hover:scale-110 mb-[10px]">
   <div>
     <p class="text-[14px] text-[#7F4DFF]">${element.price}$</p>
     <span class="text-[11px] bg-[#FFFF00] ph-[1px] px-[4px] text-[#1F1F26] rounded-sm">99 095 so'm/oyiga</span>
     <p class="text-[12px] text-[#1F2026]">${element.title}</p>
     <p class="text-sm text-[#7E818C] mb-[6px]">4.6(14 sharhlar)</p>
     <button class="bg-[#7000FF] h-[32px] w-full text-white text-[14px] rounded-xl cursor-pointer">Savatga</button>
             
   </div>
    `;
    cards.append(div);
  });
}