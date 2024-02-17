let count = 0

const incrementCount = () => {
  console.log(count++)
}

for (let i = 0; i < 100; i++) {
  incrementCount()
}