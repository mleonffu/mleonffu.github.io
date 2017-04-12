<!DOCTYPE html PUBLIC>
<html>
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <?php echo "Hello World"; ?><br />
        <?php echo "Hello " . "World"; ?><br />
        <?php echo 2 + 3; ?><br />
        <?php
            $var1 = 10;
            echo $var1;
            
            echo "<br />";
            
            $var2 = 100;
            echo $var2;
            
            echo "<br />";
            
            $var2 = "hello world";
            echo $var2;
            
            function loopWoah($num){
                echo "<br />"
                echo $num;
            }
            
            loopWoah(123);
            
        ?>
    </body>
    
</html>