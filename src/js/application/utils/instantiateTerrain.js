export const instantiateTerrain = (store) => {
	return new Promise((resolve,reject)=>{
		let terrains = store.getState().terrain;
		let promises = [];

		for(let terrain in terrains) {
			if(terrains[terrain].imageSrc) {
				let promise = new Promise((resolve, reject)=>{
					let image = new Image();
					image.src = terrains[terrain].imageSrc;
					terrains[terrain].image = image;

					image.addEventListener('load',(e)=>{
						resolve();
					});
				});

				promises.push(promise);
			}			
		}

		Promise.all(promises).then(()=>{
			resolve(terrains);
		});
	});		
}