/*
    Bob wrote this before going on vacation. It seems to work except that total is always empty. Can you fix it?
*/

var data = {
  total: 0,
  lastAmount: 0,
  lastCustomer: null,
};

let shipmentsArr = [];
let shipments;

// shipmentsArr.push(shipments);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("#btn")) {
      e.preventDefault();

      shipments = document.querySelector("#what").value;

      shipmentsArr.push(Number(shipments));

      var totalShipments = shipmentsArr.reduce(function (a, b) {
        return a + b;
      }, 0);

      console.log(totalShipments);

      var order = {
        what: shipments,
        who: document.getElementById("who").value.trim(),
      };

      var target = document.getElementById("target");
      target.textContent = order.what;

      var customer = document.getElementById("customer");
      customer.textContent = order.who;

      const update = function (data, order) {
        var { what, who } = order;

        data = {
          total: totalShipments,
          lastAmount: what,
          lastCustomer: who,
        };

        // what I think should happen here is to push the each new "what" value in an array and add them to the data.total
        console.log(data.total);

        return data.total;
      };

      totalOrders = update(data, order);
      var total = document.getElementById("total");
      total.textContent = totalShipments;
    }
  });
});
