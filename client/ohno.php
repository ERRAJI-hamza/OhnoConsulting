<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/all.css" />
    <link rel="stylesheet" href="ohno.css">
    <script src="/node_modules/swup/dist/swup.min.js"></script>
</head>
<body>
    <header>
        <div class="container">
            <div>
            <p class="title"><img src="ohnoC.jfif" alt="#" class="ohnoC"></p>
            <p class="title"><b>OHNO Consulting...</b>Your real Business Partner</p>
            </div>
            <hr>
            <div class="submenu">
            <a  href="ohno.html"  class="item">Accueil</a>
            <a  href="http://localhost/OhnoConsulting1/ohno.php"  class="item">Contacte</a>
            </div>
            <div class="sublogo">
                <a href="https://www.facebook.com/people/Ohno-Consulting/100063023451418/" class="logo"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://ma.linkedin.com/in/ohno-consulting-39842a170" class="logo"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/ohno_consulting/" class="logo"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </header>
    <section class="S">
        <div class="c">
            <h2>Formulaire</h2>
            <p>OHNO s'engage à dépasser toutes vos attentes. N'hésitez pas à nous contacter, nous serons ravis de vous servir.</p>
            <div class="forlogo">
                <a href="https://www.facebook.com/people/Ohno-Consulting/100063023451418/" class="logo"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://ma.linkedin.com/in/ohno-consulting-39842a170" class="logo"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/ohno_consulting/" class="logo"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </section>
    
    <footer>
     <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" class="form" method="post" onsubmit="verfie()">
        <select id="identiti" name="vous_etes">
            <option value="client">client</option>
            <option value="Etudaint">Etudaint</option>
            <option value="professionnelle">professionnelle</option>
          </select>
          <br><br>
          <input type="text" id="fname" name="nom" placeholder="nom"><p id="res1"></p>
          <input type="text" id="fprenom" name="prenom" placeholder="prenom" ><p id="res2"></p>
          <input type="email" name="email" id="email" placeholder="email" ><p id="res3"></p>
          <input type="tel" name="tele" id="tel" placeholder="numero" ><p id="res4"></p>
          <textarea name="commantaire" id="textarea" placeholder="redijer votre text" ></textarea><p id="res6"></p>
          <input type="submit" class="submit">
     </form>
    </footer>
    
    
    <?php  
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ohnoconsulting";

    try {
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      // prepare sql and bind parameters
      $stmt = $conn->prepare("INSERT INTO client (vous_etes, nom, prenom , email , tele , commantaire)
      VALUES (:vous_etes, :nom, :prenom, :email, :tele, :commantaire)");
      if((!empty($_POST["nom"]) && !empty($_POST["prenom"])) && (!empty($_POST["email"]) && !empty($_POST["tele"])) && !empty($_POST["vous_etes"])){
        $stmt->bindParam(':vous_etes', $vous_etes);
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':tele', $tele);
        $stmt->bindParam(':commantaire', $commantaire);
      }
      
    
      // insert a row
      $nomErr = $emailErr = $prenomErr = $teleErr =$vous_etesErr=$commantaireErr="";
      $nom = $email = $prenom = $commantaire = $tele =$vous_etes="";

      if ($_SERVER["REQUEST_METHOD"] == "POST") {
              if (empty($_POST["nom"])) {
              $nomErr = "Name is required";
              } else {
              $nom = $_POST["nom"];
              }

            if (empty($_POST["prenom"])) {
               $prenomErr = "prenom is required";
            } else {
               $prenom = $_POST["prenom"];
            }

             if (empty($_POST["email"])) {
                   $emailErr = "email is required";
              } else {
                  $email = $_POST["email"];
             }

            if (empty($_POST["tele"])) {
                   $teleErr = "";
           } else {
                  $tele = $_POST["tele"];
           }

           if (empty($_POST["vous_etes"])) {
                  $vous_etesErr = " this champ is required";
           } else {
                $vous_etes = $_POST["vous_etes"];
           }
           if (empty($_POST["commantaire"])) {
              $commantaireErr = "";
          } else {
             $commantaire = $_POST["commantaire"];
          }
          }
         $stmt->execute();
    
         echo "New records created successfully";
             } catch(PDOException $e) {
         echo "Error: " . $e->getMessage();
         }
        $conn = null;
     ?>

<script src="ohno.js"></script>
</body>

</html>