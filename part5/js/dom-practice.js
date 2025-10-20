let inventory = [
  [2233, "Hat", 12, 14.99],
  [3223, "Socks", 36, 9.99],
  [4824, "Shirt", 10, 15.99],
  [6343, "Jeans", 22, 39.99],
  [9382, "Jacket", 5, 49.99],
];

function title() {
  console.log("PRODUCT INVENTORY MANAGEMENT");
  console.log("----------------------------");
}

function viewProducts() {
  title();
  const ordered = [...inventory].sort((a, b) => a[0] - b[0]);
  for (const [sku, name, qty, cost] of ordered) {
    console.log(`${sku} ${name} (${qty}) $${cost.toFixed(2)}`);
  }
}

function updateProduct() {
  const skuInput = prompt("Enter a sku to update:");
  if (skuInput === null) return;

  const sku = Number(skuInput);
  const idx = inventory.findIndex((p) => p[0] === sku);
  if (idx === -1) {
    alert(`SKU ${sku} not found.`);
    return;
  }

  const qInput = prompt(`Enter new quantity for SKU ${sku}:`);
  if (qInput === null) return;

  const qty = Number(qInput);
  if (!Number.isFinite(qty) || qty < 0) {
    alert("Please enter a valid non-negative number.");
    return;
  }

  inventory[idx][2] = qty;
  alert(`Updated SKU ${sku} to quantity ${qty}.`);
  viewProducts();
}

function menu() {
  console.clear();
  viewProducts();
  let cmd;
  do {
    cmd = prompt(
      "Command menu:\nview – View all products\nupdate – Update quantity by SKU\nexit – Exit program"
    );
    if (cmd === null) return;
    cmd = String(cmd).trim().toLowerCase();

    if (cmd === "view") viewProducts();
    else if (cmd === "update") updateProduct();
    else if (cmd !== "exit")
      alert("Unknown command. Try: view, update, or exit.");
  } while (cmd !== "exit");

  console.log("Program terminated.");
}

menu();
