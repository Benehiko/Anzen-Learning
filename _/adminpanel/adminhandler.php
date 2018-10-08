<?php
/**
 * Created by PhpStorm.
 * User: benehiko
 * Date: 7/27/17
 * Time: 2:12 PM
 */
require('../php/dbconnect.php');

class adminhandler
{
    private $db;
    function _init_(){
        $db = new DBConnect();
    }

    function login($username,$password){
        $mysqli = $GLOBALS['db']->connect();

        if (($stmt = $mysqli->prepare("SELECT password,id FROM admin WHERE username = ?"))) {
            $stmt->bind_param("s",$username);
            $stmt->execute();
            $stmt->bind_result($pass,$studentId);
            $stmt->fetch();
            $stmt->close();

            if (password_verify($password, $pass)){

                if (($stmt = $mysqli->prepare("SELECT level,gamelevel FROM user_data WHERE id = ?"))){
                    $stmt->bind_param("i",$studentId);
                    $stmt->execute();
                    $stmt->bind_result($level,$gamelevel);
                    $stmt->fetch();
                    $stmt->close();
                    return true;

                }else{
                    return false;
                }

            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    function getStudents(){

        $row = array();

        $mysqli = $GLOBALS['db']->connect();
        if (($stmt = $mysqli->prepare("SELECT * from users Order By id;"))){
            $stmt->execute();
            $stmt->bind_result($row);
            $stmt->fetch_array(MYSQL_ASSOC);
            $stmt->close();
            return $row;
        }else{
            return null;
        }

    }
}