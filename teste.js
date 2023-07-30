if(data != null){
function filterDuplicates(data) {
     
  return [];
}
};

/** #region main */
const n = parseInt(readlines());
const data = readlines()
  .split(" ")
  .map((j) => parseInt(j))
  .slice(0, n);
const oldWrite = process.stdout.write;
process.stdout.write = (chunk) => {
  console.error(chunk);
  return true;
};
const filtered = filterDuplicates(data);
process.stdout.write = oldWrite;
for(let i = 0; i <filtered.length; i++) {
    console.log(filtered[i]);

}