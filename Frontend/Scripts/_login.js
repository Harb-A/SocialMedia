window.onload = () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);

    axios
      .post("../../Backend/APIs/login_account.php", data)
      .then((res) => {
        if (res.data.success == true) {
          window.location.href = "../Pages/_post.html";
        } else {
          alert("Wrong email/password !");
        }
      })
      .catch((err) => console.log(err));
  });
};
