//budget Dropdown
$(document).ready(function(){
	$(".budget-india").hide();
	$(".budget-uae").hide();
	$(".budget-oman").hide();
});
$(function () {
	$(".Country-Drop").change(function () {
		if ($(this).val() == "india") {
			$(".budget-india").show();
			$(".budget-oman").hide();
			$(".budget-uae").hide();
		} else if ($(this).val() == "oman") {
			$(".budget-oman").show();
			$(".budget-india").hide();
			$(".budget-uae").hide();
		} else if ($(this).val() == "uae") {
			$(".budget-india").hide();
			$(".budget-uae").show();
			$(".budget-oman").hide();
		} else if ($(this).val() == "others") {
			$(".budget-india").hide();
			$(".budget-uae").hide();
			$(".budget-oman").hide();
		} else if ($(this).val() == "allcountry") {
			$(".budget-india").hide();
			$(".budget-uae").hide();
			$(".budget-oman").hide();
		}
	});
});

