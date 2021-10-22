const Social_Media_Links = {
  github: 'andrewdvdotjs',
  youtube: 'jakelinygracielly',
  instagram: 'jakeliny.gracielly',
  facebook: 'maykbrito',
  twitter: 'jakelinytec'
}

function Change_Social_Media_Links() {
  for (let li of Social_Links.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${Social_Media_Links[social]}`
  }
}

Change_Social_Media_Links()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${Social_Media_Links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      User_Name.textContent = data.name
      bio.textContent = data.bio
      name_github.href = data.html_url
      avatar_github.src = data.avatar_url
      name_login.textContent = data.login
    })
}

getGitHubProfileInfos()
