(function () {

    //var url = "https://api.github.com/repos/" + username + "/" + repository_name + "/releases";

    var elements = document.getElementsByClassName('github-releases-download-counter');

    var tmp_element = document.createElement('div');
    var tmp_username;
    var tmp_repository_name;

    var downloads = 4;

    for (var i = 0; i < elements.length; i++) {

        tmp_username = elements[i].getAttribute("data-username");
        tmp_repository_name = elements[i].getAttribute("data-repository-name");

        tmp_element.innerHTML = "<span class='github-releases-download-counter'>" +
                                "<span class='github-releases-download-counter-label'>" +
                                "<span class='github-releases-download-counter-label-icon'>&nbsp;</span>" +
                                "<span class='github-releases-download-counter-label-text'>Downloads</span>" +
                                "</span>" +
                                "<span class='github-releases-download-counter-number'>" + downloads + "</span>" +
                                "</span>";

        elements[i].parentNode.replaceChild(tmp_element.firstChild, elements[i]);
    }

}());
