$(document).ready(function(){

function whatever(nameSelect) {

return quote = {
	one: "I <span>found</span> you " + nameSelect + ", and I want to <span>annoy</span> you for the rest of my life",
	two: "I really <span>like</span> you " + nameSelect + ", and I don't like <span>very</span> many things",
	three:"I love <span>everything</span> about you " + nameSelect + ", for the <span>most</span> part, <span>some</span> days.",
	four: "I'm so glad you <span>seduced</span> me "+ nameSelect +" with your charming <span>awkwardness</span>",
	five: "I'm <span>still</span> not sick of you, "+ nameSelect,
	};
};

var colour = {
	one: "#63A69F",
	two: "#F63300",
	three: "#549433",
	four: "#F73260",
	five: "#51469B",
};

var typo = {
	one: "josefin",
	two: "quicksand",
	three: "londrina",
	four: "anonymous",
	five: "cabin",
	six: "yanone",
};

var background = {
	one: "backgroundOne",
	two: "backgroundTwo",
	three: "backgrountThree",
	four: "backgroundFour",
	five: "backgroundFive",
};

	$('form').on('submit', function(e){
		e.preventDefault();
		var quote = '';
		var nameSelect = '';
		var quoteSelect ='';
		var quoteUse = '';
		var colorSelect = '';
		var colorUse = '';
		var typoSelect = '';
		var typoUse = '';
		var bckgroundSelect = '';
		var bckgroundUse = '';

		nameSelect = $('.questionFive input[type=text]').val();
		quote = whatever(nameSelect);


		quoteSelect = $('.questionOne input[name=stupid]:checked').val();
		quoteUse = quote[quoteSelect];
		// quoteUse is going to be add as h3 (html element) using .html

		colorSelect = $('.questionTwo input[name=idiot]:checked').val();
		colorUse = colour[colorSelect];
		// colorUse is going to add some color .css() to our h3/postcard

		typoSelect = $('.questionThree input[name=foolish]:checked').val();
		typoUse = typo[typoSelect];
		// typoUse is adding a class to the postcard that is going to change the typo.
		bckgroundSelect = $('.questionFour input[name=dummy]:checked').val();
		bckgroundUse = background[bckgroundSelect];

		$('.answer').show();

		$('.postcard')
		.html('<h3>' + quoteUse + '</h3>')
		.css('color', colorUse)
		.addClass(typoUse).addClass(bckgroundUse)
		.fadeIn()
		.show();
	});


	$("input[type=reset]").on('click', function() {
		$('.answer').hide();
		$('form').trigger("reset");
	}); //end of reset.onClick

	$('.questionOne input').on('click', function (){
		$('html, body').animate ({
			scrollTop: $("#questionTwo").offset().top
		})
	});

	$('.questionTwo input').on('click', function (){
		$('html, body').animate ({
			scrollTop: $("#questionThree").offset().top
		})
	});

	$('.questionThree input').on('click', function (){
		$('html, body').animate ({
			scrollTop: $("#questionFour").offset().top
		})
	});

	$('.questionFour input').on('click', function (){
		$('html, body').animate ({
			scrollTop: $("#questionFive").offset().top
		})
	});
	
	// $('.questionFive input').on('click', function (){
	// 	$('html, body').animate ({
	// 		scrollTop: $("#questionSix").offset().top
	// 	})
	// });
});


// 	if $(window).width() >= 885){
// 	$('h1').attr('id', 'title');
// 	} else {
// 	$('h1').attr('');
// 	};
$( window ).resize(function() {
   var currentWidth = $(window).width();
   if (currentWidth >= 885){
        $('#title').arctext({radius: 700});
        console.log(currentWidth);
    } else {
        $('#title').arctext({radius: 1000});
        console.log("works")
    };
});