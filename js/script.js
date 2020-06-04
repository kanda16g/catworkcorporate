$(function() {

/* ハンバーガーメニュー */
var ham = $('.ham');
var hamNav = $('.hamNav');
var blackBg = $('.blackBg');

ham.click(function() {
    hamNav.toggleClass('active');
    blackBg.toggleClass('active');
});

blackBg.click(function() {
    hamNav.removeClass('active');
    blackBg.removeClass('active');
});

/* スクロールボタン */
var scrollBtn = $('.scrollBtn');

scrollBtn.click(function() {
    $('body, html').animate({scrollTop: 0}, 1000);
});


});

//Webフォント
(function(d) {
    var config = {
      kitId: 'uez4clf',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);