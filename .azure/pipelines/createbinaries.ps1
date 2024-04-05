<#$f
.SYNOPSIS
    This script is designed to publish GarnetServer into various platforms.

.DESCRIPTION

    Script to publish and zip / tar the GarnetServer executable from various Profiles
   
   
.EXAMPLE
    ./createbinaries.ps1 
#>

# ******** FUNCTION DEFINITIONS  *********

################## CleanUpFiles ##################### 
#  
#  Takes the result and verifies it falls in the acceptable range (tolerance) based on the percentage. 
#  
######################################################
function CleanUpFiles {
    param ($publishFolder, $platform)

	Write-Host "<DEBUG> ****"
	Write-Host "<DEBUG> $publishFolder"
	Write-Host "<DEBUG> $platform"
	Write-Host "<DEBUG> $basePath"
	Write-Host "<DEBUG> ****"
	
	$publishPath = "$basePath/main/GarnetServer/bin/Release/net8.0/publish/$publishFolder"
	$garnetServerEXE = "$publishPath/GarnetServer.exe"
	$excludeGarnetServerPDB = 'GarnetServer.pdb'

	# Native binary is different based on OS by default
	Write-Host "<DEBUG> Set for Linux and OSx"
	$nativeFile = "libnative_device.so"
	$garnetServerEXE = "$publishPath/GarnetServer"

	if ($platform -match "win-x64") {
		Write-Host "<DEBUG> Using Windows Native File"
		$nativeFile = "native_device.dll"
		$garnetServerEXE = "$publishPath/GarnetServer.exe"
	}

	$nativeRuntimePathFile = "$publishPath/runtimes/$platform/native/$nativeFile"
	
	Write-Host "<DEBUG>  Clean up "
	if (Test-Path $garnetServerEXE) {
		Write-Host "<DEBUG> Delete xmls"
		Get-ChildItem -Path $publishPath -Filter '*.xml' | Remove-Item -Force
		Write-Host "<DEBUG> Delete pfx"
		Get-ChildItem -Path $publishPath -Filter '*.pfx' | Remove-Item -Force
		Write-Host "<DEBUG> Delete pdbs but GarnetServer.pdb"
		Get-ChildItem -Path $publishPath -Filter *.pdb | Where-Object { $_.Name -ne $excludeGarnetServerPDB } | Remove-Item  # NOT WORKING - DELETES THE .PDB FIle

		# Copy proper native run time to publish directory
		Write-Host "<DEBUG> Native RuntimPathFile: $nativeRuntimePathFile"
		Write-Host "<DEBUG> Location of Copy: $publishPath"
		Copy-Item -Path $nativeRuntimePathFile -Destination $publishPath

		# Confirm the files are there
		if (Test-Path "$publishPath/$nativeFile") {
	
			# Delete RunTimes folder
			Write-Host "<DEBUG> Delete Files: $publishPath/runtimes"
			Remove-Item -Path "$publishPath/runtimes" -Recurse -Force

		} else {
			Write-Error "$publishPath/$nativeFile does not exist."
		}
	} else {
		Write-Error "$garnetServerEXE was not found."
	}
}

$lastPwd = $pwd

# Get base path since paths can differ from machine to machine
$string = $pwd.Path
$position = $string.IndexOf(".azure")
$basePath = $string.Substring(0,$position-1)  # take off slash off end as well
Set-Location $basePath/main/GarnetServer

# Build the solution
Write-Host "** Publish ... **"
dotnet publish GarnetServer.csproj -p:PublishProfile=linux-arm64-based -f:net8.0
dotnet publish GarnetServer.csproj -p:PublishProfile=linux-x64-based -f:net8.0
dotnet publish GarnetServer.csproj -p:PublishProfile=osx-arm64-based -f:net8.0
dotnet publish GarnetServer.csproj -p:PublishProfile=osx-x64-based -f:net8.0
dotnet publish GarnetServer.csproj -p:PublishProfile=portable -f:net8.0
dotnet publish GarnetServer.csproj -p:PublishProfile=win-arm64-based-readytorun -f:net8.0
dotnet publish GarnetServer.csproj -p:PublishProfile=win-x64-based-readytorun -f:net8.0

# Clean up all the extra files
Write-Host "<DEBUG> ** Clean Up ... **"
CleanUpFiles "linux-arm64" "linux-x64"
CleanUpFiles "linux-x64" "linux-x64"
CleanUpFiles "osx-arm64" "linux-x64"
CleanUpFiles "osx-x64" "linux-x64"
#CleanUpFiles "portable" "win-x64"  # don't clean up all files for portable ... leave as is
CleanUpFiles "win-x64" "win-x64"
CleanUpFiles "win-arm64" "win-x64"


# Maybe have this out of the create binaries powershell and just a separate step
# Create the directories
if (!(Test-Path $basePath/main/GarnetServer/bin/Release/net8.0/publish/output)) {
	mkdir $basePath/main/GarnetServer/bin/Release/net8.0/publish/output
}
Set-Location $basePath/main/GarnetServer/bin/Release/net8.0/publish/output

# Compress the files
Write-Host "** Compressing the files ... **"
7z a -mmt20 -mx5 -scsWIN win-x64-based-readytorun.zip ../win-x64/*
7z a -mmt20 -mx5 -scsWIN win-arm64-based-readytorun.zip ../win-arm64/*
7z a -scsUTF-8 linux-x64-based.tar ../linux-x64/*
7z a -scsUTF-8 linux-arm64-based.tar ../linux-arm64/*
7z a -scsUTF-8 osx-x64-based.tar ../osx-x64/*
7z a -scsUTF-8 osx-arm64-based.tar ../osx-arm64/*
7z a -mmt20 -mx5 -sdel linux-x64-based.tar.xz linux-x64-based.tar
7z a -mmt20 -mx5 -sdel linux-arm64-based.tar.xz linux-arm64-based.tar
7z a -mmt20 -mx5 -sdel osx-x64-based.tar.xz osx-x64-based.tar
7z a -mmt20 -mx5 -sdel osx-arm64-based.tar.xz osx-arm64-based.tar
7z a -mmt20 -mx5 -scsUTF-8 portable.7z ../portable/*

Write-Host "** DONE! **"
Set-Location $lastPwd
