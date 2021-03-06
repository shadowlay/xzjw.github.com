
function load()
{  

	$.getJSON("json/home.json", function(data) {
        homeData = data.home;
        var homeHtml = $.templates("#homeTmpl").render(homeData);
        $(".index").append(homeHtml);
        
        bookData = data.book;
        var bookHtml = $.templates("#bookTmpl").render(bookData);
        $(".index").append(bookHtml);

        introduceData = data.introduce;
        var introduceHtml = $.templates("#introduceTmpl").render(introduceData);
        $(".index").append(introduceHtml);

        therapistsData = data.therapists;
        var therapistsHtml = $.templates("#therapistsTmpl").render(therapistsData);
        $(".index").append(therapistsHtml);

        stylesData = data.styles;
        var stylesHtml = $.templates("#stylesTmpl").render(stylesData);
        $(".index").append(stylesHtml);

        priceData = data.price;
        var priceHtml = $.templates("#priceTmpl").render(priceData);
        $(".index").append(priceHtml);

        faqData = data.faq;
        var faqHtml = $.templates("#faqTmpl").render(faqData);
        $(".index").append(faqHtml);

        contactData = data.contact;
        var contactHtml = $.templates("#contactTmpl").render(contactData);
        $(".index").append(contactHtml);

        if($(window).height()>=$(document.body).outerHeight())
		{
		   $('.commonfoot').css('position', 'absolute');
		   $('.commonfoot').css('width', '100%');
		   $('.commonfoot').css('bottom','0');
		}else
		{
		   $('.commonfoot').css('position', 'relative');
		}

        $(".continue-button").mousedown(function () {
            window.location.href = 'html/booking.html';
        });

        $(".therapists-btn").mousedown(function () {
            window.location.href = 'html/therapists.html';
        });

        $(".styles-btn").mousedown(function () {
            window.location.href = 'html/styles.html';
        });

        $(".price-button").mousedown(function () {
            window.location.href = 'html/price.html';
        });

        $(".contact-send-button").mousedown(function () {
            window.location.href = 'html/contact.html';
        });
        chooseDate();
        chooseTime();

    });	    
}

/*function faqMobile() {
	$('.answer').show();
	if($(window).width()<=750 ){
		$('.answer').hide();
		console.log("1");
	}
	console.log("2");
}*/
/*&& (window.orientation==180||window.orientation==0)*/

function chooseDate(){
	Flatpickr.l10n.firstDayOfWeek = 1;
	document.getElementById("cla").flatpickr();
	var x=($('.today').index('.flatpickr-day')+1)%7;
	x=x+$('.flatpickr-day1').length;
	x=x%7;
	x--;
	if(x<0)
	{
		x=6;
	}
	$('.flatpickr-weekday').eq(x).css('border-bottom','2px solid rgb(100,210,163)')
}

function chooseTime(){
	$("#di").timepicki();
}