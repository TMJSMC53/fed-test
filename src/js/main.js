var reportsWidget = {
  options: {
    containerSelector: ".reports",
    template:
      "{{#.}}" +
      '<article class="reports_item">' +
      '<a href="{{documents.0.url}}" target="_blank">' +
      '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
      "</a>" +
      '<footer class="reports_docs">' +
      "{{#documents}}" +
      '<h3 class="reports_title"> ' +
      '<a href="{{url}}" target="_blank">{{title}}</a>' +
      ' <span class="reports_details">({{file_size}} {{file_type}})</span></h3>' +
      "{{/documents}}" +
      "</footer>" +
      "</article>" +
      "{{/.}}",
  },

  init: function () {
    this.renderReports(reportData || []);
  },

  renderReports: function (reports) {
    var inst = this,
      options = inst.options;

    $(options.containerSelector).html(
      Mustache.render(options.template, reports)
    );
  },
};

reportsWidget.init();
