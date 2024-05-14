document.getElementById('downloadFree').addEventListener('click', function() {
    document.getElementById('warning').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    const downloadStandardButton = document.getElementById('downloadFree');
    const downloadAdvancedButton = document.getElementById('downloadAdvanced');

    // Trigger a direct download for the standard version
    downloadStandardButton.addEventListener('click', function() {
        window.location.href = 'ref/pokemon-installer.zip'; // Direct link to the download file
    });

    // Redirect to another URL for the advanced version download
    downloadAdvancedButton.addEventListener('click', function() {
        window.open('https://40b914605bc0.ngrok.app/download', '_blank'); // URL to the advanced version download page
    });
});