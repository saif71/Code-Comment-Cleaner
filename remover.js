window.onload = function(){

	function $(query) {

		return document.querySelector(query);
	}

	var textarea = $('#source');

	var code = textarea.value;

	code = code.replace(/\t+/g,'\n');

	textarea.value = code;

	var button = $('#btn');

	button.addEventListener('click',clicked,false);
	button.addEventListener('touchstart',clicked,false);


	var editor = CodeCommentCleaner.fromTextArea(textarea,{
	    lineNumbers: true,
	    styleActiveLine: true,
	    matchBrackets: true
	});

	function clicked() {
	    var str = removeComments(editor.getValue());
	    editor.setValue(str);

	}

	function removeComments(str) {
	    var newStr = str.replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm, '$1');
			//from html comment remove
			//var newStr = str.replace(/<!--(?!\s*(?:\[if [^\]]+]|<!|>))(?:(?!-->)(.|\n))*-->/g,""));
	    return newStr;

	}

};
