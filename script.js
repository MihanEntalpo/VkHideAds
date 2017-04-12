// ==UserScript==
// @name        vk.com block adverstment posts
// @namespace   mihanentalpo.me
// @description Block adversment posts on vk.com
// @include     https://vk.com/*
// @match       https://vk.com/*
// @match       http://vk.com/*
// @version     1
// @grant       none
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==

(function(){
    
    function seek_and_destroy()
    {
        //Удаляем блоки "Рекламная запись"
        $('.wall_text_name_explain_promoted_post.post_link').parents(".feed_row").remove();
        //Удаляем блоки "Реклама в сообществе ... "
        $('.wall_marked_as_ads').parents(".feed_row").remove();
        //Удаляем рекламные блоки слева
        $("#ads_left").remove();
    }
    
    $(function(){
        setInterval(seek_and_destroy, 1500);
    });
    
})();

