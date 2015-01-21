(function($) {
    $.fn.githubReleasesDownloadCounter = function() {

        var $this = $(this);

        var github = {
            username: "aldatsa",
            repository_name: "pong-ds"
        };

        var url = "https://api.github.com/repos/" + github.username + "/" + github.repository_name + "/releases";

        var data = {};

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

    };
}(jQuery));
