window.onload = () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    if (data.get("password") == data.get("cpassword")) {
      try {
        const res = await axios.post(
          "../../Backend/APIs/register_account.php",
          data
        );
        if (res.data.success == true) {
          alert("Registered account successfuly!");
          form.reset();
          window.location.href = "_login.html";
        } else {
          alert("Email already exists!");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Passwords dont match!");
    }
  });
};
