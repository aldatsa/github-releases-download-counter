(function($) {
    $.fn.githubReleasesDownloadCounter = function(username, repository_name) {

        var $this = $(this);

        var url = "https://api.github.com/repos/" + username + "/" + repository_name + "/releases";

        if (!username) throw "Must provide a github username.";

        if (!repository_name) throw "Must provide a github repository name.";

        $.ajax({
            dataType: "json",
            url: url
        })
        .done(function(data, textStatus, jqXHR) {

            var downloads = 0;

            for (var i = 0; i < data.length; i++) {
                console.log(data[i]);
                downloads = downloads + data[i].assets[0].download_count;
            }

            $this.each(function() {
                $(this).html("<span class='github-releases-download-counter'>" +
                                "<span class='github-releases-download-counter-label'>" +
                                    "<span class='github-releases-download-counter-label-icon'>&nbsp;</span>" +
                                    "<span class='github-releases-download-counter-label-text'>Downloads</span>" +
                                "</span>" +
                                "<span class='github-releases-download-counter-number'>" + downloads + "</span>" +
                             "</span>");
            });

        });

        // allow jQuery chaining
        return this;

    };
}(jQuery));
