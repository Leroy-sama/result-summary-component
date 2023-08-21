fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const categorys = document.querySelectorAll('.category')
        const scores = document.querySelectorAll('.score')
        const icons = document.querySelectorAll('.icon')

        data.forEach((item, index) => {
            categorys[index].textContent = item.category
            scores[index].textContent = item.score
            icons[index].src = item.icon
        })
    })
    .catch(error => {
        console.error("Error fetching JSON data:", error);
    })