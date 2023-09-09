var ARR = []

document.getElementById("add").onclick = function () {
  var FISH = document.getElementById("fish").value
  var Komanda = document.getElementById("match").value
  var Tolov = document.getElementById("pay").value
  var Qator = document.getElementById("qator").value

  var s = new Date()

  var vaqt = s.getDate() + "." + (s.getMonth() + 1) + "." + s.getFullYear()

  var obj = {
    fish: FISH,
    komanda: Komanda,
    Tolov: Tolov,
    Qator: Qator,
    sana: vaqt,
  }
  if (FISH !== "" && Tolov !== "") {
    ARR.push(obj)
    Chizish()
  } else {
    alert("Inputlarni to'ldiring")
  }

}





function Chizish() {
  var result = ''
  a = 1

  ARR.forEach((item, index) =>
  result += `<tr>

    <td> ${index+1} </td>
    <td> ${item.fish}</td>
    <td> ${item.komanda}</td>
    <td> ${item.Tolov}</td>
    <td> ${item.Qator}</td>
    <td> ${item.sana}</td>
    <td>
    <button class= 'btn btn-danger btn-sm' onclick='deleteUser(${index})' >
    del
    </button>
    </td>


    </tr> `
)


  document.getElementById("display").innerHTML = result
  document.getElementById("fish").value = ' '
  document.getElementById("pay").value = ' '

}

function deleteUser(index) {
  ARR.splice(index, 1)
  Chizish()
}