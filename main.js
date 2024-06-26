console.log("Main.js working")

const populate = async (value, currency) => {
    let myStr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_bVIpmkwV6EXwt97U7kzHwhXrMqcvLJj93N1MNCqV&base_currecy=" + currency
    let response = await fetch(url)
    let rjson = await response.json()
    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rjson["data"])) {

        myStr +=
            `
            <tr>
                <td> ${key} </td>
                <td> ${rjson["data"][key]["code"]} </td>
                <td> ${Math.round(rjson["data"][key]["value"] * value)}</td>
            </tr>
        `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;


}

const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()

    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("input[name='quantity']").value

    populate(value, currency)
})
