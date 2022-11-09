<!doctype html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Easy IPO - Home</title>

    <link rel="icon" type="image/x-icon" href="images/favicon.ico">

    <link rel="stylesheet" href="css/home.css">

</head>
<body>

<div class="container">

    <?php include "includes/header.php"; ?>

  <div class="content-home">
    <div class="wrapper">

      <section class="main-title">
        <h2>Aprenda a investir de<br>
          uma forma diferente.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam quis nulla congue
          malesuada. Duis bibendum nec ex et porttitor.</p>
      </section>

      <section class="main-trail">
        <img src="images/IPO.png" alt="IPOs">
        <p>Lorem ipsum dolor sit amet, consectetur elit ctetur adipisc elit. Praesent et quam
          quis nulla congue malesuada. Praesent et quam quis nulla congue malesuada.</p>
        <div class="btn btn-primary" onclick="openModal()">Iniciar Trilha IPO</div>
      </section>

      <section class="trails-slider">
        <h2>Mais Trilhas</h2>
        <div class="trails-list">
          <div class="trail-card">
            <div class="trail-thumb">
              <img src="images/thumb-trilha-1.png" alt="Trilha 1">
              <h3>Prospectos</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            <a href="#" class="btn btn-primary">Iniciar</a>
          </div>
          <div class="trail-card">
            <div class="trail-thumb">
              <img src="images/thumb-trilha-2.png" alt="Trilha 2">
              <h3>Ações</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            <a href="#" class="btn btn-primary">Iniciar</a>
          </div>
          <div class="trail-card">
            <div class="trail-thumb">
              <img src="images/thumb-trilha-3.png" alt="Trilha 3">
              <h3>Fundos Imobiliários</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            <a href="#" class="btn btn-primary">Iniciar</a>
          </div>
          <div class="trail-card">
            <div class="trail-thumb">
              <img src="images/thumb-trilha-4.png" alt="Trilha 4">
              <h3>BDRs</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            <a href="#" class="btn btn-primary">Iniciar</a>
          </div>
        </div>
      </section>

    </div>
  </div>

  <?php include "includes/footer.php" ?>

  <!-- Modal - Video -->
  <div id="modal-video" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <iframe width="100%" height="315" src="" id="youtube-video" title="YouTube video player"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture"
              allowfullscreen></iframe>
      <a href="trilha.php" class="btn btn-primary" title="Iniciar">Iniciar</a>
    </div>
  </div>

  <script src="js/modal.js" type="text/javascript"></script>
  <script src="js/app.js" type="text/javascript"></script>

</div>

</body>
</html>