<?php

echo 'processing...';

//Check for a POST variable
if(isset($_POST['name'])){
    //if it exists
    echo 'POST: Your name is '. $_POST['name'];
}

//Check for a GET variable
if(isset($_GET['name'])){
    //if it exists
    echo 'GET: Your name is ', $_GET['name'];
}

