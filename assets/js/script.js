// MEDIA CENTRE PICK ICONWRAP COLOR
$(document).on('click','.icon_info_Sec .icoOuterBox .iconWrap',function(){
	$(this).parent().parent().find('.iconWrap').removeClass('bak');
	$(this).addClass('bak');
})

// OBJECTLIST ITEM & DIRECTORLIST ITEM
function bindCorporateInformationClick() {

	$('.showItem').off('click');
	$('.showItem').click(function (e) {

		//e.preventDefault();
		//   //var index = $(this).index();
		//   var index = $('.showItem').index(this);
		//   var newTarget = $('.item_con').eq(index);
		//   var newTarget_1 = $('.item_con_mobile').eq(index);
		//   //console.log(index);
		//   $('.item_con').not(newTarget).not(newTarget).hide();
		//   newTarget.delay('medium').toggle('medium');
		//   $('.item_con_mobile').not(newTarget_1).not(newTarget_1).hide();
		//   newTarget_1.delay('medium').toggle('medium');
		const n = $(this).data("btn");
		const wrapper = $('.item_con[data-wrapper="' + n + '"]');
		const mobile = $('.item_con_mobile[data-wrapper="' + n + '"]');

		$('[data-wrapper]').not(wrapper).not(mobile).removeClass('d-block d-md-none').removeClass('d-none d-md-block').hide();

		if (!mobile.hasClass('d-block')) {
			mobile.removeClass('d-none d-md-none').addClass('d-block d-md-none').hide().slideToggle('medium');
		}
		else {
			mobile.removeClass('d-block d-md-none').addClass('d-none d-md-none').delay('medium').slideToggle('medium');

		}

		if (!wrapper.hasClass('d-md-block')) {
			wrapper.removeClass('d-none d-md-none').addClass('d-none d-md-block').hide().slideToggle('medium');
		}
		else {
			wrapper.removeClass('d-none d-md-block').addClass('d-none d-md-none').delay('medium').slideToggle('medium');

		}
	});
}

/* BOOTSTRAP # SEO */
$(document).ready(function(){
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    history.pushState({}, '', e.target.hash);
  });

  var hash = document.location.hash;
  var prefix = "tab_";
  if (hash) {
    $('.nav-tabs a[href="'+hash.replace(prefix,"")+'"]').tab('show');
  }
});

/* TOOLTIPS */
$(document).on("mouseenter",".tooltipsToogle",function(){
	$(this).next('.tooltips_custom').show();
});
$(document).on("mouseleave",".tooltipsToogle",function(){
	$(this).next('.tooltips_custom').hide();
});

/* ACCORDIAN */
$(document).on('click','.cardWrap .card .card-header',function(){
	$(this).parent().parent().find('.card-header').removeClass('bak-change01');
	$(this).addClass('bak-change01');
});



/* GOOGLE MAP 2020*/
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
	  //3.1162059,101.592688 3.1162059,101.5933291
	center: {lat: 3.104566, lng: 101.647237},
	zoom: 20,
	scrollwheel: false
  });
    var myLatLng = {lat: 3.104566, lng: 101.647237};

    var image = '/assets/images/icon/marker.png';

	var marker = new google.maps.Marker({
	position: myLatLng,
	map: map,
	icon: image,
	animation: google.maps.Animation.DROP,
	title: 'GEP'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
	var contentString =
  	'<div class="map_content">' +
	'<h5>AMCORP PROPERTIES BERHAD</h5>'+
	'<p>2-01 PJ Tower,<br/>' +
	'18 Persiaran Barat 46050 Petaling Jaya,<br/>'+
	'Selangor, Malaysia</p>'+
	'</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
}

/* OWL GROUPLINK - who_we_are_ourStory.aspx*/
function setGroupLink(){
$(".owl-groupLink").owlCarousel({
	margin:20,
	loop:true,
	dots:false,
	nav:true,
	items:6,
	autoplay:true,
	autoplayTimeout:3000,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true
		},
		600:{
			items:3,
			nav:true
		},
		1200:{
			items:6,
			nav:true,
			loop:false
		}
	}
})
}
	
// /* DATEPICKER */
// $(document).ready(function(){
// 	$(document).on('click', ".datepicker", function() {
// 		setDatePicker(this, "yyyy/mm/dd", "", "", "true", 'en', "true");
// 	});
// });
// function setDatePicker(_this, _format, _startDate, _endDate, _autoclose, _language, _setTodayDate){
// 	var datepickerOption = {};

// 	if(_format.length > 0){
// 		datepickerOption.format = _format;
// 	}
// 	if(_startDate.length > 0){
// 		datepickerOption.startDate = _startDate;
// 	}

// 	if(_endDate.length > 0){
// 		datepickerOption.endDate = _endDate;
// 	}

// 	if(_autoclose.length > 0){
// 		datepickerOption.autoclose = _autoclose;
// 	}

// 	if(_language.length > 0){
// 		datepickerOption.language = _language;
// 	}


// 	var dpPlugin = 	$(_this).datepicker(datepickerOption).datepicker("show");

// 	if(_setTodayDate.length > 0){
// 		dpPlugin.datepicker("update", new Date());
// 	}
// }

// /* FORM_SEC HTML INSERT APPEND */
// //CR EXPERIENCE
// $(document).ready(function(){
//     //add elements
//     $("#add_div").click(function(){
//     var total_element = $(".element").length;
//     var lastid = $(".element:last").attr("id");
// 	var split_id = lastid.split("_");
// 	// var nextindex = Number(split_id[2]) + 1;
// 	var nextindex_exp = Number(split_id[2]) + 1;
// 	$('#lblnextindex_exp').val(nextindex_exp);
// 	var max = 3;
// 	//console.log(split_id);
// 	if(total_element < max) {
//         $(".element:last").after('<div class="input_field_Sec white-padding mb-4 mb-lg-5 element" id="my_div_'+nextindex_exp+'"></div>');
// 			$("#my_div_" + nextindex_exp).append(
// 			'<div class="form-row">'+
// 				'<div class="form-group col-12 col-md-6 Transition05">'+
// 					'<label for="InputTitle-exp_'+nextindex_exp+'">Title*</label>'+
// 					'<input type="text" class="form-control" id="InputTitle-exp_'+nextindex_exp+'" name="InputTitle-exp_'+nextindex_exp+'">'+
// 				'</div>'+
// 				'<div class="form-group col-12 col-md-6 Transition05">'+
// 					'<label for="InputCompany-exp_'+nextindex_exp+'">Company</label>'+
// 					'<input type="text" class="form-control" id="InputCompany-exp_'+nextindex_exp+'" name="InputCompany-exp_'+nextindex_exp+'">'+
// 				'</div>'+
// 				'<div class="form-group col-12 Transition05">'+
// 					'<label for="InputLocation-exp_'+nextindex_exp+'">Location</label>'+
// 					'<input type="text" class="form-control" id="InputLocation-exp_'+nextindex_exp+'" name="InputLocation-exp_'+nextindex_exp+'">'+
// 				'</div>'+
// 				'<div class="form-group col-12 Transition05">'+
// 					'<label for="InputRequestarea-exp_'+nextindex_exp+'">Description</label>'+
// 					'<textarea class="form-control" id="InputRequestarea-exp_'+nextindex_exp+'" name="InputRequestarea-exp_'+nextindex_exp+'" rows="4" placeholder="Type your message here"></textarea>'+
// 				'</div>'+
// 				'<div class="form-group col-12 col-md-6 Transition05">'+
// 					'<label for="InputDate-expfrom_'+nextindex_exp+'">From*</label>'+
// 					'<div class="inputWrap date datepicker" id="datepicker_crFrom_'+nextindex_exp+'">'+
// 						'<input class="form-control" id="InputDate-expfrom_'+nextindex_exp+'" name="InputDate-expfrom_'+nextindex_exp+'">'+
// 						'<button class="btn inputIcon" type="button">'+
// 							'<img src="/assets/images/icon/ico_calender.svg" alt="calender" class="Calendar_Custom img-fluid">'+
// 						'</button>'+
// 					'</div>'+
// 				'</div>'+
// 				'<div class="form-group col-12 col-md-6 Transition05">'+
// 					'<label for="InputDate-expto_'+nextindex_exp+'">To*</label>'+
// 					'<div class="inputWrap date datepicker" id="datepicker_crTo_'+nextindex_exp+'">'+
// 						'<input class="form-control" id="InputDate-expto_'+nextindex_exp+'" name="InputDate-expto_'+nextindex_exp+'">'+
// 						'<button class="btn inputIcon" type="button">'+
// 							'<img src="/assets/images/icon/ico_calender.svg" alt="calender" class="Calendar_Custom img-fluid">'+
// 						'</button>'+
// 					'</div>'+
// 				'</div>'+
// 				'<div class="form-group col-12 Transition05">'+
// 					'<div class="form-action form-action-flex-end">'+
// 						'<a class="btn btn-primary btn-lg text-white delete_crExp" id="delete_divcrExp_'+nextindex_exp+'">'+
// 							'DELETE'+
// 							'<i class="far fa-trash-alt btn-action-right"></i>'+
// 						'</a>'+
// 					'</div>'+
// 				'</div>'+
// 			'</div>'
// 			);
//       }
// 	});

// 	// remove elements
//     $('.field_item_crExp').on('click','.delete_crExp',function(){
//        var id = this.id;
//        var split_id = id.split("_");
// 	   //var deleteindex = split_id[1];
// 	   var deleteindex = Number(split_id[2]);
// 	   //console.log(deleteindex);
//        $("#my_div_" + deleteindex).remove();
// 	 });
// });

// //CR EDUCATION
// $(document).ready(function(){
//     //add elements
//     $("#add_divEdu").click(function(){
//     var total_element = $(".elementEdu").length;
//     var lastid = $(".elementEdu:last").attr("id");
//     var split_id = lastid.split("_");
// 	var nextindex_edu = Number(split_id[2]) + 1;
// 	$('#lblnextindex_edu').val(nextindex_edu);
// 	var max = 3;
// 	//console.log(split_id);
// 	if(total_element < max) {
//         $(".elementEdu:last").after('<div class="input_field_Sec white-padding mb-4 mb-lg-5 elementEdu" id="my_divEdu_'+nextindex_edu+'"></div>');
// 			$("#my_divEdu_" + nextindex_edu).append(
// 			'<div class="form-row">'+
// 				'<div class="form-group col-12 Transition05">'+
// 					'<label for="InputInstitution-edu_'+nextindex_edu+'">Institution*</label>'+
// 					'<input type="text" class="form-control" id="InputInstitution-edu_'+nextindex_edu+'" name="InputInstitution-edu_'+nextindex_edu+'">'+
// 				'</div>'+
// 				'<div class="form-group col-12 col-md-6 Transition05">'+
// 					'<label for="InputMajor-edu_'+nextindex_edu+'">Major</label>'+
// 					'<input type="text" class="form-control" id="InputMajor-edu_'+nextindex_edu+'" name="InputMajor-edu_'+nextindex_edu+'">'+
// 				'</div>'+
// 				'<div class="form-group col-12 col-md-6 Transition05">'+
// 					'<label for="InputDegree-edu_'+nextindex_edu+'">Degree</label>'+
// 					'<input type="text" class="form-control" id="InputDegree-edu_'+nextindex_edu+'" name="InputDegree-edu_'+nextindex_edu+'">'+
// 				'</div>'+
// 				'<div class="form-group col-12 Transition05">'+
// 					'<label for="InputLocation-edu_'+nextindex_edu+'">Location</label>'+
// 					'<input type="text" class="form-control" id="InputLocation-edu_'+nextindex_edu+'" name="InputLocation-edu_'+nextindex_edu+'">'+
// 				'</div>'+
// 				'<div class="form-group col-12 Transition05">'+
// 					'<label for="InputRequestarea-edu_'+nextindex_edu+'">Description</label>'+
// 					'<textarea class="form-control" id="InputRequestarea-edu_'+nextindex_edu+'" name="InputRequestarea-edu_'+nextindex_edu+'" rows="4" placeholder="Type your message here"></textarea>'+
// 				'</div>'+
// 				'<div class="form-group col-12 col-md-6 Transition05">'+
// 					'<label for="InputDate-edufrom_'+nextindex_edu+'">From*</label>'+
// 					'<div class="inputWrap date datepicker" id="datepicker_eduFrom_'+nextindex_edu+'">'+
// 						'<input class="form-control" id="InputDate-edufrom_'+nextindex_edu+'" name="InputDate-edufrom_'+nextindex_edu+'">'+
// 						'<button class="btn inputIcon" type="button">'+
// 							'<img src="/assets/images/icon/ico_calender.svg" alt="calender" class="Calendar_Custom img-fluid">'+
// 						'</button>'+
// 					'</div>'+
// 				'</div>'+
// 				'<div class="form-group col-12 col-md-6 Transition05">'+
// 					'<label for="InputDate-eduto_'+nextindex_edu+'">To*</label>'+
// 					'<div class="inputWrap date datepicker" id="datepicker_eduTo_'+nextindex_edu+'">'+
// 						'<input class="form-control" id="InputDate-eduto_'+nextindex_edu+'" name="InputDate-eduto_'+nextindex_edu+'">'+
// 						'<button class="btn inputIcon" type="button">'+
// 							'<img src="/assets/images/icon/ico_calender.svg" alt="calender" class="Calendar_Custom img-fluid">'+
// 						'</button>'+
// 					'</div>'+
// 				'</div>'+
// 				'<div class="form-group col-12 Transition05">'+
// 					'<div class="form-action form-action-flex-end">'+
// 						'<a class="btn btn-primary btn-lg text-white delete_crEdu" id="delete_divcrEdu_'+nextindex_edu+'">'+
// 							'DELETE'+
// 							'<i class="far fa-trash-alt btn-action-right"></i>'+
// 						'</a>'+
// 					'</div>'+
// 				'</div>'+
// 			'</div>'
// 		);
//       }
// 	});

// 	// remove elements
//     $('.field_item_crEdu').on('click','.delete_crEdu',function(){
// 		var id = this.id;
// 		var split_id = id.split("_");
// 		//var deleteindex = split_id[1];
// 		var deleteindex = Number(split_id[2]);
// 		//console.log(deleteindex);
// 		$("#my_divEdu_" + deleteindex).remove();
// 	});
// });

// //ASG EDUCATION BACKGROUND
// $(document).ready(function(){
// 	//add education elements
//   $("#add_divasgEdu").click(function(){
// 		var total_element = $(".elementasgEdu").length;
// 		var lastid = $(".elementasgEdu:last").attr("id");
// 		var split_id = lastid.split("_");
// 		var nextindex_asgEdu = Number(split_id[2]) + 1;
// 		$('#lblnextindex_asgEdu').val(nextindex_asgEdu);
// 		var max = 3;
// 		if(total_element < max) {
// 				$(".elementasgEdu:last").after('<div class="input_field_Sec white-padding mb-4 mb-lg-5 elementasgEdu" id="my_elementasgEdu_'+nextindex_asgEdu+'"></div>');
// 				$("#my_elementasgEdu_" + nextindex_asgEdu).append(
// 				'<div class="form-row">'+
// 					'<div class="form-group col-12 Transition05">'+
// 						'<label for="InputInstitution-asgedu_'+nextindex_asgEdu+'">Institution</label>'+
// 						'<input type="text" class="form-control" id="InputInstitution-asgedu_'+nextindex_asgEdu+'" name="InputInstitution-asgedu_'+nextindex_asgEdu+'">'+
// 					'</div>'+
// 					'<div class="form-group col-12 col-md-6 Transition05">'+
// 						'<label for="InputQualification-asgedu_'+nextindex_asgEdu+'">Qualification</label>'+
// 						'<input type="text" class="form-control" id="InputQualification-asgedu_'+nextindex_asgEdu+'" name="InputQualification-asgedu_'+nextindex_asgEdu+'">'+
// 					'</div>'+
// 					'<div class="form-group col-12 col-md-2 Transition05">'+
// 						'<label for="InputYear-asgedu_'+nextindex_asgEdu+'">Year</label>'+
// 						'<input type="text" class="form-control" id="InputYear-asgedu_'+nextindex_asgEdu+'" name="InputYear-asgedu_'+nextindex_asgEdu+'">'+
// 					'</div>'+
// 					'<div class="form-group col-12 col-md-4 Transition05">'+
// 						'<label for="InputResults-asgedu_'+nextindex_asgEdu+'">Results</label>'+
// 						'<input type="text" class="form-control" id="InputResults-asgedu_'+nextindex_asgEdu+'" name="InputResults-asgedu_'+nextindex_asgEdu+'">'+
// 					'</div>'+
// 					'<div class="form-group col-12 Transition05">'+
// 						'<div class="form-action d-block">'+
// 							'<div class="row">'+
// 								'<div class="col-8 mr-auto">'+
// 									'<label for="fileUpload_asgedu_'+nextindex_asgEdu+'" class="btn btn-outline-dark btn-lg mb-2 upload_btn">'+
// 									'UPLOAD FILE'+
// 									'<i class="fas fa-question-circle btn-action-right tooltipsToogle" id="tooltipsData-asgedu_'+nextindex_asgEdu+'"></i>'+
// 									'<div class="tooltips_custom">'+
// 									'<div class="content_tooltips">'+
// 									'<p>Requirement: The size of uploaded file must not exceed 2MB.</p>'+
// 									'<div class="triangle_arrow"></div>'+
// 									'</div>'+
// 									'</div>'+
// 									'</label>'+
// 									'<input type="file" class="d-none" name="fileUpload_asgedu_'+nextindex_asgEdu+'" id="fileUpload_asgedu_'+nextindex_asgEdu+'">'+
// 									'<span class="errorText_2 d-table" id="errorText_fileUploadasgedu_'+nextindex_asgEdu+'"></span>'+
// 									'<span id="fileUpload_txtdisplayasgedu_'+nextindex_asgEdu+'"></span>'+
// 									'<span id="fd_'+nextindex_asgEdu+'" style="display: none;"></span>'+
// 								'</div>'+
// 								'<div class="col-12 col-lg-auto ml-auto">'+
// 									'<a class="btn btn-primary btn-lg text-white mb-2 delete_asgEdu" id="delete_divasgEdu_'+nextindex_asgEdu+'">'+
// 										'DELETE'+
// 										'<i class="far fa-trash-alt btn-action-right"></i>'+
// 									'</a>'+
// 								'</div>'+
// 							'</div>'+
// 						'</div>'+
// 					'</div>'
// 			);
// 		}
// 	});

// 	// remove education elements
// 	$('.field_item_asgEdu').on('click','.delete_asgEdu',function(){
// 		var id = this.id;
// 		var split_id = id.split("_");
// 		var deleteindex = Number(split_id[2]);
// 		$("#my_elementasgEdu_" + deleteindex).remove();
//   });
// });

// //ASG EXTRA ACTIVITIES
// $(document).ready(function(){
//   //add elements
//   $("#add_divasgActivities").click(function(){
//   var total_element = $(".elementasgActivities").length;
//   var lastid = $(".elementasgActivities:last").attr("id");
//   var split_id = lastid.split("_");
// 	var nextindex_asgActivities = Number(split_id[2]) + 1;
// 	$('#lblnextindex_asgActivities').val(nextindex_asgActivities);
// 	var max = 3;
// 	//console.log(split_id);
// 	//console.log(nextindex);
// 	// console.log(nextindex_asgActivities);
// 	if(total_element < max) {
//       $(".elementasgActivities:last").after('<div class="input_field_Sec white-padding mb-4 mb-lg-5 elementasgActivities" id="my_elementasgActivities_'+nextindex_asgActivities+'"></div>');
// 			$("#my_elementasgActivities_" + nextindex_asgActivities).append(
// 				'<div class="form-row">'+
// 					'<div class="form-group col-12 col-md-2 Transition05">'+
// 						'<label for="InputYear_asgActivities_'+nextindex_asgActivities+'">Year</label>'+
// 						'<input type="text" class="form-control" id="InputYear_asgActivities_'+nextindex_asgActivities+'" name="InputYear_asgActivities_'+nextindex_asgActivities+'">'+
// 					'</div>'+
// 					'<div class="form-group col-12 col-md-10 Transition05">'+
// 						'<label for="InputPosition_asgActivities_'+nextindex_asgActivities+'">Position / Achievement</label>'+
// 						'<input type="text" class="form-control" id="InputPosition_asgActivities_'+nextindex_asgActivities+'" name="InputPosition_asgActivities_'+nextindex_asgActivities+'">'+
// 					'</div>'+
// 					'<div class="form-group col-12 Transition05">'+
// 						'<label for="InputSociety_asgActivities_'+nextindex_asgActivities+'">Society / Club</label>'+
// 						'<input type="text" class="form-control" id="InputSociety_asgActivities_'+nextindex_asgActivities+'" name="InputSociety_asgActivities_'+nextindex_asgActivities+'">'+
// 					'</div>'+
// 					'<div class="form-group col-12 Transition05">'+
// 						'<div class="form-action form-action-flex-end">'+
// 							'<a class="btn btn-primary btn-lg text-white delete_asgActivities" id="delete_divasgActivities_'+nextindex_asgActivities+'">'+
// 								'DELETE'+
// 								'<i class="far fa-trash-alt btn-action-right"></i>'+
// 							'</a>'+
// 						'</div>'+
// 					'</div>'+
// 				'</div>'
// 			);
//      	}
// 	});

//     // remove elements
//     $('.field_item_asgActivities').on('click','.delete_asgActivities',function(){
// 		var id = this.id;
// 		var split_id = id.split("_");
// 		//var deleteindex = split_id[1];
// 		var deleteindex = Number(split_id[2]);
// 		//console.log(deleteindex);
// 		$("#my_elementasgActivities_" + deleteindex).remove();
// 	});
// });

// //ASG MORE DETAILS ABOUT YOUR FAMILY
// $(document).ready(function(){
//     //add elements
//     $("#add_divasgMoreDetails").click(function(){
//     var total_element = $(".elementasgMoreDetails").length;
//     var lastid = $(".elementasgMoreDetails:last").attr("id");
//     var split_id = lastid.split("_");
// 	var nextindex_asgMoreDetails = Number(split_id[2]) + 1;
// 	$('#lblnextindex_asgMoreDetails').val(nextindex_asgMoreDetails);
// 	var max = 3;
// 	//console.log(split_id);
// 	//console.log(nextindex);
// 	// console.log(nextindex_asgMoreDetails);
// 	if(total_element < max) {
//         $(".elementasgMoreDetails:last").after('<div class="input_field_Sec white-padding mb-4 mb-lg-5 elementasgMoreDetails" id="my_elementasgMoreDetails_'+nextindex_asgMoreDetails+'"></div>');
// 			$("#my_elementasgMoreDetails_" + nextindex_asgMoreDetails).append(
// 				'<div class="form-row">'+
// 					'<div class="form-group col-12 col-md-4 Transition05">'+
// 						'<label for="InputNameSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'">Siblings'+' Name</label>'+
// 						'<input type="text" class="form-control" id="InputNameSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'" name="InputNameSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'">'+
// 					'</div>'+
// 					'<div class="form-group col-12 col-md-2 Transition05">'+
// 						'<label for="InputAgeSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'">Age</label>'+
// 						'<select class="custom-select custom-select-lg" id="InputAgeSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'" name="InputAgeSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'">'+
// 							'<option selected>Select</option>'+
// 							'<option value="1">1</option>'+
// 							'<option value="2">2</option>'+
// 							'<option value="3">3</option>'+
// 						'</select>'+
// 					'</div>'+
// 					'<div class="form-group col-12 col-md-6 Transition05">'+
// 						'<label for="InputRelationshipSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'">Relationship</label>'+
// 						'<input type="text" class="form-control" id="InputRelationshipSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'" name="InputRelationshipSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'">'+
// 					'</div>'+
// 					'<div class="form-group col-12 col-md-6 Transition05">'+
// 						'<label for="InputOccupationSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'">Occupation</label>'+
// 						'<input type="text" class="form-control" id="InputOccupationSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'" name="InputOccupationSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'">'+
// 					'</div>'+
// 					'<div class="form-group col-12 col-md-6 Transition05">'+
// 						'<label for="InputCompanySchoolSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'">Company / School Name</label>'+
// 						'<input type="text" class="form-control" id="InputCompanySchoolSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'" name="InputCompanySchoolSibling_asgMoreDetails_'+nextindex_asgMoreDetails+'">'+
// 					'</div>'+
// 					'<div class="form-group col-12 Transition05">'+
// 						'<div class="form-action form-action-flex-end">'+
// 							'<a class="btn btn-primary btn-lg text-white delete_asgMoreDetails" id="delete_divasgMoreDetails_'+nextindex_asgMoreDetails+'">'+
// 								'DELETE'+
// 								'<i class="far fa-trash-alt btn-action-right"></i>'+
// 							'</a>'+
// 						'</div>'+
// 					'</div>'+
// 				'</div>'
// 			);
//      	}
// 	});

//     // remove elements
//     $('.field_item_asgMoreDetails').on('click','.delete_asgMoreDetails',function(){
// 		var id = this.id;
// 		var split_id = id.split("_");
// 		//var deleteindex = split_id[1];
// 		var deleteindex = Number(split_id[2]);
// 		//console.log(deleteindex);
// 		$("#my_elementasgMoreDetails_" + deleteindex).remove();
// 	});
// });

// /* VALIDATE CONTACT FORM */
// $(document).ready(function(){
// 	var validSubmit = 0;
// 	//FORCE THE FIELD TO DIGIT FORMAT
// 	$('#InputHp').keypress(validateNumber);//YOU CAN ADD MORE TO CALL VALIDATENUMBER
// 	$('#InputContact').keypress(validateNumber);
// 	$('#InputPostalCode').keypress(validateNumber);

// 	//PERSONAL INFO
// 	$('#InputHp').keypress(validateNumber);

// 	// VALIDATE NUMBER
// 	function validateNumber(e) {
// 		var key = window.e ? e.keyCode : e.which;
// 		if (e.keyCode === 8 || e.keyCode === 46) {
// 			return true;
// 		} else if ( key < 48 || key > 57 ) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	};

// 	// CONTACT SUBMIT ACTION
// 	$('#help_form').submit(function(e) {
// 		validSubmit = 0;
// 		e.preventDefault();
// 		formValidation();
// 		if(validSubmit === 1) {
// 			return false;
// 		} else {
// 			//console.log('contact form submit');
// 			var contactArr= [];
// 			contactArr.push({
//         "Name (as per IC)*": $('#InputName').val(),
//         "Email Address*": $('#InputEmail').val(),
// 				"Phone Number (HP)*": $('#InputHp').val(),
// 				"Contact Number": $('#InputContact').val(),
// 				"Address": $('#InputAddress').val(),
// 				"City": $('#InputCity').val(),
// 				"State": $('#InputState').val(),
// 				"Postal Code": $('#InputPostalCode').val(),
// 				"Country": $('#SelectCountry option:selected').val(),
// 				"What would you like to enquire about?*": $('#SelectEnquiry1 option:selected').val(),
// 				"Tell us a little bit more about your request :*": $('#InputRequestarea').val(),
// 				"file": $('#fd').html()
//       });
// 			var contact_json = JSON.parse(JSON.stringify(contactArr));
// 			//console.log(contact_json);
// 			postContactFormAPI(contact_json);
// 		}
// 	});

// 	//submit to Contact Form API
// 	function postContactFormAPI(cf) {
// 		var params = {
// 			'Data': {
// 				'Header': 'CONTACT US FORM',
// 				'PERSONAL DETAILS': cf
// 			}
// 		};
// 		xmlhttp = new XMLHttpRequest();
// 		var url = '../AmcorpApi/api/Email/PostForm';
// 		xmlhttp.open('POST', url, true);
// 		xmlhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// 		xmlhttp.send(JSON.stringify(params));
// 		console.log(params);
// 		xmlhttp.onload = function() {
// 			//console.log(JSON.parse(xmlhttp.responseText));
// 		}
// 		xmlhttp.onreadystatechange = function () {
// 			if (this.readyState == 4){
// 				if (this.status == 200) {
// 					json = JSON.parse(this.responseText);
// 					if (json === true) {
// 						/* here to trigger pop up modal */
// 						$('#TYModal').modal('show');
// 					} else {
// 						/* here to show error message in div id */

// 					}
// 				} else {
// 					console.log('error');
// 				}
// 			}
// 		}
// 	}

// 	// document file upload - contact
// 	$(document).on('change', '#fileUpload_help', function(e) {
// 		$('#errorText_fileUploadHelp').html('');
// 		$('#fileUploadHelp_txt_display').html(e.target.files[0].name);
// 		var fileVal_help = $(this).val().toLowerCase();
// 		var finalDocSize_help = Math.round(e.target.files[0].size/1024);
// 		var fileRegex_help = new RegExp('(.*?)\.(pdf|docx|doc)$');
// 		if(finalDocSize_help > 2048) {
// 			$('#errorText_fileUploadHelp').html('Document file size exceeds 2MB');
// 			$('#fileUploadHelp_txt_display').html('');
// 		} else if (!(fileRegex_help.test(fileVal_help))) {
// 			$('#errorText_fileUploadHelp').html('Only these file types are accepted (pdf/docs/doc)');
// 			$('#fileUploadHelp_txt_display').html('');
// 		} else {
// 				var reader = new FileReader();
// 				reader.readAsDataURL(e.target.files[0]);
// 				reader.onload = function(e) {
// 					$('#fd').html(e.target.result);
// 	      };
// 		}
// 	});

// 	// FORM VALIDATION FUNCTION - CONTACT INFO HELP
// 	function formValidation() {
// 		//CREATE VARIABLE
// 		//HELP SEC -------------------------------------------------------
// 		var name = $('#InputName').val();
// 		var email = $('#InputEmail').val();
// 		var hp = $('#InputHp').val();
// 		var cat = $('#SelectEnquiry1').val();
// 		var txtArea = $('#InputRequestarea').val();

// 		//ERROR CONTROL
// 		$('.errorText').hide();

// 		// CONTACT INFOMATION -------------------------------------------------------
// 		//ERROR - HELPFORM NAME
// 		if (name.length < 1) {
// 		  	validSubmit = 1;
// 		 	$('#InputName').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - HELPFORM EMAIL
// 		if (email.length < 1) {
// 			validSubmit = 1;
// 		 	$('#InputEmail').after('<span class="errorText">This field is required</span>');
// 		} else {
// 		 	var regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 			var validEmail = regEx.test(email);
// 		  	if (!validEmail) {
// 				validSubmit = 1;
// 				$('#InputEmail').after('<span class="errorText">Enter a valid email</span>');
// 		  	}
// 		}
// 		//ERROR - HELPFORM HP
// 		if (hp.length < 1) {
// 		  	validSubmit = 1;
// 		  $('#InputHp').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - HELPFORM ENQUIRY SELECT
// 		if (cat === "selected"){
// 			validSubmit = 1;
// 			$('#SelectEnquiry1').after('<span class="errorText">Please select</span>');
// 		}
// 		//ERROR - HELPFORM REQUEST TEXT AREA
// 		if (txtArea.length < 1){
// 			validSubmit = 1;
// 			$('#InputRequestarea').after('<span class="errorText">This field is required</span>');
// 		}
// 	}

// });

// /* VALIDATE CAREER FORM */
// $(document).ready(function(){
// 	var validCareerSubmit = 0;
// 	//FORCE THE FIELD TO DIGIT FORMAT
// 	//PERSONAL INFORMATION
// 	$('#InputHp_cr').keypress(validateNumber);


// 	// VALIDATE NUMBER
// 	function validateNumber(e) {
// 		var key = window.e ? e.keyCode : e.which;
// 		if (e.keyCode === 8 || e.keyCode === 46) {
// 			return true;
// 		} else if ( key < 48 || key > 57 ) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	};

// 	// CAREER SUBMIT ACTION
// 	$('#career_form').submit(function(e) {
// 		validCareerSubmit = 0;
// 		e.preventDefault();
// 		formValidation_cr();
// 		if(validCareerSubmit === 1) {
// 			return false;
// 		} else {
// 			console.log('career form submit');
// 			var careerPerArr = [];
//       careerPerArr.push({
//         "Name (as per IC)*": $('#InputName_cr').val(),
//         "Email Address*": $('#InputEmail_cr').val(),
// 				"Phone Number (HP)*": $('#InputHp_cr').val(),
// 				"Gender*": $('input[name="Gender"]:checked').val(),
// 				"Citizenship*": $('input[name="Citizenship"]:checked').val(),
// 				"Race*": $('#InputRace_cr').val(),
// 				"Available Start Date*": $('#InputStartDate_cr').val(),
// 				"Expected Salary*": $('#InputExpSalary_cr').val(),
// 				"MESSAGE TO HIRING MANAGER": $('#InputRequestarea-msg_1').val(),
// 				"File": $('#fd').html()
//       });
// 			var total_element_exp = $(".element").length;
//       var careerExpArr = [];
//   		for (i=1; i <= total_element_exp; i++) {
//         careerExpArr.push({
//           "Title*": $('#InputTitle-exp_'+i).val(),
//           "Company": $('#InputCompany-exp_'+i).val(),
// 					"Location": $('#InputLocation-exp_'+i).val(),
// 					"Description": $('#InputRequestarea-exp_'+i).val(),
// 					"From*": $('#InputDate-expfrom_'+i).val(),
// 					"To*": $('#InputDate-expto_'+i).val(),
// 					"I currently work here": $('input[name="Check-exp_'+i+'"]:checked').val()
//         });
//   	  }
// 			var total_element_edu = $(".elementEdu").length;
// 			var careerEduArr = [];
//   		for (i=1; i <= total_element_edu; i++) {
//         careerEduArr.push({
//           "Institution*": $('#InputInstitution-edu_'+i).val(),
//           "Major": $('#InputMajor-edu_'+i).val(),
// 					"Degree": $('#InputDegree-edu_'+i).val(),
// 					"Location": $('#InputLocation-edu_'+i).val(),
// 					"Description": $('#InputRequestarea-edu_'+i).val(),
// 					"From*": $('#InputDate-edufrom_'+i).val(),
// 					"To*": $('#InputDate-eduto_'+i).val(),
//         });
//   	  }
// 			//
// 			var career_per_json = JSON.parse(JSON.stringify(careerPerArr));
// 			var career_exp_json = JSON.parse(JSON.stringify(careerExpArr));
// 			var career_edu_json = JSON.parse(JSON.stringify(careerEduArr));
// 			//console.log(career_per_json);
// 			postCareerFormAPI(career_per_json, career_exp_json, career_edu_json);
// 		}
// 	});






//   //submit to career form API
// 	function postCareerFormAPI(per,exp,edu) {
// 		var careerSelected = JSON.parse(localStorage.getItem('careerTitle'));
// 		//console.log(careerSelected);
// 		var params = {
// 			'Data': {
// 				'Header': 'JOB APPLICATION FORM',
// 				'JOB TITLE': [
// 					{
// 						"TITLE": careerSelected
// 					}
// 				],
// 				'PERSONAL INFORMATION': per,
// 				'EXPERIENCE': exp,
// 				'EDUCATION': edu,
// 				'profileImage': [
// 					{
// 						"image": profileImgData
// 					}
// 				]
// 			}
// 		};
// 		xmlhttp = new XMLHttpRequest();
// 		var url = '../AmcorpApi/api/Email/PostForm';
// 		xmlhttp.open('POST', url, true);
// 		xmlhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// 		xmlhttp.send(JSON.stringify(params));
// 		console.log(params);
// 		xmlhttp.onload = function() {
// 			//console.log(JSON.parse(xmlhttp.responseText));
// 		}
// 		xmlhttp.onreadystatechange = function () {
// 			if (this.readyState == 4){
// 				if (this.status == 200) {
// 					json = JSON.parse(this.responseText);
// 					if (json === true) {
// 						localStorage.removeItem('careerTitle');
// 						/* here to trigger career pop up modal */
// 						$('#TYModal').modal('show');
// 					} else {
// 						/* here to show error message in div id */

// 					}
// 				} else {
// 					console.log('error');
// 				}
// 			}
// 		}
// 	}

// 	// FORM VALIDATION FUNCTION - CAREER FORM
// 	function formValidation_cr() {
// 		//CREATE VARIABLE
// 		var cr_imgVal = $('#js-file-uploader').val().toLowerCase();
// 		//PERSONAL INFO -------------------------------------------------------
// 		var nextindex_exp = $('#lblnextindex_exp').val();
// 		var nextindex_edu = $('#lblnextindex_edu').val();
// 		var crname = $('#InputName_cr').val();
// 		var cremail = $('#InputEmail_cr').val();
// 		var crhp = $('#InputHp_cr').val();
// 		var genderChecked = $('input[name="Gender"]:checked').val();
// 		var citizenChecked = $('input[name="Citizenship"]:checked').val();
// 		var crrace = $('#InputRace_cr').val();
// 		var crstartDate = $('#InputStartDate_cr').val();
// 		var crexpSalary = $('#InputExpSalary_cr').val();
// 		//EXPERIENCE -------------------------------------------------------
// 		var cr_expTitle = $('#InputTitle-exp_1').val();
// 		var cr_expFrom = $('#InputDate-expfrom_1').val();
// 		var cr_expTo = $('#InputDate-expto_1').val();
// 		//EDUCATION -------------------------------------------------------
// 		var cr_eduInstitution = $('#InputInstitution-edu_1').val();
// 		var cr_eduFrom = $('#InputDate-edufrom_1').val();
// 		var cr_eduTo = $('#InputDate-eduto_1').val();
//     //files
// 		var file_txt = $('#test').val();
// 		//ERROR CONTROL
// 		$('.errorText').hide();
// 		$('#errorText_crProfileUpload').html('');
// 		$('#chk_errorText_gender').html('');
// 		$('#chk_errorText_citi').html('');
// 		$('#chk_errorText_resume').html('');

// 		// CAREER
// 		//PERSONAL INFO	-------------------------------------------------------
// 		//ERROR - ASGFORM Image
// 		if (cr_imgVal.length < 1) {
// 			validCareerSubmit = 1;
// 			$('#errorText_crProfileUpload').html('This field is required');
// 		}
// 		//ERROR - CAREERFORM NAME
// 		if (crname.length < 1) {
// 			validCareerSubmit = 1;
// 		   $('#InputName_cr').after('<span class="errorText">This field is required</span>');
// 	  	}
// 		//ERROR - CAREERFORM EMAIL
// 		if (cremail.length < 1) {
// 			validCareerSubmit = 1;
// 		 	$('#InputEmail_cr').after('<span class="errorText">This field is required</span>');
// 		} else {
// 		 	var regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 			var validEmail = regEx.test(cremail);
// 		  	if (!validEmail) {
// 				validCareerSubmit = 1;
// 				$('#InputEmail_cr').after('<span class="errorText">Enter a valid email</span>');
// 		  	}
// 		}
// 		//ERROR - CAREERFORM HP
// 		if (crhp.length < 1) {
// 			validCareerSubmit = 1;
// 		   $('#InputHp_cr').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - CAREERFORM HP
// 		if(!genderChecked){
// 			validCareerSubmit = 1;
// 			$('#chk_errorText_gender').html('Please choose');
// 		}
// 		//ERROR - CAREERFORM CITIZENSHIP
// 		if(!citizenChecked){
// 			validCareerSubmit = 1;
// 			$('#chk_errorText_citi').html('Please choose');
// 		}
// 		//ERROR - CAREERFORM RACE
// 		if (crrace.length < 1) {
// 			validCareerSubmit = 1;
// 		   $('#InputRace_cr').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - CAREERFORM START DATE
// 		if (crstartDate.length < 1) {
// 			validCareerSubmit = 1;
// 		   $('#InputStartDate_cr').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - CAREERFORM EXCEPETED SALARY
// 		if (crexpSalary.length < 1) {
// 			validCareerSubmit = 1;
// 		   $('#InputExpSalary_cr').after('<span class="errorText">This field is required</span>');
// 		}

// 		//EXPERIENCE -------------------------------------------------------
// 		if (cr_expTitle.length < 1) {
// 			validCareerSubmit = 1;
// 		   $('#InputTitle-exp_1').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (cr_expFrom.length < 1) {
// 			validCareerSubmit = 1;
// 		   $('#InputDate-expfrom_1').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (cr_expTo.length < 1) {
// 			validCareerSubmit = 1;
// 		   $('#InputDate-expto_1').after('<span class="errorText">This field is required</span>');
// 		}

// 		for(var i = 2; i<= nextindex_exp; i++){
// 			var cr_expTitle_i = $('#InputTitle-exp_'+i+'').val();
// 			if (cr_expTitle_i.length < 1) {
// 				validCareerSubmit = 1;
// 			   $('#InputTitle-exp_'+i+'').after('<span class="errorText">This field is required</span>');
// 			}

// 			var cr_expFrom_i = $('#InputDate-expfrom_'+i+'').val();
// 			if (cr_expFrom_i.length < 1) {
// 				validCareerSubmit = 1;
// 			   $('#InputDate-expfrom_'+i+'').after('<span class="errorText">This field is required</span>');
// 			}

// 			var cr_expTo_i = $('#InputDate-expto_'+i+'').val();
// 			if (cr_expTo_i.length < 1) {
// 				validCareerSubmit = 1;
// 			   $('#InputDate-expto_'+i+'').after('<span class="errorText">This field is required</span>');
// 			}
// 		}

// 		//EDUCATION -------------------------------------------------------
// 		if (cr_eduInstitution.length < 1) {
// 			validCareerSubmit = 1;
// 		   $('#InputInstitution-edu_1').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (cr_eduFrom.length < 1) {
// 			validCareerSubmit = 1;
// 		   $('#InputDate-edufrom_1').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (cr_eduTo.length < 1) {
// 			validCareerSubmit = 1;
// 		   $('#InputDate-eduto_1').after('<span class="errorText">This field is required</span>');
// 		}

// 		for(var i = 2; i<= nextindex_edu; i++){
// 			var cr_eduInstitution_i = $('#InputInstitution-edu_'+i+'').val();
// 			if (cr_eduInstitution_i.length < 1) {
// 				validCareerSubmit = 1;
// 			   $('#InputInstitution-edu_'+i+'').after('<span class="errorText">This field is required</span>');
// 			}

// 			var cr_eduFrom_i = $('#InputDate-edufrom_'+i+'').val();
// 			if (cr_eduFrom_i.length < 1) {
// 				validCareerSubmit = 1;
// 			   $('#InputDate-edufrom_'+i+'').after('<span class="errorText">This field is required</span>');
// 			}

// 			var cr_eduTo_i = $('#InputDate-eduto_'+i+'').val();
// 			if (cr_eduTo_i.length < 1) {
// 				validCareerSubmit = 1;
// 			   $('#InputDate-eduto_'+i+'').after('<span class="errorText">This field is required</span>');
// 			}
// 		}
// 		if (file_txt.length < 1) {
// 			validCareerSubmit = 1;
// 			$('#errorText_ResumeUpload').html('This field is required');
// 		}
// 	}

	






// 	// upload profile Image elements - CR
// 	const fileUpload        = document.querySelector('#js-file-uploader');
// 	const profileTrigger    = document.querySelector('#js-profile-trigger');
// 	const profileBackground = document.querySelector('#js-profile-pic');

// 	// Trigger the file upload to set the profile picture
// 	profileTrigger.addEventListener('click', function(event) {
// 		event.preventDefault();
// 		fileUpload.click();
// 	});
// 	// new profile pic added, display it
// 	fileUpload.addEventListener("change", function(event) {
// 		if (fileUpload.files && fileUpload.files[0]) {
// 			let reader = new FileReader();
// 			reader.onload = function(event) {
// 				$('#errorText_crProfileUpload').html('');
// 				var fileName = fileUpload.files[0].name;
// 				var fileVal = fileName.toLowerCase();
// 				var imgRegex = new RegExp('(.*?)\.(bmp|jpg|jpeg|png)$');
// 				var finalImgSize = Math.round(fileUpload.files[0].size/1024);
// 				if(finalImgSize > 2048) {
// 					validCareerSubmit = 1;
// 					$('#errorText_crProfileUpload').html('Image file size exceeds 2MB');
// 				} else if (!(imgRegex.test(fileVal))) {
// 					validCareerSubmit= 1;
// 					$('#errorText_crProfileUpload').html('Only these file types are accepted (bmp/jpg/jpeg/png)');
// 				} else {
// 					// Remove the initial 'set picture image' text
// 					profileBackground.childNodes[0].nodeValue = "";
// 					// Set the new image src as the background
// 					profileBackground.style.backgroundImage = "url('" + event.target.result + "')";
// 					profileImgData = event.target.result;
// 				}
// 			}
// 			reader.readAsDataURL(fileUpload.files[0]);
// 		}
// 	});

// 	//drag & drop
// 	$('.drag_Drop_browseFile').on('dragover', function(e) {
//   	e.preventDefault();
// 	});
// 	$('.drag_Drop_browseFile').on('dragenter', function(e) {
//   	e.preventDefault();
// 	});
// 	$('.drag_Drop_browseFile').on('drop', function(e) {
// 		e.preventDefault();
// 		const file = e.originalEvent.dataTransfer.files[0];
// 		$('#info').text(file.name);
// 		var fName = file.name;
// 		var fileVal_career = fName.toLowerCase();
// 		var finalDocSize_career = Math.round(file.size/1024);
// 		if(finalDocSize_career > 2048) {
// 				$('#info').text('Document file size exceeds 2MB');
// 		} else {
// 			var fileRegex_career = new RegExp('(.*?)\.(pdf|docx|doc)$');
// 			if(!(fileRegex_career.test(fileVal_career))) {
// 				$('#info').text('Only these file types are accepted (pdf/docs/doc)');
// 			}
// 		}
// 	});
// 	$('#test').on('change', function(e) {
// 		e.preventDefault();
// 		const file = $('#test')[0].files[0];
// 		$('#info').text(file.name);
// 		var fName = file.name;
// 		var fileVal_career = fName.toLowerCase();
// 		var finalDocSize_career = Math.round(file.size/1024);
// 		var fileRegex_career = new RegExp('(.*?)\.(pdf|docx|doc)$');
// 		if(finalDocSize_career > 2048) {
// 			$('#info').text('Document file size exceeds 2MB');
// 		} else if(!(fileRegex_career.test(fileVal_career))) {
// 			$('#info').text('Only these file types are accepted (pdf/docs/doc)');
// 		} else {
// 			var reader = new FileReader();
// 			reader.readAsDataURL(e.target.files[0]);
// 			reader.onload = function(e) {
// 				$('#fd').html(e.target.result);
//       };
// 		}
// 	});
// });

// /* VALIDATE ASG FORM */
// $(document).ready(function(){
// 	var validASGSubmit = 0;
// 	//FORCE THE FIELD TO DIGIT FORMAT
// 	//PERSONAL DETAILS -------------------------------------------------------
// 	$('#InputHp_asg').keypress(validateNumber);
// 	$('#InputAge_asg').keypress(validateNumber);
// 	//FAMILY DETAILS FATHER -------------------------------------------------------
// 	$('#InputHpFather_asgFamily').keypress(validateNumber);
// 	//FAMILY DETAILS MOTHER -------------------------------------------------------
// 	$('#InputHpMother_asgFamily').keypress(validateNumber);
// 	//REFEREES A-------------------------------------------------------
// 	$('#InputHpA_asgReferees').keypress(validateNumber);
// 	//REFEREES B-------------------------------------------------------
// 	$('#InputHpB_asgReferees').keypress(validateNumber);

// 	// VALIDATE NUMBER
// 	function validateNumber(e) {
// 		var key = window.e ? e.keyCode : e.which;
// 		if (e.keyCode === 8 || e.keyCode === 46) {
// 			return true;
// 		} else if ( key < 48 || key > 57 ) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	};

// 	// STUDENT GRANT SUBMIT ACTION
// 	$('#asg_form').submit(function(e) {
// 		validASGSubmit = 0;
// 		e.preventDefault();
// 		formValidation_asg();
// 		if(validASGSubmit === 1) {
// 			return false;
// 		} else {
//       console.log('student grant submit');
// 			//personal details
// 			var maritalChecked = $('input[name="maritalCheck_asg"]:checked').val();
// 			if (maritalChecked === 'Single') {
// 			  var v_marital = 'Single';
// 			} else {
// 			  var v_marital = $('#otherCheck_txt').val();
// 			}
// 			var offerChecked = $('input[name="offerCheck_asg"]:checked').val();
// 			if (offerChecked === 'No') {
// 			  var v_offer = 'No';
// 			} else {
// 			  var v_offer = $('#offerYesCheck_txt').val();
// 			}
// 			var perArr= [];
// 			perArr.push({
// 			  "Name (as per IC)*": $('#InputName_asg').val(),
// 			  "Permanent Address*": $('#InputPerAddress_asg').val(),
// 			  "Correspondence Address*": $('#InputPerAddress_asg').val(),
// 			  "Email Address*": $('#InputCorAddress_asg').val(),
// 			  "Phone Number (HP)*": $('#InputPerAddress_asg').val(),
// 			  "Citizenship*": $('input[name="Citizenship_asg"]:checked').val(),
// 			  "NRIC No.*": $('#InputNRIC_asg').val(),
// 			  "Race*": $('#InputRace_asg').val(),
// 			  "Place of Birth": $('#InputPlaceofBirth_asg').val(),
// 			  "Marital Status": v_marital,
// 			  "Date of Birth*": $('#InputDateofBirth_asg').val(),
// 			  "Gender*": $('input[name="Gender_asg"]:checked').val(),
// 			  "Age": $('#InputAge_asg').val(),
// 			  "Physical Disabilities (if any or pre-existing medical conditions)": $('#InputMedCondition_asg').val(),
// 			  "Have you received any other offers of scholarship / loan / financial assistance from other bodies? If yes, please give details:*": v_offer
// 			});
// 			var total_element_edu = $(".elementasgEdu").length;
// 			var eduArr= [];
// 			for (i=1; i <= total_element_edu; i++) {
// 			  eduArr.push({
// 			    "Institution": $('#InputInstitution-asgedu_'+i).val(),
// 			    "Qualification": $('#InputQualification-asgedu_'+i).val(),
// 			    "Year": $('#InputYear-asgedu_'+i).val(),
// 			    "Results": $('#InputResults-asgedu_'+i).val(),
// 					"file": $('#fd_'+i).html()
// 			  });
// 			}
// 			//activies
// 			var total_element_act = $(".elementasgActivities").length;
// 			var actArr= [];
// 			for (i=1; i <= total_element_act; i++) {
// 			  actArr.push({
// 			    "Year": $('#InputYear_asgActivities_'+i).val(),
// 			    "Position / Achievement": $('#InputPosition_asgActivities_'+i).val(),
// 			    "Society / Club": $('#InputSociety_asgActivities_'+i).val()
// 			  });
// 			}
// 			//family details
// 			var familyArr= [];
// 			familyArr.push({
// 			  "Father / Guardian's Name*": $('#InputNameFather_asgFamily').val(),
// 			  "NRIC No.*": $('#InputNRICFather_asgFamily').val(),
// 			  "Phone Number (HP)*": $('#InputHpFather_asgFamily').val(),
// 			  "Occupation*": $('#InputOccupationFather_asgFamily').val(),
// 			  "Employer's Name and Address*": $('#InputRequestareaFather_asgFamily').val(),
// 			  "Mother / Guardian's Name*": $('#InputNameMother_asgFamily').val(),
// 			  "NRIC No.*": $('#InputNRICMother_asgFamily').val(),
// 			  "Phone Number (HP)*": $('#InputHpMother_asgFamily').val(),
// 			  "Occupation*": $('#InputOccupationMother_asgFamily').val(),
// 			  "Employer's Name and Address*": $('#InputRequestareaMother_asgFamily').val()
// 			});
// 			//more family details
// 			var total_element_sib = $(".elementasgMoreDetails").length;
// 			var sibArr= [];
// 			for (i=1; i <= total_element_sib; i++) {
// 			  sibArr.push({
// 			    "Siblings' Name": $('#InputNameSibling_asgMoreDetails_'+i).val(),
// 			    "Age": $('#InputAgeSibling_asgMoreDetails_'+i+' option:selected').val(),
// 			    "Relationship": $('#InputRelationshipSibling_asgMoreDetails_'+i).val(),
// 			    "Occupation": $('#InputOccupationSibling_asgMoreDetails_'+i).val(),
// 			    "Company / School Name": $('#InputCompanySchoolSibling_asgMoreDetails_'+i).val()
// 			  });
// 			}
// 			//referees
// 			var refArr= [];
// 			refArr.push({
// 			  "Name #1*": $('#InputNameA_asgReferees').val(),
// 			  "NRIC No.*": $('#InputNRICA_asgReferees').val(),
// 			  "Phone Number (HP)*": $('#InputHpA_asgReferees').val(),
// 			  "Occupation*": $('#InputOccupationA_asgReferees').val(),
// 			  "Employer's Name*": $('#InputEmployerA_asgReferees').val(),
// 			  "Relationship*": $('#InputRelationshipA_asgReferees').val(),
// 			  "No. of years known*": $('option[name="InputNoOfYearA_asgReferees"]:selected').val(),
// 			  "Name #2*": $('#InputNameB_asgReferees').val(),
// 			  "NRIC No.*": $('#InputNRICB_asgReferees').val(),
// 			  "Phone Number (HP)*": $('#InputHpB_asgReferees').val(),
// 			  "Occupation*": $('InputOccupationB_asgReferees').val(),
// 			  "Employer's Name*": $('#InputEmployerB_asgReferees').val(),
// 			  "Relationship*": $('#InputRelationshipB_asgReferees').val(),
// 			  "No. of years known*": $('option[name="InputNoOfYearB_asgReferees"]:selected').val()
// 			});
// 			//declaration
// 			var decArr= [];
// 			decArr.push({
// 			  "All the information submitted is true and correct": $('input[name="check_asgDeclare_1"]:checked').val(),
// 			  "I have applied to study ACCA full time with": $('#check_acca_txt').val()
// 			});
// 			//
// 			var per_json = JSON.parse(JSON.stringify(perArr));
// 			var edu_json = JSON.parse(JSON.stringify(eduArr));
// 			var act_json = JSON.parse(JSON.stringify(actArr));
// 			var fam_json = JSON.parse(JSON.stringify(familyArr));
// 			var sib_json = JSON.parse(JSON.stringify(sibArr));
// 			var ref_json = JSON.parse(JSON.stringify(refArr));
// 			var der_json = JSON.parse(JSON.stringify(decArr));
// 			//console.log(edu_json);
// 			postStudentGrantFormAPI(per_json,edu_json,act_json,fam_json,sib_json,ref_json,der_json);
// 		}
// 	});

// 	//submit to Student Grant Form API
// 	function postStudentGrantFormAPI(per,edu,act,fam,sib,ref,der) {
// 		var params = {
// 			'Data': {
// 				'Header': 'ASG APPLICATION FORM',
// 				'PERSONAL DETAILS': per,
// 				'EDUCATION BACKGROUND': edu,
// 				'EXTRA-CURRICULAR ACTIVITIES / SPORTS': act,
// 				'FAMILY DETAILS': fam,
// 				'MORE DETAILS ABOUT YOUR FAMILY': sib,
// 				'REFEREES': ref,
// 				'DECLARATION': der,
// 				'profileImage': [
// 					{
// 						"image": profileImgData
// 					}
// 				]
// 			}
// 		};
// 		console.log(params);
// 		xmlhttp = new XMLHttpRequest();
// 		var url = '../AmcorpApi/api/Email/PostForm';
// 		xmlhttp.open('POST', url, true);
// 		xmlhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// 		xmlhttp.send(JSON.stringify(params));
// 		xmlhttp.onload = function() {
// 		}
// 		xmlhttp.onreadystatechange = function () {
// 			if (this.readyState == 4){
// 				if (this.status == 200) {
// 					json = JSON.parse(this.responseText);
// 					if (json === true) {
// 						/* here to trigger pop up modal */
// 						$('#TYModal').modal('show');
// 					} else {
// 						/* here to show error message in div id */

// 					}
// 				} else {
// 					//console.log('error');
// 				}
// 			}
// 		}
// 	}

// 	// upload profile Image elements - ASG
// 	const fileUpload_asg        = document.querySelector('#js-file-uploader');
// 	const profileTrigger_asg    = document.querySelector('#js-profile-trigger');
// 	const profileBackground_asg = document.querySelector('#js-profile-pic');

// 	// Trigger the file upload to set the profile picture - ASG
// 	profileTrigger_asg.addEventListener('click', function(event) {
// 		event.preventDefault();
// 		fileUpload_asg.click();
// 	});
// 	// new profile pic added, display it  - ASG
// 	fileUpload_asg.addEventListener("change", function(event) {
// 		if (fileUpload_asg.files && fileUpload_asg.files[0]) {
// 			let reader_asg = new FileReader();
// 			reader_asg.onload = function(event) {
// 				$('#errorText_asgProfileUpload').html('');
// 				var fileName_asg = fileUpload_asg.files[0].name;
// 				var fileVal_asg = fileName_asg.toLowerCase();
// 				var imgRegex_asg = new RegExp('(.*?)\.(bmp|jpg|jpeg|png)$');
// 				var finalImgSize_asg = Math.round(fileUpload_asg.files[0].size/1024);
// 				if(finalImgSize_asg > 512) {
// 					validASGSubmit = 1;
// 					$('#errorText_asgProfileUpload').html('Image file size exceeds 512KB');
// 				} else if (!(imgRegex_asg.test(fileVal_asg))) {
// 					validASGSubmit = 1;
// 					$('#errorText_asgProfileUpload').html('Only these file types are accepted (bmp/jpg/jpeg/png)');
// 				} else {
// 					// Remove the initial 'set picture image' text
// 					profileBackground_asg.childNodes[0].nodeValue = "";
// 					// Set the new image src as the background
// 					profileBackground_asg.style.backgroundImage = "url('" + event.target.result + "')";
// 					//console.log(event.target.result);
// 					profileImgData = event.target.result;
// 				}
// 			}
// 			reader_asg.readAsDataURL(fileUpload_asg.files[0]);
// 		}
// 	});

// 	// document file upload - ASG
// 	$(document).on('change', '.d-none', function(e) {
// 		var id = this.id;
// 		var split_id = id.split("_");
// 		var currentIndex = Number(split_id[2]);
// 		//console.log(currentIndex);
// 		$('#errorText_fileUploadasgedu_'+currentIndex).html('');
// 		$('#fileUpload_txtdisplayasgedu_'+currentIndex).html(e.target.files[0].name);
// 		var fileVal_asg = $(this).val().toLowerCase();
// 		var finalDocSize_asg = Math.round(e.target.files[0].size/1024);
// 		var fileRegex_asg = new RegExp('(.*?)\.(pdf|docx|doc)$');
// 		var total_element_edu = $(".elementasgEdu").length;
// 		if(finalDocSize_asg > 2048) {
// 			$('#errorText_fileUploadasgedu_'+currentIndex).html('Document file size exceeds 2MB');
// 			$('#fileUpload_txtdisplayasgedu_'+currentIndex).html('');
// 		} else if (!(fileRegex_asg.test(fileVal_asg))) {
// 			$('#errorText_asgProfileUpload').html('Only these file types are accepted (bmp/jpg/jpeg/png)');
// 		} else {
// 			var reader = new FileReader();
// 			reader.readAsDataURL(e.target.files[0]);
// 			reader.onload = function(e) {
// 				$('#fd_'+currentIndex).html(e.target.result);
//       };
// 		}
//   });

// 	// FORM VALIDATION FUNCTION - ASG FORM
// 	function formValidation_asg() {
// 		//CREATE VARIABLE
// 		var asg_imgVal = $('#js-file-uploader').val().toLowerCase();
// 		//PERSONAL DETAILS -------------------------------------------------------
// 		var asg_InputName = $('#InputName_asg').val();
// 		var asg_InputPerAddress = $('#InputPerAddress_asg').val();
// 		var asg_InputCorAddress = $('#InputCorAddress_asg').val();
// 		var asg_InputEmail = $('#InputEmail_asg').val();
// 		var asg_InputHp = $('#InputHp_asg').val();
// 		var asg_citizenChecked = $('input[name="Citizenship_asg"]:checked').val();
// 		var asg_InputNRIC = $('#InputNRIC_asg').val();
// 		var asg_InputRace = $('#InputRace_asg').val();
// 		var asg_maritalChecked = $('input[name="maritalCheck_asg"]:checked').val();
// 		var asg_InputDateofBirth = $('#InputDateofBirth_asg').val();
// 		var asg_genderChecked = $('input[name="Gender_asg"]:checked').val();
// 		var asg_InputDateofBirth = $('#InputDateofBirth_asg').val();
// 		var asg_offerChecked = $('input[name="offerCheck_asg"]:checked').val();
// 		//FAMILY DETAILS FATHER -------------------------------------------------------
// 		var	asg_InputNameFather = $('#InputNameFather_asgFamily').val();
// 		var asg_InputNRICFather = $('#InputNRICFather_asgFamily').val();
// 		var asg_InputHpFather = $('#InputHpFather_asgFamily').val();
// 		var asg_InputOccupationFather = $('#InputOccupationFather_asgFamily').val();
// 		var asg_InputRequestareaFather = $('#InputRequestareaFather_asgFamily').val();
// 		//FAMILY DETAILS MOTHER -------------------------------------------------------
// 		var	asg_InputNameMother = $('#InputNameMother_asgFamily').val();
// 		var asg_InputNRICMother = $('#InputNRICMother_asgFamily').val();
// 		var asg_InputHpMother = $('#InputHpMother_asgFamily').val();
// 		var asg_InputOccupationMother = $('#InputOccupationMother_asgFamily').val();
// 		var asg_InputRequestareaMother = $('#InputRequestareaMother_asgFamily').val();
// 		//REFEREES A -------------------------------------------------------
// 		var	asg_InputNameA = $('#InputNameA_asgReferees').val();
// 		var asg_InputNRICA = $('#InputNRICA_asgReferees').val();
// 		var asg_InputHpA = $('#InputHpA_asgReferees').val();
// 		var asg_InputOccupationA = $('#InputOccupationA_asgReferees').val();
// 		var asg_InputEmployerA = $('#InputEmployerA_asgReferees').val();
// 		var asg_InputRelationshipA = $('#InputRelationshipA_asgReferees').val();
// 		var asg_InputNoOfYearA = $('option[name="InputNoOfYearA_asgReferees"]:selected').val();
// 		//REFEREES B -------------------------------------------------------
// 		var	asg_InputNameB = $('#InputNameB_asgReferees').val();
// 		var asg_InputNRICB = $('#InputNRICB_asgReferees').val();
// 		var asg_InputHpB = $('#InputHpB_asgReferees').val();
// 		var asg_InputOccupationB = $('#InputOccupationB_asgReferees').val();
// 		var asg_InputEmployerB = $('#InputEmployerB_asgReferees').val();
// 		var asg_InputRelationshipB = $('#InputRelationshipB_asgReferees').val();
// 		var asg_InputNoOfYearB = $('option[name="InputNoOfYearB_asgReferees"]:selected').val();
// 		//DECLARATION ------------------------------------------------------
// 		var asg_asgDeclare1Checked = $('input[name="check_asgDeclare_1"]:checked').val();
// 		var asg_asgDeclare2Checked = $('input[name="check_asgDeclare_2"]:checked').val();
// 		var asg_InputDeclare2 = $('#check_acca_txt').val();

// 		//ERROR CONTROL
// 		$('.errorText').hide();

// 		//PERSONAL DETAILS
// 		$('#errorText_asgProfileUpload').html('');
// 		$('#errorText_asgCiticheck').html('');
// 		$('#errorText_asgMaritalcheck').html('');
// 		$('#errorText_asgGenderCheck').html('');
// 		$('#errorText_asgOfferCheck').html('');
// 		$('#errorText_asgEdu').html('');
// 		$('#errorText_asgDeclaration').html('');
// 		//REFEREES
// 		$('#errorText_asgRefereesA').html('');
// 		$('#errorText_asgRefereesB').html('');
// 		//DECLARATION
// 		$('#errorText_asgDeclaration1').html('');
// 		$('#errorText_asgDeclaration2').html('');

// 		// PERSONAL DETAILS -------------------------------------------------------
// 		//ERROR - ASGFORM Image
// 		if (asg_imgVal.length < 1) {
// 			validASGSubmit = 1;
// 			$('#errorText_asgProfileUpload').html('This field is required');
// 		}
// 		//ERROR - ASGFORM NAME
// 		if (asg_InputName.length < 1) {
// 			validASGSubmit = 1;
// 			$('#InputName_asg').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM PER ADDRESS
// 		if (asg_InputPerAddress.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputPerAddress_asg').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM COR ADDRESS
// 		if (asg_InputCorAddress.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputCorAddress_asg').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM EMAIL
// 		if (asg_InputEmail.length < 1) {
// 			validASGSubmit = 1;
// 			$('#InputEmail_asg').after('<span class="errorText">This field is required</span>');
// 		} else {
// 			var regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 			var validEmail = regEx.test(asg_InputEmail);
// 			if (!validEmail) {
// 				validASGSubmit = 1;
// 				$('#InputEmail_asg').after('<span class="errorText">Enter a valid email</span>');
// 			}
// 		}
// 		//ERROR - ASGFORM HP
// 		if (asg_InputHp.length < 1) {
// 			validASGSubmit = 1;
// 			$('#InputHp_asg').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM CITIZENSHIP
// 		if(!asg_citizenChecked){
// 			validASGSubmit = 1;
// 			$('#errorText_asgCiticheck').html('Please choose');
// 		}
// 		//ERROR - ASGFORM NRIC
// 		if (asg_InputNRIC.length < 1) {
// 			validASGSubmit = 1;
// 			$('#InputNRIC_asg').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM RACE
// 		if (asg_InputRace.length < 1) {
// 			validASGSubmit = 1;
// 			$('#InputRace_asg').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM MARITAL STATUS
// 		if(!asg_maritalChecked){
// 			validASGSubmit = 1;
// 			$('#errorText_asgMaritalcheck').html('Please choose');
// 		}
// 		//ERROR - DATE BIRTH
// 		if (asg_InputDateofBirth.length < 1) {
// 			validASGSubmit = 1;
// 			$('#InputDateofBirth_asg').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM MARITAL STATUS
// 		if(!asg_genderChecked){
// 			validASGSubmit = 1;
// 			$('#errorText_asgGenderCheck').html('Please choose').append('<br /><br />');
// 		}
// 		//ERROR - ASGFORM OFFERCHECK
// 		if(!asg_offerChecked){
// 			validASGSubmit = 1;
// 			$('#errorText_asgOfferCheck').html('Please choose');
// 		}

// 		// FAMILY DETAILS -------------------------------------------------------
// 		//FAMILY DETAILS FATHER
// 		//ERROR - ASGFORM INPUTNAME FATHER
// 		if (asg_InputNameFather.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputNameFather_asgFamily').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM INPUTNAME FATHER
// 		if (asg_InputNRICFather.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputNRICFather_asgFamily').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM INPUTNAME FATHER
// 		if (asg_InputHpFather.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputHpFather_asgFamily').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM INPUTNAME FATHER
// 		if (asg_InputOccupationFather.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputOccupationFather_asgFamily').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM INPUTNAME FATHER
// 		if (asg_InputRequestareaFather.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputRequestareaFather_asgFamily').after('<span class="errorText">This field is required</span>');
// 		}
// 		//FAMILY DETAILS MOTHER
// 		//ERROR - ASGFORM INPUTNAME MOTHER
// 		if (asg_InputNameMother.length < 1) {
// 			validASGSubmit = 1;
// 			$('#InputNameMother_asgFamily').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM INPUTNAME MOTHER
// 		if (asg_InputNRICMother.length < 1) {
// 			validSubmit = 1;
// 			$('#InputNRICMother_asgFamily').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM INPUTNAME MOTHER
// 		if (asg_InputHpMother.length < 1) {
// 			validASGSubmit = 1;
// 			$('#InputHpMother_asgFamily').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM INPUTNAME MOTHER
// 		if (asg_InputOccupationMother.length < 1) {
// 			validASGSubmit = 1;
// 			$('#InputOccupationMother_asgFamily').after('<span class="errorText">This field is required</span>');
// 		}
// 		//ERROR - ASGFORM INPUTNAME MOTHER
// 		if (asg_InputRequestareaMother.length < 1) {
// 			validASGSubmit = 1;
// 			$('#InputRequestareaMother_asgFamily').after('<span class="errorText">This field is required</span>');
// 		}
// 		//REFEREES A -------------------------------------------------------
// 		if (asg_InputNameA.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputNameA_asgReferees').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (asg_InputNRICA.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputNRICA_asgReferees').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (asg_InputHpA.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputHpA_asgReferees').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (asg_InputOccupationA.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputOccupationA_asgReferees').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (asg_InputEmployerA.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputEmployerA_asgReferees').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (asg_InputRelationshipA.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputRelationshipA_asgReferees').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (!asg_InputNoOfYearA) {
// 			validASGSubmit = 1;
// 			$('#errorText_asgRefereesA').html('Please choose');
// 		}
// 		//REFEREES B -------------------------------------------------------
// 		if (asg_InputNameB.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputNameB_asgReferees').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (asg_InputNRICB.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputNRICB_asgReferees').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (asg_InputHpB.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputHpB_asgReferees').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (asg_InputOccupationB.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputOccupationB_asgReferees').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (asg_InputEmployerB.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputEmployerB_asgReferees').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (asg_InputRelationshipB.length < 1) {
// 			validASGSubmit = 1;
// 			 $('#InputRelationshipB_asgReferees').after('<span class="errorText">This field is required</span>');
// 		}
// 		if (!asg_InputNoOfYearB) {
// 			validASGSubmit = 1;
// 			$('#errorText_asgRefereesB').html('Please choose');
// 		}
// 		//DECLARATION 1 -------------------------------------------------------
// 		if (!asg_asgDeclare1Checked) {
// 			validASGSubmit = 1;
// 			$('#errorText_asgDeclaration1').html('You must agree before submitting.');
// 		}
// 		if (!asg_asgDeclare2Checked) {
// 			validASGSubmit = 1;
// 			$('#errorText_asgDeclaration2').html('You must agree before submitting. Please fill.');
// 		}
// 		//console.log(check_acca);
// 		//console.log(asg_InputDeclare2);
// 		if (asg_InputDeclare2.length < 1){
// 			validASGSubmit = 1;
// 			$('#errorText_asgDeclaration2').html('You must agree before submitting. Please fill.');
// 		}

// 	}
// });
