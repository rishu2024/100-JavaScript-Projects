const calculatebtn = document.getElementById('calculate')
const billinput = document.getElementById('bill')
const tipinput = document.getElementById('tip')
const totalspan = document.getElementById('total')

function calculatetotal() {
    const billvalue = billinput.value;
    const tipvalue = tipinput.value;
    const totalvalue = billvalue * (1 / tipvalue / 100)
    totalspan.innerText = totalvalue.toFixed(2)
}
calculatebtn.addEventListener('click', calculatetotal)