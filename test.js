/*
    https://cataas.com/#/
 * Scrivere uno script che recupera i tags dall'api, di questi ne prende dal quinto al decimo e dal quindicesimo al ventesimo
 *  creare un menù dropdown con i 10 tag recuperati e alla selezione di un elemento del menù 
 *  effettua una chiamata all'api recuperando un elemento con il tag selezionato
 *  di questo elemento, bisogna mostrare nella pagina html la foto del gatto e i tags di quell'elemento
 *  formattati in questo modo "tag1 - tag2 - tag3"
*/


async function getTag() {
    const url = "https://cataas.com/api/tags"
    const request = await fetch(url) 
    const res = await request.json()
    const array1 = res.slice(5, 10)
    const array2 = res.slice(15, 20)
    const finalArrays = array1.concat(array2)
    const select = document.getElementById("test")
    finalArrays.forEach(el => {
        const option = document.createElement("option")
        option.value = el
        option.textContent = el
        select.appendChild(option)
    });
    const container = document.querySelector(".container")
    select.addEventListener("change", async () => {
        const url = `https://cataas.com/cat/${select.value}?json=true`
        const request = await fetch(url);
        const res = await request.json()
        //console.log(res)
        const img = document.createElement("img")
        img.src = `https://cataas.com${res.url}`
        container.appendChild(img)
        const h1 = document.createElement("h1")
        h1.textContent = res.tags.join("-")
        container.appendChild(h1)
        
    })

}


getTag()