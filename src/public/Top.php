<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="Custom.css">
    <title>診断メーカー</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" crossorigin="anonymous"></script>
</head>
<body class="fo">

    <div class='title center' id="ttitle">トランプ診断</div>
    <br>
    <div class="formOya" id="formO">
        <form method="POST" action="" id="form01">
            <input type="text" name="name" id="name" maxlength="20" class="text"
                   placeholder="名前を入力してください"><br>
            <button type="submit" id="btn" class="submit">診断する</button>
        </form>
    </div>

    <script type="text/javascript">
        $("#btn").on('click',function(e){
            //入力チェック(簡単)
            if($("#name").val() == ""){
                alert("文字を入力してください");
                //処理を中断
                return false

            }else{
                var form = $("#form01");
                form.fadeOut(900);
                //処理を完全に中断するのではなく、デフォルトイベントをやめているだけ
                e.preventDefault();

                setTimeout(function(){
                    //「submit」をいったん消す
                    form.off("submit");
                    //「submit」を実行
                    form.submit();
                }, 1000);
            }
        })
    </script>

</body>
</html>