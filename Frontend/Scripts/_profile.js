window.onload = () => {
  //Dropdown Edit profile
  const editDiv = document.getElementById("bioEditDiv");
  const appearBtn = document.getElementById("ebBtn");

  const appear = () => {
    if (editDiv.style.display == "none") {
      editDiv.style.display = "block";
    } else {
      editDiv.style.display = "none";
    }
  };
  appearBtn.addEventListener("click", appear);

  //API to grab profile information
  let fullName = document.getElementById("name");
  let bioInfo = document.getElementById("bioInformation");
  axios
    .get("../../Backend/APIs/get_account.php")
    .then((res) => {
      fullName.innerText = res.data.fname + "\t" + res.data.lname;
      bioInfo.innerText = res.data.bio;
    })
    .catch((err) => console.log(err));

  //API to update bio data
  const bioForm = document.getElementById("bioEditForm");
  bioForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(bioForm);
    try {
      const res = await axios.post("../../Backend/APIs/edit_bio.php", data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  });

  //API to get all my posts
  axios
    .get("../../Backend/APIs/get_my_photos.php")
    .then((res) => {
      const pics = res.data;
      const mainContainer = document.getElementById("card");
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

  //Popup for upload button
  const pForm = document.getElementById("popup");
  const Open = () => {
    pForm.style.display = "block";
  };
  const Cloose = () => {
    pForm.style.display = "none";
  };
  pBtn = document.getElementById("upBtn");
  pBtn.addEventListener("click", Open);

  cBtn = document.getElementById("close");
  cBtn.addEventListener("click", Cloose);
};
