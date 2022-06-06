export const subTotal = (id, price) => {
  let subTotalCost = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  carts.forEach((item) => {
    if (item.id === id  && item.offer === "0") {
      subTotalCost = item.quantitiy * price;
    } 
    if(item.id === id  && item.offer !== "0"){
      let subTotalCostOffer = price - price*item.offer/100;
      subTotalCost = item.quantitiy * subTotalCostOffer;
    }
  });
  return subTotalCost;
};

export const quantity = (id) => {
  let product = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  carts.forEach((item) => {
    if (item.id === id) {
      product = item.quantitiy;
    }
  });
  return product;
};

export const totalCost = () => {
  let totalCost = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  carts.forEach((item) => {
    // totalCost += item.quantitiy * item.price;
    if (item.offer === "0") {
      totalCost += item.quantitiy * item.price;
    } 
    if(item.offer !== "0"){
      // eslint-disable-next-line
      let subTotalCostOffer = item.price -item. price*item.offer/100;
      totalCost += item.quantitiy * subTotalCostOffer;
    }
  });
  return totalCost;
};
