/*jQuery・・・jsを少ない記述で書けるようにするライブラリ
　　　　　　　 デファクトスタンダードと呼ばれるもの
　　　　　　　 デメリット ⇒ 読み込みによるパフォーマンス低下*/ 
/*jQuery特有の記述・・・
    「$()」⇒　オブジェクトを指定*/ 

    $(window).on('load', function(){
        //removeclass・・・クラスを削除
        $('body').removeClass('fo');
    });
    $(function() {
        $('a:not([href^="#"]):not([target])').on('click', function(e){
            //preventDefault・・・処理をやめる
            e.preventDefault();
            url = $(this).attr('href');
            if (url !== '') {
                $('body').addClass('fadeout');
                setTimeout(function(){
                    window.location = url;
                }, 800);
            }
            return false;
        });
    });