$(document).ready(function() {
    oTable = $("table.display").DataTable({
       "ordering": false,
        aaSorting: [],
        "bLengthChange": false,
        responsive: true,
        "bInfo" : false,
        "fixedHeader": {
          "header": false,
          "footer": false
      },
     
        pageLength: 5,
        language: {
          oPaginate: {
            sNext: 'Next <span class="font-weight-bold">></span> ',
            sPrevious: '<span class="font-weight-bold"><</span> Back',
            sFirst: 'FIRST',
            sLast: 'Last'
          }
        },   
        columnDefs: [
          {
            responsivePriority: 1,
            targets: 0
          },
          {
            responsivePriority: 2,
            targets: -1
          }
        ]
      });


      $("#example_wrapper > div:nth-child(3) > div.col-sm-12").removeClass("col-md-7").addClass("col-md-12")
  
     
   
  
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

    // defaultly hiding all tab
    $("#freeStructure_tab").hide();
    $("#timeTable_tab").hide();
    
    $(".sub_menu1").show();
    $(".sub_menu2").hide();
    $(".sub_menu3").hide();
    $(".thead1 > div > div > p").on("click", (e)=>{
     
      switch(e.target.id){
        case "Subject_btn":
          $("#slider").css({left: "0px"});
          $("#Subject_tab").show();
          $("#freeStructure_tab").hide();
          $("#timeTable_tab").hide();
          // sub tab
          $(".sub_menu1").show();
          $(".sub_menu2").hide();
          $(".sub_menu3").hide();
        break;
        case "feesStructure_btn":
          $("#slider").css({left: "25%"})
          // tab
          $("#freeStructure_tab").show();
          $("#Subject_tab").hide();
          $("#timeTable_tab").hide();
          // sub tab
          $(".sub_menu2").css("display", "flex");
          $(".sub_menu1").hide();
          $(".sub_menu3").hide();
        break;
        case "timeTable_btn":
          $("#slider").css({left: "50%"});
          $("#timeTable_tab").show();
          $("#freeStructure_tab").hide();
          $("#Subject_tab").hide();
          // sub tab
          $(".sub_menu3").css("display", "flex");
          $(".sub_menu2").hide();
          $(".sub_menu1").hide();
        break;
        case "students_btn":
          $("#slider").css({left: "78%"});
          $("#freeStructure_tab").hide();
          $("#Subject_tab").hide();
          $("#timeTable_tab").hide();
          // sub tab
          $(".sub_menu1").hide();
          $(".sub_menu2").hide();
          $(".sub_menu3").hide();
        break;
        default:
          $("#slider").css({left: "0%"});
          $("#freeStructure_tab").hide();
          $("#Subject_tab").hide();
          $("#timeTable_tab").hide();
          $(".sub_menu3").hide();
      }

     });
 
   
  
  $('.dropdown-menu > .dropdown > a').addClass('dropdown-toggle');
  
  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-menu > .dropdown .show').removeClass("show");
    });
    return false;
  });
  
});

// model tablesheet
$(".dialog_box").hide();
popOver = (left, top) => {
$(".dialog_box").css({"top": top,
                      "left": left,
                    });
}
$("#dialog_close").on("click", (e) => {
  $("#timeTable_tab  .subjects").css("background", "#fff");
  $(".dialog_box").hide();
})

$("#timeTable_tab .subjects").on("click", (e)=>{
  $("#add_schedule").val($.trim(e.target.innerHTML)); 
  e.target.style.background = "#f7f8fa";  
  var coordX = e.clientX;
  var coordY = e.clientY;
  popOver(coordX / 1.7, coordY / 2);
  $(".dialog_box").show();
 
  $("#save_schedule").on("click", () =>{
    e.target.innerHTML = $("#add_schedule").val();
    $(".dialog_box").hide();
    $("#timeTable_tab .subjects").css("background", "#fff");
  });
});



