/*
    Bob wrote this before going on vacation. It seems to work except that total is always empty. Can you fix it?
*/

var data = {
  total: 0,
  lastAmount: 0,
  lastCustomer: null,
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("#btn")) {
      e.preventDefault();

      var order = {
        what: document.getElementById("what").value.trim(),
        who: document.getElementById("who").value.trim(),
      };

      var target = document.getElementById("target");
      target.textContent = order.what;

      var customer = document.getElementById("customer");
      customer.textContent = order.who;

      const update = function (data, order) {
        var { what, who } = order;

        data = {
          total: Number(data.total) + Number(what),
          lastAmount: Number(what),
          lastCustomer: who,
        };

        // what I think should happen here is to push the each new "what" value in an array and add them to the data.total

        return data.total;
      };

      totalOrders = update(data, order);
      var total = document.getElementById("total");
      total.textContent = totalOrders;
    }
  });
});
