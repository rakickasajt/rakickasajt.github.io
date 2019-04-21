FileReaderJS.setupInput(document.getElementById('file-input'), {
  readAsDefault: "DataURL",
  on: {
    load: function(e, file) {
      console.log(e.target.result);
    }
  }


});
