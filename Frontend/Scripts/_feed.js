window.onload = () => {
  //AXIOS GET API to fetch all pictures in the database
  axios
    .get("../../Backend/APIs/get_post.php")
    .then((res) => {
      const pics = res.data;
      const mainContainer = document.getElementById("feed");
      let box = ``;
      for (let i = 0; i < pics.length; i++) {
        box += `
        <div class="post">
        <div class="pic">
            <img src="../../Posts/${pics[i].pictureFile}" style="width: 80%; height: 80%; margin: auto; display: block;"/>
        </div>
   
    <div class="comment">
    <div class="util">
      <button class="utilBtn">Like</button>
      <button class="utilBtn">Comment</button>
    </div>
    <div class="commentSection">
      <div>
        <p>Abbas Harb:</p>
        <p>hi</p>
        <hr class="line" />
      </div>
      <div>
        <p>Abdallah The 4th:</p>
        <p>hi</p>
        <hr class="line" />
      </div>
      <div>
        <p>Abdallah The 3rd senior aka Abdallah the 2nd</p>
        <p>hi</p>
        <hr class="line" />
      </div>
      <div><p>hi</p></div>
      <div><p>hi</p></div>
    </div>
  </div>
  </div>
  <br>`;
        mainContainer.innerHTML = box;
      }
    })
    .catch((err) => console.log(err));

  //AXIOS POST API to create data entry for picture uploads
  const form = document.getElementById("uploadForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);
    console.log([...data]);

    axios
      .post("../../Backend/APIs/post_picture.php", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  //AXIOS GET API to fetch all comments for a specific picture

  //AXIOS POST API to add a comment to a post
  // const commForm = document.getElementById("commForm");

  // form.addEventListener("submit", function (e) {
  //   e.preventDefault();

  //   const commData = new FormData(commForm);

  //   axios
  //     .post("../../Backend/APIs/add_comment.php", commData)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // });

  //Popup for upload button
  let pForm = document.getElementById("popup");
  const pop = () => {
    pForm.style.display = "block";
  };
  const unPop = () => {
    pForm.style.display = "none";
  };
  pBtn = document.getElementById("upBtn");
  pBtn.addEventListener("click", pop);

  cBtn = document.getElementById("close");
  cBtn.addEventListener("click", unPop);
};

// axios
//   .get("../../Backend/APIs/get_comment.php", { params })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
