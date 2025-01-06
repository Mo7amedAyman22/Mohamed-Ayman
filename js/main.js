


$("a").click(function(){
    
    let aHref = $(this).attr('href');
    let sectionOfSet = $(aHref).offset().top;
    $("html , body").animate({scrollTop:sectionOfSet})
})


function  viewCv(){
    window.open('Mohamed Ayman _(CV).pdf', '_blank')
}