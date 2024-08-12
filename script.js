function table(num, upto) {
    let content = "";
    for (let i = 1; i <= upto; i++) {
        content += `${num} X ${i} = ${num * i}\n`;
    }

    // Display the table with <br> for line breaks
    document.getElementById("display").innerHTML = content.replace(/\n/g, "<br>");

    // Store the table content for download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Store the URL and file name for download
    window.downloadUrl = url;
    window.downloadFileName = `Multiplication_Table_${num}_upto_${upto}.txt`; 
    document.getElementById("download").style.visibility = "visible";
}

function show() {
    // Get the input values
    const num = document.getElementById("num").value;
    const upto = document.getElementById("upto").value;

    // Generate the multiplication table
    table(num, upto);

    // Prevent form submission
    return false;
}

function downloadTable() {
    if (window.downloadUrl && window.downloadFileName) {
        // Create a temporary link and click it to trigger the download
        const link = document.createElement('a');
        link.href = window.downloadUrl;
        link.download = window.downloadFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up the URL object
        URL.revokeObjectURL(window.downloadUrl);
    } else {
        alert("Please generate the table first.");
    }
}

function reseter() {
    document.getElementById("display").innerHTML = "";
    document.getElementById("download").style.visibility = "hidden";
    window.downloadUrl = null; // Clear the download URL
    window.downloadFileName = null; // Clear the download file name
}
