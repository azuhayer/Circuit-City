<?php

if(empty($_POST["name"]))
{
    die("Name is required.");
}

print_r($_POST);