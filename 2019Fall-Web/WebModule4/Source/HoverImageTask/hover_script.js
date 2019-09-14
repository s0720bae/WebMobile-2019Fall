function upDate3(previewPic) {
    document.getElementById('image').style.backgroundImage = "url(https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg)";

    document.getElementById("image").innerHTML = "Yummy yummy cup cake";
}

function upDate2(previewPic) {
    document.getElementById('image').style.backgroundImage = "url(https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-6.jpg)";

    document.getElementById("image").innerHTML = "Perfect Baking";
}

function upDate1(previewPic) {

    document.getElementById('image').style.backgroundImage = "url(https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-7.jpg)";


    document.getElementById("image").innerHTML = "Batter is ready";
}

function unDo() {
    document.getElementById('image').style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML = "Hover over an image bleow to display here.";
}