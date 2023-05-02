<?php

if(empty($_POST["name"]))
{
    die("Name is required.");
}

if (! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) 
{
    die("Valid email is required.");
}

print_r($_POST);