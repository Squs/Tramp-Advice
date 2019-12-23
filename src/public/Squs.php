<?php
if (isset($_POST["name"])) {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>結果</title>
<style>
*{
   margin: 0;
   padding: 0px;
}
body {
    margin-top: 200px;
    margin-bottom: 100px;
}
a{
    text-decoration: none;
}
.wiki{
    text-decoration: none;
}
</style>
    <link rel="stylesheet" href="hyouzi.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" crossorigin="anonymous"></script>
    <script src="./hyousi.js"></script>
</head>
<header>
    <div class="header-title Cent font-h trump"><a href="#">トランプ診断</a></div>
</header>

<!-- /////////////////////////////////////////////////////////////// -->
<body class="fo">
    <div class="fade_group">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="fade_group2">
        <div></div>
        <div></div>
    </div>

    <script>
    $(window).on('load', function(){
    $('body').removeClass('fo');
    });
    $(function() {
        $('a:not([href^="#"]):not([target])').on('click', function(e){
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
    </script>

    <script>

        let name = "<?php echo htmlspecialchars($name); ?>";

        let tramp_array = tramp(name);

        console.log(tramp_array[0]);
        console.log(tramp_array[1]);
    </script>

<!-- /////////////////////////////////////////////////////////////// -->

<!-- /////////////////////////////////////////////////////////////// -->
    <div id="back">
        <main>
            <div class="wrap">
                <div class="sliding"></div>
            </div>

                <div class="font Cent">あなたに合っているトランプゲームを教えます!</div>
                    <div class="box29">
                        <div class="box-title">診断結果</div>
                        <p class="trump font">
                            <!-- ここにランダムな名前を表示 -->
                            <div id="name"></div>
                            <script>
                                obj_Name_View = document.getElementById("name");
                                obj_Name_View.innerHTML = tramp_array[0];
                            
                            </script>
                            <div><img src="card_joker.png" alt=""></div>
                        </p>


                    <!-- シェアゾーン -->
                    <div id="share">
                        <ul>
                            <li>
                                シェアしよう！
                            </li>
                            <!-- Twitter -->
                            <li class="share-twitter">                            <a href="http://twitter.com/home?status=%20by%20" target="_blank">Twitter</a>
                            </li>
                            <!-- Facebook -->
                            <li class="share-facebook">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=" target="_blank">Facebook</a>
                            </li>
                            <!-- Google+ -->
                            <li class="share-google">
                            <a href="https://plus.google.com/share? url=https://plus.google.com/share?" target="_blank">Google+</a>
                            </li>
                            <!-- LINE -->
                            <li class="share-line">
                            <a href="http://line.me/R/msg/text/?%0D%0A">LINE</a>
                            </li>
                        </ul>
                    </div>
                    <!-- シェアゾーン -->


                </div>
            <div class="font Cent">
                <p>遊び方(ルール)</p>
                <a id="url" class="wiki"></a>
                <script>
                    obj_Name_View = document.getElementById("url");
                    obj_Name_View.href = tramp_array[1];
                    obj_Name_View.innerHTML = "wikiはこちら";
                            
                </script>
            </div>
        </div>
        </main>
    </div>
<!-- /////////////////////////////////////////////////////////////// -->
</body>
<footer>
    <div class="footer-title Cent trump">ご質問はこちらまで</div>
</footer>

</html>
















<!-- // $(window).on('load', function(){
    //     $('body').removeClass('fo');
    //     let name  = <?php //echo $name;?>;
    //     let tramp = tramp(name);
    //     let name = document.getElementById('name');
    //     let url  = document.getElementById('url');
    //     name.textContent = tramp[0];
    //     console.log(tramp[0]);
    //     url.href = tramp[1];
    //     url.textContent = 'wikiはこちら。';
    // }); -->









<?php
// .fade_group div ,
// .fade_group2 div {
//     content: '';
//     position: fixed;
//     top: 0;
//     /* left: -100vw; */
//     top: -88%;
//     /* width: 100vw; */
//     width: 100%;
//     height: 100%;
//     /* height: 100vw; */
//     pointer-events: none;
// }
// .fade_group div {
//     z-index: 9999;
//     transition: .6s;
// }
// .fade_group2 div {
//     z-index: 9998;
//     transition: .8s;
// }
// .fade_group div:nth-of-type(1) {
//     background: rgba(102, 94, 175, 0.3);
// }
// .fade_group div:nth-of-type(2) {
//     background: rgba(94, 95, 175, 0.5);
//     transition-delay:.3s;
// }
// .fade_group div:nth-of-type(3) {
//     background: rgba(95, 94, 175, 0.7);
//     transition-delay:.4s;
// }
// .fade_group div:nth-of-type(4) {
//    background: rgb(49, 169, 238);
//    transition-delay:.3s;
//}
//.fade_group2 div:nth-of-type(1) {
//    background: rgb(59, 179, 248,.8);
//    transition-delay: .2s;
//}
//.fade_group2 div:nth-of-type(2) {
//    background: rgb(69, 190, 255,0.8);
//    transition-delay: .3s;
// }
// body.fo .fade_group div{
//     top: 0;
//     /* left: 0; */
// }
// body.fo .fade_group2 div{
//     top: 100%;
//     /* left: 100vw; */
// }

?>