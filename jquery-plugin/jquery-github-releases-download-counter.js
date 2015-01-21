(function($) {
    $.fn.githubReleasesDownloadCounter = function(options) {

        var $this = $(this);

        var settings = $.extend({}, options);

        var url = "https://api.github.com/repos/" + settings.username + "/" + settings.repository_name + "/releases";

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
