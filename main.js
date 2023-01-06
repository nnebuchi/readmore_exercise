const toogleReadMore = (event)=>{
	const read_more_text = document.querySelector("#more-text")
	read_more_text_style = window.getComputedStyle(read_more_text)
	if(read_more_text_style.getPropertyValue('display') === 'none'){
		event.target.textContent = 'Read less'
		read_more_text.style.display = 'block'
		document.querySelector("#three-dots").style.display = 'none'
	}else{
		event.target.textContent = 'Read more'
		read_more_text.style.display = 'none'
		document.querySelector("#three-dots").style.display = 'inline'
	}

}

/*

const toogleReadMore = (event)=>{
	const read_more_text = document.querySelector("#more-text")
	style = window.getComputedStyle(read_more_text)
    top = style.getPropertyValue('top');
	// console.log(read_more_text.style.display)
	if(style.getPropertyValue('display') == 'none'){
		event.target.textContent = 'Read less'
		read_more_text.style.display = 'block'
	}
	else{
		event.target.textContent = 'Read more'
		read_more_text.style.display = 'none'
	}
}*/