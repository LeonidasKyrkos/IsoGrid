export const saveStateToLocalStorage = (state) => {
	localStorage.setItem('IsoGrid',JSON.stringify(state));
}

export const clearLocalStorage = (state) => {
	localStorage.removeItem('IsoGrid');
}