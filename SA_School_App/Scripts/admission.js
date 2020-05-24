$('#datepicker').datepicker({
    weekStart: 1,
    daysOfWeekHighlighted: "6,0",
    autoclose: true,
    todayHighlight: true,
});

$('#datepicker').datepicker("setDate", new Date());

$(".birth_date").on("click", (e)=>{
  $('#datepicker').focus();
});


$('#datepicker2').datepicker({
    weekStart: 1,
    daysOfWeekHighlighted: "6,0",
    autoclose: true,
    todayHighlight: true,
});

$(".today_date").on("click", (e)=>{
  $('#datepicker2').focus();
})

$('#datepicker2').datepicker("setDate", new Date());

//  file input

var inputs = document.querySelectorAll('.file-input-single')

for (var i = 0, len = inputs.length; i < len; i++) {
customInput(inputs[i])
}

function customInput (el) {
const fileInput = el.querySelector('[type="file"]')
const label = el.querySelector('[data-js-label]')

fileInput.onchange =
fileInput.onmouseout = function () {
 
if (!fileInput.value) return

var value = fileInput.value.replace(/^.*[\\\/]/, '')
el.className += ' -chosen'
label.innerText = value
}
}


// no react or anything
let state = {};

// state management
function updateState(newState) {
state = { ...state, ...newState };
// console.log(state);
}

// event handlers
$("input").change(function (e) {
let files = document.getElementById("upload").files;
let filesArr = Array.from(files);
updateState({ files: files, filesArr: filesArr });

renderFileList();
});

$(".files").on("click", "li > i", function (e) {
let key = $(this).
parent().
attr("key");
let curArr = state.filesArr;
curArr.splice(key, 1);
updateState({ filesArr: curArr });
renderFileList();
});

$("form").on("submit", function (e) {
e.preventDefault();
// console.log(state);
renderFileList();
});

// render functions
function renderFileList() {
let fileMap = state.filesArr.map((file, index) => {
let suffix = "bytes";
let size = file.size;
if (size >= 1024 && size < 1024000) {
suffix = "KB";
size = Math.round(size / 1024 * 100) / 100;
} else if (size >= 1024000) {
suffix = "MB";
size = Math.round(size / 1024000 * 100) / 100;
}


return `<li class="list-group-item list-item" key="${index}">${
  file.name.length > 15 ? file.name.slice(0,12) + "..." : file.name 
} <span class="file-size">${size} ${suffix}</span><i class="material-icons md-48" style="font-size:19px; padding: 0px 10px;  border: 1px solid;  border-radius: 50%; font-style: normal; cursor: pointer; margin-top: -3px; color: #949ea5;   ">X</i></li>`;
});
$("ul.multi-loaded").html(fileMap);
}
// parent and  Guardian 

$(".guardian").hide();
$(".parent").show();

function valueChanged(){
 var parents = $('#parents');
 var guardian = $('#guardian');
 if(parents.is(':checked') === true){
   $(".guardian").hide();
   $(".parent").show();
 }
 if(guardian.is(':checked') === true){
   $(".guardian").show();
   $(".parent").hide();
 }
};

// dropdown menu
$(".log_dropdown").hide(); 
var clicks = 0;
$(".myArrow").on("click", (e)=>{
  
  
if (clicks == 0) {
$(".log_dropdown").show();
  clicks++;
  } else {
  $(".log_dropdown").hide();
  clicks--; 
}
})