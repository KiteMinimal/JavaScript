const container = document.getElementById('container')


const url = "https://api.github.com/users/kiteminimal"
const xhr = new XMLHttpRequest()

xhr.open("GET", url)

xhr.onreadystatechange = function() {
    console.log(xhr.readyState)
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log(typeof data)
        console.log(data)

        const image = document.createElement('img')

        // image.src = `${data.avatar_url}`
        // image.alt = 'profile_picture'

        image.setAttribute('src', `${data.avatar_url}`)
        image.setAttribute('alt',`${data.login}`)
        console.log(image)

        image.style.width = "150px"
        image.style.border = "2px solid"
        image.style.padding = "4px"
        container.appendChild(image)

        const profileName = document.createElement('h2')

        profileName.style.textAlign = 'center'
        profileName.textContent = `${data.login}`

        container.appendChild(profileName)
        
    }
}

xhr.send()