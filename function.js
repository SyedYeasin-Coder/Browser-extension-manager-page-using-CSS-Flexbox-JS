let lightmode = localStorage.getItem('L1')
const themeSwitch = document.getElementById('theme-switch')

const enableLightmode = () => {
    document.body.classList.add('L1')
    localStorage.setItem('L1', 'active')
}

const disableLightmode = () => {
    document.body.classList.remove('L1')
    localStorage.setItem('L1', null)
}

if (lightmode === "active") enableLightmode()

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('L1')
    lightmode !== "active" ? enableLightmode() : disableLightmode()
})

const cards = document.getElementById("whole-1")
fetch('./data.json')
    .then(res => {
        if (!res.ok) {
            console.log("Problem");
            return;
        }
        return res.json();
    })
    .then(data => {
        data.forEach(post => {
            const markup = `
        <div class="total-content-container">
        <div class="content-container">
          <div class="icon-contents-container">
            <div class="icon-container">
              <img src="${post.logo}" alt="">
            </div>
            <div class="contents">
              <h3>${post.name}</h3>
              <p class="description">
                ${post.description}
              </p>
            </div>
          </div>
          <div class="bottom-button-section">
            <div>
              <input type="checkbox" class="selector" id="Remove-${post.id}">
              <label for="Remove-${post.id}" class="remove-button button">Remove</label>
            </div>
            <div class="toggle-button-container">
              <input type="checkbox" class="checker" id="check-${post.id}">
              <label for="check-${post.id}" class="toggle-button"></label>
            </div>
          </div>
        </div>
      </div>` ;
            cards.insertAdjacentHTML('beforeend', markup)
        });
    })
    .catch(error => console.log(error));