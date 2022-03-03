var btn = document.getElementById("btn");
var show = document.getElementById("container");
var data = localStorage.getItem("item"); 
var data = data ? JSON.parse(data) : [];

data.forEach((e, i) => {
  Createnotes(e, i);
});
btn.addEventListener("click", () => {
  Createnotes("");
});
function Createnotes(e, i) {
  console.log(e, i);

  var div = document.createElement("div");
  div.className = "show";
  show.appendChild(div);
  console.log(div);
  var inp = document.createElement("textarea");
  inp.className = "textarea";
  div.appendChild(inp);
  inp.value = e;
  var delbtn = document.createElement("button");
  delbtn.className = "btn";
  delbtn.innerText = "del";
  show.appendChild(delbtn);

  delbtn.onclick = () => {
    Dell(i);
  };

  inp.addEventListener("change", ()=>{
    localData()
  });
}

// onchange function

function localData() {
  var arr = [];
  var textarea = document.querySelectorAll("textarea");

  textarea.forEach((text) => {
    location.reload();

    arr.push(text.value);
    var arr_retrn = localStorage.setItem("item", JSON.stringify(arr));
  });
}

function Dell(i) {
  console.log(i);
  var data = JSON.parse(localStorage.getItem("item"));
  data.splice(i, 1);
  localStorage.setItem("item", JSON.stringify(data));
  location.reload();
}

// FIXME:trying to do it in second way but having a little bit issue

// function to_go() {

//   var textarea = document.querySelectorAll("input");
//   textarea.forEach((text,i)=>{
//   text.addEventListener("change", (e,i) => {

//     var notes = e.target.value;
//     var getdata = JSON.parse(localStorage.getItem("notes"));
//     if (getdata) {
//       getdata.push(notes);
//       localStorage.setItem("notes", JSON.stringify(getdata));
//     } else {
//       localStorage.setItem("notes", JSON.stringify([notes]));
//     }
//     var del_btn = document.querySelectorAll(".del_btn");

//    del_btn.forEach((del,i)=>{
//      console.log(i);
//     del.addEventListener("click", () => {

//       console.log(getdata,"before");
//       var getdata = JSON.parse(localStorage.getItem("notes"));
//       getdata.push(i,1)

//       localStorage.setItem("notes", JSON.stringify(getdata));
//       console.log(getdata,"after");
//       var card=document.querySelector(".card")
//      card.remove()
//   to_go();

//     });
//   })
//   });
// })

// }
// to_go();
