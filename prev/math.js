
//�ۭq�d�򪺶üƨ禡(�̤p��,�̤j��)
function randInt(min,max) {//�����
	if(min < max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}else{
		return NaN;
	}
}
function rand(min,max) {//�B�I��
	if(min < max){
		return Math.random()*(max-min)+min;
	}else{
		return NaN;
	}
}
