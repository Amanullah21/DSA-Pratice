// remove dublicate element from given elements
	function removeDuplicates( str) {
		let set  = new Set();
		for (var i = 0; i < str.length; i++){
			set.add(str[i]);
        }
        let str1 =""
        for(let key of set){
            str1+= key
        }
        console.log(str1)
	}

	/* Driver program to test removeDuplicates */
	
		var str = "iloveprogramming";
		removeDuplicates(str);
