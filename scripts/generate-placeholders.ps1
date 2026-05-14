$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root = Join-Path (Split-Path -Parent $PSScriptRoot) "public\images"
New-Item -ItemType Directory -Force -Path $root | Out-Null

function New-FoodImage {
  param(
    [string]$File,
    [string]$Title,
    [string]$Subtitle,
    [int]$Width,
    [int]$Height,
    [string]$Primary,
    [string]$Accent
  )

  $bmp = New-Object System.Drawing.Bitmap $Width, $Height
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

  $rect = New-Object System.Drawing.Rectangle 0, 0, $Width, $Height
  $bgStart = [System.Drawing.ColorTranslator]::FromHtml("#FFF7EA")
  $bgEnd = [System.Drawing.ColorTranslator]::FromHtml("#F6E6C9")
  $gradient = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, $bgStart, $bgEnd, 35
  $g.FillRectangle($gradient, $rect)

  $main = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml($Primary))
  $accentBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml($Accent))
  $shadow = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(38, 70, 43, 30))
  $leaf = [System.Drawing.ColorTranslator]::FromHtml("#3D7A4F")
  $leafBrush = New-Object System.Drawing.SolidBrush $leaf
  $leafPen = New-Object System.Drawing.Pen $leaf, 8

  for ($i = 0; $i -lt 9; $i++) {
    $x = [int]($Width * 0.12) + (($i % 3) * [int]($Width * 0.25))
    $y = [int]($Height * 0.13) + ([math]::Floor($i / 3) * [int]($Height * 0.18))
    $size = [int]([math]::Min($Width, $Height) * (0.13 + (($i % 2) * 0.025)))
    $g.FillEllipse($shadow, $x + 10, $y + 12, $size, $size)
    $g.FillEllipse($main, $x, $y, $size, $size)
    $g.FillEllipse($accentBrush, $x + [int]($size * 0.18), $y + [int]($size * 0.16), [int]($size * 0.34), [int]($size * 0.24))
  }

  for ($j = 0; $j -lt 5; $j++) {
    $lx = [int]($Width * (0.08 + $j * 0.18))
    $ly = [int]($Height * 0.70)
    $g.DrawBezier($leafPen, $lx, $ly, $lx + 50, $ly - 42, $lx + 120, $ly + 28, $lx + 180, $ly - 8)
  }

  if ($Title.Length -gt 0) {
    $panel = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(226, 255, 255, 255))
    $panelRect = New-Object System.Drawing.RectangleF ([single]($Width * 0.08)), ([single]($Height * 0.71)), ([single]($Width * 0.84)), ([single]($Height * 0.21))
    $g.FillRectangle($panel, $panelRect)

    $titleFont = New-Object System.Drawing.Font "Segoe UI", ([single]([math]::Max(22, $Width / 24))), ([System.Drawing.FontStyle]::Bold)
    $subFont = New-Object System.Drawing.Font "Segoe UI", ([single]([math]::Max(13, $Width / 54))), ([System.Drawing.FontStyle]::Regular)
    $titleBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#2D211B"))
    $subBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#7A5038"))

    $g.DrawString($Title, $titleFont, $titleBrush, [single]($Width * 0.11), [single]($Height * 0.745))
    $g.DrawString($Subtitle, $subFont, $subBrush, [single]($Width * 0.11), [single]($Height * 0.84))
  }

  $bmp.Save((Join-Path $root $File), [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

New-FoodImage "hero.png" "" "" 1100 1100 "#B58463" "#FFF7EA"

$items = @(
  @("klepon.png", "Klepon", "Gula merah dan kelapa segar", "#3D7A4F", "#F6E6C9"),
  @("lupis.png", "Lupis", "Ketan pulen saus gula aren", "#7A5038", "#FFF7EA"),
  @("onde-onde.png", "Onde-onde", "Wijen renyah isi kacang hijau", "#D2A25F", "#FFF7EA"),
  @("lemper.png", "Lemper", "Ketan gurih isi ayam suwir", "#C9B17A", "#3D7A4F"),
  @("risoles.png", "Risoles", "Ragout creamy dan kulit lembut", "#C78356", "#FFF7EA"),
  @("putu-ayu.png", "Putu Ayu", "Pandan lembut kelapa gurih", "#4F965F", "#FFF7EA"),
  @("nagasari.png", "Nagasari", "Pisang manis aroma daun", "#E0C26C", "#3D7A4F"),
  @("dadar-gulung.png", "Dadar Gulung", "Unti kelapa gula merah", "#5AA269", "#B58463")
)

foreach ($item in $items) {
  New-FoodImage $item[0] $item[1] $item[2] 900 700 $item[3] $item[4]
}

for ($i = 1; $i -le 6; $i++) {
  New-FoodImage "gallery-$i.png" "Snack Box $i" "Placeholder foto pesanan UMKM" 1000 760 "#B58463" "#3D7A4F"
}
