function execute(id, page) {
    if(!page) page = '1';
    data = JSON.stringify({"page_limit":12,"text":'',"category":[id],"genres":[],"status":0,"word":0,"time":"","sort":"desc","sort_type":0,"page":page})
    //let response = POST("",{data})
    let response = fetch('https://www.myrics.com/search/search', {
        method: "POST", // GET, POST, PUT, DELETE, PATCH
        body: data
    })
    let $ = response.json()
    const allPage = $.data.total_page;
    if (parseInt(page) < allPage){
        var next = parseInt(page) + 1;
    }
    let list = [];
    let allBook = $.data.list;
    allBook.forEach(book => {
        list.push({
            name: book.novel_title,
            link: `/novels/${book.id}`,
            cover: book.image,
            description: book.pen_name,
            host: 'https://www.myrics.com',
        })
    });
    return Response.success(list, next.toString())
}