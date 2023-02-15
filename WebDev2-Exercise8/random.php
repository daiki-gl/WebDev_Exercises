<html>
  <head>
    
  </head>
  <body>
   <form action="random.php" method="GET">
    <input type="text" name="number" value="">
    <input type="submit" value="submit">
    <?php
        $numberOfCats = $_GET['number'];
        for($i = 1; $i <= $numberOfCats; $i++){ ?>

          Cat <?php echo $i; ?>:
          <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" height="150" alt="cat <?php echo $i; ?>">
        <?php } ?>
    
</form>

  </body>
</html>