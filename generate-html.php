<?php 

// Exporta as páginas renderizadas em HTML e os assets na pasta /html

const BASE_URL = 'http://localhost/easy-ipo/';

$pages = ['index', 'trilha'];

foreach ($pages as $page) {

	$page_content = file_get_contents(BASE_URL.$page.".php");

	file_put_contents("html/{$page}.html", $page_content);

	echo "HTML de $page gerado com sucesso\n";
}

$assets_dir = ['css','js','images'];

foreach($assets_dir as $dir){

	foreach(glob("{$dir}/*") as $file) {
	    copy($file, "html/{$file}");
	}

	echo "Diretório $dir copiado com sucesso\n";
}



