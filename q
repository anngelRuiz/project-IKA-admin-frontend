[1mdiff --git a/src/components/Login/login.css b/src/components/Login/login.css[m
[1mindex 7da49d7..f26e06c 100644[m
[1m--- a/src/components/Login/login.css[m
[1m+++ b/src/components/Login/login.css[m
[36m@@ -2,6 +2,7 @@[m
     display: flex;[m
     justify-content: center;[m
     align-items: center;[m
[32m+[m[32m    flex-direction: column;[m
     height: 100vh;[m
     margin: 0;    [m
     [m
[36m@@ -38,7 +39,7 @@[m
 [m
 .contiainerLogin{[m
     display: grid;[m
[31m-    width: 60vw;[m
[32m+[m[32m    width: 70vw;[m
     height: 50vh;[m
     grid-template-columns: 50% 50%;        [m
 }[m
[36m@@ -75,6 +76,7 @@[m
     [m
     & h5{[m
         font-size: 1.8rem;[m
[32m+[m[32m        margin-top: 15px;[m
     }[m
 [m
     & form{[m
