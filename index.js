$(function(){
    var se=$('.Search');
    var header=$('.header');
    var bag=$('.bag');
    var dd=$('.directory-column-section');
    var bagc=$('.bagc');
    var headercurter=$('.header-curter');
    var flag=true;
    var body=$('body');
    se.on('click',function(){
        header.addClass('searching');
        headercurter.css({
            display:'block'
        })
            body.addClass('screen')
    })
    bagc.on('click',function(){
        header.removeClass("searching");
        headercurter.css({
            display:'none'
        })
        body.removeClass('screen')
    })
    headercurter.on('click',function(){
        header.removeClass("searching");
        headercurter.css({
            display:'none'
        })
            body.removeClass('screen')

    })
    bag.on('click',function(){
        if(flag){
            $('.bagview').css({
                display:'block'
            })
            $('.sanjiao').css({
                display:'block'
            })
            flag=false;
        }else{
            $('.bagview').css({
                display:'none'
            })
            $('.sanjiao').css({
                display:'none'
            })
            flag=true;
        }

    })
    dd.on('click',function(){
        $(this).find('ul').animate({
            'display':'block'

        },200)
    })
    $('.footer2-inner ul').on('click',function () {
        $(this).find('.shi').toggleClass('cha');
        $(this).find('li').slideToggle();
    })

    var bread=$('.bread');
    var crusts=$('.crusts');
    var crustx=$('.crustx');
    var chalist=$('.chalist');
    var dutu=$('.dutu');
    var ulli=$('.ulli');
    var kaiguan=true;
    bread.on('click',function(){
        $(this).toggleClass('colse');
        body.toggleClass('screen');
        if(kaiguan){
            chalist.toggleClass('chadian').removeClass('chali');
            if(chalist.hasClass('chadian')){
                $('.header-phone .bagg.ani').removeClass('fade-in-right').addClass('fade-out-right');

            }else{
                $('.header-phone .bagg.ani').removeClass('fade-out-right').addClass('fade-in-right');

            }
            kaiguan=false;
            return;

        }else{
            chalist.removeClass('chadian').toggleClass('chali');
            if(chalist.hasClass('chadian')){
                $('.header-phone .bagg.ani').removeClass('fade-in-right').addClass('fade-out-right');

            }else{
                $('.header-phone .bagg.ani').removeClass('fade-out-right').addClass('fade-in-right');

            }
            kaiguan=true;
        }


    })
    
    var alone=$('alone');
    alone.on('click',function(){
        
    })
var headerbagg=$('.header-phone .bagg');
    headerbagg.on('click',function(){
        if(flag){
            $('.bagview').css({
                display:'block'
            })
            $('.sanjiao').css({
                display:'block'
            })
            flag=false;
        }else{
            $('.bagview').css({
                display:'none'
            })
            $('.sanjiao').css({
                display:'none'
            })
            flag=true;
        }
    })



    var slides=$('.gallery-slide-wrapper a');
    var dots=$('.dot-nav .dot');
    var moving=false;
    var butl=$('.butl');
    var butr=$('.butr');
    var ss=$('.carousel');
  ss.on('mouseenter',function(){
      butr.animate({
          opacity:1
      });
      butl.animate({
          opacity:1
      })
      clearInterval(t);

  })
    ss.on('mouseleave',function(){
        butr.animate({
            opacity:0
        });
        butl.animate({
            opacity:0
        })
        t=setInterval(moveRight,1000);
    })
      moveTo=function(el,aa){
          moving=true;

          if(aa=="right"){
             slides.filter('.active').removeClass('active').addClass('leave').delay(1000).queue(function(){

                 $(this).removeClass('leave').dequeue();
                 moving=false;
             });

             $(el).addClass("right");
             $(el).get(0).offsetWidth;
             $(el).removeClass('right').addClass('active');

dots.removeClass('active').eq(slides.index(el)).addClass('active');

         }else if(aa=="left"){
             slides.filter('.active').removeClass('active').addClass('right').delay(1000).queue(function(){
              $(this).removeClass('right').dequeue();
                 moving=false;

             })
              $(el).addClass('enter');
              $(el).get(0).offsetWidth;
              $(el).removeClass('enter').addClass('active');
             dots.removeClass('active').eq(slides.index(el)).addClass('active');

         }


    }
    moveRight=function(){
        var active=slides.filter('.active');
        var el=active.next().length?active.next():slides.eq(0);
        moveTo(el,'right');
    }
    moveLeft=function(){
        var active=slides.filter('.active');
        var el=active.prev().length?active.prev():slides.eq(-1);
        moveTo(el,'left');
    }
    dots.on('click',function(){
    clearInterval(t);
        var c=slides.index(slides.filter('.active'));
        var n=$(this).index();
        if(n==c){
            return;
        }
        if(moving){
            return;
        }
        if(n<c){
            moveTo(slides.eq(n),'left');
        }else if(n>c){
            moveTo(slides.eq(n),'right');
        }

    })
   var t= setInterval(moveRight,1000);
    butr.on('click',function(){
        clearInterval(t);
        moveRight();
    })
    butl.on('click',function(){
        clearInterval(t);
        moveLeft();
    })
    
    
})