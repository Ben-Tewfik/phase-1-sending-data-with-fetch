function submitData(name, email) {
  const UserData = {
    name: name,
    email: email,
  };
  return fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(UserData),
  })
    .then(resp => resp.json())
    .then(data => {
      const id = data.id;
      const p = document.createElement("p");
      p.textContent = `the id : ${id}`;
      document.body.appendChild(p);
    })
    .catch(error => {
      const errorMessage = error.message;
      const p = document.createElement("p");
      p.textContent = `error : ${errorMessage}`;
      document.body.appendChild(p);
    });
}
