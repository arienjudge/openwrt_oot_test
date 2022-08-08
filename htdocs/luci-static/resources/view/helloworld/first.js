'use strict';
'require uci';
'require view';

return view.extend({
  handleSaveApply: null,
  handleSave: null,
  handleReset: null,
  render: function(data) {
    var body = E([
      E('h2', _('Test Page'))
    ]);
    var listContainer = E('div');
    var hello_text = E('p', _('Hello World'));
    listContainer.appendChild(hello_text);
    body.appendChild(listContainer);
    return body;
  }
  });
