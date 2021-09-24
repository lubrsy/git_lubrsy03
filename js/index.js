window.onload = function(){
	var items = document.getElementsByName("items");
	var oCheckedAllBox = document.getElementById("checkedAllBox");
	var oCheckedAllBtn = document.getElementById("checkedAllBtn");
	var oCheckedNoBtn = document.getElementById("checkedNoBtn");
	var oCheckedRevBtn = document.getElementById("checkedRevBtn");
	var oSendBtn = document.getElementById("sendBtn");
	oCheckedAllBox.onclick = function(){
		for(var i = 0; i < items.length; i++){
			items[i].checked = this.checked;
		}
	}
	oCheckedAllBtn.onclick = function(){
		for(var i = 0; i < items.length; i++){
			items[i].checked = true;
		}
		oCheckedAllBox.checked = true;
	};
	oCheckedNoBtn.onclick = function(){
		for(var i = 0; i < items.length; i++){
			items[i].checked = false;
		}
		oCheckedAllBox.checked = false;
	};
	oCheckedRevBtn.onclick = function(){
		oCheckedAllBox.checked = true;
		for(var i = 0; i < items.length; i++){
			items[i].checked = !items[i].checked;
			if(!items[i].checked){
				oCheckedAllBox.checked = false;
			}
		}
	};
	oSendBtn.onclick = function(){
		for(var i = 0; i < items.length; i++){
			if(items[i].checked){
				alert(items[i].value);
			}
		}
	};
	for(var i = 0; i < items.length; i++){
		items[i].onclick = function(){
			oCheckedAllBox.checked = true;
			for(var j = 0; j < items.length; j++){
				if(!items[j].checked){
					oCheckedAllBox.checked = false;
					break;
				}
			}
		};
	}
};