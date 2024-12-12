function calculateTip() {
    var totalBill = document.getElementById("totalBill").value;
    var percentTip = document.getElementById("percentTip").value;
  
    var total = (totalBill * percentTip).toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  }

  document.getElementById("totalTip").style.display = "none";
  
  document.getElementById("calculate").onclick = function() {
    calculateTip();

  };