window.onload = () => {
  axios
    .get("../../Backend/APIs/get_post.php")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
