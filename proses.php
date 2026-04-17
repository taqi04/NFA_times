<?php

// Ambil data dari form
$nama = $_POST['nama'];
$email = $_POST['email'];
$nilai = $_POST['nilai'];

// Struktur kendali
if ($nilai > 70) {
    $status = "Lulus";
} else {
    $status = "Remedial";
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Hasil</title>
</head>
<body>

    <h2>Hasil Nilai Ujian</h2>

    <p>Nama: <?php echo $nama; ?></p>
    <p>Email: <?php echo $email; ?></p>
    <p>Nilai: <?php echo $nilai; ?></p>
    <p>Status: <strong><?php echo $status; ?></strong></p>

</body>
</html>