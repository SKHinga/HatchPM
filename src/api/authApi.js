const BASE_URL = "https://hatch-pm.herokuapp.com";

export async function signUp(user){
  try {
    const response = await fetch(BASE_URL + '/signup', {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function signIn(user) {
  try {
    const response = await fetch(BASE_URL + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error){
    console.log(error);
  }
}