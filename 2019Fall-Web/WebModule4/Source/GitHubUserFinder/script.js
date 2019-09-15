function getGithubInfo(user) {

    //1. Create an instance of XMLHttpRequest class and send a GET request using it.

    let xmlhttp = new XMLHttpRequest();
    let tempURL = `https://api.github.com/users/${user}`;
    xmlhttp.open('GET', tempURL, false);
    xmlhttp.send('');

    // The function should finally return the object(it now contains the response!)

    return xmlhttp;
}

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    console.log(user);          // Output to console
    let name = user.name;       // Set the name pulled from GitHub to a variable
    if (name === 'null') {
        name = user.login;
    }
    let id = user.id;                                                   // Set the ID pulled from GitHub to a variable
    let profilePic = new Image();
    profilePic.src = user.avatar_url;                                   // Set the profile picture pulled from GitHub to a new image variable
    let linkToAccount = "https://github.com/"+username;                 // Set up link to account with url and username
    let userLinkText = "https://github.com/"+username;
    let userLink = userLinkText.link(linkToAccount);

    let content = document.getElementById('profile');         // Set div with profile id to a new variable
    content.getElementsByTagName('h2')[0].innerHTML = `Name: ${name}<br>ID: ${id}<br>Link to account: ${userLink}`;         // Change HTML with variables from above
    content.getElementsByClassName('avatar')[0].appendChild(profilePic);

}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    console.log("User couldn't be found.");                                 // Output to console
    let content = document.getElementById('profile');
    content.getElementsByTagName('h2')[0].innerHTML = "That username could not be found. Try again.";           // Change HTML and output that no user could be found

}

// When document is ready run this function

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {                    // Key 13 for enter key
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
