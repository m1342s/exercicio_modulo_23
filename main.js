document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector(".profile-avatar");
  const name = document.querySelector(".profile-name");
  const username = document.querySelector(".profile-username");
  const reposNumber = document.querySelector(".reposNumber");
  const followers = document.querySelector(".followers");
  const following = document.querySelector(".following");
  const link=document.querySelector(".profile-link")
  fetch("https://api.github.com/users/m1342s").then(
    function(res) {
        return res.json()
    }
  )
  .then(
    function(json){
        console.log(json)
     img.src=json.avatar_url
    name.innerText=json.name
    username.innerText=json.login
    reposNumber.innerHTML="Repositórios"+ "  "+  +json.public_repos
    followers.innerHTML="Seguidores"+ " " +json.followers
    following.innerHTML="Seguindo"+ " " +json.following
    link.href=json.html_url

    }
  )
})