export const instantiateImages = (list) => {
	return new Promise((resolve,reject)=>{
		let promises = [];
		let images = {};

		list.forEach((image,index) => {
			if(image.imageSrc) {
				let promise = new Promise((resolve, reject)=>{
					let el = new Image();
					el.src = image.imageSrc;
					images[index] = {
						...image,
						image: el
					};

					el.addEventListener('load',(e)=>{
						resolve();
					});					
				});

				promises.push(promise);
			}			
		});

		Promise.all(promises).then(()=>{
			resolve(images);
		});
	});		
}