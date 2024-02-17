const array = [1, 2, 3, 4, 5]

for (let ele in array) {
  setTimeout(function () {
    console.log(ele)
  }, 3000);
}