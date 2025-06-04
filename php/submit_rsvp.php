<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "ukk2";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$nama = $_POST['nama'] ?? '';
$grup = $_POST['grup'] ?? '';
$whatsapp = $_POST['whatsapp'] ?? '';
$kehadiran = $_POST['kehadiran'] ?? '';
$ucapan = $_POST['ucapan'] ?? '';

if ($nama && $grup && $whatsapp && $kehadiran && $ucapan) {
    $stmt = $conn->prepare("INSERT INTO rsvp (nama, grup, whatsapp, kehadiran, ucapan) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $nama, $grup, $whatsapp, $kehadiran, $ucapan);

    if ($stmt->execute()) {
        echo "<script>alert('RSVP berhasil dikirim!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Gagal menyimpan data.'); window.history.back();</script>";
    }

    $stmt->close();
} else {
    echo "<script>alert('Semua kolom wajib diisi.'); window.history.back();</script>";
}

$conn->close();
?>