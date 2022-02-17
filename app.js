function callback(evt) {
  let list = document.getElementById('wrapper');

  let items = list.childNodes;
  let itemsArr = [];
  for (let i in items) {
    if (items[i].nodeType == 1) {
      itemsArr.push(items[i]);
    }
  }

  itemsArr.sort(function (a, b) {
    return parseFloat(a.getAttribute('price')) ==
      parseFloat(b.getAttribute('price'))
      ? 0
      : parseFloat(a.getAttribute('price')) >
        parseFloat(b.getAttribute('price'))
      ? 1
      : -1;
  });

  for (let i = 0; i < itemsArr.length; ++i) {
    list.appendChild(itemsArr[i]);
  }
}

document.getElementById('sort').addEventListener('click', callback);
