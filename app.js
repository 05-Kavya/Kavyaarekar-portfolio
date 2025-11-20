document.getElementById("resume-btn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "Kavya_Arekar_Resume.pdf";  
    link.download = "Kavya_Arekar_Resume.pdf";
    link.click();
});

