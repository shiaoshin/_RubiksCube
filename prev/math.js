
//璹絛瞅睹计ㄧΑ(程,程)
function randInt(min,max) {//俱计
	if(min < max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}else{
		return NaN;
	}
}
function rand(min,max) {//疊翴计
	if(min < max){
		return Math.random()*(max-min)+min;
	}else{
		return NaN;
	}
}
