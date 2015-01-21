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

            var assets = data[0].assets;

            for (var i = 0; i < assets.length; i++) {
                downloads = downloads + assets[i].download_count;
            }

            $this.each(function() {
                $(this).text(downloads);
            });

        });

        // allow jQuery chaining
        return this;
        
    };
}(jQuery));
