param(
  [Parameter(Mandatory = $false)]
  [string]$Message = "Update website"
)

$ErrorActionPreference = "Stop"

Write-Host "1/4 Checking project build..." -ForegroundColor Cyan
npm run build

Write-Host "2/4 Staging changes..." -ForegroundColor Cyan
git add .

$status = git status --porcelain
if (-not $status) {
  Write-Host "No file changes found. Nothing to commit or push." -ForegroundColor Yellow
  exit 0
}

Write-Host "3/4 Creating commit..." -ForegroundColor Cyan
git commit -m $Message

Write-Host "4/4 Pushing to GitHub..." -ForegroundColor Cyan
git push

Write-Host "Done. Vercel should create a new deployment from the latest GitHub commit." -ForegroundColor Green
