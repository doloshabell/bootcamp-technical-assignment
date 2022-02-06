const getGitHubUser = (username) => {
  return new Promise((resolve, reject) => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((result) => {
        if (username == "") {
          reject(null);
        } else {
          result.forEach((ev) => {
            if (ev.login == username) resolve(ev);
            else reject("not found");
          });
        }
      });
  });
}
const printGitHubUser = async () => {
  try {
    const mojombo = await getGitHubUser("mojombo");
    console.log(mojombo);
  } catch (error) {
    console.log(error);
  }

  try {
    const orange = await getGitHubUser("");
    console.log(orange);
  } catch (error) {
    console.log(error);
  }

  try {
    const rudiTabuti = await getGitHubUser("rudi.tabuti");
    console.log(rudiTabuti);
  } catch (error) {
    console.log(error);
  }
}

printGitHubUser();