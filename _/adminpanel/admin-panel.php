<?php
/**
 * Created by PhpStorm.
 * User: benehiko
 * Date: 7/27/17
 * Time: 2:10 PM
 */
session_start();
ini_set('display_errors', 1);
require('adminhandler.php');
$adminhandler = new adminhandler;
$adminhandler->_init_();
$_SESSION['adminloggedin'] = true;
if (isset($_SESSION['adminloggedin']) || isset($_COOKIE['admin'])){
    include('html/login.html');
}else {
    include('html/cpanel.html');
    echo '<table><tr><th>ID</th><th>Username</th><th>Level</th></tr>';
    $row = $adminhandler->getStudents();
    foreach ($row as $item){
        echo '<tr>';
        echo '<td>'.$row['id'].'</td>';
        echo '<td>'.$row['username'].'</td>';
        echo '<td>1</td>';
        echo '</tr>';
    }

    echo '</table>';
}
?>