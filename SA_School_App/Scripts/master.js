$(document).ready(function() {
  oTable = $("table.display").DataTable({
    "ordering": false,
      aaSorting: [],
      "bLengthChange": false,
      responsive: true,
      "bInfo" : false,
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
          responsivePriority: 2,
          targets: 0
        },
        {
          responsivePriority: 3,
          targets: -1
        }
      ]
    });

    // $(document).on("mouseenter", "#importbtn", function(event){
  
    // });
   
    $('#inputsearch').keyup(function(){
      console.log("sdf")
      oTable.search($(this).val()).draw() ;
  })

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


// // bootstrap modal
// $(document).ready(()=>{
//   $(document).on("click", "#importbtn", function(event){
//     var hide = $(this).closest('.modal');
//     $(hide).modal('hide');
//     console.log(hide);
//     $("#upload_error").modal("show");
//   });

// })


