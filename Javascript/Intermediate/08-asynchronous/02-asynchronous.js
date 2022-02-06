const isR18Plus = (age) => {
  return new Promise((resolve, reject) => {
    if(age>18){
      resolve("anda sudah dewasa");
    }
    else{
      reject("anda masih dibawah umur");
    }
  });
}
const printR18Plus = async () => {
  const underAge = await isR18Plus(10).catch((ev) => ev);
  const properAge = await isR18Plus(19).catch((ev) => ev);

  console.log(underAge);
  console.log(properAge);
}

printR18Plus();