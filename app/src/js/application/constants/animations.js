// part of state.assets
export const animations = [
	{
		type: 'flare',
		images: {
			SE: {
				imageSrc: "/assets/flare.png"
			},
			SW: {
				imageSrc: "/assets/flare.png"
			},
			NW: {
				imageSrc: "/assets/flare.png"
			},
			NE: {
				imageSrc: "/assets/flare.png"
			}
		}
	},
	{
		type: 'car',
		images: {
			SE: {
				imageSrc: "/assets/car_se.png"
			},
			SW: {
				imageSrc: "/assets/car_se.png"
			},
			NW: {
				imageSrc: "/assets/car_sw.png"
			},
			NE: {
				imageSrc: "/assets/car_se.png"
			}
		}
	},
	{
		type: 'boat',
		images: {
			SE: {
				imageSrc: "/assets/boat_sw.png"
			},
			SW: {
				imageSrc: "/assets/boat_sw.png"
			},
			NW: {
				imageSrc: "/assets/boat_sw.png"
			},
			NE: {
				imageSrc: "/assets/boat_sw.png"
			}
		}
	}
]

// default animation settings

export const defaults = {
	speed: 100,
	delay: 0,
	offsetX: 0,
	offsetY: 0
}