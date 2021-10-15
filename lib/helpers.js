export async function blogiaSource(){
	let data = await fetch("https://www.googleapis.com/blogger/v3/blogs/7929196219348421001/posts?key=APIKey").then(r => r.json())

    var blogia = data.items;
    return {blogia: blogia}
}
