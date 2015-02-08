(function () {

    var elements = document.getElementsByClassName('github-releases-download-counter');

    var tmp_username;
    var tmp_repository_name;
    var tmp_options;

    var createButton = function(url, element, options) {

        var xhr = new XMLHttpRequest();

        xhr.open('get', url, true);
        xhr.responseType = 'json';

        xhr.onload = function() {

            var status = xhr.status;

            if (status == 200) {

                var downloads = 0;
                var tmp_element = document.createElement('div');

                for (var j = 0; j < xhr.response.length; j++) {
                    downloads = downloads + xhr.response[j].assets[0].download_count;
                }

                tmp_element.innerHTML = "<span class='github-releases-download-counter'>" +
                    "<span class='github-releases-download-counter-label'>" +
                    "<span class='github-releases-download-counter-label-icon'>&nbsp;</span>" +
                    "<span class='github-releases-download-counter-label-text'>" + options.button_text + "</span>" +
                    "</span>" +
                    "<span class='github-releases-download-counter-number'>" + downloads + "</span>" +
                    "</span>";

                element.parentNode.replaceChild(tmp_element.firstChild, element);

            } else {

                alert("Error. Status code: " + status);

            }
        };

        xhr.send();

    };

    for (var i = 0; i < elements.length; i++) {

        tmp_username = elements[i].getAttribute("data-username");
        tmp_repository_name = elements[i].getAttribute("data-repository-name");

        tmp_options = {
            button_text: elements[i].getAttribute("data-button-text") || "Downloads"
        };

        createButton("https://api.github.com/repos/" + tmp_username + "/" + tmp_repository_name + "/releases", elements[i], tmp_options);
    }

}());
